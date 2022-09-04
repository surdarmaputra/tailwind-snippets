import '../styles/app.css';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={pageProps.isMainApp ? 'app' : ''}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
