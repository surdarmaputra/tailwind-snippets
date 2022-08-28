import { SnippetCategory } from 'core/type';
import { findIndex, startCase } from 'lodash-es';
import path from 'path';

export const snippetsDirectory = path.join(
  process.cwd(),
  'pages/snippets-preview',
);

export default function createSnippetsDirectoryTree(
  snippetPaths: string[],
): SnippetCategory[] {
  const tree: SnippetCategory[] = [];

  snippetPaths.forEach((filePath) => {
    const [category, subCategory, variant] = filePath
      .replace(`${snippetsDirectory}/`, '')
      .split('/');

    let categoryIndex = findIndex(tree, ['slug', category]);
    if (categoryIndex === -1) {
      tree.push({
        slug: category,
        title: startCase(category),
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
      });
    }

    subCategoryIndex = findIndex(tree[categoryIndex].subCategories, {
      slug: subCategory,
    });
    const [title] = variant.split('.');
    tree[categoryIndex].subCategories[subCategoryIndex].variants.push({
      title: startCase(title),
      path: filePath,
    });
  });

  return tree;
}
