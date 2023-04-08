import { PageCategory } from 'core/type';

interface Path {
  params: {
    [key: string]: string;
  };
}

export default function generatePageCategoryPaths(snippets: PageCategory[]) {
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
