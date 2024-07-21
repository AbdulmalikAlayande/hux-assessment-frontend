import React from "react";

const Cta: React.FC = () => {
	return (
		<div id="cta" className="text-lightText2 my-8">
			<div className="max-w-[800px] mx-auto text-center flex flex-col">
				<h2>Ready to Transform Your Contact Management?</h2>
				<p>
					Join thousands of users who have streamlined their contact management
					and improved their productivity.
				</p>
				<button className="btn-primary mt-4">Sign Up Now</button>
				<button className="btn-secondary mt-4">Learn More</button>
			</div>
		</div>
	);
};

export default Cta;
