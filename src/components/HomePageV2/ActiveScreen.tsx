import type { FC } from "react";

interface ActiveScreenProps {
	children: React.ReactNode;
}

const ActiveScreen: FC<ActiveScreenProps> = ({ children }) => {
	return (
		<div className="bg-gray-400 w-full lg:w-6/12 relative min-h-[400px]">
			{children}
		</div>
	);
};
export default ActiveScreen;
