import Link from 'next/link';

import { SnippetCategory } from 'core/type';

const supportsLinks = [
  {
    title: 'Credits',
    href: '/credits',
  },
  {
    title: 'GitHub',
    href: 'https://github.com/surdarmaputra/tailwind-snippets',
  },
];

const referencesLinks = [
  {
    title: 'Tailwind CSS Website',
    href: 'https://tailwindcss.com',
  },
  {
    title: 'React Website',
    href: 'https://reactjs.org/',
  },
  {
    title: 'TypeScript Website',
    href: 'https://www.typescriptlang.org/',
  },
];

function Logo() {
  return (
    <div className="w-full text-lg font-extrabold md:w-fit md:text-left">
      <span className="text-primary-500">Tailwind</span> <span>Snippets</span>
    </div>
  );
}

export interface FooterProps {
  snippets: SnippetCategory[];
}

export default function Footer({ snippets }: FooterProps) {
  return (
    <footer className="mt-10 bg-slate-100 dark:bg-black">
      <div className="mx-auto p-6 pt-8 lg:container">
        <div className="flex flex-col items-start space-y-12 pb-8 md:flex-row md:space-y-0 md:space-x-12">
          <div className="flex w-full flex-col space-y-4 text-center md:w-2/5 md:text-left">
            <Logo />
            <p className="text-sm text-slate-600">
              A collection of UI templates to speed up your UI development using
              React and Tailwind CSS.
            </p>
          </div>
          <div className="w-full text-center text-slate-600 md:w-1/5 md:text-left">
            <div className="text-sm font-semibold">Explore Templates</div>
            <ul className="text-sm">
              <li className="pt-3">
                <Link href="/snippets">
                  <a className="underline decoration-transparent underline-offset-4 transition hover:decoration-slate-900">
                    All templates
                  </a>
                </Link>
              </li>
              {snippets.map(({ title, href }, index) => (
                <li className="pt-3" key={index}>
                  <Link href={href || '/'}>
                    <a className="underline decoration-transparent underline-offset-4 transition hover:decoration-slate-900">
                      {title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full text-center text-slate-600 md:w-1/5 md:text-left">
            <div className="text-sm font-semibold text-slate-600">
              References
            </div>
            <ul className="text-sm">
              {referencesLinks.map(({ title, href }, index) => (
                <li className="pt-3" key={index}>
                  <a
                    className="underline decoration-transparent underline-offset-4 transition hover:decoration-slate-900"
                    href={href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full text-center text-slate-600 md:w-1/5 md:text-left">
            <div className="text-sm font-semibold">Supports</div>
            <ul className="text-sm">
              {supportsLinks.map(({ title, href }, index) => (
                <li className="pt-3" key={index}>
                  <a
                    className="underline decoration-transparent underline-offset-4 transition hover:decoration-slate-900"
                    href={href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-6 text-center text-sm text-slate-600 dark:border-slate-900 md:flex-row">
          &copy; 2023 Tailwind Snippets.
        </div>
      </div>
    </footer>
  );
}
