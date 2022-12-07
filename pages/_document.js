import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          property="twitter:image"
          content={`${process.env.NEXT_PUBLIC_DOMAIN}chatgptog.png`}
        />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_DOMAIN}chatgptog.png`}
        />
        <meta
          property="og:title"
          content="ChatGPT Bookmarker - Save and share your chatgpt threads"
        />
        <meta property="og:site_name" content="ChatGPT Bookmarker" />
        <meta
          property="og:description"
          content="Save your ChatGPT threads and share with your friends."
        />
        <meta property="og:type" content="website" />
        <meta property="twitter:title" content="GPT Marker" />
        <meta
          property="twitter:description"
          content="Save your ChatGPT threads and share with your friends."
        />
        <meta property="twitter:url" content={process.env.NEXT_PUBLIC_DOMAIN} />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_DOMAIN} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@gpt-marker" />
        <meta name="twitter:creator" content="Altogic" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
