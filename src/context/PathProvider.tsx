"use client";
import { usePathname } from "next/navigation";
import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
	type FC,
} from "react";

export interface PathProviderState {
	currentHash: string;
}
export const PathContext = createContext<PathProviderState>(
	{} as PathProviderState
);
export function usePath(): PathProviderState {
	return useContext(PathContext);
}
const PathProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [currentHash, setCurrentHash] = useState<string>("");
	const pathName = usePathname();

	useEffect(() => {
		const handleHashChange = () => {
			setCurrentHash(window.location.hash || "#");
		};

		// Listen to 'hashchange' events
		window.addEventListener("hashchange", handleHashChange);

		// Handle initial load in case there is already a hash in the URL
		handleHashChange();

		return () => {
			window.removeEventListener("hashchange", handleHashChange);
		};
	}, [pathName]);

	return (
		<PathContext.Provider value={{ currentHash }}>
			{children}
		</PathContext.Provider>
	);
};
export default PathProvider;
