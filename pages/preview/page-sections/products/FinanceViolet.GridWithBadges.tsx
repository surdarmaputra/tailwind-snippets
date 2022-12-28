import React, { ReactElement, useState } from 'react';

import BuildingBankIcon from '~icons/tabler/building-bank.tsx';
import CheckIcon from '~icons/tabler/check.tsx';
import CreditCardIcon from '~icons/tabler/credit-card.tsx';
import FileInvoiceIcon from '~icons/tabler/file-invoice.tsx';
import ReportMoneyIcon from '~icons/tabler/report-money.tsx';

const products = [
  {
    id: 'business-line-of-credit',
    icon: <CreditCardIcon />,
    title: 'Business Line of Credit',
  },
  {
    id: 'sba-loan',
    icon: <BuildingBankIcon />,
    title: 'SBA Loan',
  },
  {
    id: 'revenue-based-financing',
    icon: <ReportMoneyIcon />,
    title: 'Revenue Based Financing',
  },
  {
    id: 'invoice-factoring',
    icon: <FileInvoiceIcon />,
    title: 'Invoice Factoring',
  },
];

interface ProductGridItemProps {
  active?: boolean;
  icon: ReactElement;
  onClick?: () => void;
  title: string;
}

function ProductGridItem({
  active,
  icon,
  onClick,
  title,
}: ProductGridItemProps) {
  return (
    <div
      className={`
        flex cursor-pointer flex-col items-center justify-start rounded-lg py-5 px-6 text-center text-slate-800 shadow-slate-50 transition hover:bg-white hover:shadow-lg dark:shadow-slate-600
        ${active ? 'bg-white shadow-lg' : 'bg-slate-50'}
      `}
      onClick={onClick}
    >
      {React.cloneElement(icon, {
        className: 'h-8 w-8',
      })}
      <div className="mt-3 text-sm font-semibold">{title}</div>
    </div>
  );
}

function BusinessLineOfCreditInfo() {
  return (
    <div className="mt-5 grid grid-cols-2 gap-4 rounded-lg bg-violet-500 py-12 px-14 text-white">
      <div>
        <div className="text-4xl font-extrabold">
          Business Line
          <br />
          of Credit
        </div>
        <div className="mt-2 text-sm">Pay interest only on what you use</div>
        <ul className="mt-6 text-sm">
          <li className="flex items-center">
            <CheckIcon className="mr-3" />
            High credit limit
          </li>
          <li className="flex items-center">
            <CheckIcon className="mr-3" />
            Fast disbursement, anytime
          </li>
        </ul>
      </div>
      <form className="flex flex-col">
        <input placeholder="How much do you need?" type="text" />
        <button type="submit">Find options</button>
      </form>
    </div>
  );
}

export default function GridWithBadges() {
  const [selectedProductId, setSelectedProductId] = useState(products[0].id);

  return (
    <section className="container mx-auto px-8 py-36 sm:px-12">
      <div className="grid gap-4 sm:grid-cols-4 ">
        {products.map(({ icon, id, title }) => (
          <ProductGridItem
            active={id === selectedProductId}
            icon={icon}
            key={id}
            onClick={() => setSelectedProductId(id)}
            title={title}
          />
        ))}
      </div>
      <BusinessLineOfCreditInfo />
    </section>
  );
}
