import { flattenDeep, flow, uniqBy } from 'lodash-es';

import { SnippetCategory, Theme } from 'core/type';

const generateTheme = flow([
  flattenDeep,
  (themes) => uniqBy(themes, 'theme'),
  (themes) => themes?.filter((item: Theme) => Boolean(item.theme)),
]);

export default function getThemesFromSnippets(snippets: SnippetCategory[]) {
  return generateTheme(
    snippets.map((category) =>
      category.subCategories.map((subCategory) =>
        subCategory.variants.map(({ theme, themeTitle }) => ({
          theme,
          themeTitle,
        })),
      ),
    ),
  );
}
