import type { NextPage } from 'next';

import Button from 'components/atoms/Button';
import HeadContent from 'components/molecules/HeadContent';
import Footer from 'components/organisms/Footer/Footer';
import Header from 'components/organisms/Header';
import setAsMainApp from 'utils/getStaticProps/setAsMainApp';

import ArrowNarrowRightIcon from '~icons/tabler/arrow-narrow-right.tsx';
import CheckIcon from '~icons/tabler/check.tsx';

const features = ['Live preview', 'Code snippet', 'Written in TypeScript'];

export async function getStaticProps() {
  return setAsMainApp();
}

const Home: NextPage = () => {
  return (
    <>
      <HeadContent />

      <Header navigationHidden />

      <div className="absolute left-0 top-64 -z-10 h-72 w-72 rounded-full bg-primary-500 opacity-10 blur-3xl"></div>
      <div className="absolute right-0 top-24 -z-10 h-72 w-72 rounded-full bg-danger-500 opacity-10 blur-3xl"></div>

      <section className="container mx-auto py-16 px-6 text-center sm:py-40">
        <h1 className="mx-auto w-3/4 pb-10 text-4xl sm:text-5xl">
          Tailwind Snippets for React Applications
        </h1>
        <p>
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
        <div className="flex flex-col justify-center space-y-4 space-x-0 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Button href="/snippets" link size="large" variation="dark">
            Explore snippets <ArrowNarrowRightIcon className="ml-2" />
          </Button>
          <Button href="/credits" link outline size="large" variation="dark">
            Credits <ArrowNarrowRightIcon className="ml-2" />
          </Button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
