export default {
  title: 'Atoms/Link',
};

// @ts-expect-error unused args for native HTML element playground
export const Variants = (args) => (
  <>
    <a href="#">Link</a>
  </>
);

// @ts-expect-error unused args for native HTML element playground
export const WithParagraph = (args) => (
  <p>
    Lorem ipsum dolor sit amet <a href="#">this is link</a>, consectetur
    adipiscing elit. Duis id varius turpis. Nullam ut tincidunt tellus. Nunc
    fermentum odio vitae turpis fermentum vulputate. Morbi vel malesuada felis.
    Fusce vestibulum nibh id erat volutpat ullamcorper vitae sed neque.
    Curabitur vel lobortis metus, at mollis turpis.
  </p>
);
