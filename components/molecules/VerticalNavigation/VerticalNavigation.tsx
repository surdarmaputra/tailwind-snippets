import Link from 'next/link';

import NavItem from 'components/atoms/NavItem';
import {
  NavItem as NavItemInterface,
  PageCategory,
  SnippetCategory,
} from 'core/type';

export interface VerticalNavigationProps extends React.HTMLProps<HTMLElement> {
  currentPath?: string;
  navItems?: NavItemInterface[];
  snippets: SnippetCategory[];
  pageSnippets: PageCategory[];
}

export default function VerticalNavigation({
  className,
  currentPath,
  navItems,
  onClick,
  snippets,
  pageSnippets,
}: VerticalNavigationProps) {
  return (
    <nav className={className}>
      <div className="mb-6 flex flex-col text-sm sm:hidden">
        {navItems?.map((navItem) => (
          <NavItem
            className="mb-2"
            currentPath={currentPath}
            href={navItem.href}
            key={navItem.href}
            onClick={onClick}
          >
            {navItem.title}
          </NavItem>
        ))}
      </div>
      {snippets.map((category) => (
        <div className="mb-6 flex flex-col text-sm" key={category.slug}>
          <Link href={category.href || '/'}>
            <a className="mt-2 mb-4 px-3 font-bold uppercase text-dark-900 dark:text-dark-50">
              {category.title}
            </a>
          </Link>
          {category.subCategories.map((subCategory) => (
            <NavItem
              className="mb-2"
              currentPath={currentPath}
              href={subCategory.href}
              key={subCategory.slug}
              onClick={onClick}
            >
              {subCategory.title}
            </NavItem>
          ))}
        </div>
      ))}
      {pageSnippets.length > 0 && (
        <div className="mb-6 flex flex-col text-sm">
          <Link href="/snippets/pages">
            <a className="mt-2 mb-4 px-3 font-bold uppercase text-dark-900 dark:text-dark-50">
              Pages
            </a>
          </Link>
          {pageSnippets.map((category) => (
            <NavItem
              className="mb-2"
              currentPath={currentPath}
              href={category.href}
              key={category.slug}
              onClick={onClick}
            >
              {category.title}
            </NavItem>
          ))}
        </div>
      )}
    </nav>
  );
}
