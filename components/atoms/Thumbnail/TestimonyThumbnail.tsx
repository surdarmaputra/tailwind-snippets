import Placeholder from './Placeholder';

export default function TestimonyThumbnail() {
  return (
    <div className="flex h-full items-center justify-center space-x-1">
      <div className="rounded bg-slate-200 p-2 dark:bg-slate-400">
        <div className="mx-auto h-4 w-4 rounded-full bg-slate-300 dark:bg-slate-500" />
        <Placeholder className="mx-auto mt-2 h-0.5 w-1/2" />
        <Placeholder className="mx-auto mt-0.5 h-0.5 w-4/5" />
        <Placeholder className="mx-auto mt-0.5 h-0.5 w-3/5" />
      </div>
      <div className="rounded bg-slate-200 p-2 dark:bg-slate-400">
        <div className="mx-auto h-4 w-4 rounded-full bg-slate-300 dark:bg-slate-500" />
        <Placeholder className="mx-auto mt-2 h-0.5 w-1/2" />
        <Placeholder className="mx-auto mt-0.5 h-0.5 w-4/5" />
        <Placeholder className="mx-auto mt-0.5 h-0.5 w-3/5" />
      </div>
      <div className="rounded bg-slate-200 p-2 dark:bg-slate-400">
        <div className="mx-auto h-4 w-4 rounded-full bg-slate-300 dark:bg-slate-500" />
        <Placeholder className="mx-auto mt-2 h-0.5 w-1/2" />
        <Placeholder className="mx-auto mt-0.5 h-0.5 w-4/5" />
        <Placeholder className="mx-auto mt-0.5 h-0.5 w-3/5" />
      </div>
    </div>
  );
}
