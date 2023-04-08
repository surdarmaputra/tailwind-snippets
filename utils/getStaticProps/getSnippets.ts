import { unionBy } from 'lodash-es';
import readDir from 'recursive-readdir';

import { PageCategory, SnippetCategory, Theme } from 'core/type';
import createPageSnippetsDirectoryTree, {
  pageSnippetsDirectory,
} from 'utils/array/createPageSnippetsDirectoryTree';
import createSnippetsDirectoryTree, {
  snippetsDirectory,
} from 'utils/array/createSnippetsDirectoryTree';
import getThemesFromPageSnippets from 'utils/array/getThemesFromPageSnippets';
import getThemesFromSnippets from 'utils/array/getThemesFromSnippets';

export interface GetSnippetsResult {
  props: {
    snippets: SnippetCategory[];
    pageSnippets: PageCategory[];
    themes: Theme[];
  };
}

export default async function getSnippets(): Promise<GetSnippetsResult> {
  const snippetPaths = await readDir(snippetsDirectory);
  const snippets = createSnippetsDirectoryTree(snippetPaths);
  const snippetThemes = getThemesFromSnippets(snippets);

  const pageSnippetPaths = await readDir(pageSnippetsDirectory);
  const pageSnippets = createPageSnippetsDirectoryTree(pageSnippetPaths);
  const pageThemes = getThemesFromPageSnippets(pageSnippets);

  const themes = unionBy<Theme>(snippetThemes, pageThemes, 'theme');

  return {
    props: {
      pageSnippets,
      snippets,
      themes,
    },
  };
}
