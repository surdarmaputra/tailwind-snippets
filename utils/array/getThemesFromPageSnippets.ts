import { flattenDeep, flow, uniqBy } from 'lodash-es';

import { PageSnippet, Theme } from 'core/type';

const generateTheme = flow([
  flattenDeep,
  (themes) => uniqBy(themes, 'theme'),
  (themes) => themes?.filter((item: Theme) => Boolean(item.theme)),
]);

export default function getThemesFromPageSnippets(snippets: PageSnippet[]) {
  return generateTheme(
    snippets.map(({ theme, themeTitle }) => ({
      theme,
      themeTitle,
    })),
  );
}
