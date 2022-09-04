import HeadContent from 'components/molecules/HeadContent';
import SnippetsExplorerLayout from 'components/templates/SnippetsExplorerLayout';
import { merge } from 'lodash-es';
import { InferGetStaticPropsType } from 'next';
import getSnippets from 'utils/getStaticProps/getSnippets';
import setAsMainApp from 'utils/getStaticProps/setAsMainApp';

import ListSearchIcon from '~icons/tabler/list-search';

export async function getStaticProps() {
  return merge(await getSnippets(), await setAsMainApp());
}

export default function Snippets({
  snippets,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <HeadContent />

      <SnippetsExplorerLayout
        className="flex flex-col items-center py-10 text-center sm:py-20"
        snippets={snippets}
      >
        <ListSearchIcon className="mb-12 h-32 w-32 text-dark-200" />
        <h2>Select any snippet</h2>
        <p>Please select any snippet from the navigation menu.</p>
      </SnippetsExplorerLayout>
    </>
  );
}
