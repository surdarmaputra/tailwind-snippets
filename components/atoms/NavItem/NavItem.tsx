import Link from 'next/link';

interface NavItemProps extends React.HTMLProps<HTMLLinkElement> {
  currentPath?: string;
}

export default function NavItem({ children, currentPath, href }: NavItemProps) {
  return (
    <Link href={href || '/'}>
      <a
        className={`
        rounded-md px-3 py-2 font-light text-dark-800 no-underline hover:bg-dark-100 hover:text-dark-900
        ${currentPath === href ? 'bg-dark-100' : ''}
      `}
      >
        {children}
      </a>
    </Link>
  );
}
