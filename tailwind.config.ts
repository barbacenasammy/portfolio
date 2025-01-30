import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				matemasie: ["var(--font-matemasie)"],
				"source-code": ["var(--font-sourceCode)"],
				anonymous: ["var(--font-anonymous)"],
				matrix: ["var(--font-matrix)"],
			},
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
			},
			animation: {
				custom_pulse: "custom_pulsing 1s linear infinite",
				change: "change 6s ease-in-out infinite",
			},
			keyframes: {
				custom_pulsing: {
					"0%": {
						opacity: "30%",
					},
					"70%": {
						opacity: "100%",
					},
					"90%": {
						opacity: "30%",
					},
					"100%": {
						opacity: "100%",
					},
				},
				change: {
					"0%": { marginTop: "0" },
					"15%": { marginTop: "0" },
					"25%": { marginTop: "-40px" },
					"40%": { marginTop: "-40px" },
					"50%": { marginTop: "-80px" },
					"65%": { marginTop: "-80px" },
					"75%": { marginTop: "-40px" },
					"85%": { marginTop: "-40px" },
					"100%": { marginTop: "0" },
				},
			},
			transitionProperty: {
				"max-height": "max-height",
			},
		},
	},
	plugins: [],
};
export default config;
