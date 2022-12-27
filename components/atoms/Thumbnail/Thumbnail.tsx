import { ReactNode } from 'react';

import HeaderThumbnail from './HeaderThumbnail';
import HeroThumbnail from './HeroThumbnail';
import ServicesThumbnail from './ServicesThumbnail';

export enum ThumbnailName {
  header = 'header',
  hero = 'hero',
  benefits = 'benefits',
}

export interface ThumbnailProps extends React.HTMLProps<HTMLDivElement> {
  name: string;
  title: string;
}

const thumbnailComponents: Record<string, ReactNode> = {
  header: <HeaderThumbnail />,
  hero: <HeroThumbnail />,
  benefits: <ServicesThumbnail />,
};

export default function Thumbnail({ className, name, title }: ThumbnailProps) {
  if (name in thumbnailComponents) {
    return (
      <div
        className={`cursor-pointer transition hover:brightness-90 dark:hover:brightness-125 ease-in-out${className}`}
      >
        <div className="h-32 rounded-lg border border-slate-400 px-4 py-8 transition ease-in-out dark:border-slate-500">
          {thumbnailComponents[name]}
        </div>
        <div className="mt-1.5 font-semibold text-slate-500 dark:text-slate-400">
          {title}
        </div>
      </div>
    );
  }
  return null;
}
