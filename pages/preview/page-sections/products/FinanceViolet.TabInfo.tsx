import React, { ReactElement, useState } from 'react';

import BuildingBankIcon from '~icons/tabler/building-bank.tsx';
import CheckIcon from '~icons/tabler/check.tsx';
import CreditCardIcon from '~icons/tabler/credit-card.tsx';
import FileInvoiceIcon from '~icons/tabler/file-invoice.tsx';
import ReportMoneyIcon from '~icons/tabler/report-money.tsx';
import SearchIcon from '~icons/tabler/search.tsx';

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

interface TabInfoItemProps {
  active?: boolean;
  icon: ReactElement;
  onClick?: () => void;
  title: string;
}

function TabInfoItem({ active, icon, onClick, title }: TabInfoItemProps) {
  return (
    <div
      className={`
        flex cursor-pointer flex-col items-center justify-start rounded-lg py-5 px-6 text-center text-slate-800 shadow-slate-200 transition dark:text-slate-200 dark:shadow-slate-700
        ${
          active
            ? 'bg-white shadow-lg dark:bg-slate-700'
            : 'bg-slate-50 hover:bg-white hover:shadow-lg hover:shadow-slate-200 dark:bg-slate-800 dark:hover:shadow-slate-800'
        }
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
    <>
      <div className="text-center md:text-left">
        <div className="text-4xl font-extrabold text-white">
          Business Line
          <br />
          of Credit
        </div>
        <div className="mt-2 text-sm text-violet-100">
          Pay interest only on what you use
        </div>
        <ul className="mt-6 mb-8 text-sm text-violet-100 md:mb-0">
          <li className="flex items-center justify-center md:justify-start">
            <CheckIcon className="mr-3" />
            High credit limit
          </li>
          <li className="flex items-center justify-center md:justify-start">
            <CheckIcon className="mr-3" />
            Fast disbursement, anytime
          </li>
        </ul>
      </div>
      <form className="flex flex-col md:ml-8">
        <input
          className="mb-4 rounded-md px-4 py-3 font-light"
          min={0}
          placeholder="How much do you need?"
          type="number"
        />
        <button
          className="flex items-center justify-center rounded-md bg-violet-900 px-4 py-3 font-semibold text-white shadow-md shadow-violet-700 transition hover:bg-slate-900"
          type="submit"
        >
          <SearchIcon className="mr-2" />
          Find the best limit
        </button>
      </form>
    </>
  );
}

function SBALoanInfo() {
  return (
    <>
      <div className="text-center md:text-left">
        <div className="text-4xl font-extrabold text-white">SBA Loan</div>
        <div className="mt-2 text-sm text-violet-100">
          Find SBA-guaranteed loan near your business
        </div>
        <ul className="mt-6 mb-8 text-sm text-violet-100 md:mb-0">
          <li className="flex items-center justify-center md:justify-start">
            <CheckIcon className="mr-3" />
            Competitive terms
          </li>
          <li className="flex items-center justify-center md:justify-start">
            <CheckIcon className="mr-3" />
            Counseling and education
          </li>
          <li className="flex items-center justify-center md:justify-start">
            <CheckIcon className="mr-3" />
            Unique benefits
          </li>
        </ul>
      </div>
      <form className="flex flex-col md:ml-8">
        <input
          className="mb-4 rounded-md px-4 py-3 font-light"
          placeholder="Your Zip Code"
          type="text"
        />
        <button
          className="flex items-center justify-center rounded-md bg-violet-900 px-4 py-3 font-semibold text-white shadow-md shadow-violet-700 transition hover:bg-slate-900"
          type="submit"
        >
          <SearchIcon className="mr-2" />
          Find lenders
        </button>
      </form>
    </>
  );
}

function RevenueBasedFinancingInfo() {
  return (
    <>
      <div className="text-center md:text-left">
        <div className="text-4xl font-extrabold text-white">
          Revenue Based
          <br />
          Financing
        </div>
        <div className="mt-2 text-sm text-violet-100">
          Your sales is doing great? Use it to get more finance support
        </div>
        <ul className="mt-6 mb-8 text-sm text-violet-100 md:mb-0">
          <li className="flex items-center justify-center md:justify-start">
            <CheckIcon className="mr-3" />
            No authority over use of capital
          </li>
          <li className="flex items-center justify-center md:justify-start">
            <CheckIcon className="mr-3" />
            No assets or collateral required
          </li>
          <li className="flex items-center justify-center md:justify-start">
            <CheckIcon className="mr-3" />
            Flexible repayment terms
          </li>
        </ul>
      </div>
      <form className="flex flex-col md:ml-8">
        <select className="mb-4 rounded-md bg-white px-4 py-3 font-light">
          <option disabled selected value="">
            Business operating time
          </option>
          <option value="new">Less than 3 months</option>
          <option value="new">3 - 6 months</option>
          <option value="new">7 - 11 months</option>
          <option value="new">1 - 2 years</option>
          <option value="new">More than 2 years</option>
        </select>
        <select className="mb-4 rounded-md bg-white px-4 py-3 font-light">
          <option disabled selected value="">
            Revenue
          </option>
          <option value="new">Less than $5,000</option>
          <option value="new">$5,000 - $10,000</option>
          <option value="new">More than $10,000</option>
        </select>
        <button
          className="flex items-center justify-center rounded-md bg-violet-900 px-4 py-3 font-semibold text-white shadow-md shadow-violet-700 transition hover:bg-slate-900"
          type="submit"
        >
          <SearchIcon className="mr-2" />
          Find options
        </button>
      </form>
    </>
  );
}

function InvoiceFactoringInfo() {
  return (
    <>
      <div className="text-center md:text-left">
        <div className="text-4xl font-extrabold text-white">
          Invoice Factoring
        </div>
        <div className="mt-2 text-sm text-violet-100">
          Get early cash before your customer pay the bill
        </div>
        <ul className="mt-6 mb-8 text-sm text-violet-100 md:mb-0">
          <li className="flex items-center justify-center md:justify-start">
            <CheckIcon className="mr-3" />
            Customized programs
          </li>
          <li className="flex items-center justify-center md:justify-start">
            <CheckIcon className="mr-3" />
            Fast disbursement
          </li>
        </ul>
      </div>
      <form className="flex flex-col md:ml-8">
        <select className="mb-4 rounded-md bg-white px-4 py-3 font-light">
          <option disabled selected value="">
            Monthly invoicing volume
          </option>
          <option value="new">Less than 500</option>
          <option value="new">500 - 2000</option>
          <option value="new">More than 2000</option>
        </select>
        <button
          className="flex items-center justify-center rounded-md bg-violet-900 px-4 py-3 font-semibold text-white shadow-md shadow-violet-700 transition hover:bg-slate-900"
          type="submit"
        >
          <SearchIcon className="mr-2" />
          Find partners
        </button>
      </form>
    </>
  );
}

const infoSections = {
  [products[0].id]: <BusinessLineOfCreditInfo />,
  [products[1].id]: <SBALoanInfo />,
  [products[2].id]: <RevenueBasedFinancingInfo />,
  [products[3].id]: <InvoiceFactoringInfo />,
};

export default function TabInfo() {
  const [selectedProductId, setSelectedProductId] = useState(products[0].id);

  return (
    <section className="container mx-auto px-8 py-28 sm:px-12">
      <h1 className="sm:mb-18 mb-24 w-full text-center text-4xl font-extrabold dark:text-slate-50 sm:mx-auto sm:w-4/5">
        We provide <span className="text-violet-500">variety of choices</span>{' '}
        for any kind of situations
      </h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 ">
        {products.map(({ icon, id, title }) => (
          <TabInfoItem
            active={id === selectedProductId}
            icon={icon}
            key={id}
            onClick={() => setSelectedProductId(id)}
            title={title}
          />
        ))}
      </div>
      <div className="mt-8 grid grid-cols-1 items-center gap-4 rounded-lg bg-violet-500 py-12 px-14 md:grid-cols-2">
        {infoSections[selectedProductId] || null}
      </div>
    </section>
  );
}
