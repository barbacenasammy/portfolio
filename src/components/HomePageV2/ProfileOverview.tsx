"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const DeveloperMenu = [
	"Strategic Thinking",
	"Flowcharts that make sense",
	"Database Sorcery",
	"Coding",
	"More Coding",
	"Debugging My Own Code Like It's Someone Else's",
	"Deploying and Hoping for the Best",
	"Fixing Bugs I Swore Weren't There Before",
	"Performance Tuning AKA Speed Magic",
];

const ProfileOverview = () => {
	const [activeMenu, setActiveMenu] = useState<string>(DeveloperMenu[0]);

	useEffect(() => {
		const intervalId = setInterval(() => {
			const currentIndex = DeveloperMenu.indexOf(activeMenu);
			const nextIndex = (currentIndex + 1) % DeveloperMenu.length;
			setActiveMenu(DeveloperMenu[nextIndex]);
		}, 1500);

		return () => clearInterval(intervalId);
	}, [activeMenu]);
	return (
		<div className="relative md:w-1/2 w-full max-w-[500px] min-h-[calc(100vh-100px)] pt-10  flex flex-col items-center justify-between gap-10">
			<div className="bg-black border-2 border-green-800 p-5 w-full flex flex-col rounded-xl   max-h-fit mt-1  md:self-end md:mb-10">
				<div className="relative w-[200px] h-[200px] rounded-xl self-center overflow-hidden  mt-10 mb-10">
					<Image
						src="/assets/profile-with-shades.png"
						alt="profile"
						fill
						objectFit="cover"
						priority={true}
						loading="eager"
					/>
				</div>

				<h1 className="text-xl font-bold font-source-code">
					What’s on my developer menu?
				</h1>
				{DeveloperMenu.map((item, index) => (
					<h6
						key={index}
						className={`flex flex-row items-center gap-1 my-3 text-sm font-source-code ${
							activeMenu === item ? "text-green-400" : "text-white"
						}`}>
						* {item}
					</h6>
				))}
			</div>
		</div>
	);
};
export default ProfileOverview;
