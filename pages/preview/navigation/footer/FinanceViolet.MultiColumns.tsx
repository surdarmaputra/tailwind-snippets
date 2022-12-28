const companyLinks = [
  {
    title: 'About',
    href: '#',
  },
  {
    title: 'Terms of Service',
    href: '#',
  },
  {
    title: 'Privacy Policy',
    href: '#',
  },
  {
    title: 'Cookie Policy',
    href: '#',
  },
];

const solutionLinks = [
  {
    title: 'Business Line of Credit',
    href: '#',
  },
  {
    title: 'SBA Loan',
    href: '#',
  },
  {
    title: 'Revenue Based Financing',
    href: '#',
  },
  {
    title: 'Invoice Factoring',
    href: '#',
  },
];

const partnershipLinks = [
  {
    title: 'Loan Partner',
    href: '#',
  },
  {
    title: 'Affiliate',
    href: '#',
  },
  {
    title: 'Brand Guideline',
    href: '#',
  },
];

function Logo() {
  return (
    <div className="w-full text-center text-lg font-extrabold sm:w-fit sm:text-left">
      <span className="text-violet-500">Unique</span>{' '}
      <span className="dark:text-slate-100">Fund</span>
    </div>
  );
}

export default function MultiColumns() {
  return (
    <footer className="mt-28 bg-slate-50">
      <div className="container mx-auto flex flex-col items-start px-8 pb-8 pt-12 sm:flex-row sm:space-x-12 sm:px-12">
        <div className="flex w-1/4 flex-col space-y-4">
          <Logo />
          <p className="text-sm text-slate-600">
            UniqueFund provides access to fast and reliable financing solutions
            for SMEs.
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold">Company</div>
          <ul className="text-sm text-slate-600">
            {companyLinks.map(({ title, href }, index) => (
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
        <div>
          <div className="text-sm font-semibold">Solutions</div>
          <ul className="text-sm text-slate-600">
            {solutionLinks.map(({ title, href }, index) => (
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
        <div>
          <div className="text-sm font-semibold">Partnership</div>
          <ul className="text-sm text-slate-600">
            {partnershipLinks.map(({ title, href }, index) => (
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

      <div className="container mx-auto border-t border-slate-200 p-8 text-center text-sm text-slate-600 sm:flex-row sm:px-12">
        &copy; {new Date().getFullYear()} UniqueFund. All rights reserved.
      </div>
    </footer>
  );
}
