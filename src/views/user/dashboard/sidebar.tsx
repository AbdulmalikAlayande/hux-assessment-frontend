import React from "react";

import contacts from "../../../assets/contacts-1.svg";
import ActionButton from "../../reusables/actionButton";
import { useNavigate } from "react-router";

const Sidebar: React.FC = () => {
	const navigate = useNavigate();
	// const [showMenu, setShowMenu] = React.useState(true);

	function navigateTo(path: string) {
		navigate(path);
	}

	// function handleMenuVisibility(
	// 	event: React.MouseEvent<HTMLDivElement, MouseEvent>
	// ): void {
	// 	event.preventDefault();
	// 	setShowMenu(!showMenu);
	// }

	return (
		<div
			className={
				"md:w-[20%] w-[200px] h-full flex flex-col justify-evenly items-center bg-red-200 left-0 top-0 border-r-4 border-r-lightText ease-in-out duration-500"
			}
		>
			<div className="w-[100px] h-[20%] rounded-full mx-auto bg-lime-500">
				<img
					className="w-[100px] h-full rounded-full mx-auto"
					src={contacts}
					alt="Contact Avatar"
				/>
			</div>
			<div className="h-[55%] w-full flex flex-col justify-evenly items-center bg-orange-400">
				<ActionButton
					className={
						"md:w-[80%] text-start text-white bg-none border-none hover:bg-lightText"
					}
					label="Contacts"
					onClick={() => {
						navigateTo("contact-lists");
					}}
				/>
				<ActionButton
					className={
						"md:w-[80%] text-start text-white bg-none border-none hover:bg-lightText"
					}
					label="Profile"
					onClick={() => {
						navigateTo("profile");
					}}
				/>
				<ActionButton
					className={
						"md:w-[80%] text-start text-white bg-none border-none hover:bg-lightText"
					}
					label="Import Contacts"
					onClick={() => {
						navigateTo("import-contacts");
					}}
				/>
			</div>
			<div className="h-[20%] w-full flex flex-col justify-evenly items-center bg-slate-950">
				<ActionButton
					className={
						"md:w-[80%] text-start text-white bg-none border-none hover:bg-lightText"
					}
					label="Logout"
					onClick={() => {
						navigateTo("logout");
					}}
				/>
				<ActionButton
					className={
						"md:w-[80%] text-start text-white bg-none border-none hover:bg-lightText"
					}
					label="Settings"
					onClick={() => {
						navigateTo("settings");
					}}
				/>
			</div>
		</div>
	);
};

export default Sidebar;
