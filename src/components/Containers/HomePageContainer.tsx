import Image from "next/image";
import type { FC } from "react";
import React from "react";
import MatrixEffect from "./MatrixBackground";

const HomePageContainer: FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<div className="w-full relative overflow-auto  bg-black  h-auto flex flex-col  items-center min-h-screen">
			<div className="w-full min-h-full max-w-screen-2xl  h-auto overflow-auto  flex flex-col items-center">
				{children}
			</div>
			<Image
				fill
				src="/assets/background.webp"
				alt="background"
				objectFit="cover"
				className={`z-0 opacity-10 hidden`}
			/>
			<MatrixEffect />
		</div>
	);
};
export default HomePageContainer;
