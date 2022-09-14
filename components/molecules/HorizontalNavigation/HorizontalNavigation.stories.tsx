import { ComponentMeta, ComponentStory } from '@storybook/react';

import { NavItem } from 'core/type';

import HorizontalNavigation from './HorizontalNavigation';

export default {
  title: 'Molecules/HorizontalNavigation',
  component: HorizontalNavigation,
} as ComponentMeta<typeof HorizontalNavigation>;

const Template: ComponentStory<typeof HorizontalNavigation> = (args) => (
  <HorizontalNavigation {...args} />
);

const items: NavItem[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
];

export const Playground = Template.bind({});
Playground.args = {
  items,
  currentPath: '/contact',
};
