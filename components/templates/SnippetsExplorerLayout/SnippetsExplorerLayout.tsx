import VerticalNavigation from 'components/molecules/VerticalNavigation';
import Footer from 'components/organisms/Footer/Footer';
import Header from 'components/organisms/Header';
import { SnippetCategory } from 'core/type';
import useCurrentPath from 'hooks/useCurrentPath';

export interface SnippetsExplorerLayoutProps
  extends React.HTMLProps<HTMLDivElement> {
  snippets: SnippetCategory[];
}

export default function SnippetsExplorerLayout({
  children,
  className = '',
  snippets,
}: SnippetsExplorerLayoutProps) {
  const currentPath = useCurrentPath();

  return (
    <>
      <Header />
      <div className="container mx-auto flex min-h-fit py-12">
        <VerticalNavigation
          className="ml-1 mr-4 w-1/4"
          currentPath={currentPath}
          snippets={snippets}
        />{' '}
        <div className={`w-full pl-4 pr-8 ${className}`}>{children}</div>
      </div>
      <Footer />
    </>
  );
}
