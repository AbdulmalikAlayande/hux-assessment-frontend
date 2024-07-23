import React from "react";
import AuthInput from "../reusables/authInput";
import axios from "axios";
import { SEVER_BASE_URL } from "../../utils/constants";
import { toast } from "react-toastify";

interface CreateContactData {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	notes?: string;
	contactPhoto?: string;
	contactType?: string;
}

const intialData: CreateContactData = {
	firstName: "",
	lastName: "",
	email: "",
	phone: "",
};

const CreateContact: React.FC = () => {
	const [data, setData] = React.useState<CreateContactData>(intialData);

	function handleInputChange(
		event: React.ChangeEvent<HTMLInputElement>
	): void {
		event.preventDefault();
		setData((initSate) => ({
			...initSate,
			[event.target.name]: event.target.value,
		}));
	}

	function handleFormSubmission(
		event: React.FormEvent<HTMLFormElement>
	): void {
		event.preventDefault();
		axios
			.post(`${SEVER_BASE_URL}/create-contact`, data)
			.then((response) => {
				console.log("Response: ", response);
				toast.success("Contact created successfully!");
				setData(intialData);
			})
			.catch((error) => {
				console.error("Error message: ", error.message);
				console.error("Error code: ", error.code);
				toast.error("Failed to create contact.");
				setData(intialData);
			});
	}

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
			<div className="bg-lightText p-6 rounded-lg shadow-lg">
				<h2 className="text-2xl font-bold mb-4">Create Contact</h2>
				<form onSubmit={handleFormSubmission} className="space-y-4">
					<AuthInput
						label={"First Name"}
						type={"text"}
						onchange={handleInputChange}
						required
						invalidMessage={"Required"}
					/>
					<AuthInput
						label={"Last Name"}
						type={"text"}
						onchange={handleInputChange}
						required
						invalidMessage={"Required"}
					/>
					<AuthInput
						label={"Email"}
						type={"email"}
						onchange={handleInputChange}
						required
						invalidMessage={"Required"}
					/>
					<AuthInput
						label={"Phone Number"}
						type={"tel"}
						onchange={handleInputChange}
						required
						invalidMessage={"Required"}
					/>

					<div className="flex justify-end">
						<button
							type="submit"
							className="bg-bodyColor text-white px-4 py-2 rounded-md hover:bg-darkText hover:text-lightText2 active:darkText active:text-lightText2"
						>
							Create
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default CreateContact;
