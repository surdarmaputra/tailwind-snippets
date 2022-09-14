import readDir from 'recursive-readdir';

import { SnippetCategory } from 'core/type';
import createSnippetsDirectoryTree, {
  snippetsDirectory,
} from 'utils/array/createSnippetsDirectoryTree';

export interface GetSnippetsResult {
  props: {
    snippets: SnippetCategory[];
  };
}

export default async function getSnippets(): Promise<GetSnippetsResult> {
  const snippetPaths = await readDir(snippetsDirectory);
  const snippets = createSnippetsDirectoryTree(snippetPaths);

  return {
    props: {
      snippets,
    },
  };
}
