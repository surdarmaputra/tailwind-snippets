import ArrowNarrowRightIcon from '~icons/tabler/arrow-narrow-right';

interface Service {
  imageUrl: string;
  title: string;
  description: string;
  href?: string;
}

const services: Service[] = [
  {
    imageUrl: '/illustrations/undraw_security_on_re_e491.svg',
    title: 'Trusted and secured',
    description:
      'Each transaction is guarded by advanced and certified security system.',
    href: '#',
  },
  {
    imageUrl: '/illustrations/undraw_fingerprint_re_uf3f.svg',
    title: 'Multi layer security',
    description:
      'Support fingerprint and face recognition for any transaction. More options coming soon.',
    href: '#',
  },
  {
    imageUrl: '/illustrations/undraw_all_the_data_re_hh4w.svg',
    title: 'Meaningful insight',
    description:
      'Visualize transactions with multiple chart option to get insight as you need.',
  },
];

export default function ThreeColumns() {
  return (
    <>
      <section className="container mx-auto px-12 py-28">
        <h1 className="mb-24 w-full text-center text-4xl font-extrabold sm:mb-20 sm:w-4/5 sm:text-left">
          <span className="text-violet-500">Best services</span> for business
          and personal usage
        </h1>
        <div className="flex flex-col space-y-24 sm:flex-row sm:space-y-0 sm:space-x-4 ">
          {services.map(({ imageUrl, title, description, href }, index) => (
            <div
              className="flex w-full flex-col justify-between sm:mb-0 sm:w-1/3"
              key={index}
            >
              <div className="w-full text-center sm:text-left">
                <img
                  alt={title}
                  className="mx-auto mb-4 h-16 sm:mx-0"
                  src={imageUrl}
                />
                <h2 className="mb-2 text-xl font-bold leading-tight md:text-xl">
                  {title}
                </h2>
                <p className="mb-4 leading-relaxed text-slate-700">
                  {description}
                </p>
              </div>
              {href && (
                <div className="text-center sm:text-left">
                  <a
                    className="group relative mx-auto inline-block text-sm font-semibold text-slate-900 underline decoration-violet-300 decoration-2 underline-offset-2 transition hover:decoration-slate-900 sm:m-0"
                    href={href}
                  >
                    Read more{' '}
                    <ArrowNarrowRightIcon className="absolute bottom-0 -right-6 scale-x-0 transition group-hover:scale-x-100" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
