import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
			},
			animation: {
				custom_pulse: "custom_pulsing 1s linear infinite",
			},
			keyframes: {
				custom_pulsing: {
					"0%": {
						opacity: "100%",
					},
					"100%": {
						opacity: "20%",
					},
				},
			},
		},
	},
	plugins: [],
};
export default config;
