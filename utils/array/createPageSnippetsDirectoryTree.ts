import { sortBy, startCase } from 'lodash-es';
import path from 'path';

import { PageSnippet } from 'core/type';

export const snippetsDirectory = path.join(
  process.cwd(),
  'pages/preview/pages',
);

export default function createPageSnippetsDirectoryTree(
  snippetPaths: string[],
): PageSnippet[] {
  let tree: PageSnippet[] = snippetPaths
    .filter((snippetPath) => snippetPath.includes('preview/pages'))
    .map((filePath) => {
      const [theme, variant] = filePath
        .replace(`${snippetsDirectory}/`, '')
        .split('.')[0]
        .split('/');
      const slug = `${theme}/${variant}`;

      return {
        slug,
        theme: theme || null,
        themeTitle: theme ? startCase(theme) : null,
        title: startCase(variant),
        path: filePath,
        previewUrl: `/preview/pages/${slug}`,
      };
    });

  tree = sortBy(tree, ['title']);

  return tree;
}
