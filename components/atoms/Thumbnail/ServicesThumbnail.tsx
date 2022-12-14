import Placeholder from './Placeholder';

export default function ServicesThumbnail() {
  return (
    <div className="flex space-x-3">
      <div className="w-1/3">
        <Placeholder className="h-12 w-full" />
        <Placeholder className="ml-0.5 mt-2 h-1 w-1/2" />
      </div>
      <div className="w-1/3">
        <Placeholder className="h-12 w-full" />
        <Placeholder className="ml-0.5 mt-2 h-1 w-2/3" />
      </div>
      <div className="w-1/3">
        <Placeholder className="h-12 w-full" />
        <Placeholder className="ml-0.5 mt-2 h-1 w-3/5" />
      </div>
    </div>
  );
}
