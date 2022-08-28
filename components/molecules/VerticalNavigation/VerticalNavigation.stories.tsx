import { ComponentMeta, ComponentStory } from '@storybook/react';

import { snippets } from './sample';
import VerticalNavigation from './VerticalNavigation';

export default {
  title: 'Molecules/VerticalNavigation',
  component: VerticalNavigation,
} as ComponentMeta<typeof VerticalNavigation>;

const Template: ComponentStory<typeof VerticalNavigation> = (args) => (
  <VerticalNavigation {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  snippets,
  currentPath: `/snippets/${snippets[0].slug}/${snippets[0].subCategories[0].slug}`,
};
