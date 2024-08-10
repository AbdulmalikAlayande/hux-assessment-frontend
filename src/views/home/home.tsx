import React from "react";
import Header from "./layouts/header";
import Hero from "./layouts/hero";
import Features from "./layouts/features";
import { APP_NAME } from "../../utils/constants";
// import Benefits from "./layouts/benefits";
// import Testimonials from "./layouts/testimonials";
// import Cta from "./layouts/cta";

const LandingPage = () => {
	return (
		<div id={"home"} className="flex-col justify-between">
			<Header title={APP_NAME} />
			<Hero
				title={"anage Your Contacts, Streamline Your Connections!"}
				subtitle={
					"An intuitive contact management system designed to keep your relationships organized and your communication seamless."
				}
			/>
			<Features />
			{/* <Benefits />
			<Testimonials />
			<Cta /> */}

			<div id="about" className="text-lightText2 my-8">
				<div className="max-w-[800px] mx-auto text-center flex flex-col">
					<h2 className={"text-lightText"}>About Our Company</h2>
					<p>
						We are dedicated to creating innovative solutions that
						simplify and enhance your daily tasks. Our contact
						management system is designed with you in mind,
						combining powerful features with an intuitive interface
						to help you stay organized and connected.
					</p>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
