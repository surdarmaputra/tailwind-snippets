import Placeholder from './Placeholder';

export default function HeroThumbnail() {
  return (
    <div className="flex space-x-4">
      <div className="w-1/2">
        <Placeholder className="mb-1 h-2 w-2/3 bg-slate-200" />
        <Placeholder className="mb-4 h-2 w-full bg-slate-200" />
        <Placeholder className="mb-3 h-1 w-4/5 bg-slate-200" />
        <div className="flex space-x-1">
          <Placeholder className="h-3 w-10" />
          <Placeholder className="h-3 w-10 bg-slate-200" />
        </div>
      </div>
      <Placeholder className="h-16 w-1/2 bg-slate-200" />
    </div>
  );
}
