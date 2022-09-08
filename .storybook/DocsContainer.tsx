import {
  DocsContainer as BaseContainer,
  DocsContainerProps,
} from '@storybook/addon-docs/blocks';
import { themes } from '@storybook/theming';
import React from 'react';
import { useDarkMode } from 'storybook-dark-mode';

import { darkTheme } from './constants';
// Thanks to https://github.com/hipstersmoothie/storybook-dark-mode/issues/127#issuecomment-1070524402
export function DocsContainer({ context, ...props }: DocsContainerProps) {
  const dark = useDarkMode();

  const finalProps = {
    ...props,
    context: {
      ...context,
      storyById: (id) => {
        const storyContext = context.storyById(id);
        return {
          ...storyContext,
          parameters: {
            ...storyContext?.parameters,
            docs: {
              ...storyContext?.parameters?.docs,
              theme: dark ? darkTheme : themes.light,
            },
          },
        };
      },
    },
  };

  return <BaseContainer {...finalProps} />;
}
