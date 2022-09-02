import classNames from 'classnames';
import Button from 'components/atoms/Button';
import VerticalNavigation from 'components/molecules/VerticalNavigation';
import Footer from 'components/organisms/Footer/Footer';
import Header from 'components/organisms/Header';
import { navigationItems } from 'components/organisms/Header/Header';
import { SnippetCategory } from 'core/type';
import useCurrentPath from 'hooks/useCurrentPath';
import { useState } from 'react';

import MenuIcon from '~icons/tabler/menu-2';

export interface SnippetsExplorerLayoutProps
  extends React.HTMLProps<HTMLDivElement> {
  snippets: SnippetCategory[];
}

export default function SnippetsExplorerLayout({
  children,
  className = '',
  snippets,
}: SnippetsExplorerLayoutProps) {
  const [mobileNavigationOpened, setMobileNavigationOpened] = useState(false);
  const currentPath = useCurrentPath();

  const navigationClassName = classNames({
    'transition-all fixed top-0 bottom-0 z-20 w-3/4 bg-white py-6 pr-4 pl-4 sm:relative sm:w-1/4 sm:py-0 sm:pl-1':
      true,
    '-left-3/4 sm:left-0': !mobileNavigationOpened,
    'left-0': mobileNavigationOpened,
  });

  const backdropClassName = classNames({
    'transition-all fixed top-0 bottom-0 right-0 z-10 bg-dark-900 opacity-75 sm:hidden':
      true,
    'w-full': mobileNavigationOpened,
  });

  const toggleMobileNavigation = () =>
    setMobileNavigationOpened(!mobileNavigationOpened);

  return (
    <>
      <Header />
      <div className="container mx-auto flex min-h-fit px-2 py-12">
        <div className="sm:hidden">
          <Button
            className="fixed bottom-4 left-1/2 -translate-x-1/2"
            onClick={toggleMobileNavigation}
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
        <div
          className={backdropClassName}
          onClick={toggleMobileNavigation}
        ></div>
        <div className={`pl-4 pr-4 sm:w-3/4 sm:pr-8 ${className}`}>
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
}
