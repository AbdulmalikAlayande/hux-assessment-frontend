import React from "react";
import Sidebar from "./sidebar";

const Dashboard: React.FC = () => {
	return (
		<div className="flex h-screen w-screen">
			<Sidebar />
			<div>
				<div className="flex justify-between p-4 bg-blue-500 text-white">
					{/* <div className={"md:hidden"} onClick={handleMenuVisibility}>
						{showMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
					</div> */}
				</div>
				<div className="flex flex-col flex-grow bg-white">
					{/* Your main content goes here */}
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
