import React from "react";

const Testimonials: React.FC = () => {
	return (
		<div id="testimonials" className="text-lightText2 my-8">
			<h2 className="text-center">What Our Users Are Saying</h2>
			<div className="max-w-[800px] mx-auto text-center flex flex-col">
				<div className="testimonial mt-4">
					<p>
						"Since using this contact management system, our team has become
						much more efficient. It's a game-changer!"
					</p>
					<p>— Jane D., Marketing Manager</p>
				</div>
				<div className="testimonial mt-4">
					<p>
						"The customizable fields and smart search have made managing my
						contacts so much easier. Highly recommend!"
					</p>
					<p>— Mark S., Sales Executive</p>
				</div>
				<div className="testimonial mt-4">
					<p>
						"I love how secure and user-friendly this system is. It gives me
						peace of mind knowing my data is protected."
					</p>
					<p>— Sarah W., Small Business Owner</p>
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
