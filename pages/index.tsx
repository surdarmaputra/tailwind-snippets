import Button from 'components/atoms/Button';
import HeadContent from 'components/molecules/HeadContent';
import Footer from 'components/organisms/Footer/Footer';
import type { NextPage } from 'next';

import ArrowNarrowRightIcon from '~icons/tabler/arrow-narrow-right';
import CheckIcon from '~icons/tabler/check';

const features = ['Live preview', 'Code snippet', 'Written in TypeScript'];

const Home: NextPage = () => {
  return (
    <>
      <HeadContent />

      <div className="absolute left-0 top-64 -z-10 h-72 w-72 rounded-full bg-primary-500 opacity-10 blur-3xl"></div>
      <div className="absolute right-0 top-24 -z-10 h-72 w-72 rounded-full bg-danger-500 opacity-10 blur-3xl"></div>

      <section className="container mx-auto py-16 px-6 text-center sm:py-40">
        <h1 className="mx-auto mb-12 w-3/4 text-4xl sm:text-5xl">
          Tailwind Snippets for React Applications
        </h1>
        <p className="text-dark-600">
          Collection of UI patterns built using Tailwind CSS for React
          applications.
        </p>
        <ul className="mx-auto mb-12 flex w-fit flex-col items-center sm:mb-24 sm:flex-row sm:space-x-4">
          {features.map((feature, index) => (
            <li className="flex items-end" key={index}>
              <CheckIcon className="mr-2 text-success-500" />
              {feature}
            </li>
          ))}
        </ul>
        <Button href="/snippets" link size="large" variation="dark">
          Explore snippets <ArrowNarrowRightIcon className="ml-2" />
        </Button>
      </section>

      <Footer />
    </>
  );
};

export default Home;
