import type { FC } from "react";
import { MdOpenInNew } from "react-icons/md";
import { ProjectType } from ".";

const ProjectCards: FC<{ project: ProjectType }> = ({ project }) => {
	return (
		<div className="relative h-56 w-[300px] overflow-hidden mt-5 rounded-lg hover:shadow-md hover:shadow-green-500">
			<div className="relative z-40 translate-y-0  transform w-full h-full border-2 flex flex-col border-gray-900 transition-all delay-100 p-5 duration-200 ease-in group-hover:translate-y-0  bg-gray-900 bg-opacity-70 backdrop-blur-sm ">
				<h1 className="font-bold text-lg md:text-2xl text-green-400 ">
					{project.title}
				</h1>
				<h1 className=" text-sm md:font-base  text-gray-200 mt-2 font-source-code font-bold">
					Dev Work
				</h1>
				<ol className="text-left font-source-code mt-2 list-disc text-sm ml-5 text-[12px] lg:text-[14px] font-thin text-gray-400">
					{project.contributions.map((contribution, index) => {
						return (
							<li key={index} className="text-left">
								{contribution}
							</li>
						);
					})}
				</ol>
				<div className="flex flex-row gap-2 mt-5 ">
					{project.techStacks?.map((stack, index) => {
						return (
							<div
								key={index}
								className="text-sm lg:text-[16px] font-thin text-gray-400">
								{stack}
							</div>
						);
					})}
				</div>
				<MdOpenInNew
					onClick={() => window.open(project.link, "_blank")}
					className="absolute text-lg top-4 right-4 text-center rounded-md text-green-500 cursor-pointer transition-all duration-200 hover:scale-110"
				/>
			</div>
		</div>
	);
};
export default ProjectCards;
