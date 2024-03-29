import type { InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { trackEvent } from 'libs/analytics';
import { ElementContainer, ElementId } from 'libs/analytics/types';
import { merge } from 'lodash-es';

import Button from 'components/atoms/Button';
import Thumbnail from 'components/atoms/Thumbnail';
import HeadContent from 'components/molecules/HeadContent';
import Footer from 'components/organisms/Footer/Footer';
import Header from 'components/organisms/Header';
import getSnippets from 'utils/getStaticProps/getSnippets';
import setAsMainApp from 'utils/getStaticProps/setAsMainApp';

import ArrowNarrowRightIcon from '~icons/tabler/arrow-narrow-right.tsx';
import CheckIcon from '~icons/tabler/check.tsx';
import HandFingerIcon from '~icons/tabler/hand-finger.tsx';

const features = ['Live preview', 'Code snippet', 'Written in TypeScript'];
const categoryThumbnail: Record<string, string> = {
  navigation: 'header',
  'page-sections': 'hero',
};

export async function getStaticProps() {
  return merge(await getSnippets(), await setAsMainApp());
}

export default function Home({
  pageSnippets,
  snippets,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <HeadContent title="Home" />

      <Header navigationHidden />

      <div className="absolute left-0 top-64 -z-10 h-72 w-72 rounded-full bg-primary-500 opacity-10 blur-3xl"></div>
      <div className="absolute right-0 top-24 -z-10 h-72 w-72 rounded-full bg-danger-500 opacity-10 blur-3xl"></div>

      <section className="mx-auto flex flex-col items-center px-6 pt-12 pb-36 sm:flex-row-reverse sm:pt-36 lg:container">
        <div className="mb-14 flex w-full scale-75 flex-wrap justify-center space-x-4 sm:mb-0 sm:w-1/2 sm:scale-100 sm:pl-8 md:pl-20">
          <Thumbnail className="w-2/5" hoverable={false} name="hero" />
          <Thumbnail className="mt-3 w-2/5" hoverable={false} name="products" />
          <Thumbnail
            className="mt-2 w-1/2"
            hoverable={false}
            name="testimony"
          />
        </div>
        <div className="w-full text-center sm:mr-2 sm:w-1/2 sm:text-left">
          <h1 className="pb-4">UI Templates for React Projects</h1>
          <p>
            A collection of UI templates to speed up your UI development using
            React and Tailwind CSS.
          </p>
          <ul className="mx-auto mb-12 flex w-fit flex-col items-center space-y-4 text-xs text-dark-600 dark:text-dark-400 sm:mx-0 sm:mb-20 sm:items-start md:flex-row md:space-x-4 md:space-y-0">
            {features.map((feature, index) => (
              <li className="flex items-end" key={index}>
                <CheckIcon className="mr-1 text-primary-400" />
                {feature}
              </li>
            ))}
          </ul>
          <div className="flex flex-col space-y-4 space-x-0 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button
              href="/snippets"
              link
              onClick={() =>
                trackEvent({
                  name: 'element_click',
                  element_id: ElementId.CTAExploreTemplates,
                  element_container: ElementContainer.LandingHeroSection,
                })
              }
              rounded
              size="large"
              variation="primary"
            >
              Explore templates <ArrowNarrowRightIcon className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="mx-auto px-6 lg:container">
          <video
            autoPlay
            className="relative z-10 w-full rounded-xl shadow-xl lg:container"
            loop
            muted
            playsInline
            src="/videos/tailwind-snippets-preview.webm"
          ></video>
        </div>
        <div className="absolute bottom-0 z-0 h-1/2 w-full bg-primary-500"></div>
      </section>

      <section className="bg-primary-500">
        <div className="mx-auto flex flex-col items-center px-6 py-28 sm:flex-row-reverse lg:container">
          <div className="mb-20 flex w-full sm:mb-0 sm:w-1/2 sm:pl-8 md:pl-20">
            <div className="w-1/2 pr-1">
              <div className="vertical-slider flex flex-col space-y-2">
                <Thumbnail
                  hoverable={false}
                  name="header"
                  thumbnailClassName="!shadow-primary-600"
                />
                <Thumbnail
                  hoverable={false}
                  name="footer"
                  thumbnailClassName="!shadow-primary-600"
                />
              </div>
            </div>
            <div className="w-1/2 pl-1 pt-8">
              <div className="vertical-slider vertical-slider--delayed flex flex-col space-y-2">
                <Thumbnail
                  hoverable={false}
                  name="benefits"
                  thumbnailClassName="!shadow-primary-600"
                />
                <Thumbnail
                  hoverable={false}
                  name="testimony"
                  thumbnailClassName="!shadow-primary-600"
                />
              </div>
            </div>
          </div>
          <div className="w-full text-center sm:w-1/2 sm:text-left">
            <h2 className="pb-3 !text-white">We have a bunch of UI sections</h2>
            <p className="pb-8 text-primary-200">
              Need a header, hero section, footer or anything else? You can
              explore a bunch of UI sections with various styles.
            </p>
            <Button
              href="/snippets"
              link
              onClick={() =>
                trackEvent({
                  name: 'element_click',
                  element_id: ElementId.CTAExploreTemplates,
                  element_container:
                    ElementContainer.LandingStyleCampaignSection,
                })
              }
              rounded
              size="small"
              variation="light"
            >
              Explore templates <ArrowNarrowRightIcon className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto flex flex-col items-center px-6 pt-32 pb-12 sm:flex-row lg:container">
        <div className="mb-16 flex flex-wrap justify-start space-x-4 sm:mb-0 sm:pr-10">
          <div className="h-[300px] w-[300px] overflow-hidden rounded-xl shadow-xl shadow-dark-200 dark:shadow-dark-800">
            <Image
              alt="Breakpoints preview"
              height={300}
              src="/images/breakpoints-preview.png"
              width={300}
            />
          </div>
        </div>
        <div className="w-full text-center sm:text-left">
          <h2 className="pb-3">Wide range of breakpoints</h2>
          <p className="pb-8">
            Simulate responsive UI using breakpoints and make sure you have
            beautiful design across devices.
          </p>
        </div>
      </section>

      <section className="mx-auto flex flex-col items-center px-6 pb-28 pt-12 sm:flex-row lg:container">
        <div className="mb-16 flex flex-wrap justify-start space-x-4 sm:mb-0 sm:pr-10">
          <div className="h-[300px] w-[300px] overflow-hidden rounded-xl shadow-xl shadow-dark-200 dark:shadow-dark-800">
            <Image
              alt="Breakpoints preview"
              height={300}
              src="/images/code-preview.png"
              width={300}
            />
          </div>
        </div>
        <div className="w-full text-center sm:w-1/2 sm:text-left">
          <h2 className="pb-3">Code Snippets</h2>
          <p className="pb-8">
            Like the design? Copy the code snippet into your project right away.
          </p>
        </div>
      </section>

      <section className="mx-auto flex flex-col items-center justify-center px-6 pt-20 pb-36 lg:container">
        <h2 className="pb-3 text-center">
          <span>Explore A Bunch of Our Collection </span>
          <HandFingerIcon className="ml-2 mt-1 inline rotate-180" />
        </h2>

        <div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-3">
          <Link href="/snippets">
            <a
              onClick={() =>
                trackEvent({
                  name: 'snippet_thumbnail_click',
                  title: 'All Templates',
                })
              }
            >
              <Thumbnail name="products" title="All Templates" />
            </a>
          </Link>
          {snippets.map((category) => (
            <Link href={category.href || '/snippets'} key={category.slug}>
              <a
                onClick={() =>
                  trackEvent({
                    name: 'snippet_thumbnail_click',
                    title: category.title,
                  })
                }
              >
                <Thumbnail
                  name={
                    categoryThumbnail[category.slug] ||
                    category.subCategories[0].slug
                  }
                  title={category.title}
                />
              </a>
            </Link>
          ))}
          {pageSnippets?.map((category) => (
            <Link href={category.href || '/snippets/pages'} key={category.slug}>
              <a
                onClick={() =>
                  trackEvent({
                    name: 'snippet_thumbnail_click',
                    title: `${category.title} Page`,
                  })
                }
              >
                <Thumbnail
                  name={category.slug}
                  title={`${category.title} Page`}
                />
              </a>
            </Link>
          ))}
        </div>
      </section>

      <Footer snippets={snippets} />
    </>
  );
}
