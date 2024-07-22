import React from "react";

import contacts from "../../../assets/contacts-1.svg";
import ActionButton from "../../reusables/actionButton";
import { useNavigate } from "react-router";
import {
	AiOutlineContacts,
	AiOutlineImport,
	AiOutlineLogout,
	AiOutlineProfile,
	AiOutlineSetting,
} from "react-icons/ai";

interface SidebarProps {
	showMenu: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ showMenu }) => {
	const navigate = useNavigate();

	function navigateTo(path: string) {
		navigate(path);
	}

	return (
		<div
			className={
				showMenu
					? "hidden md:w-[20%] w-[200px] h-full md:flex md:flex-col justify-evenly items-center left-0 top-0 border-r-4 border-r-lightText ease-in-out duration-500"
					: "md:w-[20%] w-[200px] h-full fixed left-[-100%] ease-in-out duration-500"
			}
		>
			<div className="w-full h-[20%] flex items-start bg-lightText">
				<img
					className="w-[100px] h-full rounded-full mx-auto"
					src={contacts}
					alt="Contact Avatar"
				/>
			</div>
			<div className="h-[55%] w-full flex flex-col justify-evenly items-center">
				<ActionButton
					className={`md:w-[80%] flex items-center gap-3 text-start text-lightText text-xl rounded-md mx-auto py-1 bg-none border-none hover:bg-lightText hover:text-lightText2 active:bg-lightText active:text-lightText2`}
					label="Contacts"
					onClick={() => {
						navigateTo("contact-lists");
					}}
					icon={<AiOutlineContacts size={30} />}
				/>
				<ActionButton
					className={`md:w-[80%] flex items-center gap-3 text-start text-lightText text-xl rounded-md mx-auto py-1 bg-none border-none hover:bg-lightText hover:text-lightText2 active:bg-lightText active:text-lightText2`}
					label="Profile"
					onClick={() => {
						navigateTo("profile");
					}}
					icon={<AiOutlineProfile size={30} />}
				/>
				<ActionButton
					className={`md:w-[80%] flex items-center gap-3 text-start text-lightText text-xl rounded-md mx-auto py-1 bg-none border-none hover:bg-lightText hover:text-lightText2 active:bg-lightText active:text-lightText2`}
					label="Import Contacts"
					onClick={() => {
						navigateTo("import-contacts");
					}}
					icon={<AiOutlineImport size={30} />}
				/>
			</div>
			<div className="h-[20%] w-full flex flex-col justify-evenly items-center">
				<ActionButton
					className={`md:w-[80%] flex items-center gap-3 text-start text-lightText text-xl rounded-md mx-auto py-1 bg-none border-none hover:bg-lightText hover:text-lightText2 active:bg-lightText active:text-lightText2`}
					label="Logout"
					onClick={() => {
						navigateTo("logout");
					}}
					icon={<AiOutlineLogout size={30} />}
				/>
				<ActionButton
					className={`md:w-[80%] flex items-center gap-3 text-start text-lightText text-xl rounded-md mx-auto py-1 bg-none border-none hover:bg-lightText hover:text-lightText2 active:bg-lightText active:text-lightText2`}
					label="Settings"
					onClick={() => {
						navigateTo("settings");
					}}
					icon={<AiOutlineSetting size={30} />}
				/>
			</div>
		</div>
	);
};

export default Sidebar;
