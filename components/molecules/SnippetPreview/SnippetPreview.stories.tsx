import { ComponentMeta, ComponentStory } from '@storybook/react';

import { SnippetPreview } from './SnippetPreview';

export default {
  title: 'Molecules/SnippetPreview',
  component: SnippetPreview,
} as ComponentMeta<typeof SnippetPreview>;

const Template: ComponentStory<typeof SnippetPreview> = (args) => (
  <SnippetPreview {...args} className="mb-6" />
);

export const Playground = Template.bind({});
Playground.args = {
  src: 'http://localhost:6006/iframe.html?id=atoms-heading--variants&viewMode=story',
  title: 'Snippet sample title',
  secondaryTitle: 'Awesome theme',
  code: `export function Sample() {
  return (
    <>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
    </>
  );
}`,
};
