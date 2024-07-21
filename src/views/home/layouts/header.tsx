import React from "react";
import ActionButton from "../../reusables/actionButton";
import { useNavigate } from "react-router";

interface HeaderProps {
	title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
	const navigate = useNavigate();

	function navigateTo(route: string) {
		navigate(route);
	}

	return (
		<div className={"flex justify-between text-lightText"}>
			<h1 className={"w-full text-3xl font-bold text-lightText"}>
				{title}
			</h1>
			<ul className={"list-none flex justify-between"}>
				<li className={"p-4"}>
					<ActionButton
						label={"Home"}
						onClick={() => navigateTo("/")}
					/>
				</li>
				<li className={"p-4"}>
					<ActionButton
						label={"About"}
						onClick={() => navigateTo("about")}
					/>
				</li>
				<li className={"p-4"}>
					<ActionButton
						label="Signup"
						onClick={() => navigateTo("signup")}
					/>
				</li>
				<li className={"p-4"}>
					<ActionButton
						label={"Dashboard"}
						onClick={() => navigateTo("dashboard")}
					/>
				</li>
			</ul>
		</div>
	);
};

export default Header;
