import React, { useState } from "react";
import AuthInput from "../reusables/authInput";
import axios from "axios";

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

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();
		setData((initSate) => ({
			...initSate,
			[event.target.name]: event.target.value,
		}));
	};

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		axios
			.post("http://localhost:3000/signup", data)
			.then((response) => {})
			.catch((error) => {
				console.error("Error message: ", error.message);
				console.error("Error code: ", error.code);
				console.error("Error stack: ", error.stack);
			});
	};

	return (
		<div>
			<h2>Signup</h2>
			<form onSubmit={handleSubmit}>
				<AuthInput
					label={"First Name"}
					onchange={handleInputChange}
					type={"text"}
				/>
				<AuthInput
					label={"Last Name"}
					onchange={handleInputChange}
					type={"email"}
				/>
				<AuthInput
					label={""}
					onchange={handleInputChange}
					type={"password"}
				/>
				<button type="submit">Sign Up</button>
			</form>
		</div>
	);
};

export default Signup;
