import { ImageResponse } from '@vercel/og';

export const config = {
	runtime: 'experimental-edge'
};

const getGPTThread = async shareId => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_ENV_URL}/thread?shareId=${shareId}`);
	return res.json();
};

export default async function handle(req) {
	const { searchParams } = new URL(req.url || '');
	const shareId = searchParams.get('shareId');

	if (!shareId) {
		return new Response('Missing slug', { status: 400 });
	}

	const gptThread = await getGPTThread(shareId);

	if (!gptThread) {
		return new Response('Not found', { status: 404 });
	}

	return new ImageResponse(<OgImage question={gptThread.question} answer={gptThread.answer} />, {
		width: 800,
		height: 420
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
					src={process.env.NEXT_PUBLIC_DOMAIN + 'chatgpt.png'}
					width="48"
					height="48"
					alt="GPTMarker Avatar"
					tw="rounded-md mr-4 mt-4"
				/>
				<p
					style={{
						color: '#00G',
						fontSize: '24px',
						lineHeight: '36px',
						whiteSpace: 'pre-wrap'
					}}
				>
					{question}
				</p>
			</div>
			<div tw="flex pl-8 py-8 bg-[#fff] w-full ">
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img
					src={process.env.NEXT_PUBLIC_DOMAIN + 'openai.png'}
					width="48"
					height="48"
					alt="GPTMarker Avatar"
					tw="rounded-md mr-4 mt-4"
				/>
				<div
					style={{
						color: 'black',
						fontSize: '24px',
						whiteSpace: 'pre-wrap',
						lineHeight: '36px',
						paddingTop: '12px'
					}}
				>
					{answer}
				</div>
			</div>
			<div tw="flex items-center h-10 px-4 py-2 absolute bottom-0 right-0 bg-[#363543]/55 rounded-tl-md">
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img
					src={process.env.NEXT_PUBLIC_DOMAIN + 'chatgpt.png'}
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
