import HomePageContainer from "@/components/Containers/HomePageContainer";
import MenuBar from "@/components/Navigations/MenuBar";

export default function HomeLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<HomePageContainer>
			<MenuBar />
			{children}
		</HomePageContainer>
	);
}
