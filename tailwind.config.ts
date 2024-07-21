/** @type {import('tailwindcss').Config} */
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				bodyColor: "#212428",
				lightText: "#00df9a",
				buttonColor: "#00df9a",
				boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
				designColor: "#ff014f",
			},
		},
	},
	plugins: [tailwindcss, autoprefixer],
};
