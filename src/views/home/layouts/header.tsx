import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import ActionButton from "../../reusables/actionButton";
import { Link } from "react-scroll";
import { useNavigate } from "react-router";

interface HeaderProps {
	title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
	const [showMenu, setShowMenu] = React.useState(false);
	const navigate = useNavigate();

	function handleMenuVisibility(
		event: React.MouseEvent<HTMLDivElement, MouseEvent>
	): void {
		event.preventDefault();
		setShowMenu(!showMenu);
	}

	function navigateTo(path: string): void {
		navigate(path);
	}
	return (
		<div
			id={"header"}
			className={
				"flex justify-evenly items-center h-24 max-w-[1240px] mb-10 mx-auto px-4 text-lightText"
			}
		>
			<h1 className={"text-3xl font-bold text-lightText"}>{title}</h1>
			<div>
				<ul className={"hidden md:flex uppercase"}>
					<li className={"p-4"} key={1001}>
						<Link
							activeClass="active"
							to={"home"}
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
						>
							Home
						</Link>
					</li>
					<li className={"p-4"} key={1002}>
						<Link
							activeClass="active"
							to={"features"}
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
						>
							Features
						</Link>
					</li>
					<li className={"p-4"} key={1003}>
						<Link
							activeClass="active"
							to={"about"}
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
						>
							About
						</Link>
					</li>
				</ul>
			</div>
			<div>
				<ActionButton
					label={"Signup"}
					className={
						"button-primary bg-lightText text-bodyColor text-xl font-bold rounded-md mx-auto py-1 hover:bg-darkText active:bg-darkText"
					}
					onClick={() => {
						navigateTo("/signup");
					}}
				/>
			</div>
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
					<li className={"p-4 border-gray-100"} key={1001}>
						<Link
							activeClass="active"
							to={"home"}
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
						>
							Home
						</Link>
					</li>
					<li className={"p-4 border-gray-100"} key={1002}>
						<Link
							activeClass="active"
							to={"features"}
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
						>
							Features
						</Link>
					</li>
					<li className={"p-4 border-gray-100"} key={1003}>
						<Link
							activeClass="active"
							to={"about"}
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
						>
							About
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
