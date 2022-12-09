import { ImageResponse } from '@vercel/og';

export const config = {
	runtime: 'experimental-edge'
};

const getGTPThread = async shareId => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_ENV_URL}/thread?shareId=${shareId}`);
	return res.json();
};

export default async function handle(req) {
	const { searchParams } = new URL(req.url || '');
	const shareId = searchParams.get('shareId');

	if (!shareId) {
		return new Response('Missing slug', { status: 400 });
	}

	const gtpThread = await getGTPThread(shareId);

	if (!gtpThread) {
		return new Response('Not found', { status: 404 });
	}

	return new ImageResponse(<OgImage question={gtpThread.question} answer={gtpThread.answer} />, {
		width: 1200,
		height: 627
	});
}

function OgImage({ question, answer }) {
	return (
		<div
			style={{
				height: '100%',
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'flex-start',
				backgroundColor: '#F7F7F8',
				borderRadius: '0px'
			}}
		>
			<div tw="flex p-8 bg-[#F7F7F8] w-full">
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img
					src="https://www.gptmarker.com/chatgpt.png"
					width="48"
					height="48"
					alt="GPTMarker Avatar"
					tw="rounded-md mr-4 mt-4"
				/>
				<p
					style={{
						color: '#00G',
						fontSize: '30px',
						whiteSpace: 'pre-wrap'
					}}
				>
					{question}
				</p>
			</div>
			<div tw="flex pl-8 py-8 bg-[#fff] w-full ">
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img
					src="https://www.gptmarker.com/chatgpt.png"
					width="48"
					height="48"
					alt="GPTMarker Avatar"
					tw="rounded-md mr-4 mt-4"
				/>
				<div
					style={{
						color: 'black',
						fontSize: '30px',
						whiteSpace: 'pre-wrap',
						lineHeight: '42px',
						paddingTop: '12px'
					}}
				>
					{answer}
				</div>
			</div>
			<div tw="flex items-center h-10 px-4 py-2 absolute bottom-0 right-0 bg-[#363543]/55 rounded-tl-md">
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img
					src="https://www.gptmarker.com/chatgpt.png"
					width="16"
					height="16"
					alt="GPTMarker - "
					tw="rounded-sm mr-2"
				/>
				<p
					style={{
						fontSize: '14px',
						fontWeight: 'bold',
						color: 'white',
						marginTop: '16px'
					}}
				>
					GPTMarker - Save and share your ChatGPT conversations
				</p>
			</div>
		</div>
	);
}
