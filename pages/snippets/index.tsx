import { InferGetStaticPropsType } from 'next';
import Link from 'next/link';

import { trackEvent } from 'libs/analytics';
import { merge } from 'lodash-es';

import Thumbnail from 'components/atoms/Thumbnail';
import HeadContent from 'components/molecules/HeadContent';
import SnippetsExplorerLayout from 'components/templates/SnippetsExplorerLayout';
import getSnippets from 'utils/getStaticProps/getSnippets';
import setAsMainApp from 'utils/getStaticProps/setAsMainApp';

export async function getStaticProps() {
  return merge(await getSnippets(), await setAsMainApp());
}

export default function Snippets({
  pageSnippets,
  snippets,
  themes,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <HeadContent title="Snippets" />

      <SnippetsExplorerLayout
        pageSnippets={pageSnippets}
        snippets={snippets}
        themes={themes}
      >
        {snippets.map((category) => (
          <div className="mb-20" key={category.slug}>
            <h5>{category.title}</h5>
            <div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-3">
              {category.subCategories.map((subCategory) => (
                <Link
                  href={subCategory.href || '/snippets'}
                  key={subCategory.slug}
                >
                  <a
                    onClick={() =>
                      trackEvent({
                        name: 'snippet_thumbnail_click',
                        title: subCategory.title,
                      })
                    }
                  >
                    <Thumbnail
                      name={subCategory.slug}
                      title={subCategory.title}
                    />
                  </a>
                </Link>
              ))}
            </div>
          </div>
        ))}

        <div className="mb-20">
          <h5>Page</h5>
          <div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-3">
            {pageSnippets?.map((category) => (
              <Link
                href={category.href || '/snippets/pages'}
                key={category.slug}
              >
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
        </div>
      </SnippetsExplorerLayout>
    </>
  );
}
