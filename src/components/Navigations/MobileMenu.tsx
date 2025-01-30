"use client";
import { MENUS } from "@/contants/menus";
import { usePage } from "@/context/PathProvider";
import MatrixTextAnimation from "../TextAnimation/MatrixTextAnimation";

const MobileMenu = () => {
	const {
		isMobileMenuOpen,
		activePageIndex,
		setActivePageIndex,
		setIsMobileMenuOpen,
	} = usePage();
	return (
		<div
			className={`w-full absolute duration-300 flex flex-col top-0 z-50 md:hidden h-screen transition-transform bg-black pt-10 ${
				isMobileMenuOpen ? "translate-x-0" : "translate-x-full "
			}`}>
			<div className="flex-row flex justify-between items-center self-center gap-1 mt-2 mb-5 md:mt-0 ">
				<h1
					onMouseDown={() => setActivePageIndex(0)}
					className="font-source-code text-2xl cursor-pointer font-extrabold text-[#9ffd32] ml-3 ">
					sam.dev
				</h1>
			</div>
			<div className="flex flex-col justify-between items-center  w-full md:w-1/2 max-w-[600px] gap-2">
				{MENUS.map((menu, index: number) => {
					const isActive = activePageIndex === index;
					return (
						<button
							onClick={() => {
								setActivePageIndex(index);
								setIsMobileMenuOpen(false);
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
export default MobileMenu;
