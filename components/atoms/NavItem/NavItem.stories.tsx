import { ComponentMeta, ComponentStory } from '@storybook/react';

import NavItem from './NavItem';

export default {
  title: 'Atoms/NavItem',
  component: NavItem,
} as ComponentMeta<typeof NavItem>;

const Template: ComponentStory<typeof NavItem> = (args) => (
  <NavItem {...args} />
);

const href = '/snippets/category/sub-category';

export const Playground = Template.bind({});
Playground.args = {
  href,
  currentPath: '/',
  children: 'Sample Nav Item',
};

export const Active = Template.bind({});
Active.args = {
  href,
  currentPath: href,
  children: 'Active Nav Item',
};
