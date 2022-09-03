import HorizontalNavigation from 'components/molecules/HorizontalNavigation';
import { NavItem } from 'core/type';
import useCurrentPath from 'hooks/useCurrentPath';
import Link from 'next/link';

export const navigationItems: NavItem[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Snippets',
    href: '/snippets',
  },
];

export default function Header() {
  const currentPath = useCurrentPath();

  return (
    <header className="mx-auto flex w-full items-center justify-between p-4 px-6 lg:container">
      <div className="w-full text-center text-lg font-bold sm:w-fit sm:text-left">
        <Link href="/">
          <a className="no-underline">
            <span className="text-primary-500">Tailwind</span>{' '}
            <span>Snippets</span>
          </a>
        </Link>
      </div>
      <nav className="hidden text-base sm:block">
        <HorizontalNavigation
          currentPath={currentPath}
          items={navigationItems}
        />
      </nav>
    </header>
  );
}
