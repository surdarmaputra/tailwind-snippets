export default function Placeholder({
  className,
}: React.HTMLProps<HTMLDivElement>) {
  return (
    <div
      className={`rounded bg-slate-300 dark:bg-slate-500  ${className}`}
    ></div>
  );
}
