import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
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
		title: "Sammy Barbacena | Full Stack Web Developer",
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
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col items-center min-w-screen`}>
				{children}
			</body>
		</html>
	);
}
