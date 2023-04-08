import { useContext, useMemo, useState } from 'react';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

import HeadContent from 'components/molecules/HeadContent';
import SnippetPreview from 'components/molecules/SnippetPreview';
import SnippetsExplorerLayout from 'components/templates/SnippetsExplorerLayout';
import {
  CodeLanguage,
  PageCategory,
  SnippetCategory,
  Theme,
  Variant,
} from 'core/type';
import useFilterStore from 'hooks/useFilterStore';
import { ColorModeContext } from 'providers/ColorModeProvider';
import generateCompleteVariant from 'utils/generator/generateCompleteVariant';
import generatePageCategoryPaths from 'utils/getStaticPaths/generatePageCategoryPaths';
import getSnippets from 'utils/getStaticProps/getSnippets';
import setAsMainApp from 'utils/getStaticProps/setAsMainApp';

import MoodConfuzedIcon from '~icons/tabler/mood-confuzed.tsx';

interface StaticProps {
  isDevelopment: boolean;
  selectedCategory: PageCategory | undefined;
  snippets: SnippetCategory[];
  pageSnippets: PageCategory[];
  themes: Theme[];
  variants: Variant[];
}

export const getStaticProps: GetStaticProps<StaticProps> = async (context) => {
  const { props } = await getSnippets();
  const { props: mainAppProps } = await setAsMainApp();
  const { pageSnippets } = props;

  const selectedCategory = pageSnippets.find(
    (categoryItem) => categoryItem.slug === context.params?.category,
  );
  const variants: Variant[] = await Promise.all<Variant>(
    selectedCategory?.variants.map((variant) =>
      generateCompleteVariant(variant, {
        excludedCodeLanguage: [CodeLanguage.tsx],
      }),
    ) || [],
  );

  return {
    props: {
      ...props,
      ...mainAppProps,
      isDevelopment: process.env.NODE_ENV === 'development',
      selectedCategory,
      variants,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { props } = await getSnippets();
  const { pageSnippets } = props;
  return generatePageCategoryPaths(pageSnippets);
};

export default function PagesCategory({
  isDevelopment,
  pageSnippets,
  selectedCategory,
  snippets,
  themes,
  variants,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [snippetPreviewMaximized, setSnippetPreviewMaximized] = useState(false);
  const { dark } = useContext(ColorModeContext);
  const themesFilter = useFilterStore((state) => state.themes);

  const viewedVariants = useMemo(
    () =>
      themesFilter?.length
        ? variants.filter(
            (variant) => variant.theme && themesFilter.includes(variant.theme),
          )
        : variants,
    [themesFilter, variants],
  );

  const handleMaximized = (maximized: boolean) => {
    setSnippetPreviewMaximized(maximized);
  };

  return (
    <>
      <HeadContent title={`Page - ${selectedCategory?.title}`} />

      <SnippetsExplorerLayout
        className={snippetPreviewMaximized ? '' : 'space-y-12'}
        pageSnippets={pageSnippets}
        snippets={snippets}
        themes={themes}
      >
        {viewedVariants.map((snippet) => (
          <SnippetPreview
            codeByType={snippet.codeByType}
            isDevelopment={isDevelopment}
            key={snippet.previewUrl}
            onMaximized={handleMaximized}
            src={`${snippet.previewUrl}${dark ? '?theme=dark' : ''}`}
            title={snippet.themeTitle || snippet.title}
          />
        ))}
        {!viewedVariants?.length ? (
          <div className="flex flex-col items-center py-10 text-center sm:py-20">
            <MoodConfuzedIcon className="mb-12 h-32 w-32 text-dark-200 dark:text-dark-500" />
            <h2>No result found</h2>
            <p>
              Please select another theme(s) or keep it blank to show all
              themes.
            </p>
          </div>
        ) : null}
      </SnippetsExplorerLayout>
    </>
  );
}
