import React, { useState } from "react";
import AuthInput from "../reusables/authInput";
import axios from "axios";
import { SERVER_SIGNUP_URL } from "../../utils/constants";
import { AiFillContacts } from "react-icons/ai";
import ActionButton from "../reusables/actionButton";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

type SignupData = {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	phoneNumber: string;
};

const initialData: SignupData = {
	firstName: "",
	lastName: "",
	email: "",
	password: "",
	phoneNumber: "",
};
const Signup: React.FC = () => {
	const [data, setData] = useState<SignupData>(initialData);
	const navigate = useNavigate();

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();
		setData((initSate) => ({
			...initSate,
			[event.target.name]: event.target.value,
		}));
	};

	const emailValidation = () => {
		return String(data.email)
			.toLocaleLowerCase()
			.match(/^\w+(-?\w+)*@\w+(-?\w+)*(\.\w{2,3})+$/);
	};

	function navigateTo(path: string) {
		navigate(path);
	}
	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		if (!emailValidation()) {
			alert("Invalid email");
		}
		axios
			.post(SERVER_SIGNUP_URL, data)
			.then((response) => {
				console.log("Response: ", response);
				toast.success("Signup successful", {
					position: "top-right",
				});
				navigateTo("/dashboard");
			})
			.catch((error) => {
				console.error("Error message: ", error.message);
				console.error("Error code: ", error.code);
				console.error("Error stack: ", error.stack);
			});
	};

	return (
		<div className="h-screen w-full px-10 py-20">
			<div className="grid grid-cols-1 sm:grid-cols-2 h-[100%]">
				<div
					className={
						"bg-lightText font-bold text-xl md:text-2xl flex flex-col justify-center items-center text-center "
					}
				>
					<AiFillContacts size={150} />
					<h1>Manage Your Contacts Seamlessly</h1>
				</div>
				<div
					className={"flex flex-col items-center justify-between bg-bodyColor"}
				>
					<h2 className={"text-4xl font-bold text-center py-6"}>Signup</h2>
					<form
						onSubmit={handleSubmit}
						className={"max-w-[] w-full mx-auto p-4 flex flex-col items-center"}
					>
						<AuthInput
							label={"First Name"}
							onchange={handleInputChange}
							type={"text"}
							max={15}
							required
						/>
						<AuthInput
							label={"Last Name"}
							onchange={handleInputChange}
							type={"text"}
							max={15}
							required
						/>
						<AuthInput
							label={"Email"}
							onchange={handleInputChange}
							type={"email"}
							invalidMessage="Invalid email"
							required
						/>
						<AuthInput
							label={"Password"}
							onchange={handleInputChange}
							type={"password"}
							invalidMessage="Password must be at least 8 chars long"
							min={8}
							required
						/>
						<ActionButton
							className={
								"px-10 text-white bg-lightText hover:bg-darkText text-xl"
							}
							type="submit"
							label={"Sign Up"}
						/>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup;
