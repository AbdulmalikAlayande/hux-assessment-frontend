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
		<div>
			<h1>{title}</h1>
			<ActionButton label="Signup" onClick={() => navigateTo("signup")} />
		</div>
	);
};

export default Header;
