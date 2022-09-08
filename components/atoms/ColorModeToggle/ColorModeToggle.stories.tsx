import { ComponentMeta, ComponentStory } from '@storybook/react';

import ColorModeToggle from './ColorModeToggle';

export default {
  title: 'Atoms/ColorModeToggle',
  component: ColorModeToggle,
} as ComponentMeta<typeof ColorModeToggle>;

const Template: ComponentStory<typeof ColorModeToggle> = (args) => (
  <ColorModeToggle {...args} />
);

export const Playground = Template.bind({});
