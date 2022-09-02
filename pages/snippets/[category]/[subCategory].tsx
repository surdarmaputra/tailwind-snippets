import HeadContent from 'components/molecules/HeadContent';
import SnippetPreview from 'components/molecules/SnippetPreview';
import SnippetsExplorerLayout from 'components/templates/SnippetsExplorerLayout';
import { SnippetCategory, Variant } from 'core/type';
import fs from 'fs/promises';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import generateSnippetPaths from 'utils/getStaticPaths/generateSnippetPaths';
import getSnippets from 'utils/getStaticProps/getSnippets';

interface StaticProps {
  snippets: SnippetCategory[];
  variants: Variant[];
}

export const getStaticProps: GetStaticProps<StaticProps> = async (context) => {
  const { props } = await getSnippets();
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
  snippets,
  variants,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <HeadContent />

      <SnippetsExplorerLayout snippets={snippets}>
        {variants.map((snippet) => (
          <SnippetPreview
            className="mb-12"
            code={snippet.code}
            key={snippet.previewUrl}
            src={snippet.previewUrl}
            title={snippet.title}
          />
        ))}
      </SnippetsExplorerLayout>
    </>
  );
}
