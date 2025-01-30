"use client";
import {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useContext,
	useState,
	type FC,
} from "react";

export interface PageProviderState {
	activePageIndex: number;
	setActivePageIndex: Dispatch<SetStateAction<number>>;
	isMobileMenuOpen: boolean;
	setIsMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
}
export const PathContext = createContext<PageProviderState>(
	{} as PageProviderState
);
export function usePage(): PageProviderState {
	return useContext(PathContext);
}
const PageProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [activePageIndex, setActivePageIndex] = useState(0);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(true);
	return (
		<PathContext.Provider
			value={{
				activePageIndex,
				setActivePageIndex,
				isMobileMenuOpen,
				setIsMobileMenuOpen,
			}}>
			{children}
		</PathContext.Provider>
	);
};
export default PageProvider;
