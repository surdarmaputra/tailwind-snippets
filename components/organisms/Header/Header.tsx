import { useContext } from 'react';
import Link from 'next/link';

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
      className={`z-30 mx-auto flex w-full items-center justify-between p-6 lg:container ${
        fixed ? 'fixed bg-white dark:bg-slate-900' : ''
      }`}
    >
      <div className="w-fit text-lg font-bold">
        <Link href="/">
          <a className="no-underline">
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
          className="ml-4"
          dark={dark}
          onChange={toggleColorMode}
        />
      </div>
    </header>
  );
}
