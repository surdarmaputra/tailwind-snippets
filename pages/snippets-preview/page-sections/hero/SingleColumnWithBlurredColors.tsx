export default function SingleColumnWithBlurredColors() {
  return (
    <section className="container mx-auto px-8 py-36 text-center sm:px-12">
      <div className="absolute left-0 top-64 -z-10 h-72 w-72 rounded-full bg-violet-500 opacity-10 blur-3xl"></div>
      <div className="absolute right-0 top-24 -z-10 h-72 w-72 rounded-full bg-danger-500 opacity-10 blur-3xl"></div>

      <h1 className="mb-12 text-4xl font-bold leading-tight sm:text-6xl">
        Get funding for your business growth
      </h1>
      <p className="mb-12 leading-relaxed text-slate-700">
        UniqueFund provides access to fast and reliable financing solutions for
        SMEs. We have partnership with trusted loan providers with wide range of
        options.
      </p>
      <div className="mx-auto flex w-fit flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
        <button className="rounded-md border-0 bg-violet-500 px-12 py-2 text-base text-white shadow-lg shadow-violet-300 transition hover:bg-violet-600 hover:shadow-violet-400">
          Register now
        </button>
        <button className="rounded-md border-0 bg-white px-12 py-2 text-base text-dark-900 shadow-lg shadow-slate-100 transition hover:shadow-slate-200">
          Learn more
        </button>
      </div>
    </section>
  );
}
