import NavItem from 'components/atoms/NavItem';
import { NavItem as NavItemInterface, SnippetCategory } from 'core/type';

export interface VerticalNavigationProps extends React.HTMLProps<HTMLElement> {
  currentPath?: string;
  navItems?: NavItemInterface[];
  snippets: SnippetCategory[];
}

export default function VerticalNavigation({
  className,
  navItems,
  snippets,
  currentPath,
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
          >
            {navItem.title}
          </NavItem>
        ))}
      </div>
      {snippets.map((category) => (
        <div className="mb-6 flex flex-col text-sm" key={category.slug}>
          <div className="my-2 px-3 font-bold uppercase text-dark-900 dark:text-dark-50">
            {category.title}
          </div>
          {category.subCategories.map((subCategory) => (
            <NavItem
              className="mb-2"
              currentPath={currentPath}
              href={subCategory.href}
              key={subCategory.slug}
            >
              {subCategory.title}
            </NavItem>
          ))}
        </div>
      ))}
    </nav>
  );
}
