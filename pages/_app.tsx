import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import React, { useEffect } from 'react';
import '../styles/reset.css';
import SEO from '../next-seo.config';
import { DefaultSeo } from 'next-seo';
import * as ga from '../lib/ga';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      ga.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <DefaultSeo {...SEO} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
