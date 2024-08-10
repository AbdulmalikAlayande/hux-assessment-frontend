import React from "react";
import ActionButton from "../../reusables/actionButton";
import { useNavigate } from "react-router-dom";
import { ReactTyped } from "react-typed";
import { APP_NAME, SPACE_M } from "../../../utils/constants";

interface HeroProps {
	title: string;
	subtitle: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle }) => {
	const navigate = useNavigate();

	function navigateTo(path: string): void {
		navigate(path);
	}

	return (
		<div id="hero" className="w-[98.5vw] text-lightText">
			<div
				className={
					"mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center"
				}
			>
				<div className="flex justify-center items-center w-full md:text-2xl sm:text-3xl text-2xl text-lightText font-bold p-2">
					<p className={"text-lightText2"}>
						{APP_NAME} -{" "}
						<span className="text-lightText">{SPACE_M}</span>
					</p>
					<ReactTyped
						strings={[` ${title}`]}
						typeSpeed={20}
						backSpeed={20}
						loop={true}
						showCursor={false}
					/>
				</div>

				<h2
					className={
						"md:text-4xl sm:text-5xl text-4xl font-bold md:py-6"
					}
				>
					{subtitle}
				</h2>
				<ActionButton
					label="Get Started Today"
					onClick={() => navigateTo("/signup")}
					className={
						"button-primary bg-lightText text-bodyColor text-xl font-bold max-w-[20%] rounded-md my-6 mx-auto py-3 hover:bg-darkText active:bg-darkText"
					}
				/>
			</div>
		</div>
	);
};

export default Hero;
