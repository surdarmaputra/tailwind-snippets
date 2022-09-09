import ColorModeToggle from 'components/atoms/ColorModeToggle';
import HorizontalNavigation from 'components/molecules/HorizontalNavigation';
import { NavItem } from 'core/type';
import useCurrentPath from 'hooks/useCurrentPath';
import Link from 'next/link';
import { ColorModeContext } from 'providers/ColorModeProvider';
import { useContext } from 'react';

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
  navigationHidden?: boolean;
}

export default function Header({ navigationHidden }: HeaderProps) {
  const currentPath = useCurrentPath();
  const { dark, toggleColorMode } = useContext(ColorModeContext);

  return (
    <header className="mx-auto flex w-full items-center justify-between p-6 lg:container">
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
