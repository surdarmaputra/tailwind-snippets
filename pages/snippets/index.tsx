import HeadContent from 'components/molecules/HeadContent';
import SnippetsExplorerLayout from 'components/templates/SnippetsExplorerLayout';
import { InferGetStaticPropsType } from 'next';
import getSnippets from 'utils/getStaticProps/getSnippets';

import ListSearchIcon from '~icons/tabler/list-search';

export async function getStaticProps() {
  return getSnippets();
}

export default function Snippets({
  snippets,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <HeadContent />

      <SnippetsExplorerLayout
        className="flex flex-col items-center py-20 text-center"
        snippets={snippets}
      >
        <ListSearchIcon className="mb-12 h-32 w-32 text-dark-200" />
        <h2>Select any snippet</h2>
        <p>Please select any snippet from the navigation on the left.</p>
      </SnippetsExplorerLayout>
    </>
  );
}
