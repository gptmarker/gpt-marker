import Footer from '../components/Footer';
import Header from '../components/Header';
import Links from '../components/Links';
import Head from 'next/head';

export default function Home() {
	return (
		<div className="bg-[#75A99C]">
			<Head>
				<meta property="twitter:image" content={`${process.env.NEXT_PUBLIC_DOMAIN}chatgptog.png`} />
				<meta property="og:image" content={`${process.env.NEXT_PUBLIC_DOMAIN}chatgptog.png`} />
			</Head>
			<div className="container mx-auto px-4 flex flex-col items-center justify-center min-h-screen">
				<Header />

				{/* Add button for chrome store icon to create download link */}
				<section className="py-4 flex flex-col items-center justify-center w-full flex-1 px-4 text-center bg-[#75A99C]">
					<div className="flex items-center flex-col">
						{/* Add chrome img with a href */}
						<div className="flex flex-col justify-center pt-2">
							<div className="flex flex-col justify-center ">
								<p className=" text-sm text-white justify-center ">
									Now available on{' '}
									<span className="font-medium">
										{/* add chrome store link here */}
										<a
											href="https://chrome.google.com/webstore/detail/gptmarker/hckjneemhgakefhinjpngpfjfmonnfod"
											target="_blank"
											rel="noreferrer"
										>
											Chrome Web Store 🎉
										</a>
									</span>
								</p>
							</div>
							<div className="flex flex-col justify-center pt-4">
								<a
									href="https://chrome.google.com/webstore/detail/gptmarker/hckjneemhgakefhinjpngpfjfmonnfod"
									target="_blank"
									rel="noreferrer"
								>
									<img
										src={process.env.NEXT_PUBLIC_DOMAIN + 'web-store.png'}
										alt="chrome web store logo"
										className="h-16 w-auto justify-center"
									/>
								</a>
							</div>
						</div>
					</div>
				</section>

				<Links />
				<section className="py-4 flex flex-col items-center justify-center w-full flex-1 px-4 text-center bg-[#75A99C]">
					<div className="flex items-center flex-col">
						<div className="flex items-center justify-center pt-2">
							<p className="text-xs text-white">
								Give us a <span className="font-bold">⭐️</span> on GitHub
							</p>
						</div>
					</div>
				</section>
				<Footer />
			</div>
		</div>
	);
}
