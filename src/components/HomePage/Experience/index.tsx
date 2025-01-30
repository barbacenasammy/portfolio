"use client";
import { useState, type FC } from "react";

const Experience = [
	{
		position: "Junior Full-Stack Web Developer",
		company: "Play It Fwd Pte Ltd.",
		date: "Mar 2022 - January 2025",
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
		position: "Sales and Technical Support",
		company: "The Joshua Corporation",
		date: "May 2016 - Oct 2019",
		responsibilities: [
			"Installing, configuring, and maintaining software programs to ensure smooth operations.",
			"Design and Create Promotional Posters for Sales Campaigns.",
			"Handling sales processes, managing customer inquiries, and providing assistance to ensure a positive user experience.",
			"Overseeing daily inventory and sales tracking, ensuring accurate reporting and efficient stock management.",
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
	const [expandedIndex, setExpandedIndex] = useState<number>(0);
	return (
		<div className="w-full overflow-auto flex flex-col gap-4 pb-5 px-10 mt-10 font-source-code">
			<h1 className="relative text-[25px] lg:text-[50px] font-source-code font-[900] text-[#2323ff] text-shadow-lg  text-shadow-blue-400">
				My Digital <span className="text-[#ff073a]">Awakening</span>
				<span className="absolute top-0.5 ext-[25px] lg:text-[50px] -left-0.5 text-blue-300 font-extrabold -z-30">
					My Digital <span className="text-red-300">Awakening</span>
				</span>
			</h1>
			{Experience.map((experience, index) => {
				const isExpanded = expandedIndex === index + 1;
				return (
					<div
						onMouseDown={() =>
							setExpandedIndex((prev) => (prev === index + 1 ? 0 : index + 1))
						}
						key={index}
						className={`w-full transition-max-height duration-1000 ease-out cursor-pointer relative max-w-[800px] border border-black px-4 py-2 md:px-10 md:py-5 rounded-md bg-gray-600 bg-opacity-45 backdrop-blur-md overflow-hidden ${
							isExpanded ? "max-h-fit pb-5" : "max-h-[120px] pb-0"
						}`}>
						<h4 className="font-bold text-lg lg:text-2xl">
							{experience.position}
						</h4>
						<h6 className="font-semibold text-sm lg:text-base text-gray-300">
							{experience.company}
						</h6>
						<h6 className="text-xs lg:text-sm text-green-400 font-bold">
							{experience.date}
						</h6>

						<ol
							className={`list-disc ml-5 font-source-code text-gray-300 text-[12px] lg:text-[14px] font-thin mt-5 ${
								isExpanded ? "block" : "hidden"
							}`}>
							{experience.responsibilities.map((responsibility, index) => (
								<li key={index}>{responsibility}</li>
							))}
						</ol>
					</div>
				);
			})}
		</div>
	);
};
export default ExperienceScreen;
