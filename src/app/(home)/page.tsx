"use client";
import ExperienceScreen from "@/components/HomePage/Experience";
import ContactSection from "@/components/HomePage/Contact";
import IntroductionScreen from "@/components/HomePage/IntroductionScreen";
import ProjectScreen from "@/components/HomePage/ProjectScreen";

export default function Home() {
	// useEffect(() => {
	// 	const observer = new IntersectionObserver(
	// 		(entries) => {
	// 			entries.forEach((entry) => {
	// 				// If the section is partially visible (more than 50% visible)
	// 				if (entry.isIntersecting && entry.intersectionRatio < 1) {
	// 					entry.target.scrollIntoView({
	// 						behavior: "smooth",
	// 						block: "start",
	// 					});
	// 				}
	// 			});
	// 		},
	// 		{
	// 			threshold: [0.5], // Trigger when at least 50% of the section is visible
	// 		}
	// 	);

	// 	const sections = document.querySelectorAll("section");
	// 	sections.forEach((section) => observer.observe(section));

	// 	return () => {
	// 		// Cleanup the observer on component unmount
	// 		sections.forEach((section) => observer.unobserve(section));
	// 	};
	// }, []);
	return (
		<div className="w-full px-5  h-auto ">
			<IntroductionScreen />
			<ProjectScreen />
			<ExperienceScreen />
			<ContactSection />
		</div>
	);
}
