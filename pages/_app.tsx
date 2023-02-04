import '../styles/app.css';

import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import ProgressBar from '@badrap/bar-of-progress';

import ColorModeProvider from 'providers/ColorModeProvider';

const progress = new ProgressBar({
  color: '#4F46E5',
});

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const startPageLoading = () => {
      progress.start();
    };

    const stopPageLoading = () => {
      progress.finish();
    };

    router.events.on('routeChangeStart', startPageLoading);
    router.events.on('routeChangeComplete', stopPageLoading);
    router.events.on('routeChangeError', stopPageLoading);

    return () => {
      router.events.off('routeChangeStart', startPageLoading);
      router.events.off('routeChangeComplete', stopPageLoading);
      router.events.off('routeChangeError', stopPageLoading);
    };
  }, [router.events]);

  return (
    <ColorModeProvider>
      <div className={pageProps.isMainApp ? 'app' : ''}>
        <Component {...pageProps} />
      </div>
    </ColorModeProvider>
  );
}

export default MyApp;
