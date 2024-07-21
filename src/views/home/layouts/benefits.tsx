import React from "react";

const Benefits: React.FC = () => {
	return (
		<div
			id="benefits"
			className={
				"text-lightText2 max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center"
			}
		>
			<h2 className="text-center">Why Choose Our Contact Management System?</h2>
			<div className="max-w-[800px] mx-auto text-center flex flex-col">
				<div className="benefit mt-4">
					<h3>Boost Productivity</h3>
					<p>
						Save time with automated contact management and spend more time
						building relationships.
					</p>
				</div>
				<div className="benefit mt-4">
					<h3>Improve Communication</h3>
					<p>
						Keep track of all interactions and communication history in one
						place, ensuring you never miss a follow-up.
					</p>
				</div>
				<div className="benefit mt-4">
					<h3>Stay Organized</h3>
					<p>
						Categorize and organize your contacts with ease, ensuring you have
						all the information you need at your fingertips.
					</p>
				</div>
				<div className="benefit mt-4">
					<h3>Seamless Integration</h3>
					<p>
						Integrate with your favorite tools and platforms, making contact
						management a seamless part of your workflow.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Benefits;
