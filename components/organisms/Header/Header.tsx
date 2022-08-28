import HorizontalNavigation from 'components/molecules/HorizontalNavigation';
import { NavItem } from 'core/type';
import useCurrentPath from 'hooks/useCurrentPath';

const navigations: NavItem[] = [
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
    <header className="container mx-auto flex w-full items-center justify-between p-4">
      <div className="text-lg font-bold">
        <span className="text-primary-500">Tailwind</span> <span>Snippets</span>
      </div>
      <nav className="text-base">
        <HorizontalNavigation currentPath={currentPath} items={navigations} />
      </nav>
    </header>
  );
}
