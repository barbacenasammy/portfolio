import HomePageContainer from "@/components/Containers/HomePageContainer";
import MenuBarV2 from "@/components/Navigations/MenuBarV2";

export default function HomeLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<HomePageContainer>
			<MenuBarV2 />
			{children}
		</HomePageContainer>
	);
}
