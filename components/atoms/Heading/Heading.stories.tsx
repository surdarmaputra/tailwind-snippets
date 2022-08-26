export default {
  title: 'Atoms/Heading',
};

// @ts-expect-error unused args for native HTML element playground
export const Variants = (args) => (
  <>
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>
  </>
);

// @ts-expect-error unused args for native HTML element playground
export const WithParagraph = (args) => (
  <>
    <h1>Heading 1</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id varius
      turpis. Nullam ut tincidunt tellus. Nunc fermentum odio vitae turpis
      fermentum vulputate. Morbi vel malesuada felis. Fusce vestibulum nibh id
      erat volutpat ullamcorper vitae sed neque. Curabitur vel lobortis metus,
      at mollis turpis.
    </p>

    <h2>Heading 2</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id varius
      turpis. Nullam ut tincidunt tellus. Nunc fermentum odio vitae turpis
      fermentum vulputate. Morbi vel malesuada felis. Fusce vestibulum nibh id
      erat volutpat ullamcorper vitae sed neque. Curabitur vel lobortis metus,
      at mollis turpis.
    </p>

    <h3>Heading 3</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id varius
      turpis. Nullam ut tincidunt tellus. Nunc fermentum odio vitae turpis
      fermentum vulputate. Morbi vel malesuada felis. Fusce vestibulum nibh id
      erat volutpat ullamcorper vitae sed neque. Curabitur vel lobortis metus,
      at mollis turpis.
    </p>

    <h4>Heading 4</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id varius
      turpis. Nullam ut tincidunt tellus. Nunc fermentum odio vitae turpis
      fermentum vulputate. Morbi vel malesuada felis. Fusce vestibulum nibh id
      erat volutpat ullamcorper vitae sed neque. Curabitur vel lobortis metus,
      at mollis turpis.
    </p>

    <h5>Heading 5</h5>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id varius
      turpis. Nullam ut tincidunt tellus. Nunc fermentum odio vitae turpis
      fermentum vulputate. Morbi vel malesuada felis. Fusce vestibulum nibh id
      erat volutpat ullamcorper vitae sed neque. Curabitur vel lobortis metus,
      at mollis turpis.
    </p>

    <h6>Heading 6</h6>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id varius
      turpis. Nullam ut tincidunt tellus. Nunc fermentum odio vitae turpis
      fermentum vulputate. Morbi vel malesuada felis. Fusce vestibulum nibh id
      erat volutpat ullamcorper vitae sed neque. Curabitur vel lobortis metus,
      at mollis turpis.
    </p>
  </>
);

// @ts-expect-error unused args for native HTML element playground
export const NestedHeadings = (args) => (
  <>
    <h1>Heading 1</h1>

    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id varius
      turpis. Nullam ut tincidunt tellus. Nunc fermentum odio vitae turpis
      fermentum vulputate. Morbi vel malesuada felis. Fusce vestibulum nibh id
      erat volutpat ullamcorper vitae sed neque. Curabitur vel lobortis metus,
      at mollis turpis.
    </p>
    <h3>Heading 3</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id varius
      turpis. Nullam ut tincidunt tellus. Nunc fermentum odio vitae turpis
      fermentum vulputate. Morbi vel malesuada felis. Fusce vestibulum nibh id
      erat volutpat ullamcorper vitae sed neque. Curabitur vel lobortis metus,
      at mollis turpis.
    </p>

    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id varius
      turpis. Nullam ut tincidunt tellus. Nunc fermentum odio vitae turpis
      fermentum vulputate. Morbi vel malesuada felis. Fusce vestibulum nibh id
      erat volutpat ullamcorper vitae sed neque. Curabitur vel lobortis metus,
      at mollis turpis.
    </p>
    <h3>Heading 3</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id varius
      turpis. Nullam ut tincidunt tellus. Nunc fermentum odio vitae turpis
      fermentum vulputate. Morbi vel malesuada felis. Fusce vestibulum nibh id
      erat volutpat ullamcorper vitae sed neque. Curabitur vel lobortis metus,
      at mollis turpis.
    </p>
  </>
);
