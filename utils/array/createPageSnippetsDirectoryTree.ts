import { findIndex, sortBy, startCase } from 'lodash-es';
import path from 'path';

import { PageCategory } from 'core/type';

export const pageSnippetsDirectory = path.join(
  process.cwd(),
  'pages/preview/pages',
);

export default function createPageSnippetsDirectoryTree(
  snippetPaths: string[],
): PageCategory[] {
  let tree: PageCategory[] = [];

  snippetPaths.forEach((filePath) => {
    const [theme, category] = filePath
      .replace(`${pageSnippetsDirectory}/`, '')
      .split('.')[0]
      .split('/');
    const slug = `${theme}/${category}`;
    const variant = {
      theme: theme || null,
      themeTitle: theme ? startCase(theme) : null,
      title: category,
      path: filePath,
      previewUrl: `/preview/pages/${slug}`,
    };

    const categoryIndex = findIndex(tree, ['slug', category]);
    if (categoryIndex === -1) {
      tree.push({
        slug: category,
        title: category,
        href: `/snippets/pages/${category}`,
        variants: [variant],
      });
    } else {
      tree[categoryIndex].variants.push(variant);
    }
  });

  tree = sortBy(tree, ['title']);

  return tree;
}
