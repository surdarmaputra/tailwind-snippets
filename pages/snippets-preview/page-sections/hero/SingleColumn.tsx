export default function SingleColumn() {
  return (
    <section className="container mx-auto px-8 py-36 text-center sm:px-12">
      <h1 className="mb-12 text-5xl font-extrabold leading-tight dark:text-slate-50 sm:text-6xl">
        Get funding for your business growth
      </h1>
      <p className="mb-12 leading-relaxed text-slate-700 dark:text-slate-400">
        UniqueFund provides access to fast and reliable financing solutions for
        SMEs. We have partnership with trusted loan providers with wide range of
        options.
      </p>
      <div className="mx-auto flex w-fit flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
        <button className="rounded-md border-0 bg-violet-500 px-12 py-2 text-base text-white shadow-lg shadow-violet-300 transition hover:bg-violet-600 hover:shadow-violet-400 dark:shadow-violet-900">
          Register now
        </button>
        <button className="rounded-md border-0 bg-slate-100 px-12 py-2 text-base text-dark-900 shadow-lg shadow-slate-100 transition hover:bg-white hover:shadow-slate-200 dark:shadow-slate-600">
          Learn more
        </button>
      </div>
    </section>
  );
}
