import Placeholder from './Placeholder';

export default function HeaderThumbnail() {
  return (
    <div className="relative h-16">
      <div className="flex justify-between rounded bg-slate-200 p-1 dark:bg-slate-500">
        <div className="h-2 w-4 rounded bg-slate-400 dark:bg-slate-600" />
        <div className="relative flex space-x-1">
          <div className="h-2 w-5 rounded bg-slate-400 dark:bg-slate-600" />
          <div className="h-2 w-5 rounded bg-slate-300 dark:bg-slate-600" />
        </div>
      </div>
      <Placeholder className="mx-auto mt-6 h-0.5 w-2/5 dark:bg-slate-600" />
      <Placeholder className="mx-auto mt-1 h-0.5 w-3/5 bg-slate-200 dark:bg-slate-600" />
      <Placeholder className="mx-auto mt-1 h-0.5 w-1/5 bg-slate-200 dark:bg-slate-600" />
    </div>
  );
}
