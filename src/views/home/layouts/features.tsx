import React from "react";

const Features: React.FC = () => {
	return (
		<div
			id="features"
			className={
				"text-lightText2 max-w-full mt-[-96px] h-[full] mx-auto py-8 text-center flex flex-col justify-center"
			}
		>
			<h2 className="text-center">Features Designed for Your Convenience</h2>
			<div className="h-[200px] text-center flex items-center justify-evenly bg-red-500 ">
				<div className="bg-red-400 flex flex-col items-center justify-evenly">
					<h3>Easy Contact Import/Export</h3>
					<p>
						Effortlessly import your contacts from various platforms and export
						them whenever needed. Say goodbye to manual data entry.
					</p>
				</div>
				<div className="bg-blue-400 flex flex-col items-center justify-evenly">
					<h3>Customizable Contact Fields</h3>
					<p>
						Tailor your contact fields to match your unique needs. Add custom
						tags, notes, and more to keep your contacts detailed and organized.
					</p>
				</div>
				<div className="bg-gray-400 flex flex-col items-center justify-evenly">
					<h3>Smart Search & Filter</h3>
					<p>
						Quickly find the contact you're looking for with our powerful search
						and filter capabilities. Spend less time searching and more time
						connecting.
					</p>
				</div>
				<div className="bg-green-400 flex flex-col items-center justify-evenly">
					<h3>Secure Data Storage</h3>
					<p>
						Your privacy is our priority. Our system uses advanced encryption to
						ensure your contact data is safe and secure.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Features;
