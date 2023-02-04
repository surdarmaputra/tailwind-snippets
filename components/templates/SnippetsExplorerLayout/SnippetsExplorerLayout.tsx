import { useEffect, useMemo, useState } from 'react';
import Select, { MultiValue } from 'react-select';
import { useRouter } from 'next/router';

import classNames from 'classnames';

import Button from 'components/atoms/Button';
import VerticalNavigation from 'components/molecules/VerticalNavigation';
import Footer from 'components/organisms/Footer/Footer';
import Header from 'components/organisms/Header';
import { navigationItems } from 'components/organisms/Header/Header';
import { SelectOption, SnippetCategory, Theme } from 'core/type';
import useCurrentPath from 'hooks/useCurrentPath';
import useFilterStore from 'hooks/useFilterStore';

import MenuIcon from '~icons/tabler/menu-2.tsx';

export interface SnippetsExplorerLayoutProps
  extends React.HTMLProps<HTMLDivElement> {
  snippets: SnippetCategory[];
  themes?: Theme[];
}

export default function SnippetsExplorerLayout({
  children,
  className = '',
  snippets,
  themes = [],
}: SnippetsExplorerLayoutProps) {
  const router = useRouter();
  const [mobileNavigationOpened, setMobileNavigationOpened] = useState(false);
  const currentPath = useCurrentPath();
  const setThemesFilter = useFilterStore((state) => state.setThemes);
  const themesFilter = useFilterStore((state) => state.themes);

  const themeOptions: SelectOption[] = themes.map(({ theme, themeTitle }) => ({
    label: themeTitle,
    value: theme,
  }));

  const navigationClassName = classNames({
    'transition-all fixed overflow-y-auto top-0 bottom-0 w-3/4 py-6 pr-4 pl-4 sm:relative sm:w-1/5 sm:py-0 sm:pl-1 dark:bg-dark-900':
      true,
    '-left-3/4 sm:left-0': !mobileNavigationOpened,
    'left-0 z-50': mobileNavigationOpened,
  });

  const backdropClassName = classNames({
    'transition-all fixed top-0 bottom-0 right-0 z-40 bg-dark-900 opacity-75 dark:bg-black sm:hidden':
      true,
    'w-full': mobileNavigationOpened,
  });

  const themesSelectValue = useMemo(
    () =>
      themesFilter?.length
        ? themeOptions.filter(
            ({ value }) => value && themesFilter.includes(value),
          )
        : [],
    [themesFilter, themeOptions],
  );

  const handleThemeChange = (selectedThemes: MultiValue<SelectOption>) => {
    const selectedValues = selectedThemes
      .map(({ value }) => value)
      .filter(Boolean) as string[];
    setThemesFilter(selectedValues);
    router.push({
      query: {
        ...router.query,
        themes: selectedValues?.length ? selectedValues.join(',') : '',
      },
    });
  };

  const toggleMobileNavigation = () =>
    setMobileNavigationOpened(!mobileNavigationOpened);

  useEffect(() => {
    if (router.isReady) {
      setThemesFilter(
        ((router.query?.themes as string)?.split(',') || []).filter(Boolean),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);

  return (
    <>
      <Header fixed />

      <div className="mx-auto w-full px-6 pt-40 lg:container">
        {!!themeOptions?.length && (
          <Select
            className="react-select-container mx-auto mt-6 mb-10 w-5/6"
            classNamePrefix="react-select"
            closeMenuOnSelect={false}
            id="themesFilter"
            isMulti
            onChange={handleThemeChange}
            options={themeOptions}
            placeholder="Theme filter"
            value={themesSelectValue}
          />
        )}
      </div>

      <div className="mx-auto flex min-h-fit px-2 py-16 lg:container">
        <div
          className={backdropClassName}
          onClick={toggleMobileNavigation}
        ></div>
        <div className="sm:hidden">
          <Button
            className="fixed bottom-4 left-1/2 z-10 w-24 -translate-x-1/2 rounded-full shadow-2xl"
            onClick={toggleMobileNavigation}
            rounded
            size="small"
            variation="dark"
          >
            <MenuIcon className="mr-2" /> Menu
          </Button>
        </div>
        <VerticalNavigation
          className={navigationClassName}
          currentPath={currentPath}
          navItems={navigationItems}
          snippets={snippets}
        />{' '}
        <div className={`w-full pr-4 pl-12 sm:w-4/5 ${className}`}>
          {children}
        </div>
      </div>
      <Footer snippets={snippets} />
    </>
  );
}
