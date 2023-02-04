import { GetStaticPaths, InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { merge } from 'lodash-es';

import Thumbnail from 'components/atoms/Thumbnail';
import HeadContent from 'components/molecules/HeadContent';
import SnippetsExplorerLayout from 'components/templates/SnippetsExplorerLayout';
import generateSnippetCategoryPaths from 'utils/getStaticPaths/generateSnippetCategoryPaths';
import getSnippets from 'utils/getStaticProps/getSnippets';
import setAsMainApp from 'utils/getStaticProps/setAsMainApp';

export async function getStaticProps() {
  return merge(await getSnippets(), await setAsMainApp());
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { props } = await getSnippets();
  const { snippets } = props;
  return generateSnippetCategoryPaths(snippets);
};

export default function Snippets({
  snippets,
  themes,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  const { category: currentCategorySlug } = router.query;

  return (
    <>
      <HeadContent />

      <SnippetsExplorerLayout snippets={snippets} themes={themes}>
        {snippets
          .filter((category) => category.slug === currentCategorySlug)
          .map((category) => (
            <div className="mb-20" key={category.slug}>
              <h5>{category.title}</h5>
              <div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-3">
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
