import { ComponentMeta, ComponentStory } from '@storybook/react';
import { snippets } from 'components/molecules/SideNavigation/sample';

import SnippetsExplorerLayout from './SnippetsExplorerLayout';

export default {
  title: 'Templates/SnippetsExplorerLayout',
  component: SnippetsExplorerLayout,
} as ComponentMeta<typeof SnippetsExplorerLayout>;

const Template: ComponentStory<typeof SnippetsExplorerLayout> = (args) => (
  <SnippetsExplorerLayout {...args}>
    <div className="h-full w-full bg-dark-100 p-24 text-center">Content</div>
  </SnippetsExplorerLayout>
);

export const Playground = Template.bind({});
Playground.args = {
  snippets,
};
