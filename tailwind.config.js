/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			transparent: "transparent",
			white: {
				100: "hsla(0, 0%, 100%, 1)",
				300: "hsla(0, 0%, 100%, 0.75)",
			},
			grey: {
				50: "hsla(0, 0%, 100%, 0.05)",
				300: "hsla(0, 0%, 80%, 0.69)",
				400: "hsla(0, 0%, 53%, 0.65)",
				500: "hsla(260, 1%, 42%, 1)",
			},
			black: "hsla(255, 7%, 11%, 1)",
			purple: {
				200: "hsla(266, 100%, 67%, 1)",
				400: "hsla(266, 77%, 36%, 1)",
			},
			red: "hsla(349, 91%, 31%, 1)",
		},
		fontFamily: {
			roboto: ["Roboto", "sans-serif"],
			inria: ["Inria Serif", "serif"],
			playfair: ["Playfair Display", "serif"],
			sacramento: ["Sacramento", "cursive"],
			"clashfont-semi": ["ClashDisplaySemi"],
			"clashfont-medium": ["ClashDisplayMedium"],
		},
		screens: {
			vxs: "375px",
			xs: "450px",
			vsm: "500px",
			sm: "600px",
			md: "768px",
			mod: "830px",
			lg: "1024px",
			xl: "1180px",
			"2xl": "1280px",
			"3xl": "1440px",
			"4xl": "1540px",
		},
		extend: {
			gridTemplateColumns: {
				aboutUs: "200px minmax(900px, 1fr) 100px",
			},
			boxShadow: {
				"4xl": "0 2px 8px 0px rgba(0, 0, 0, 0.10)",
			},
		},
	},
	plugins: [],
};
