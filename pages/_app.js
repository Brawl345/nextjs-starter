import '@/styles/globals.scss';
import Head from 'next/head';
import PropTypes from 'prop-types';
import AppNavbar from '@/components/shared/AppNavbar';
import Loader from '@/components/shared/Loader';
import { PageTransition } from 'next-page-transitions';
import { useRouter } from 'next/router';

const TIMEOUT = 150;

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Next.js Starter</title>

        {/* OpenGraph Tags */}
        <meta property="og:site_name" content="Next.js Starter" key="og:site_name" />
        <meta property="og:description" content="Next.js Starter Template" key="og:description" />
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:image" content="/img/logo.png" key="og:image" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary" key="twitter:card" />
        <meta name="twitter:title" content="Next.js Starter" key="twitter:title" />
        <meta name="twitter:description" content="Next.js Starter Template" key="twitter:description" />

        {/* Phone number detection */}
        <meta name="format-detection" content="telephone=no" />

        {/*  Android */}
        <meta name="theme-color" content="#000" />
      </Head>

      <AppNavbar />

      <PageTransition
        timeout={TIMEOUT}
        classNames="page-transition"
        loadingComponent={<Loader />}
        loadingDelay={TIMEOUT}
        loadingTimeout={{
          enter: TIMEOUT,
          exit: 0,
        }}
        loadingClassNames="loading-indicator"
      >
        <Component {...pageProps} key={router.route} />
      </PageTransition>

      <style jsx global>{`
        .page-transition-enter {
          opacity: 0;
          transform: translate3d(0, 20px, 0);
        }
        .page-transition-enter-active {
          opacity: 1;
          transform: translate3d(0, 0, 0);
          transition: opacity ${TIMEOUT}ms, transform ${TIMEOUT}ms;
        }
        .page-transition-exit {
          opacity: 1;
        }
        .page-transition-exit-active {
          opacity: 0;
          transition: opacity ${TIMEOUT}ms;
        }
        .loading-indicator-appear,
        .loading-indicator-enter {
          opacity: 0;
        }
        .loading-indicator-appear-active,
        .loading-indicator-enter-active {
          opacity: 1;
          transition: opacity ${TIMEOUT}ms;
        }
      `}
      </style>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
