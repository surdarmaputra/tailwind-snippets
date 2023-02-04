import Link from 'next/link';

export interface NavItemProps extends React.HTMLProps<HTMLAnchorElement> {
  currentPath?: string;
}

export default function NavItem({
  children,
  className,
  currentPath,
  href,
  onClick,
}: NavItemProps) {
  return (
    <Link href={href || '/'}>
      <a
        className={`
        rounded-full px-3 py-2 font-light text-dark-800 no-underline hover:bg-dark-100 hover:text-dark-900 dark:text-dark-300 dark:hover:bg-dark-800 dark:hover:text-dark-100
        ${currentPath === href ? 'bg-dark-100 dark:bg-dark-800' : ''}
        ${className}
      `}
        onClick={onClick}
      >
        {children}
      </a>
    </Link>
  );
}
