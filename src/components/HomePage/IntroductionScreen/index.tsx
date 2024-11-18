import type { FC } from "react";
import Greeting from "./Greeting";

const IntroductionScreen: FC = ({}) => {
	return (
		<section
			id="home"
			className="w-full flex flex-col lg:flex-row h-screen  items-center gap-20">
			<Greeting />
		</section>
	);
};
export default IntroductionScreen;
