"use client";
import { MENUS } from "@/contants/menus";
import { useEffect, useState } from "react";

const MenuBar = ({}) => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setIsVisible(true);
		}, 1000);
	}, []);

	return (
		<div className=" fixed left-1/2 transform -translate-x-1/2 top-0 flex flex-col z-50 w-full lg:w-auto">
			<div
				className={`w-full flex z-30 lg:w-[650px] lg:sticky h-[70px] bg-[#211F23] ld:px-4 lg:px-10  lg:mt-2 self-center flex-row justify-evenly items-center
		 transform transition-all delay-100  duration-200 ease-in  ${
				isVisible ? " opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
			} lg:mx-auto`}>
				<>
					{MENUS.map((menu, index: number) => (
						<a
							href={menu.path}
							key={index}
							className="cursor-pointer text-sm md:text-lg text-white hover:text-blue-600">
							{menu.label}
						</a>
					))}
				</>
			</div>
		</div>
	);
};
export default MenuBar;
