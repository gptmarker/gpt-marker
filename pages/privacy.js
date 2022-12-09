import React from 'react';

export default function Privacy() {
	return (
		<section className="flex justify-center items-center container mx-auto px-4">
			<div className="w-full lg:w-[650px] space-y-4 mt-10">
				<h1 className="text-4xl font-medium">Privacy</h1>
				<div className="space-y-4 text-justify">
					<p>
						Privacy Policy At "GPTMarker - save and share ChatGPT conversation", we are committed to
						protecting the privacy of our users. We do not collect any personal information about you, we
						store only the information about your conversations and avatar image.
					</p>
					<p>
						When you use our service, we may collect and store the conversations and avatar image which you
						create and share using GPTMarker. This information is only used to provide the service to you,
						and is not shared with any third parties. If you have questions about how it is collected,
						please see the open source code for this extension.
					</p>
					<p>
						If you have any questions or concerns about our privacy policy, please contact us at{' '}
						<a className="text-indigo-600" href="mailto:support@gptmarker.com">
							support@gptmarker.com
						</a>
					</p>
					<p>
						By using our service, you consent to our privacy policy. This policy may be updated from time to
						time, so please check back periodically for any changes.
					</p>
				</div>
			</div>
		</section>
	);
}
