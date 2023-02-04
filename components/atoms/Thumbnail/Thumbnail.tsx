import { ReactNode } from 'react';

import ServicesThumbnail from './BenefitsThumbnail';
import FooterThumbnail from './FooterThumbnail';
import HeaderThumbnail from './HeaderThumbnail';
import HeroThumbnail from './HeroThumbnail';
import ProductsThumbnail from './ProductsThumbnail';
import TestimonyThumbnail from './TestimonyThumbnail';

export enum ThumbnailName {
  header = 'header',
  footer = 'footer',
  hero = 'hero',
  benefits = 'benefits',
  products = 'products',
  testimony = 'testimony',
}

export interface ThumbnailProps extends React.HTMLProps<HTMLDivElement> {
  name: string;
  title: string;
}

const thumbnailComponents: Record<string, ReactNode> = {
  header: <HeaderThumbnail />,
  footer: <FooterThumbnail />,
  hero: <HeroThumbnail />,
  benefits: <ServicesThumbnail />,
  products: <ProductsThumbnail />,
  testimony: <TestimonyThumbnail />,
};

export default function Thumbnail({ className, name, title }: ThumbnailProps) {
  if (name in thumbnailComponents) {
    return (
      <div
        className={`cursor-pointer transition hover:brightness-95 dark:hover:brightness-125 ease-in-out${className}`}
      >
        <div className="h-32 rounded-lg border border-dark-100 px-4 py-8 shadow-lg shadow-dark-200 transition ease-in-out dark:border-dark-500">
          {thumbnailComponents[name]}
        </div>
        <div className="mt-3 ml-0.5 font-semibold text-dark-400 dark:text-dark-400">
          {title}
        </div>
      </div>
    );
  }
  return null;
}
