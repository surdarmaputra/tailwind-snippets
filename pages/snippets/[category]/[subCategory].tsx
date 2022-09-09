import HeadContent from 'components/molecules/HeadContent';
import SnippetPreview from 'components/molecules/SnippetPreview';
import SnippetsExplorerLayout from 'components/templates/SnippetsExplorerLayout';
import { SnippetCategory, Variant } from 'core/type';
import fs from 'fs/promises';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { ColorModeContext } from 'providers/ColorModeProvider';
import { useContext, useState } from 'react';
import generateSnippetPaths from 'utils/getStaticPaths/generateSnippetPaths';
import getSnippets from 'utils/getStaticProps/getSnippets';
import setAsMainApp from 'utils/getStaticProps/setAsMainApp';

interface StaticProps {
  isDevelopment: boolean;
  snippets: SnippetCategory[];
  variants: Variant[];
}

export const getStaticProps: GetStaticProps<StaticProps> = async (context) => {
  const { props } = await getSnippets();
  const { props: mainAppProps } = await setAsMainApp();
  const { snippets } = props;

  const selectedCategory = snippets.find(
    (categoryItem) => categoryItem.slug === context.params?.category,
  );
  const selectedSubCategory = selectedCategory?.subCategories.find(
    (subCategoryItem) => subCategoryItem.slug === context.params?.subCategory,
  );
  const variants: Variant[] = await Promise.all<Variant>(
    selectedSubCategory?.variants.map(async (variant) => {
      const code = await fs.readFile(variant.path, 'utf8');
      return {
        ...variant,
        code,
      };
    }) || [],
  );

  return {
    props: {
      ...props,
      ...mainAppProps,
      isDevelopment: process.env.NODE_ENV === 'development',
      variants,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { props } = await getSnippets();
  const { snippets } = props;
  return generateSnippetPaths(snippets);
};

export default function SubCategory({
  isDevelopment,
  snippets,
  variants,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [snippetPreviewMaximized, setSnippetPreviewMaximized] = useState(false);
  const { dark } = useContext(ColorModeContext);

  const handleMaximized = (maximized: boolean) => {
    setSnippetPreviewMaximized(maximized);
  };

  return (
    <>
      <HeadContent />

      <SnippetsExplorerLayout
        className={snippetPreviewMaximized ? '' : 'space-y-12'}
        snippets={snippets}
      >
        {variants.map((snippet) => (
          <SnippetPreview
            code={snippet.code}
            isDevelopment={isDevelopment}
            key={snippet.previewUrl}
            onMaximized={handleMaximized}
            src={`${snippet.previewUrl}${dark ? '?theme=dark' : ''}`}
            title={snippet.title}
          />
        ))}
      </SnippetsExplorerLayout>
    </>
  );
}
