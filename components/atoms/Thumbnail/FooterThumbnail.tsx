import Placeholder from './Placeholder';

export default function FooterThumbnail() {
  return (
    <div className="relative h-16">
      <Placeholder className="mx-auto mb-1 h-0.5 w-2/5 dark:bg-slate-600" />
      <Placeholder className="mx-auto mb-1 h-0.5 w-3/5 dark:bg-slate-600" />
      <Placeholder className="mx-auto mb-6 h-0.5 w-1/5 dark:bg-slate-600" />
      <div className="flex h-9 justify-start space-x-4 rounded bg-slate-300 p-2 dark:bg-slate-500">
        <div className="relative flex flex-col space-y-0.5">
          <div className="h-2 w-4 rounded bg-slate-400 dark:bg-slate-600" />
          <div className="h-0.5 w-5 rounded bg-slate-400 dark:bg-slate-600" />
        </div>
        <div className="relative flex flex-col space-y-0.5">
          <div className="h-1 w-8 rounded bg-slate-400 dark:bg-slate-600" />
          <div className="h-0.5 w-8 rounded bg-slate-400 dark:bg-slate-600" />
          <div className="h-0.5 w-6 rounded bg-slate-400 dark:bg-slate-600" />
          <div className="h-0.5 w-7 rounded bg-slate-400 dark:bg-slate-600" />
        </div>
        <div className="relative flex flex-col space-y-0.5">
          <div className="h-1 w-8 rounded bg-slate-400 dark:bg-slate-600" />
          <div className="h-0.5 w-6 rounded bg-slate-400 dark:bg-slate-600" />
          <div className="h-0.5 w-8 rounded bg-slate-400 dark:bg-slate-600" />
          <div className="h-0.5 w-7 rounded bg-slate-400 dark:bg-slate-600" />
        </div>
        <div className="relative flex flex-col space-y-0.5">
          <div className="h-1 w-8 rounded bg-slate-400 dark:bg-slate-600" />
          <div className="h-0.5 w-8 rounded bg-slate-400 dark:bg-slate-600" />
          <div className="h-0.5 w-6 rounded bg-slate-400 dark:bg-slate-600" />
        </div>
      </div>
    </div>
  );
}
