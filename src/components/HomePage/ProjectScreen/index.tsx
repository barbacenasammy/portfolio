"use client";
import {
	SiFigma,
	SiFirebase,
	SiGraphite,
	SiGraphql,
	SiMongodb,
	SiNestjs,
	SiNextdotjs,
	SiOpenai,
	SiPayloadcms,
	SiSolana,
	SiTelegram,
	SiWeb3Dotjs,
} from "react-icons/si";
import ProjectCards from "./ProjectCards";

const Projects = [
	{
		title: "Fwen.IO",
		image: "/projects/pif-games.png",
		alt: "telegram",
		link: "https://t.me/my_fwen_bot",
		contributions: ["Admin CMS", "UI Conversion", "Backend Features"],
		techStacks: [
			<div key="SiNextdotjs" className="relative group cursor-default ">
				<SiNextdotjs className="text-lg text-gray-400" />
				<span className="absolute -top-5  left-1/2 -translate-x-1/2 z-50 hidden whitespace-nowrap rounded text-[10px] px-2 py-0 bg-gray-700 text-white opacity-0 transition-opacity duration-200 group-hover:block group-hover:opacity-100">
					Next JS
				</span>
			</div>,
			<div key="SiFigma" className="relative group cursor-default ">
				<SiFigma className="text-lg" />
				<span className="absolute -top-5  left-1/2 -translate-x-1/2 z-50 hidden whitespace-nowrap rounded text-[10px] px-2 py-0 bg-gray-700 text-white opacity-0 transition-opacity duration-200 group-hover:block group-hover:opacity-100">
					Figma
				</span>
			</div>,
			<div key="SiNestjs" className="relative group cursor-default ">
				<SiNestjs className="text-lg text-gray-400" />
				<span className="absolute -top-5  left-1/2 -translate-x-1/2 z-50 hidden whitespace-nowrap rounded text-[10px] px-2 py-0 bg-gray-700 text-white opacity-0 transition-opacity duration-200 group-hover:block group-hover:opacity-100">
					Nest JS
				</span>
			</div>,
			<div key={"SiOpenai"} className="relative group cursor-default ">
				<SiOpenai className="text-lg" />
				<span className="absolute -top-5  -left-2 z-50 hidden whitespace-nowrap rounded text-[10px] px-2 py-0 bg-gray-700 text-white opacity-0 transition-opacity duration-200 group-hover:block group-hover:opacity-100">
					Open AI
				</span>
			</div>,
			<div key={"SiTelegram"} className="relative group cursor-default ">
				<SiTelegram className="text-lg" />
				<span className="absolute -top-5  -left-2 z-50 hidden whitespace-nowrap rounded text-[10px] px-2 py-0 bg-gray-700 text-white opacity-0 transition-opacity duration-200 group-hover:block group-hover:opacity-100">
					Telegram
				</span>
			</div>,
		],
	},
	{
		title: "PIF Fwen",
		image: "/projects/fwen.png",
		alt: "fwen",
		link: "https://app.fwen.io/",
		contributions: [
			"Referral System",
			"Web 3 Wallet Connection",
			"Backend Features",
		],
		techStacks: [
			<div key={"SiGraphite"} className="relative group cursor-default ">
				<SiGraphite className="text-lg text-gray-400" />
				<span className="absolute -top-5  left-1/2 -translate-x-1/2 z-50 hidden whitespace-nowrap rounded text-[10px] px-2 py-0 bg-gray-700 text-white opacity-0 transition-opacity duration-200 group-hover:block group-hover:opacity-100">
					Viral Loops
				</span>
			</div>,
			<div key={"SiNextdotjs"} className="relative group cursor-default ">
				<SiNextdotjs className="text-lg text-gray-400" />
				<span className="absolute -top-5  left-1/2 -translate-x-1/2 z-50 hidden whitespace-nowrap rounded text-[10px] px-2 py-0 bg-gray-700 text-white opacity-0 transition-opacity duration-200 group-hover:block group-hover:opacity-100">
					Next JS
				</span>
			</div>,
			<div key="SiNestjs" className="relative group cursor-default ">
				<SiNestjs className="text-lg text-gray-400" />
				<span className="absolute -top-5  left-1/2 -translate-x-1/2 z-50 hidden whitespace-nowrap rounded text-[10px] px-2 py-0 bg-gray-700 text-white opacity-0 transition-opacity duration-200 group-hover:block group-hover:opacity-100">
					Nest JS
				</span>
			</div>,
			<div key="SiFigma" className="relative group cursor-default ">
				<SiFigma className="text-lg" />
				<span className="absolute -top-5  left-1/2 -translate-x-1/2 z-50 hidden whitespace-nowrap rounded text-[10px] px-2 py-0 bg-gray-700 text-white opacity-0 transition-opacity duration-200 group-hover:block group-hover:opacity-100">
					Figma
				</span>
			</div>,
		],
	},
	{
		title: "PIF Fwen AI",
		image: "/projects/fwen-ai.png",
		alt: "fwen-ai",
		link: "https://my.fwen.io/welcome",
		contributions: [
			"AI Integration",
			"Elevenlabs Integration",
			"Backend Features",
		],
		techStacks: [
			<div key={"SiNextdotjs"} className="relative group cursor-default ">
				<SiNextdotjs className="text-lg text-gray-400" />
				<span className="absolute -top-5  left-1/2 -translate-x-1/2 z-50 hidden whitespace-nowrap rounded text-[10px] px-2 py-0 bg-gray-700 text-white opacity-0 transition-opacity duration-200 group-hover:block group-hover:opacity-100">
					Next JS
				</span>
			</div>,
			<div key="SiNestjs" className="relative group cursor-default ">
				<SiNestjs className="text-lg text-gray-400" />
				<span className="absolute -top-5  left-1/2 -translate-x-1/2 z-50 hidden whitespace-nowrap rounded text-[10px] px-2 py-0 bg-gray-700 text-white opacity-0 transition-opacity duration-200 group-hover:block group-hover:opacity-100">
					Nest JS
				</span>
			</div>,
			<div key={"SiOpenai"} className="relative group cursor-default ">
				<SiOpenai className="text-lg" />
				<span className="absolute -top-5  -left-2 z-50 hidden whitespace-nowrap rounded text-[10px] px-2 py-0 bg-gray-700 text-white opacity-0 transition-opacity duration-200 group-hover:block group-hover:opacity-100">
					Open AI
				</span>
			</div>,
			<div key="SiFigma" className="relative group cursor-default ">
				<SiFigma className="text-lg" />
				<span className="absolute -top-5  left-1/2 -translate-x-1/2 z-50 hidden whitespace-nowrap rounded text-[10px] px-2 py-0 bg-gray-700 text-white opacity-0 transition-opacity duration-200 group-hover:block group-hover:opacity-100">
					Figma
				</span>
			</div>,
		],
	},
	{
		title: "Payload CMS",
		image: "/projects/payload-cms.png",
		alt: "payload-cms",
		link: "https://fwen-payload-cms-569790412483.asia-southeast1.run.app/admin/login",
		contributions: ["AI Fine-tuning", "Custom Components", "Backend Features"],
		techStacks: [
			<div key={"SiOpenai"} className="relative group cursor-default ">
				<SiOpenai className="text-lg" />
				<span className="absolute -top-5  -left-2 z-50 hidden whitespace-nowrap rounded text-[10px] px-2 py-0 bg-gray-700 text-white opacity-0 transition-opacity duration-200 group-hover:block group-hover:opacity-100">
					Open AI
				</span>
			</div>,
			<div key={"SiPayloadcms"} className="relative group cursor-default ">
				<SiPayloadcms className="text-lg" />
				<span className="absolute -top-5  left-1/2 -translate-x-1/2 z-50 hidden whitespace-nowrap rounded text-[10px] px-2 py-0 bg-gray-700 text-white opacity-0 transition-opacity duration-200 group-hover:block group-hover:opacity-100">
					Payload CMS
				</span>
			</div>,
			<div key="SiNestjs" className="relative group cursor-default ">
				<SiNestjs className="text-lg text-gray-400" />
				<span className="absolute -top-5  left-1/2 -translate-x-1/2 z-50 hidden whitespace-nowrap rounded text-[10px] px-2 py-0 bg-gray-700 text-white opacity-0 transition-opacity duration-200 group-hover:block group-hover:opacity-100">
					Nest JS
				</span>
			</div>,
			<div key={"SiMongodb"} className="relative group cursor-default ">
				<SiMongodb className="text-lg text-gray-400" />
				<span className="absolute -top-5  left-1/2 -translate-x-1/2 z-50 hidden whitespace-nowrap rounded text-[10px] px-2 py-0 bg-gray-700 text-white opacity-0 transition-opacity duration-200 group-hover:block group-hover:opacity-100">
					Mongodb
				</span>
			</div>,
		],
	},
	{
		title: "Fwen Presale",
		image: "/projects/presale.png",
		alt: "presale",
		link: "https://devnet-presale.fwen.io/",
		contributions: [
			"UI Conversion",
			"Backend Features",
			"Solana Web3 Wallet / Smart Contract",
		],
		techStacks: [
			<div key={"SiWeb3Dotjs"} className="relative group cursor-default ">
				<SiWeb3Dotjs className="text-lg text-gray-400" />
				<span className="absolute -top-5  left-1/2 -translate-x-1/2 z-50 hidden whitespace-nowrap rounded text-[10px] px-2 py-0 bg-gray-700 text-white opacity-0 transition-opacity duration-200 group-hover:block group-hover:opacity-100">
					Web3
				</span>
			</div>,
			<div key={"SiSolana"} className="relative group cursor-default ">
				<SiSolana className="text-lg text-gray-400" />
				<span className="absolute -top-5  left-1/2 -translate-x-1/2 z-50 hidden whitespace-nowrap rounded text-[10px] px-2 py-0 bg-gray-700 text-white opacity-0 transition-opacity duration-200 group-hover:block group-hover:opacity-100">
					Solana
				</span>
			</div>,
			<div key={"SiFirebase"} className="relative group cursor-default ">
				<SiFirebase className="text-lg text-gray-400" />
				<span className="absolute -top-5  left-1/2 -translate-x-1/2 z-50 hidden whitespace-nowrap rounded text-[10px] px-2 py-0 bg-gray-700 text-white opacity-0 transition-opacity duration-200 group-hover:block group-hover:opacity-100">
					Firebase
				</span>
			</div>,
			<div key={"SiNextdotjs"} className="relative group cursor-default ">
				<SiNextdotjs className="text-lg text-gray-400" />
				<span className="absolute -top-5  left-1/2 -translate-x-1/2 z-50 hidden whitespace-nowrap rounded text-[10px] px-2 py-0 bg-gray-700 text-white opacity-0 transition-opacity duration-200 group-hover:block group-hover:opacity-100">
					Next JS
				</span>
			</div>,
			<div key={"SiGraphql"} className="relative group cursor-default ">
				<SiGraphql className="text-lg text-gray-400" />
				<span className="absolute -top-5  left-1/2 -translate-x-1/2 z-50 hidden whitespace-nowrap rounded text-[10px] px-2 py-0 bg-gray-700 text-white opacity-0 transition-opacity duration-200 group-hover:block group-hover:opacity-100">
					GraphQL
				</span>
			</div>,
			<div key="SiFigma" className="relative group cursor-default ">
				<SiFigma className="text-lg" />
				<span className="absolute -top-5  left-1/2 -translate-x-1/2 z-50 hidden whitespace-nowrap rounded text-[10px] px-2 py-0 bg-gray-700 text-white opacity-0 transition-opacity duration-200 group-hover:block group-hover:opacity-100">
					Figma
				</span>
			</div>,
		],
	},
	{
		title: "PIF Quests",
		image: "/projects/quest.png",
		alt: "quests",
		link: "https://v1.playitfwd.io/",
		contributions: ["Admin CMS", "UI Conversion", "Backend Features"],
		techStacks: [
			<div key={"SiNextdotjs"} className="relative group cursor-default ">
				<SiNextdotjs className="text-lg text-gray-400" />
				<span className="absolute -top-5  left-1/2 -translate-x-1/2 z-50 hidden whitespace-nowrap rounded text-[10px] px-2 py-0 bg-gray-700 text-white opacity-0 transition-opacity duration-200 group-hover:block group-hover:opacity-100">
					Next JS
				</span>
			</div>,
			<div key={"SiGraphql"} className="relative group cursor-default ">
				<SiGraphql className="text-lg text-gray-400" />
				<span className="absolute -top-5  left-1/2 -translate-x-1/2 z-50 hidden whitespace-nowrap rounded text-[10px] px-2 py-0 bg-gray-700 text-white opacity-0 transition-opacity duration-200 group-hover:block group-hover:opacity-100">
					GraphQL
				</span>
			</div>,
			<div key={"SiFirebase"} className="relative group cursor-default ">
				<SiFirebase className="text-lg text-gray-400" />
				<span className="absolute -top-5  left-1/2 -translate-x-1/2 z-50 hidden whitespace-nowrap rounded text-[10px] px-2 py-0 bg-gray-700 text-white opacity-0 transition-opacity duration-200 group-hover:block group-hover:opacity-100">
					Firebase
				</span>
			</div>,
			<div key="SiFigma" className="relative group cursor-default ">
				<SiFigma className="text-lg" />
				<span className="absolute -top-5  left-1/2 -translate-x-1/2 z-50 hidden whitespace-nowrap rounded text-[10px] px-2 py-0 bg-gray-700 text-white opacity-0 transition-opacity duration-200 group-hover:block group-hover:opacity-100">
					Figma
				</span>
			</div>,
		],
	},
	{
		title: "PIF Games",
		image: "/projects/pif-games.png",
		alt: "games",
		link: "https://app.pifnation.com/games",
		contributions: ["Admin CMS", "UI Conversion", "Backend Features"],
		techStacks: [
			<div key={"SiNextdotjs"} className="relative group cursor-default ">
				<SiNextdotjs className="text-lg text-gray-400" />
				<span className="absolute -top-5  left-1/2 -translate-x-1/2 z-50 hidden whitespace-nowrap rounded text-[10px] px-2 py-0 bg-gray-700 text-white opacity-0 transition-opacity duration-200 group-hover:block group-hover:opacity-100">
					Next JS
				</span>
			</div>,
			<div key={"SiGraphql"} className="relative group cursor-default ">
				<SiGraphql className="text-lg text-gray-400" />
				<span className="absolute -top-5  left-1/2 -translate-x-1/2 z-50 hidden whitespace-nowrap rounded text-[10px] px-2 py-0 bg-gray-700 text-white opacity-0 transition-opacity duration-200 group-hover:block group-hover:opacity-100">
					GraphQL
				</span>
			</div>,
			<div key={"SiFirebase"} className="relative group cursor-default ">
				<SiFirebase className="text-lg text-gray-400" />
				<span className="absolute -top-5  left-1/2 -translate-x-1/2 z-50 hidden whitespace-nowrap rounded text-[10px] px-2 py-0 bg-gray-700 text-white opacity-0 transition-opacity duration-200 group-hover:block group-hover:opacity-100">
					Firebase
				</span>
			</div>,
			<div key="SiFigma" className="relative group cursor-default ">
				<SiFigma className="text-lg" />
				<span className="absolute -top-5  left-1/2 -translate-x-1/2 z-50 hidden whitespace-nowrap rounded text-[10px] px-2 py-0 bg-gray-700 text-white opacity-0 transition-opacity duration-200 group-hover:block group-hover:opacity-100">
					Figma
				</span>
			</div>,
		],
	},
];

export type ProjectType = (typeof Projects)[0];

const ProjectScreen = ({}) => {
	return (
		<div className="w-full  lg:p-0 h-auto  flex flex-col gap-5  px-10 ">
			<h1 className="text-[30px] lg:text-[60px] mt-5 ml-10">Projects</h1>
			<div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-1  px-10">
				{Projects.map((project, index) => {
					return <ProjectCards key={index} project={project} />;
				})}
			</div>
		</div>
	);
};
export default ProjectScreen;
