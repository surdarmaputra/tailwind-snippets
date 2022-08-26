import { Button } from 'components/atoms/Button';
import type { NextPage } from 'next';
import Head from 'next/head';

import HomeIcon from '~icons/tabler/home';

const ServerError: NextPage = () => {
  return (
    <>
      <Head>
        <title>500 | Sorry, we have a problem :(</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <div className="absolute left-0 top-24 -z-10 h-72 w-72 rounded-full bg-primary-500 opacity-10 blur-3xl"></div>
      <div className="absolute right-0 top-4 -z-10 h-72 w-72 rounded-full bg-danger-500 opacity-10 blur-3xl"></div>

      <section className="container mx-auto py-40 text-center">
        <h1 className="mb-4 text-9xl">500</h1>
        <p>Sorry, we have a problem :(</p>

        <Button className="mt-20" href="/" link variation="dark">
          <HomeIcon className="mr-2" /> Refresh home page
        </Button>
      </section>
    </>
  );
};

export default ServerError;
