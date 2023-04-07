import { InferGetStaticPropsType } from 'next';

import { merge } from 'lodash-es';

import HeadContent from 'components/molecules/HeadContent';
import getPageSnippets from 'utils/getStaticProps/getPageSnippets';
import setAsMainApp from 'utils/getStaticProps/setAsMainApp';

export async function getStaticProps() {
  return merge(await getPageSnippets(), await setAsMainApp());
}

export default function PageSnippets({
  snippets,
  themes,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  // eslint-disable-next-line no-console
  console.log({ snippets, themes });
  return (
    <>
      <HeadContent title="Snippets" />

      {/* <SnippetsExplorerLayout snippets={snippets} themes={themes}>
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
      </SnippetsExplorerLayout> */}
    </>
  );
}
