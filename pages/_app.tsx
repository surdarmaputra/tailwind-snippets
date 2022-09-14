import '../styles/app.css';

import type { AppProps } from 'next/app';

import ColorModeProvider from 'providers/ColorModeProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ColorModeProvider>
      <div className={pageProps.isMainApp ? 'app' : ''}>
        <Component {...pageProps} />
      </div>
    </ColorModeProvider>
  );
}

export default MyApp;
