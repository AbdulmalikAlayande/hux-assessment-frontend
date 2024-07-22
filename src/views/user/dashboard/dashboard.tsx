import React from "react";
import Sidebar from "./sidebar";
import ActionButton from "../../reusables/actionButton";
import { IoMdAddCircleOutline } from "react-icons/io";
import { AiOutlineClose, AiOutlineFilter, AiOutlineMenu } from "react-icons/ai";

const Dashboard: React.FC = () => {
	const [showMenu, setShowMenu] = React.useState(true);

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
						/>
					</div>
				</div>
				<div className="w-full p-2 h-[90%] md:text-xl text-[15px] overflow-y-scroll">
					<ul className="flex flex-col flex-grow">
						{contactList.map((contact) => (
							<li key={contact.id} className="w-full py-2 mt-4">
								<div className="flex items-center justify-between">
									<img src={contact.avatar} className="w-[20%] h-full" />
									<div className="w-[80%] flex items-center justify-between">
										<p>
											{contact.firstName} {contact.lastName}
										</p>
										<p>{contact.phoneNumber}</p>
										<p>{contact.email}</p>
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

export default Dashboard;
