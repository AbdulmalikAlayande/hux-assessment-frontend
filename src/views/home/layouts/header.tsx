import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

interface HeaderProps {
	title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
	const [showMenu, setShowMenu] = React.useState(false);

	function handleMenuVisibility(
		event: React.MouseEvent<HTMLDivElement, MouseEvent>
	): void {
		event.preventDefault();
		setShowMenu(!showMenu);
	}

	return (
		<div
			className={
				"flex justify-evenly items-center h-24 max-w-[1240px] mb-10 mx-auto px-4 text-lightText"
			}
		>
			<h1 className={"w-full text-3xl font-bold text-lightText"}>{title}</h1>
			<ul className={"hidden md:flex uppercase"}>
				<li className={"p-4"}>Home</li>
				<li className={"p-4"}>About</li>
				<li className={"p-4"}>Signup</li>
				<li className={"p-4"}>Dashboard</li>
			</ul>
			<div onClick={handleMenuVisibility} className={"block md:hidden"}>
				{showMenu ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
			</div>
			<div
				className={
					showMenu
						? "md:hidden fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 ease-in-out duration-500"
						: "fixed left-[-100%]"
				}
			>
				<ul className={"pt-24 uppercase"}>
					<li className={"p-4 border-b border-gray-100"}>Home</li>
					<li className={"p-4 border-b border-gray-100"}>About</li>
					<li className={"p-4 border-b border-gray-100"}>Signup</li>
					<li className={"p-4 border-b border-gray-100"}>Dashboard</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
