"use client";
import ContactSection from "@/components/HomePage/Contact";
import ExperienceScreen from "@/components/HomePage/Experience";
import ProjectScreen from "@/components/HomePage/ProjectScreen";
import HomePageV2 from "@/components/HomePageV2";
import { usePage } from "@/context/PathProvider";

export default function Home() {
	const { activePageIndex } = usePage();

	const pages = [
		<HomePageV2 key={0} />,
		<ProjectScreen key={1} />,
		<ExperienceScreen key={2} />,
		<ContactSection key={3} />,
	];

	return (
		<div className="relative w-full min-h-[calc(100vh-70px)] h-auto z-10 overflow-hidden">
			<div
				className="absolute w-full h-full flex transition-transform duration-500 ease-in-out"
				style={{
					transform: `translateX(-${activePageIndex * 100}%)`,
				}}>
				{pages.map((customPage, index) => (
					<div key={index} className={`w-full h-auto  flex-shrink-0 `}>
						{customPage}
					</div>
				))}
			</div>
		</div>
	);
}
