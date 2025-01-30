"use client";
import { MENUS } from "@/contants/menus";
import { usePage } from "@/context/PathProvider";
import { useState } from "react";
import { GiSpiderWeb } from "react-icons/gi";
import MatrixTextAnimation from "../TextAnimation/MatrixTextAnimation";

const MenuBarV2 = ({}) => {
	const { setActivePageIndex, activePageIndex = 0 } = usePage();
	const [shouldReanimate, setShouldReanimate] = useState(false);
	return (
		<div
			className={`w-full max-w-screen-2xl flex z-30  h-[70px] bg-black flex-col md:flex-row justify-between items-center px-10`}>
			<div className="flex-row justify-between items-center gap-1 mt-2 md:mt-0 ">
				<h1
					onMouseDown={() => setActivePageIndex(0)}
					className="font-source-code text-2xl cursor-pointer font-extrabold text-[#9ffd32] ml-3 ">
					sam.dev
				</h1>
				<GiSpiderWeb className="text-[#9ffd32] text-4xl mt-2 hidden " />
			</div>
			<div className="flex flex-row justify-between items-center  w-full md:w-1/2 max-w-[600px]">
				{MENUS.map((menu, index: number) => {
					const isActive = activePageIndex === index;
					return (
						<button
							onClick={() => {
								setActivePageIndex(index);
								setShouldReanimate(!shouldReanimate);
							}}
							key={index}
							className={`cursor-pointer ${
								isActive ? " text-green-400 font-bold " : "text-transparent "
							} hover:text-green-400   font-source-code uppercase tracking-widest text-sm bg-clip-text bg-gradient-to-r font-bold from-green-400 to-green-600 `}>
							<MatrixTextAnimation
								text={menu.label}
								shouldReanimate={isActive}
								animationSpeed="fast"
							/>
						</button>
					);
				})}
			</div>
		</div>
	);
};
export default MenuBarV2;
