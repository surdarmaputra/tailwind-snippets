import { useContext, useMemo, useState } from 'react';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

import fs from 'fs/promises';

import HeadContent from 'components/molecules/HeadContent';
import SnippetPreview from 'components/molecules/SnippetPreview';
import SnippetsExplorerLayout from 'components/templates/SnippetsExplorerLayout';
import { SnippetCategory, Theme, Variant } from 'core/type';
import useFilterStore from 'hooks/useFilterStore';
import { ColorModeContext } from 'providers/ColorModeProvider';
import generateSnippetPaths from 'utils/getStaticPaths/generateSnippetPaths';
import getSnippets from 'utils/getStaticProps/getSnippets';
import setAsMainApp from 'utils/getStaticProps/setAsMainApp';

import MoodConfuzedIcon from '~icons/tabler/mood-confuzed.tsx';

interface StaticProps {
  isDevelopment: boolean;
  snippets: SnippetCategory[];
  themes: Theme[];
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
  themes,
  variants,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [snippetPreviewMaximized, setSnippetPreviewMaximized] = useState(false);
  const { dark } = useContext(ColorModeContext);
  const themesFilter = useFilterStore((state) => state.themes);

  const viewedVariants = useMemo(
    () =>
      themesFilter?.length
        ? variants.filter(
            (variant) => variant.theme && themesFilter.includes(variant.theme),
          )
        : variants,
    [themesFilter, variants],
  );

  const handleMaximized = (maximized: boolean) => {
    setSnippetPreviewMaximized(maximized);
  };

  return (
    <>
      <HeadContent />

      <SnippetsExplorerLayout
        className={snippetPreviewMaximized ? '' : 'space-y-12'}
        snippets={snippets}
        themes={themes}
      >
        {viewedVariants.map((snippet) => (
          <SnippetPreview
            code={snippet.code}
            isDevelopment={isDevelopment}
            key={snippet.previewUrl}
            onMaximized={handleMaximized}
            secondaryTitle={snippet.themeTitle}
            src={`${snippet.previewUrl}${dark ? '?theme=dark' : ''}`}
            title={snippet.title}
          />
        ))}
        {!viewedVariants?.length ? (
          <div className="flex flex-col items-center py-10 text-center sm:py-20">
            <MoodConfuzedIcon className="mb-12 h-32 w-32 text-dark-200 dark:text-dark-500" />
            <h2>No result found</h2>
            <p>
              Please select another theme(s) or keep it blank to show all
              themes.
            </p>
          </div>
        ) : null}
      </SnippetsExplorerLayout>
    </>
  );
}
