import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>GPTMarker - Share and save your ChatGPT conversations</title>
    </Head>
    <Component {...pageProps} />
  </>;
}
export default MyApp;
