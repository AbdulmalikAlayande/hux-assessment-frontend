import React, { useEffect } from "react";
import "reactjs-popup/dist/index.css";
import Sidebar from "./sidebar";
import ActionButton from "../../reusables/actionButton";
import { IoMdAddCircleOutline } from "react-icons/io";
import {
	AiOutlineClose,
	AiOutlineDelete,
	AiOutlineEdit,
	AiOutlineFilter,
	AiOutlineMenu,
} from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import ReactModal from "react-modal";
import CreateContact from "../createContact";
import { ReactModalConfig } from "../../../config";

const Dashboard: React.FC = () => {
	const [showMenu, setShowMenu] = React.useState(true);
	const [imageUrl, setImageUrl] = React.useState("");
	const [modalIsOpen, setModalIsOpen] = React.useState(false);
	useEffect(() => {
		fetch("/api/user/avatar")
			.then((response) => response.json())
			.then((data) => setImageUrl(data.avatar));
	}, []);

	function closeModal(): void {
		setModalIsOpen(false);
	}

	function handleMenuVisibility(
		event: React.MouseEvent<HTMLDivElement, MouseEvent>
	): void {
		event.preventDefault();
		setShowMenu(!showMenu);
	}
	const contactList = [
		{
			id: 1,
			avatar: "/avatar1.jpg",
			firstName: "John",
			lastName: "Doe",
			phoneNumber: "1234567890",
			email: "john.doe@example.com",
		},
		{
			id: 2,
			avatar: "/avatar2.jpg",
			firstName: "Jane",
			lastName: "Smith",
			phoneNumber: "0987654321",
			email: "jane.smith@example.com",
		},
		{
			id: 3,
			avatar: "/avatar3.jpg",
			firstName: "James",
			lastName: "Bond",
			phoneNumber: "1230984567",
			email: "james.bond@example.com",
		},
		{
			id: 4,
			avatar: "/avatar4.jpg",
			firstName: "Sarah",
			lastName: "Johnson",
			phoneNumber: "9876543210",
			email: "sarah.johnson@example.com",
		},
	];
	function openModal(): void {
		throw setModalIsOpen(true);
	}

	return (
		<div className="flex justify-evenly h-screen w-screen">
			<Sidebar showMenu={showMenu} />
			<div className={"w-full flex flex-col items-center justify-between"}>
				<div
					className={
						"w-full flex justify-between items-center px-8 py-2 border-b-2 border-b-lightText"
					}
				>
					<div className={"md:hidden"} onClick={handleMenuVisibility}>
						{showMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
					</div>
					<h1 className="text-2xl font-bold">Your Contacts</h1>
					<div className={"flex items-center"}>
						<ActionButton
							className={"bg-none border-none flex items-center"}
							label={""}
							icon={<AiOutlineFilter size={30} />}
						/>
						<ActionButton
							className={"bg-none border-none flex items-center gap-2"}
							label={"New Contact"}
							icon={<IoMdAddCircleOutline size={30} />}
							onClick={openModal}
						/>
					</div>
				</div>
				<ReactModal
					isOpen={modalIsOpen}
					onRequestClose={closeModal}
					style={ReactModalConfig}
					contentLabel="Example Modal"
				>
					<CreateContact />
				</ReactModal>
				<div className="w-full p-2 h-[90%] md:text-xl text-[10px] overflow-y-scroll">
					<ul className="flex flex-col flex-grow">
						{contactList.map((contact) => (
							<li key={contact.id} className="w-full py-2 mt-4">
								<div className="flex items-center justify-between">
									<div className={""}>
										{imageUrl === "" ? (
											<FaRegUserCircle size={30} />
										) : (
											<img src={contact.avatar} className="" />
										)}
									</div>
									<div className="w-[70%] flex items-center justify-between">
										<p>
											{contact.firstName} {contact.lastName}
										</p>
										<p>{contact.phoneNumber}</p>
										<p>{contact.email}</p>
									</div>
									<div className={"flex w-[10%] justify-between items-center"}>
										<ActionButton label={""} icon={<AiOutlineEdit />} />
										<ActionButton label={""} icon={<AiOutlineDelete />} />
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

/*

import React from 'react';


export default () => (
  
);

*/
export default Dashboard;
