export default {
  title: 'Atoms/Paragraph',
};

// @ts-expect-error unused args for native HTML element playground
const Template = (args) => (
  <>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id varius
      turpis. Nullam ut tincidunt tellus. Nunc fermentum odio vitae turpis
      fermentum vulputate. Morbi vel malesuada felis. Fusce vestibulum nibh id
      erat volutpat ullamcorper vitae sed neque. Curabitur vel lobortis metus,
      at mollis turpis.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id varius
      turpis. Nullam ut tincidunt tellus. Nunc fermentum odio vitae turpis
      fermentum vulputate. Morbi vel malesuada felis. Fusce vestibulum nibh id
      erat volutpat ullamcorper vitae sed neque. Curabitur vel lobortis metus,
      at mollis turpis.
    </p>
  </>
);

export const Variants = Template.bind({});
