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
        <h1 className="mx-auto w-3/4 pb-10 text-4xl sm:text-6xl xl:w-1/2">
          Tailwind UI Templates for React Applications
        </h1>
        <p>Collection of UI templates to speed up your UI development.</p>
        <ul className="mx-auto mb-12 flex w-fit flex-col items-center text-xs text-dark-600 sm:mb-24 sm:flex-row sm:space-x-4">
          {features.map((feature, index) => (
            <li className="flex items-end" key={index}>
              <CheckIcon className="mr-1 text-primary-400" />
              {feature}
            </li>
          ))}
        </ul>
        <div className="flex flex-col justify-center space-y-4 space-x-0 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Button
            href="/snippets"
            link
            rounded
            size="large"
            variation="primary"
          >
            Explore snippets <ArrowNarrowRightIcon className="ml-2" />
          </Button>
          <Button
            href="/credits"
            link
            outline
            rounded
            size="large"
            variation="light"
          >
            Credits <ArrowNarrowRightIcon className="ml-2" />
          </Button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
