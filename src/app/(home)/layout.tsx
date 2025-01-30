import HomePageContainer from "@/components/Containers/HomePageContainer";
import MenuBarV2 from "@/components/Navigations/MenuBarV2";
import MobileMenu from "@/components/Navigations/MobileMenu";

export default function HomeLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<HomePageContainer>
			<MenuBarV2 />
			<MobileMenu />
			{children}
		</HomePageContainer>
	);
}
