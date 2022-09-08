import CheckIcon from '~icons/tabler/check.tsx';

const benefits: string[] = [
  'Various types of coffee beans',
  'Coworking area',
  'Meeting room',
];

export default function TwoColumnsWithImage() {
  return (
    <section className="container mx-auto flex flex-col items-center px-8 py-36 sm:flex-row-reverse sm:px-12">
      <div className="mb-8 w-full sm:mb-0 sm:w-1/2 sm:pl-4 md:pl-16">
        <img
          alt="Woman doing meditation"
          className="rounded-lg sm:rounded-br-[80px] sm:rounded-tl-[120px]"
          src="/images/pexels-ketut-subiyanto-4353618.jpg"
        />
      </div>
      <div className="mr-4 w-full text-center sm:w-1/2 sm:text-left">
        <h1 className="mb-6 text-3xl font-bold leading-tight md:text-4xl">
          Hangout, work or just relax? Got it!
        </h1>
        <p className="mb-2 leading-relaxed text-slate-700">
          We provide indoor & outdoor space with delighted yet affordable foods
          & beverages.
        </p>
        <ul className="mb-8 flex flex-col items-center space-y-1 sm:items-start">
          {benefits.map((benefit, index) => (
            <li className="flex items-end" key={index}>
              <CheckIcon className="mr-2 text-orange-300" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-col space-y-3 md:flex-row md:space-x-2 md:space-y-0">
          <button className="rounded-lg border-0 bg-slate-900 px-6 py-3 text-base text-white shadow-lg shadow-slate-300 transition hover:bg-orange-300 hover:text-slate-900 hover:shadow-orange-300 sm:py-2">
            Open menu
          </button>
          <button className="rounded-lg border-0 bg-white px-6 py-3 text-base text-slate-900 shadow-lg shadow-slate-100 transition hover:bg-orange-300 hover:text-slate-900 hover:shadow-orange-300 sm:py-2">
            Explore services
          </button>
        </div>
      </div>
    </section>
  );
}
