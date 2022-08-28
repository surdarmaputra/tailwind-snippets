import SideNavigation from 'components/molecules/SideNavigation';
import { SnippetCategory } from 'core/type';

export interface SnippetsExplorerLayoutProps
  extends React.HTMLProps<HTMLDivElement> {
  snippets: SnippetCategory[];
}

export default function SnippetsExplorerLayout({
  children,
  className = '',
  snippets,
}: SnippetsExplorerLayoutProps) {
  return (
    <div className="flex">
      <SideNavigation className="ml-2 mr-4 w-1/4" snippets={snippets} />{' '}
      <div className={`w-full ${className}`}>{children}</div>
    </div>
  );
}
