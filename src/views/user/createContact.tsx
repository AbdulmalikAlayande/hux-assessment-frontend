import React from "react";

const CreateContact: React.FC = () => {
	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
			<div className="bg-white p-6 rounded-lg shadow-lg">
				<h2 className="text-2xl font-bold mb-4">Create Contact</h2>
				<form className="space-y-4">
					<div>
						<label htmlFor="name" className="block font-medium">
							Name
						</label>
						<input
							type="text"
							id="name"
							className="w-full border border-gray-300 rounded-md px-3 py-2"
						/>
					</div>
					<div>
						<label htmlFor="email" className="block font-medium">
							Email
						</label>
						<input
							type="email"
							id="email"
							className="w-full border border-gray-300 rounded-md px-3 py-2"
						/>
					</div>
					<div>
						<label htmlFor="phone" className="block font-medium">
							Phone
						</label>
						<input
							type="tel"
							id="phone"
							className="w-full border border-gray-300 rounded-md px-3 py-2"
						/>
					</div>
					<div className="flex justify-end">
						<button
							type="submit"
							className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
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
