export enum ButtonVariation {
  primary = 'primary',
  light = 'light',
}

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  variation?: `${ButtonVariation}`;
}

const backgroundClassNames = {
  [ButtonVariation.primary]:
    'bg-violet-500 shadow-violet-300 hover:shadow-violet-400 hover:bg-violet-600 text-white',
  [ButtonVariation.light]:
    'bg-white shadow-slate-100 hover:shadow-slate-200 text-dark-900',
};

function Button({
  children,
  variation = ButtonVariation.primary,
}: ButtonProps) {
  const className = `
    transition px-12 py-2 text-base rounded-md border-0 shadow-lg
    ${backgroundClassNames[variation]}
  `;
  return <button className={className}>{children}</button>;
}

export default function SingleColumnHeroWithBlurredColors() {
  return (
    <section className="container mx-auto px-8 py-36 text-center sm:px-12">
      <div className="absolute left-0 top-64 -z-10 h-72 w-72 rounded-full bg-violet-500 opacity-10 blur-3xl"></div>
      <div className="absolute right-0 top-24 -z-10 h-72 w-72 rounded-full bg-danger-500 opacity-10 blur-3xl"></div>

      <h1 className="mb-12 text-4xl leading-tight sm:text-6xl">
        Get funding for your business growth
      </h1>
      <p className="mb-12 leading-relaxed text-slate-700">
        UniqueFund provides access to fast and reliable financing solutions for
        SMEs. We have partnership with trusted loan providers with wide range of
        options.
      </p>
      <div className="mx-auto flex w-fit flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
        <Button>Register now</Button>
        <Button variation="light">Learn more</Button>
      </div>
    </section>
  );
}
