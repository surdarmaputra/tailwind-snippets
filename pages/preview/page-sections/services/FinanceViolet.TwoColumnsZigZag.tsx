import ArrowNarrowRightIcon from '~icons/tabler/arrow-narrow-right.tsx';

interface Service {
  imageUrl: string;
  title: string;
  description: string;
  href?: string;
  actionText?: string;
}

const services: Service[] = [
  {
    imageUrl: '/illustrations/undraw_security_on_re_e491.svg',
    title: 'Trusted and secured',
    description:
      'Each transaction is guarded by advanced and certified security system.',
    href: '#',
    actionText: 'View certifications',
  },
  {
    imageUrl: '/illustrations/undraw_fingerprint_re_uf3f.svg',
    title: 'Multi layer security',
    description:
      'Support fingerprint and face recognition for any transaction. More options coming soon.',
    href: '#',
    actionText: 'Supported authentication',
  },
  {
    imageUrl: '/illustrations/undraw_all_the_data_re_hh4w.svg',
    title: 'Meaningful insight',
    description:
      'Visualize transactions with multiple chart option to get insight as you need.',
  },
];

export default function TwoColumnsZigZag() {
  return (
    <>
      {services.map(
        ({ imageUrl, title, description, href, actionText }, index) => (
          <section
            className={`container mx-auto flex flex-col items-center px-12 py-28 ${
              index % 2 ? 'sm:flex-row-reverse' : 'sm:flex-row'
            }`}
            key={index}
          >
            <img
              alt="Security"
              className={`mb-10 h-24 w-full pr-16 pl-16 dark:contrast-200 dark:invert sm:mb-0 sm:h-fit sm:w-1/2 ${
                index % 2 ? 'sm:pl-24 sm:pr-0' : 'sm:pr-24 sm:pl-0'
              }`}
              src={imageUrl}
            />
            <div className="mr-4 w-full text-center sm:w-1/2 sm:text-left">
              <h2 className="mb-4 text-3xl font-bold leading-tight dark:text-slate-50 md:text-4xl">
                {title}
              </h2>
              <p className="leading-relaxed text-slate-700 dark:text-slate-400">
                {description}
              </p>
              {href && (
                <a
                  className="group relative mx-auto mt-8 inline-block font-semibold text-slate-900 underline decoration-violet-300 decoration-2 underline-offset-8 transition hover:decoration-slate-900 dark:text-slate-200 dark:hover:decoration-slate-200 sm:mx-0"
                  href={href}
                >
                  {actionText}{' '}
                  <ArrowNarrowRightIcon className="absolute bottom-0 -right-6 scale-x-0 transition group-hover:scale-x-100" />
                </a>
              )}
            </div>
          </section>
        ),
      )}
    </>
  );
}
