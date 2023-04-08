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
  return merge(await setAsMainApp(), await getSnippets());
}

export default function Pages({
  pageSnippets,
  snippets,
  themes,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <HeadContent title="Page Snippets" />

      <SnippetsExplorerLayout
        pageSnippets={pageSnippets}
        snippets={snippets}
        themes={themes}
      >
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
                      title: category.title,
                    })
                  }
                >
                  <Thumbnail name={category.slug} title={category.title} />
                </a>
              </Link>
            ))}
          </div>
        </div>
      </SnippetsExplorerLayout>
    </>
  );
}
