import type { FC } from "react";
import React from "react";

const HomePageContainer: FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<div className="w-full lg:min-w-[1024px] max-w-screen-lg h-auto flex flex-col">
			{children}
		</div>
	);
};
export default HomePageContainer;
