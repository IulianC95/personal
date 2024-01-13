// pages/_app.js
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="manifest" href="./manifest.json" />
        <meta property="og:image" content="public/images/meta-img.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        {/* Alte tag-uri în head */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
