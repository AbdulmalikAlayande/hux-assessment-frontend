const tailwindcss = require("tailwindcss");

module.exports = {
	webpack: {
		configure: {
			resolve: {
				extensions: [".ts", ".tsx"],
			},
		},
	},
	style: {
		postcss: {
			plugins: [tailwindcss, require("autoprefixer")],
		},
	},
};
