import Head from "next/head";
import altogic from "../lib/altogic";
import Error from "next/error";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import { FaTwitter } from "react-icons/fa";

export default function Page({ data, errorCode }) {
  const { slug } = useRouter().query
  function shareOnTwitter() {
      window?.open(
        `https://twitter.com/intent/tweet?text=${generateTwit()}`,
        '_blank'
      )
  }
  function generateTwit() {
    const domain = 'https://www.gptmarker.com';
    const link = `${domain}/${slug}/`;
    const text = `Just had an amazing conversation with ChatGPT! 

Check it out: ${link}    
#ChatGPT @GptMarker @OpenAI`;

    return encodeURIComponent(text);
  }

  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }

  return (
    <>
      <Head>
        <link rel="stylesheet" href={`${data.cssLink}`} />
      </Head>
      <div
        className="pb-[125px]"
        dangerouslySetInnerHTML={{ __html: data.html }}
      />
      <div className="fixed bottom-0 left-0 w-full">
       <div className="flex justify-center py-2">
         <button className="bg-white border gap-2 text-xs text-gray-700 flex items-center justify-center p-2 rounded" onClick={shareOnTwitter}>
           <FaTwitter className="text-[#1d9bf0]" />
           Share on Twitter
         </button>
       </div>
        <Footer />
      </div>
    </>
  );
}



export async function getServerSideProps(context) {
  const { slug } = context.params;

  const { data, errors } = await altogic.db
    .model("gpt")
    .filter(`shareId == ${slug}`)
    .getSingle();

  return {
    props: {
      data: data,
      errorCode: !data || errors ? 404 : null,
    },
  };
}
