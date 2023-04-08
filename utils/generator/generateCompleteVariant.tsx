import * as ReactDOMServer from 'react-dom/server';

import fs from 'fs/promises';
import prettier from 'prettier';

import { CodeLanguage, Variant } from 'core/type';

export default async function generateCompleteVariant(
  variant: Variant,
): Promise<Variant> {
  const code = await fs.readFile(variant.path, 'utf8');
  const modulePath = variant.path
    .replace(`${process.cwd()}/pages/preview/`, '')
    .replace('.tsx', '');
  const Element = await import(`pages/preview/${modulePath}`);
  const HTMLString = prettier
    .format(ReactDOMServer.renderToString(<Element.default />), {
      parser: 'html',
      htmlWhitespaceSensitivity: 'ignore',
    })
    .replaceAll('<!-- -->', '');
  return {
    ...variant,
    codeByType: {
      [CodeLanguage.tsx]: code,
      [CodeLanguage.html]: HTMLString,
    },
  };
}
