import { flattenDeep, flow, uniqBy } from 'lodash-es';

import { PageCategory, Theme } from 'core/type';

const generateTheme = flow([
  flattenDeep,
  (themes) => uniqBy(themes, 'theme'),
  (themes) => themes?.filter((item: Theme) => Boolean(item.theme)),
]);

export default function getThemesFromPageSnippets(snippets: PageCategory[]) {
  return generateTheme(
    snippets.map((category) =>
      category.variants.map(({ theme, themeTitle }) => ({
        theme,
        themeTitle,
      })),
    ),
  );
}
