import PageProvider from "@/context/PathProvider";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const matemasie = localFont({
	src: "./fonts/Matemasie.ttf",
	variable: "--font-matemasie",
	weight: "100",
	display: "swap",
	style: "normal",
});

const anonymous = localFont({
	src: "./fonts/Anonymous.ttf",
	variable: "--font-anonymous",
	weight: "100",
	display: "swap",
	style: "normal",
});

const matrix = localFont({
	src: "./fonts/Matrix.ttf",
	variable: "--font-matrix",
	weight: "100",
	display: "swap",
	style: "normal",
});

const sourceCode = localFont({
	src: "./fonts/sourceCode.ttf",
	variable: "--font-sourceCode",
	weight: "100",
	display: "swap",
	style: "normal",
});

export const metadata: Metadata = {
	title: "Sammy Barbacena | Full Stack Web Developer",
	description:
		"Experienced full stack web developer proficient in building dynamic, responsive web applications with expertise in frontend and backend technologies, including JavaScript, React, Node.js, and MongoDB.",
	keywords:
		"Sammy Barbacena, full stack developer, web developer, frontend, backend, React, Node.js, JavaScript, MongoDB, portfolio, fullstack development",
	openGraph: {
		title: "Sammy Barbacena | Full Stack Web Developer",
		description:
			"Showcasing my portfolio as a full stack developer with expertise in modern web technologies including React, Node.js, and MongoDB.",
		type: "website",
		url: "https://your-portfolio-url.com", // Replace with your actual portfolio URL
	},
	twitter: {
		card: "summary_large_image",
		site: "@yourTwitterHandle", // Replace with your Twitter handle if available
		title: "Sammy Barbacena | Full Stack Developer",
		description:
			"Check out my portfolio as a full stack developer with expertise in frontend and backend technologies.",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${matemasie.variable} ${sourceCode.variable} ${anonymous.variable} ${matrix.variable}`}>
			<PageProvider>
				<body className={`flex flex-col antialiased`}>{children}</body>
			</PageProvider>
		</html>
	);
}
