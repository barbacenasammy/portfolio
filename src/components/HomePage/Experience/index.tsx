import type { FC } from "react";

const Experience = [
	{
		position: "Full-Stack Web Developer",
		company: "Play It Fwd Pte Ltd.",
		date: "Mar 2022 - Present",
		responsibilities: [
			"Overseeing the full software development life cycle, from conceptionto deployment and post-launch maintenance.",
			"Managing development stages, including analysis, coding, testing, and deployment.",
			"Leading automated testing efforts and reporting progress to management.",
			"Updating and testing enhancements to existing software.",
		],
	},
	{
		position: "IT Specialist",
		company: "726 - Excellent MSG., Inc.",
		date: "Mar 2020 - Mar 2022",
		responsibilities: [
			"Developing, maintaining, and upgrading software applications post deployment.",
			"Managing the full software development lifecycle, from design to deployment and maintenance. ",
			"Providing IT support, troubleshooting, and debugging for application issues, ensuring minimal downtime.",
			"Installing, configuring, and setting up programs, as well as making modifications and running tests on existing software for continuous improvement.",
		],
	},
	{
		position: "Programmer",
		company: "Tabaco-Liberty Commercial Center, Inc",
		date: "Jun 2015 - Jan 2016",
		responsibilities: [
			"Developing, maintaining, and upgrading software applications post deployment.",
			"Managing the full software development lifecycle, from design to deployment and maintenance. ",
			"Providing IT support, troubleshooting, and debugging for application issues, ensuring minimal downtime.",
			"Installing, configuring, and setting up programs, as well as making modifications and running tests on existing software for continuous improvement.",
		],
	},
];

const ExperienceScreen: FC = ({}) => {
	return (
		<section
			id="experience"
			className="w-full h-auto pt-20 lg:pt-24 flex flex-col gap-4">
			<h1 className="text-[30px] lg:text-[60px]">Experience</h1>
			{Experience.map((experience, index) => {
				return (
					<div
						key={index}
						className="w-full relative max-w-[800px] border border-gray-600 px-4 py-2 md:px-10 md:py-5 rounded-md bg-gray-600 bg-opacity-45 backdrop-blur-md">
						<h4 className="font-bold text-lg lg:text-2xl">
							{experience.position}
						</h4>
						<h6 className="font-semibold text-sm lg:text-base">
							{experience.company}
						</h6>
						<h6 className="text-xs lg:text-sm text-gray-400">
							{experience.date}
						</h6>
						<h6 className="mt-2 text-[12px] lg:text-[14px]">
							Responsibilities:
						</h6>
						<ol className="list-disc ml-5 text-[12px] lg:text-[14px] font-thin">
							{experience.responsibilities.map((responsibility, index) => {
								return <li key={index}>{responsibility}</li>;
							})}
						</ol>
					</div>
				);
			})}
		</section>
	);
};
export default ExperienceScreen;
