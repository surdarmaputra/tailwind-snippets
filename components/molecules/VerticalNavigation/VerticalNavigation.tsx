import NavItem from 'components/atoms/NavItem';
import { SnippetCategory } from 'core/type';

export interface VerticalNavigationProps extends React.HTMLProps<HTMLElement> {
  currentPath?: string;
  snippets: SnippetCategory[];
}

export default function VerticalNavigation({
  className,
  snippets,
  currentPath,
}: VerticalNavigationProps) {
  return (
    <nav className={className}>
      {snippets.map((category) => (
        <div className="mb-6 flex flex-col text-sm" key={category.slug}>
          <div className="my-2 pl-3 font-bold uppercase text-dark-900">
            {category.title}
          </div>
          {category.subCategories.map((subCategory) => (
            <NavItem
              currentPath={currentPath}
              href={`/snippets/${category.slug}/${subCategory.slug}`}
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
