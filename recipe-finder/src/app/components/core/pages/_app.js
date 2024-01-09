// pages/_app.js
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="manifest" href="./manifest.json" />
        {/* Alte tag-uri în head */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
