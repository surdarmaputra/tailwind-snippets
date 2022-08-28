import { ComponentMeta, ComponentStory } from '@storybook/react';

import { snippets } from './sample';
import SideNavigation from './SideNavigation';

export default {
  title: 'Molecules/SideNavigation',
  component: SideNavigation,
} as ComponentMeta<typeof SideNavigation>;

const Template: ComponentStory<typeof SideNavigation> = (args) => (
  <SideNavigation {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  snippets,
};
