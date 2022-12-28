import { Header } from 'pages/preview/navigation/header/FinanceViolet.RightNavigation';
import Benefits from 'pages/preview/page-sections/benefits/FinanceViolet.ThreeColumns';
import Hero from 'pages/preview/page-sections/hero/FinanceViolet.SingleColumnWithBlurredColors';
import Products from 'pages/preview/page-sections/products/FinanceViolet.TabInfo';
import Testimony from 'pages/preview/page-sections/testimony/FinanceViolet.ThreeColumnsUntitled';

export default function LandingV1() {
  return (
    <>
      <Header />
      <Hero />
      <Products />
      <Benefits />
      <Testimony />
    </>
  );
}
