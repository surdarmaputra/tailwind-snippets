import { SnippetCategory } from 'core/type';
import Link from 'next/link';

export interface SideNavigationProps extends React.HTMLProps<HTMLElement> {
  snippets: SnippetCategory[];
}

export default function SideNavigation({
  className,
  snippets,
}: SideNavigationProps) {
  return (
    <nav className={className}>
      {snippets.map((category) => (
        <div className="mb-6 flex flex-col text-sm" key={category.slug}>
          <div className="my-2 pl-3 font-bold uppercase text-dark-900">
            {category.title}
          </div>
          {category.subCategories.map((subCategory) => (
            <Link
              href={`/snippets/${category.slug}/${subCategory.slug}`}
              key={subCategory.slug}
            >
              <a className="rounded-md px-3 py-2 font-light text-dark-800 no-underline hover:bg-dark-50 hover:text-dark-900">
                {subCategory.title}
              </a>
            </Link>
          ))}
        </div>
      ))}
    </nav>
  );
}
