// pages/_app.js
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="manifest" href="./manifest.json" />
        <meta property="og:image" content="link-ul_imaginii_tale.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image" content="link-ul_imaginii_tale.jpg" />
        {/* Alte tag-uri în head */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
