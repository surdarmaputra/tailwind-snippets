import { useContext } from 'react';
import Link from 'next/link';

import { trackEvent } from 'libs/analytics';
import { ElementId } from 'libs/analytics/types';

import ColorModeToggle from 'components/atoms/ColorModeToggle';
import HorizontalNavigation from 'components/molecules/HorizontalNavigation';
import { NavItem } from 'core/type';
import useCurrentPath from 'hooks/useCurrentPath';
import { ColorModeContext } from 'providers/ColorModeProvider';

export const navigationItems: NavItem[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Credits',
    href: '/credits',
  },
];

export interface HeaderProps {
  fixed?: boolean;
  navigationHidden?: boolean;
}

export default function Header({ fixed, navigationHidden }: HeaderProps) {
  const currentPath = useCurrentPath();
  const { dark, toggleColorMode } = useContext(ColorModeContext);

  return (
    <header
      className={`z-30 mx-auto flex w-full items-center justify-between bg-slate-50 px-6 py-7 dark:bg-dark-900 lg:container ${
        fixed ? 'fixed left-1/2 -translate-x-1/2' : ''
      }`}
    >
      <div className="w-fit text-lg font-bold">
        <Link href="/">
          <a
            className="no-underline"
            onClick={() =>
              trackEvent({
                name: 'element_click',
                element_id: ElementId.BtnHeaderLogo,
              })
            }
          >
            <span className="text-primary-500">Tailwind</span>{' '}
            <span>Snippets</span>
          </a>
        </Link>
      </div>
      <div className="flex items-center">
        {!navigationHidden && (
          <nav className="hidden text-base sm:block">
            <HorizontalNavigation
              currentPath={currentPath}
              items={navigationItems}
            />
          </nav>
        )}
        <ColorModeToggle
          className="ml-6"
          dark={dark}
          onChange={toggleColorMode}
        />
      </div>
    </header>
  );
}
