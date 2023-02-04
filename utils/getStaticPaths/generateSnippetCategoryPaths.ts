import { SnippetCategory } from 'core/type';

interface Path {
  params: {
    [key: string]: string;
  };
}

export default function generateSnippetCategoryPaths(
  snippets: SnippetCategory[],
) {
  const paths: Path[] = [];

  snippets.forEach((category) => {
    paths.push({
      params: {
        category: category.slug,
      },
    });
  });

  return {
    paths,
    fallback: false,
  };
}
