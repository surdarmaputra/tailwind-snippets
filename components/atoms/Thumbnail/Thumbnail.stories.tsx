import Thumbnail from './Thumbnail';

export default {
  title: 'Atoms/Thumbnail',
};

// @ts-expect-error unused args for native HTML element playground
export const Playground = (args) => (
  <div className="flex space-x-6">
    <Thumbnail className="w-1/2 sm:w-1/3" name="header" title="Header" />
    <Thumbnail className="w-1/2 sm:w-1/3" name="hero" title="Hero" />
    <Thumbnail className="w-1/2 sm:w-1/3" name="services" title="Services" />
  </div>
);
