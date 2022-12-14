import Head from 'next/head';
import altogic from '../lib/altogic';
import Error from 'next/error';
import { useRouter } from 'next/router';
import Footer from '../components/Footer';
import { FaFilePdf, FaTwitter } from 'react-icons/fa';
import GPTAvatar from '../components/GPTAvatar';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export default function Page({ data, errorCode }) {
	const { slug } = useRouter().query;

	function shareOnTwitter() {
		window?.open(`https://twitter.com/intent/tweet?text=${generateTwit(slug)}`, '_blank');
	}

	function getPDFFileButton() {
		// section is the div that contains the conversation
		const section = document.querySelector('body');
		// generate a canvas and pdf from the section
		html2canvas(section).then(canvas => {
			const imgData = canvas.toDataURL('image/png');

			// set the height to the canvas height
			const pixelRatio = window.devicePixelRatio;
			window.devicePixelRatio = pixelRatio;
			const orientation = canvas.width > canvas.height ? 'l' : 'p';
			var pdf = new jsPDF(orientation, 'px', [canvas.width / pixelRatio, canvas.height / pixelRatio]);
			pdf.addImage(imgData, 'PNG', 0, 0);
			var pdfWidth = pdf.internal.pageSize.getWidth();
			var pdfHeight = pdf.internal.pageSize.getHeight();
			pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

			pdf.save(`${slug}.pdf`);
		});
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
			{data.html ? <OldVersion __html={data.html} /> : <NewVersion data={data} />}
			<div className="fixed bottom-0 left-0 w-full">
				<div className="flex justify-center py-2">
					<button
						className="bg-white border gap-2 text-xs text-gray-700 flex items-center justify-center p-2 rounded"
						onClick={shareOnTwitter}
					>
						<FaTwitter className="text-[#1d9bf0]" />
						Share on Twitter
					</button>
					<button
						className="bg-white border ml-2 gap-2 text-xs text-gray-700 flex items-center justify-center p-2 rounded"
						onClick={getPDFFileButton}
					>
						<FaFilePdf className="text-[#d50000]" />
						Export to PDF
					</button>
				</div>
				<Footer />
			</div>
		</>
	);
}

function OldVersion({ __html }) {
	return <div className="pb-[125px]" dangerouslySetInnerHTML={{ __html }} />;
}

function NewVersion({ data }) {
	return (
		<section className="flex flex-col items-center text-sm min-h-full dark:bg-[#343541] pb-16 lg:pb-14">
			{data?.threads?.map((thread, index) => (
				<div
					key={index}
					className={`w-full border-b border-black/10 dark:border-gray-900/50 text-[#343541] dark:text-gray-100 group ${
						thread.from === 'human' ? 'dark:bg-gray-[#343541]' : 'bg-gray-50 dark:bg-[#444654]'
					}`}
				>
					{thread.from === 'human' ? (
						<div className="m-auto md:max-w-2xl lg:max-w-2xl xl:max-w-3xl text-base gap-6 p-4 md:py-6 flex lg:px-0">
							<img className="w-[30px] h-[30px] rounded-sm" src={data.userImage} alt="user-image" />
							<p className="min-h-[20px] whitespace-pre-wrap flex flex-col items-start gap-4">
								{thread.content}
							</p>
						</div>
					) : (
						<div className="m-auto md:max-w-2xl lg:max-w-2xl xl:max-w-3xl text-base gap-6 p-4 md:py-6 flex lg:px-0">
							<GPTAvatar />
							<div
								className="min-h-[20px] whitespace-pre-wrap flex flex-col items-start gap-4 response"
								dangerouslySetInnerHTML={{ __html: thread.content }}
							/>
						</div>
					)}
				</div>
			))}
			<div className="prose hidden dark:prose-invert" />
		</section>
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
	return {
		props: {
			data,
			errorCode: !data || errors ? 404 : null
		}
	};
}
