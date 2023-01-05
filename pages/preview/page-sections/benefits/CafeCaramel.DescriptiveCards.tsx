import React from 'react';

import AddressBookIcon from '~icons/tabler/address-book.tsx';
import ParkingIcon from '~icons/tabler/parking.tsx';
import SmokingIcon from '~icons/tabler/smoking.tsx';
import WifiIcon from '~icons/tabler/wifi.tsx';

const benefits = [
  {
    id: 'working-space',
    icon: <WifiIcon />,
    title: 'Working space',
  },
  {
    id: 'affordable-price',
    icon: <WifiIcon />,
    title: 'Affordable price',
  },
  {
    id: 'high-speed-internet',
    icon: <WifiIcon />,
    title: 'High speed internet',
  },
  {
    id: 'smoking-area',
    icon: <SmokingIcon />,
    title: 'Smoking area',
  },
  {
    id: 'meeting-room',
    icon: <AddressBookIcon />,
    title: 'Meeting room',
  },
  {
    id: 'huge-parking-lot',
    icon: <ParkingIcon />,
    title: 'Huge parking lot',
  },
];

export default function DescriptiveCards() {
  return (
    <section className="container mx-auto px-8 py-28 sm:px-12">
      <h1 className="sm:mb-18 mb-24 w-full text-center text-4xl font-bold dark:text-slate-50 sm:mx-auto sm:w-4/5">
        Your favorite cafe in town
      </h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 ">
        {benefits.map(({ icon, id, title }) => (
          <div
            className={`
              flex cursor-pointer flex-col items-center justify-start rounded-lg bg-slate-50 py-5 px-6 text-center text-slate-800 shadow-slate-200 transition hover:bg-white
              hover:shadow-lg hover:shadow-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:shadow-slate-700 dark:hover:shadow-slate-800
            `}
            key={id}
          >
            {React.cloneElement(icon, {
              className: 'h-8 w-8',
            })}
            <div className="mt-3 text-sm font-semibold">{title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
