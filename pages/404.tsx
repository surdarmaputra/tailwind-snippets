import { Button } from 'components/atoms/Button';
import type { NextPage } from 'next';
import Head from 'next/head';

import ArrowNarrowLeftIcon from '~icons/tabler/arrow-narrow-left';

const NotFound: NextPage = () => {
  return (
    <>
      <Head>
        <title>404 | Sorry you got lost :(</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <div className="absolute left-0 top-24 -z-10 h-72 w-72 rounded-full bg-primary-500 opacity-10 blur-3xl"></div>
      <div className="absolute right-0 top-4 -z-10 h-72 w-72 rounded-full bg-danger-500 opacity-10 blur-3xl"></div>

      <section className="container mx-auto py-40 text-center">
        <h1 className="mb-4 text-9xl">404</h1>
        <p>Sorry you got lost :(</p>

        <Button className="mt-20" href="/" link variation="dark">
          <ArrowNarrowLeftIcon className="mr-2" /> Go back home
        </Button>
      </section>
    </>
  );
};

export default NotFound;
