import * as ReactDOMServer from 'react-dom/server';

import fs from 'fs/promises';
import { pickBy } from 'lodash-es';
import prettier from 'prettier';

import { CodeLanguage, Variant } from 'core/type';

interface GenerateCompleteVariantOptions {
  excludedCodeLanguage?: CodeLanguage[];
}

export default async function generateCompleteVariant(
  variant: Variant,
  options?: GenerateCompleteVariantOptions,
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

  const codeByType: Record<CodeLanguage, string | undefined> = {
    [CodeLanguage.tsx]: options?.excludedCodeLanguage?.includes(
      CodeLanguage.tsx,
    )
      ? undefined
      : code,
    [CodeLanguage.html]: options?.excludedCodeLanguage?.includes(
      CodeLanguage.html,
    )
      ? undefined
      : HTMLString,
  };

  return {
    ...variant,
    codeByType: Object.values(codeByType).filter(Boolean).length
      ? (pickBy(codeByType, Boolean) as Variant['codeByType'])
      : undefined,
  };
}
