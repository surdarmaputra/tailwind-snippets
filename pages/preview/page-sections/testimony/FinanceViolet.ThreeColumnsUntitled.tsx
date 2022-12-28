const testimony = [
  {
    name: 'John Doe',
    company: 'Crispy Creamy Crepes',
    message:
      'They helped me to quickly and easily compare my options, and I was able to secure the financing I needed to grow my business.',
  },
  {
    name: 'Peter Smith',
    company: 'Chick Chicken',
    message:
      'This team was knowledgeable and helpful, walking me through the process and finding a financing solution that fit my business perfectly.',
  },
  {
    name: 'Jane Brown',
    company: 'Pizzy Pizza',
    message:
      'Thanks to their guidance, I was able to secure the financing I needed to get my business off the ground.',
  },
];

export default function ThreeColumnsUntitled() {
  return (
    <section className="container mx-auto px-12 py-28">
      <h1 className="mb-24 w-full text-center text-4xl font-extrabold dark:text-slate-50 md:mx-auto md:mb-24 md:w-4/5">
        Our <span className="text-violet-500">happy customers</span>
      </h1>
      <div className="flex flex-col space-y-6 md:flex-row md:space-y-0">
        {testimony.map(({ name, company, message }, index) => (
          <div
            className={`
              flex w-full flex-col justify-between rounded-lg bg-white py-8 px-6 text-center text-slate-800 shadow-lg shadow-slate-200 transition dark:bg-slate-800 dark:shadow-slate-800
              ${index === 1 ? 'z-10 md:scale-y-110 md:scale-x-110' : ''}
            `}
            key={index}
          >
            <div className="w-full text-center text-sm">
              <img
                alt="Hanging out with friends"
                className="mx-auto mb-8 h-20 w-20"
                src="/images/avatar-1.png"
              />
              <p className="mb-6 leading-relaxed text-slate-500 dark:text-slate-400">
                {message}
              </p>
              <div className="font-semibold text-slate-600">{name}</div>
              <div className="text-xs text-slate-400">{company}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
