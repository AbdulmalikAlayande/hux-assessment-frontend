import React from "react";

const Features: React.FC = () => {
	return (
		<div
			id="features"
			className={
				"flex flex-col justify-evenly gap-10 text-lightText2 max-w-full h-[200vh] md:h-[80vh] lg:h-[80vh] mx-auto py-8 text-center"
			}
		>
			<h2 className="text-center text-3xl font-bold">
				Features Designed for Your Convenience
			</h2>
			<div className="h-[80%] md:h-[75%] lg:h-[75%] bg-slate-800 px-6 md:px-6 grid grid-cols-1 md:grid-cols-1 xl:grid-cols-4 gap-2 xl:gap-4">
				<div className="bg-red-400 flex flex-col items-center justify-evenly rounded-[20%]">
					<h3>Easy Contact Import/Export</h3>
					<p>
						Effortlessly import your contacts from various platforms
						and export them whenever needed. Say goodbye to manual
						data entry.
					</p>
				</div>
				<div className="bg-blue-400 flex flex-col items-center justify-evenly rounded-[20%]">
					<h3>Customizable Contact Fields</h3>
					<p>
						Tailor your contact fields to match your unique needs.
						Add custom tags, notes, and more to keep your contacts
						detailed and organized.
					</p>
				</div>
				<div className="bg-gray-400 flex flex-col items-center justify-evenly rounded-[20%]">
					<h3>Smart Search & Filter</h3>
					<p>
						Quickly find the contact you're looking for with our
						powerful search and filter capabilities. Spend less time
						searching and more time connecting.
					</p>
				</div>
				<div className="bg-green-400 flex flex-col items-center justify-evenly rounded-[20%]">
					<h3>Secure Data Storage</h3>
					<p>
						Your privacy is our priority. Our system uses advanced
						encryption to ensure your contact data is safe and
						secure.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Features;
