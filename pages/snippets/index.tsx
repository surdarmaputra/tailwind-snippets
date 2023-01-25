import { InferGetStaticPropsType } from 'next';
import Link from 'next/link';

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
  snippets,
  themes,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <HeadContent />

      <SnippetsExplorerLayout snippets={snippets} themes={themes}>
        {snippets.map((category) => (
          <div className="mb-12" key={category.slug}>
            <h5>{category.title}</h5>
            <div className="grid grid-cols-3 gap-6">
              {category.subCategories.map((subCategory) => (
                <Link
                  href={subCategory.href || '/snippets'}
                  key={subCategory.slug}
                >
                  <a>
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
      </SnippetsExplorerLayout>
    </>
  );
}
