import readDir from 'recursive-readdir';

import { PageSnippet, Theme } from 'core/type';
import createPageSnippetsDirectoryTree, {
  snippetsDirectory,
} from 'utils/array/createPageSnippetsDirectoryTree';
import getThemesFromPageSnippets from 'utils/array/getThemesFromPageSnippets';

export interface GetPageSnippetResult {
  props: {
    snippets: PageSnippet[];
    themes: Theme[];
  };
}

export default async function getPageSnippets(): Promise<GetPageSnippetResult> {
  const snippetPaths = await readDir(snippetsDirectory);
  const snippets = createPageSnippetsDirectoryTree(snippetPaths);
  const themes = getThemesFromPageSnippets(snippets);

  return {
    props: {
      snippets,
      themes,
    },
  };
}
