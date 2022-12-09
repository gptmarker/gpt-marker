import Head from 'next/head';
import altogic from '../lib/altogic';
import Error from 'next/error';
import { useRouter } from 'next/router';
import Footer from '../components/Footer';
import { FaTwitter } from 'react-icons/fa';
import { load } from 'cheerio';

export default function Page({ data, errorCode, CSSLink }) {
	const { slug } = useRouter().query;

	function shareOnTwitter() {
		window?.open(`https://twitter.com/intent/tweet?text=${generateTwit(slug)}`, '_blank');
	}

	if (errorCode) {
		return <Error statusCode={errorCode} />;
	}

	return (
		<>
			<Head>
				<meta
					property="twitter:image"
					content={`${process.env.NEXT_PUBLIC_DOMAIN}api/og?shareId=${data.shareId}`}
				/>
				<meta property="og:image" content={`${process.env.NEXT_PUBLIC_DOMAIN}api/og?shareId=${data.shareId}`} />
			</Head>
			<link rel="stylesheet" href={CSSLink} />
			<div className="pb-[125px]" dangerouslySetInnerHTML={{ __html: data.html }} />
			<div className="fixed bottom-0 left-0 w-full">
				<div className="flex justify-center py-2">
					<button
						className="bg-white border gap-2 text-xs text-gray-700 flex items-center justify-center p-2 rounded"
						onClick={shareOnTwitter}
					>
						<FaTwitter className="text-[#1d9bf0]" />
						Share on Twitter
					</button>
				</div>
				<Footer />
			</div>
		</>
	);
}

function generateTwit(slug) {
	const domain = 'https://www.gptmarker.com';
	const link = `${domain}/${slug}/`;
	const text = `Just had an amazing conversation with ChatGPT!

#ChatGPT @GptMarker @OpenAI ${link}`;

	return encodeURIComponent(text);
}

export async function getServerSideProps(context) {
	const { slug } = context.params;

	const { data, errors } = await altogic.db.model('gpt').filter(`shareId == ${slug}`).getSingle();
	const CSSLink = await getCSSLink();
	return {
		props: {
			data: data,
			errorCode: !data || errors ? 404 : null,
			CSSLink
		}
	};
}

async function getCSSLink() {
	const res = await fetch('https://chat.openai.com/chat', {
		headers: {
			'User-Agent':
				'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36'
		}
	});
	const html = await res.text();
	const $ = load(html);

	const path = $("link[rel='stylesheet']").attr('href');

	return `https://chat.openai.com${path}`;
}
