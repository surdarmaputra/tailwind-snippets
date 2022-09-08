import Link from 'next/link';

export interface NavItemProps extends React.HTMLProps<HTMLLinkElement> {
  currentPath?: string;
}

export default function NavItem({
  children,
  className,
  currentPath,
  href,
}: NavItemProps) {
  return (
    <Link href={href || '/'}>
      <a
        className={`
        rounded-md px-3 py-2 font-light text-dark-800 no-underline hover:bg-dark-100 hover:text-dark-900 dark:text-dark-300 dark:hover:bg-dark-900 dark:hover:text-dark-100
        ${currentPath === href ? 'bg-dark-100 dark:bg-dark-900' : ''}
        ${className}
      `}
      >
        {children}
      </a>
    </Link>
  );
}
