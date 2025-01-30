import AboutMe from "./AboutMe";
import ProfileOverview from "./ProfileOverview";

const HomePageV2 = ({}) => {
	return (
		<div className="w-full  min-h-[calc(100vh-80px)] h-auto flex items-center  flex-col-reverse md:flex-row md:items-start gap-5 md:justify-between  px-10">
			<ProfileOverview />
			<AboutMe />
		</div>
	);
};
export default HomePageV2;
