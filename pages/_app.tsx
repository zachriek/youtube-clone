import Head from 'next/head';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import BaseLayout from '@/layouts/BaseLayout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BaseLayout>
      <Head>
        <title>{pageProps.title ? `${pageProps.title} - Youtube` : 'Youtube'}</title>
      </Head>
      <Component {...pageProps} />
    </BaseLayout>
  );
}

export default MyApp;
