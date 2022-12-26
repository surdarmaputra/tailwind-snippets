export default function TwoColumnsWithIllustration() {
  return (
    <section className="container mx-auto flex flex-col px-8 py-36 sm:flex-row-reverse sm:px-12">
      <img
        alt="Woman doing meditation"
        className="mb-8 w-full sm:mb-0 sm:ml-4 sm:w-1/2 dark:contrast-200"
        src="/illustrations/undraw_meditation_re_gll0.svg"
      />
      <div className="mr-4 w-full text-center sm:w-1/2 sm:text-left">
        <h1 className="mb-4 text-3xl font-bold leading-tight dark:text-dark-50 md:text-4xl">
          Train your mind,
          <br /> be peaceful
        </h1>
        <p className="mb-8 leading-relaxed text-slate-700 dark:text-slate-400">
          Our sanctuary is a good place to learn meditation, yoga and meet
          people with positive vibes.
        </p>
        <button className="rounded-lg border-0 bg-pink-400 px-12 py-2 text-base text-white shadow-lg shadow-pink-300 transition hover:bg-pink-500 hover:shadow-pink-400 dark:shadow-pink-900">
          Register now
        </button>
      </div>
    </section>
  );
}
