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
    <div className="w-full text-lg font-extrabold md:w-fit md:text-left">
      <span className="text-violet-500">Unique</span>{' '}
      <span className="dark:text-slate-400">Fund</span>
    </div>
  );
}

export default function MultiColumns() {
  return (
    <footer className="mt-28 bg-slate-50 dark:bg-black">
      <div className="container mx-auto flex flex-col items-start space-y-12 px-8 pb-8 pt-12 md:flex-row md:space-y-0 md:space-x-12 md:px-12">
        <div className="flex w-full flex-col space-y-4 text-center md:w-2/5 md:text-left">
          <Logo />
          <p className="text-sm text-slate-600">
            UniqueFund provides access to fast and reliable financing solutions
            for SMEs.
          </p>
        </div>
        <div className="w-full text-center text-slate-600 md:w-1/5 md:text-left">
          <div className="text-sm font-semibold">Company</div>
          <ul className="text-sm">
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
        <div className="w-full text-center text-slate-600 md:w-1/5 md:text-left">
          <div className="text-sm font-semibold">Solutions</div>
          <ul className="text-sm">
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
        <div className="w-full text-center text-slate-600 md:w-1/5 md:text-left">
          <div className="text-sm font-semibold text-slate-600">
            Partnership
          </div>
          <ul className="text-sm">
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

      <div className="container mx-auto border-t border-slate-200 p-8 text-center text-sm text-slate-600 dark:border-slate-900 md:flex-row md:px-12">
        &copy; {new Date().getFullYear()} UniqueFund. All rights reserved.
      </div>
    </footer>
  );
}
