import { useState } from 'react';

import ArrowNarrowRightIcon from '~icons/tabler/arrow-narrow-right.tsx';
import MenuIcon from '~icons/tabler/menu-2.tsx';

/** Links */
interface NavLink {
  title: string;
  href: string;
  children?: NavLink[];
}

const links: NavLink[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Services',
    href: '#',
    children: [
      {
        title: 'Web development',
        href: '/services/web-development',
      },
      {
        title: 'Digital marketing',
        href: '/services/digital-marketing',
      },
      {
        title: 'Brand strategy',
        href: '/services/brand-strategy',
      },
    ],
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
];

/** Logo */
function Logo() {
  return (
    <div className="w-full text-center text-lg font-bold sm:w-fit sm:text-left">
      <span className="text-primary-500">Tailwind</span> <span>Snippets</span>
    </div>
  );
}

/** NavLink */
interface NavLinkProps extends React.HTMLProps<HTMLLinkElement> {
  currentPath?: string;
}

function NavLink({ children, className, currentPath, href }: NavLinkProps) {
  return (
    <a
      className={`
        block whitespace-nowrap px-3 py-2 text-sm font-semibold no-underline transition hover:text-slate-900
        ${currentPath === href ? 'text-slate-900' : 'text-slate-400'}
        ${className}
      `}
      href={href}
    >
      {children}
    </a>
  );
}

/** Navigation */
interface NavigationProps {
  mobile?: boolean;
  navLinks?: NavLink[];
}

function Navigation({ mobile = false, navLinks = [] }: NavigationProps) {
  const [mobileNavigationOpened, setMobileNavigationOpened] = useState(false);

  const navClassName = `
    bg-white text-base
    ${
      mobile
        ? `transition transform -right-1/3 fixed top-0 z-20 h-full w-1/3 overflow-y-auto py-4 sm:hidden ${
            mobileNavigationOpened ? '-translate-x-full shadow-2xl' : ''
          }`
        : 'hidden sm:block'
    }
  `;
  const navListClassName = `
    flex
    ${mobile ? 'flex-col space-y-2' : 'items-center space-x-2'}
  `;
  const navListItemClassName = `
    group relative
    ${mobile ? 'w-full overflow-x-visible text-right' : ''}
  `;
  const navListLinkClassName = mobile ? 'mx-4' : '';
  const navChildrenClassName = `
    delay-75 ease-in-out space-y-2 
    ${
      mobile
        ? 'h-0 overflow-y-hidden bg-slate-50 px-4 py-0 transition-all group-hover:h-full group-hover:py-4'
        : 'invisible absolute z-30 rounded-lg border border-slate-50 bg-white p-4 opacity-0 shadow-xl transition-opacity group-hover:visible group-hover:opacity-100'
    }
  `;

  const closeMobileNavigation = () => setMobileNavigationOpened(false);

  return (
    <>
      {mobile && (
        <button
          className="block text-slate-400 hover:text-slate-900 sm:hidden"
          onClick={() => setMobileNavigationOpened(true)}
          title="Open navigation menu"
        >
          <MenuIcon />
        </button>
      )}

      {mobile && mobileNavigationOpened && (
        <div
          className="fixed top-0 right-0 z-10 h-full w-full bg-slate-900 opacity-70 sm:hidden"
          onClick={closeMobileNavigation}
        ></div>
      )}

      <nav className={navClassName}>
        <ul className={navListClassName}>
          {mobile && (
            <li className="text-right">
              <button
                className="px-6 py-2 text-slate-400 hover:text-slate-900"
                onClick={closeMobileNavigation}
              >
                <ArrowNarrowRightIcon />
              </button>
            </li>
          )}
          {navLinks.map(({ title, href, children }) => (
            <li className={navListItemClassName} key={href}>
              <NavLink
                className={navListLinkClassName}
                currentPath="/contact"
                href={href}
              >
                {title}
              </NavLink>
              {!!children?.length && (
                <ul className={navChildrenClassName}>
                  {children.map((child) => (
                    <li key={child.href}>
                      <NavLink href={child.href}>{child.title}</NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

/** Header */
interface HeaderProps {
  navLinks?: NavLink[];
}

function Header({ navLinks = [] }: HeaderProps) {
  return (
    <header className="container mx-auto flex w-full items-center justify-between py-4 px-6 sm:px-0">
      <a href="#">
        <Logo />
      </a>
      <Navigation navLinks={navLinks} />
      <Navigation mobile navLinks={navLinks} />
    </header>
  );
}

/** Page */
export default function RightNavigation() {
  return (
    <div className="h-64">
      <Header navLinks={links} />
      <p className="container mx-auto px-6 py-8 sm:px-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id varius
        turpis. Nullam ut tincidunt tellus. Nunc fermentum odio vitae turpis
        fermentum vulputate. Morbi vel malesuada felis. Fusce vestibulum nibh id
        erat volutpat ullamcorper vitae sed neque. Curabitur vel lobortis metus,
        at mollis turpis.
      </p>
    </div>
  );
}
