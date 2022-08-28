import { SnippetCategory } from 'core/type';

interface Path {
  params: {
    [key: string]: string;
  };
}

export default function generateSnippetPaths(snippets: SnippetCategory[]) {
  const paths: Path[] = [];

  snippets.forEach((category) => {
    category.subCategories.forEach((subCategory) => {
      paths.push({
        params: {
          category: category.slug,
          subCategory: subCategory.slug,
        },
      });
    });
  });

  return {
    paths,
    fallback: false,
  };
}
