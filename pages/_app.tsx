import '../styles/app.css';

import useColorMode from 'hooks/useColorMode';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  useColorMode();
  return (
    <div className={pageProps.isMainApp ? 'app' : ''}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
