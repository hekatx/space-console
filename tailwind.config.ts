import { type Config } from "tailwindcss";

export default {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			amber: {
				main: "rgb(255, 170, 60)",
				alt: "rgb(120, 75, 20)",
			},
			black: "#12100d",
		},
		extend: {
			keyframes: {
				zigZag: {
					"0%": {
						left: "0",
						transform: "translateX(-1%)",
					},
					"100%": {
						left: "100%",
						transform: "translateX(-99%)",
					},
				},
				flip: {
					"0%": {
						transform: "perspective(200px) rotateX(0deg) rotateY(0deg)",
					},
					"50%": {
						transform: "perspective(200px) rotateX(-180deg) rotateY(0deg)",
					},
					"100%": {
						transform: "perspective(200px) rotateX(-180deg) rotateY(-180deg)",
					},
				},
			},
		},
	},
	plugins: [],
} satisfies Config;
