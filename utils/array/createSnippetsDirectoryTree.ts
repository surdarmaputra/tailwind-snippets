import { findIndex, sortBy, startCase } from 'lodash-es';
import path from 'path';

import { SnippetCategory } from 'core/type';

export const snippetsDirectory = path.join(process.cwd(), 'pages/preview');

export default function createSnippetsDirectoryTree(
  snippetPaths: string[],
): SnippetCategory[] {
  const tree: SnippetCategory[] = [];

  snippetPaths
    .filter((snippetPath) => !snippetPath.includes('preview/pages'))
    .forEach((filePath) => {
      const [category, subCategory, variant] = filePath
        .replace(`${snippetsDirectory}/`, '')
        .split('/');

      let categoryIndex = findIndex(tree, ['slug', category]);
      if (categoryIndex === -1) {
        tree.push({
          slug: category,
          title: startCase(category),
          href: `/snippets/${category}`,
          subCategories: [],
        });
      }

      categoryIndex = findIndex(tree, { slug: category });
      let subCategoryIndex = findIndex(tree[categoryIndex].subCategories, [
        'slug',
        subCategory,
      ]);
      if (subCategoryIndex === -1) {
        tree[categoryIndex].subCategories.push({
          slug: subCategory,
          title: startCase(subCategory),
          variants: [],
          href: `/snippets/${tree[categoryIndex].slug}/${subCategory}`,
        });
      }

      subCategoryIndex = findIndex(tree[categoryIndex].subCategories, {
        slug: subCategory,
      });
      const [ignoredExt, title, theme] = variant.split('.').reverse();
      tree[categoryIndex].subCategories[subCategoryIndex].variants.push({
        theme: theme || null,
        themeTitle: theme ? startCase(theme) : null,
        title: startCase(title),
        path: filePath,
        previewUrl: `/preview/${tree[categoryIndex].slug}/${
          tree[categoryIndex].subCategories[subCategoryIndex].slug
        }/${theme ? `${theme}.` : ''}${title}`,
      });
    });

  let sortedTree = tree.map((node) => ({
    ...node,
    subCategories: sortBy(node.subCategories, ['title']),
  }));
  sortedTree = sortBy(sortedTree, ['title']);

  return sortedTree;
}
