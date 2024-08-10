import React, { useContext, useState } from "react";
import AuthInput from "../reusables/authInput";
import axios from "axios";
import { SERVER_SIGNUP_URL } from "../../utils/constants";
import { AiFillContacts } from "react-icons/ai";
import ActionButton from "../reusables/actionButton";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../reusables/authProvider";

type SignupData = {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
};

const initialData: SignupData = {
	firstName: "",
	lastName: "",
	email: "",
	password: "",
};
const Signup: React.FC = () => {
	const [data, setData] = useState<SignupData>(initialData);
	const navigate = useNavigate();
	const { setAuth } = useContext(AuthContext);

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();
		setData((initSate) => ({
			...initSate,
			[event.target.name]: event.target.value,
		}));
	};

	function navigateTo(path: string) {
		navigate(path);
	}
	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		axios
			.post(SERVER_SIGNUP_URL, data)
			.then((response) => {
				console.log("Response: ", response);
				toast.success("Signup successful", {
					position: "top-right",
				});
				setAuth(response.data.data.token);
				navigateTo("/dashboard");
			})
			.catch((error) => {
				toast.error(error.message);
				console.error("Error message: ", error.message);
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
					className={
						"flex flex-col items-center justify-between bg-bodyColor"
					}
				>
					<h2 className={"text-4xl font-bold text-center py-6"}>
						Signup
					</h2>
					<form
						onSubmit={handleSubmit}
						className={
							"max-w-[] w-full mx-auto p-4 flex flex-col items-center"
						}
					>
						<AuthInput
							label={"First Name"}
							onchange={handleInputChange}
							type={"text"}
							max={15}
							required
							name={"firstName"}
						/>
						<AuthInput
							label={"Last Name"}
							onchange={handleInputChange}
							type={"text"}
							max={15}
							required
							name={"lastName"}
						/>
						<AuthInput
							label={"Email"}
							onchange={handleInputChange}
							type={"email"}
							invalidMessage="Invalid email"
							required
							name={"email"}
						/>
						<AuthInput
							label={"Password"}
							onchange={handleInputChange}
							type={"password"}
							invalidMessage="Password must be at least 8 chars long"
							min={8}
							name={"password"}
							required
						/>
						{/* <AuthInput
							label={"Phone Number"}
							onchange={handleInputChange}
							type={"tel"}
							invalidMessage="Phone number must be at least 11 chars long"
							min={11}
							name={"phoneNumber"}
							required
						/> */}
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
