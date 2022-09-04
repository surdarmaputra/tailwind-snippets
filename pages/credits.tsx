import Button from 'components/atoms/Button';
import HeadContent from 'components/molecules/HeadContent';
import Footer from 'components/organisms/Footer/Footer';
import setAsMainApp from 'utils/getStaticProps/setAsMainApp';

import ArrowNarrowRightIcon from '~icons/tabler/arrow-narrow-right';
import CheckIcon from '~icons/tabler/check';

export async function getStaticProps() {
  return setAsMainApp();
}

export default function Credits() {
  return (
    <>
      <HeadContent />

      <div className="absolute left-0 top-64 -z-10 h-72 w-72 rounded-full bg-primary-500 opacity-10 blur-3xl"></div>
      <div className="absolute right-0 top-24 -z-10 h-72 w-72 rounded-full bg-danger-500 opacity-10 blur-3xl"></div>

      <section className="container mx-auto py-16 px-6 text-center sm:py-40">
        <h1 className="mx-auto mb-12 w-3/4 text-4xl sm:text-5xl">Credits</h1>
        <p className="pb-10 text-dark-600">
          Kudos to the following parties for providing useful resources for this
          project:
        </p>
        <ul className="mb-24 flex flex-col items-center space-y-4">
          <li className="flex items-end">
            <CheckIcon className="mr-2 text-success-500" />
            Illustration from&nbsp;
            <a
              className="link"
              href="https://undraw.co/"
              rel="noreferrer"
              target="_blank"
            >
              unDraw
            </a>
          </li>
          <li className="flex items-end">
            <CheckIcon className="mr-2 text-success-500" />
            Photo by&nbsp;
            <a
              className="link"
              href="https://www.pexels.com/photo/delighted-female-friends-with-laptop-and-smartphone-4353618/"
              rel="noreferrer"
              target="_blank"
            >
              Ketut Subiyanto on Pexel
            </a>
          </li>
        </ul>

        <div className="flex flex-col justify-center space-y-4 space-x-0 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Button href="/snippets" link size="large" variation="dark">
            Explore snippets <ArrowNarrowRightIcon className="ml-2" />
          </Button>
          <Button href="/" link outline size="large" variation="dark">
            Home <ArrowNarrowRightIcon className="ml-2" />
          </Button>
        </div>
      </section>

      <Footer />
    </>
  );
}
