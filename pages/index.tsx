import { Button } from 'components/atoms/Button';
import type { NextPage } from 'next';
import Head from 'next/head';

import ArrowNarrowRightIcon from '~icons/tabler/arrow-narrow-right';
import CheckIcon from '~icons/tabler/check';

const features = [
  'TypeScript',
  'Tailwind CSS with pre-configured colors',
  <span key="atomic-design">
    Basic components following{' '}
    <a
      href="https://bradfrost.com/blog/post/atomic-web-design/"
      rel="noreferrer"
      target="_blank"
    >
      atomic design
    </a>{' '}
    concept
  </span>,
  'Storybook',
  <span key="unplugin-icons">
    Access thousands of icons using{' '}
    <a
      href="https://github.com/antfu/unplugin-icons"
      rel="noreferrer"
      target="_blank"
    >
      unplugin-icons
    </a>
  </span>,
  <span key="commitlint">
    Make sure commit messages meet{' '}
    <a
      href="https://www.conventionalcommits.org"
      rel="noreferrer"
      target="_blank"
    >
      conventional commit
    </a>{' '}
    format using{' '}
    <a
      href="https://github.com/conventional-changelog/commitlint"
      rel="noreferrer"
      target="_blank"
    >
      commitlint
    </a>
  </span>,
  <span key="lefthook">
    Run formatters and linters within Git hooks using{' '}
    <a
      href="https://github.com/evilmartians/lefthook"
      rel="noreferrer"
      target="_blank"
    >
      lefthook
    </a>
  </span>,
  <span key="standard-version">
    Manage release using{' '}
    <a
      href="https://github.com/conventional-changelog/standard-version"
      rel="noreferrer"
      target="_blank"
    >
      standard-version
    </a>
  </span>,
];

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next.js TS Tailwind Starter</title>
        <meta
          content="Starter kit for Next.js project using Typescript and Tailwind CSS"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <div className="absolute left-0 top-24 -z-10 h-72 w-72 rounded-full bg-primary-500 opacity-10 blur-3xl"></div>
      <div className="absolute right-0 top-4 -z-10 h-72 w-72 rounded-full bg-danger-500 opacity-10 blur-3xl"></div>

      <section className="container mx-auto py-40">
        <h1 className="mb-4">Next.js TS Tailwind Starter</h1>
        <p className="text-dark-600">
          Starter kit to speed up the development of Next.js project.
        </p>
        <ul className="mb-12">
          {features.map((feature, index) => (
            <li className="flex items-end" key={index}>
              <CheckIcon className="mr-2 text-success-500" />
              {feature}
            </li>
          ))}
        </ul>
        <Button
          external
          href={process.env.NEXT_PUBLIC_DEMO_STORYBOOK_URL}
          link
          variation="dark"
        >
          Explore The Storybook <ArrowNarrowRightIcon className="ml-2" />
        </Button>
      </section>

      <footer className="container mx-auto py-8">
        &copy; 2022 | Created by{' '}
        <a href="https://github.com/surdarmaputra/">Surya Darma Putra</a>
      </footer>
    </>
  );
};

export default Home;
