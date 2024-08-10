import React, { useContext } from "react";
import AuthInput from "../reusables/authInput";
import axios from "axios";
import { SEVER_BASE_URL } from "../../utils/constants";
import { toast } from "react-toastify";
import { AuthContext } from "../reusables/authProvider";

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
	const { auth } = useContext(AuthContext);

	function handleInputChange(
		event: React.ChangeEvent<HTMLInputElement>
	): void {
		event.preventDefault();
		setData((initSate) => ({
			...initSate,
			[event.target.name]: event.target.value,
		}));
	}

	async function handleFormSubmission(
		event: React.FormEvent<HTMLFormElement>
	): Promise<void> {
		event.preventDefault();
		console.log("auth is: ", auth);
		// console.log("data before send: ", data);
		await axios
			.post(`${SEVER_BASE_URL}/contact/create-contact`, data, {
				headers: {
					Authorization: `Bearer ${auth}`,
				},
				validateStatus: (status) => {
					if (status >= 400) {
						toast.error("Failed to create contact.");
					}
					return true;
				},
			})
			.then((response) => {
				console.log("Response: ", response);
				toast.success("Contact created successfully!");
				// setData(intialData);
			})
			.catch((error) => {
				console.error("Error message: ", error.message);
				toast.error("Failed to create contact.");
				// setData(intialData);
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
						name={"firstName"}
						invalidMessage={"Required"}
					/>
					<AuthInput
						label={"Last Name"}
						type={"text"}
						onchange={handleInputChange}
						required
						name={"lastName"}
						invalidMessage={"Required"}
					/>
					<AuthInput
						label={"Email"}
						type={"email"}
						onchange={handleInputChange}
						required
						name={"email"}
						invalidMessage={"Required"}
					/>
					<AuthInput
						label={"Phone Number"}
						type={"tel"}
						onchange={handleInputChange}
						required
						name={"phone"}
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
