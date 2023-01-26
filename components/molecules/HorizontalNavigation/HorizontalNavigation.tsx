import NavItem from 'components/atoms/NavItem';
import { NavItem as NavItemInterface } from 'core/type';

export interface HorizontalNavigationProps
  extends React.HTMLProps<HTMLElement> {
  currentPath?: string;
  items: NavItemInterface[];
}

export default function HorizontalNavigation({
  className,
  items,
  currentPath,
}: HorizontalNavigationProps) {
  return (
    <nav className={`flex space-x-3 ${className}`}>
      {items.map((navItem) => (
        <NavItem
          currentPath={currentPath}
          href={navItem.href}
          key={navItem.href}
        >
          {navItem.title}
        </NavItem>
      ))}
    </nav>
  );
}
