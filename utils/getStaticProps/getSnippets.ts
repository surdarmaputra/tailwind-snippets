import readDir from 'recursive-readdir';

import { SnippetCategory, Theme } from 'core/type';
import createSnippetsDirectoryTree, {
  snippetsDirectory,
} from 'utils/array/createSnippetsDirectoryTree';
import getThemesFromSnippets from 'utils/array/getThemesFromSnippets';

export interface GetSnippetsResult {
  props: {
    snippets: SnippetCategory[];
    themes: Theme[];
  };
}

export default async function getSnippets(): Promise<GetSnippetsResult> {
  const rawPaths = await readDir(snippetsDirectory);
  const snippetPaths = rawPaths.filter(path => !path.includes('preview/pages'));
  const snippets = createSnippetsDirectoryTree(snippetPaths);
  const themes = getThemesFromSnippets(snippets);

  return {
    props: {
      snippets,
      themes,
    },
  };
}
