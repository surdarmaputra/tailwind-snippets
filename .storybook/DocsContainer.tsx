import {
  DocsContainer as BaseContainer,
  DocsContainerProps,
} from '@storybook/addon-docs/blocks';
import { themes } from '@storybook/theming';
import React from 'react';
import { useDarkMode } from 'storybook-dark-mode';

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
              theme: dark ? themes.dark : themes.light,
            },
          },
        };
      },
    },
  };

  return <BaseContainer {...finalProps} />;
}
