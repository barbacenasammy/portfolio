"use client";
import CarouselContainer from "@/components/Carousel/CarouselContainer";
import Image from "next/image";
import { MdOpenInNew } from "react-icons/md";
import { useInView } from "react-intersection-observer";
import { SwiperSlide } from "swiper/react";

const Projects = [
	{
		title: "Presale",
		image: "/projects/presale.png",
		alt: "presale",
		link: "https://devnet-presale.fwen.io/",
		contributions: [
			"UI Conversion",
			"Backend Features",
			"Solana Web3 Wallet Connection",
			"Solana Smart Contract",
		],
	},
	{
		title: "PIF Quests",
		image: "/projects/quest.png",
		alt: "quests",
		link: "https://v1.playitfwd.io/",
		contributions: ["Admin CMS", "UI Conversion", "Backend Features"],
	},
	{
		title: "PIF Games",
		image: "/projects/pif-games.png",
		alt: "games",
		link: "https://app.pifnation.com/games",
		contributions: ["Admin CMS", "UI Conversion", "Backend Features"],
	},
	{
		title: "PIF Fwen",
		image: "/projects/fwen.png",
		alt: "fwen",
		link: "https://my.fwen.io/welcome",
		contributions: [
			"Referral System",
			"Web 3 Wallet Connection",
			"Backend Features",
		],
	},
	{
		title: "PIF Fwen AI",
		image: "/projects/fwen-ai.png",
		alt: "fwen-ai",
		link: "https://app.fwen.io/",
		contributions: [
			"AI Integration",
			"Elevenlabs Integration",
			"Backend Features",
		],
	},
	{
		title: "Payload CMS",
		image: "/projects/payload-cms.png",
		alt: "payload-cms",
		link: "https://fwen-payload-cms-569790412483.asia-southeast1.run.app/admin/login",
		contributions: ["AI Fine-tuning", "Custom Components", "Backend Features"],
	},
];

const Projects2 = [
	{
		title: "PIF Fwen",
		image: "/projects/fwen.png",
		alt: "fwen",
		link: "https://my.fwen.io/welcome",
		contributions: [
			"Referral System",
			"Web 3 Wallet Connection",
			"Backend Features",
		],
	},
	{
		title: "PIF Fwen AI",
		image: "/projects/fwen-ai.png",
		alt: "fwen-ai",
		link: "https://app.fwen.io/",
		contributions: [
			"AI Integration",
			"Elevenlabs Integration",
			"Backend Features",
		],
	},
	{
		title: "Payload CMS",
		image: "/projects/payload-cms.png",
		alt: "payload-cms",
		link: "https://fwen-payload-cms-569790412483.asia-southeast1.run.app/admin/login",
		contributions: ["AI Fine-tuning", "Custom Components", "Backend Features"],
	},
	{
		title: "Fwen Presale",
		image: "/projects/presale.png",
		alt: "presale",
		link: "https://devnet-presale.fwen.io/",
		contributions: [
			"UI Conversion",
			"Backend Features",
			"Solana Web3 Wallet Connection",
			"Solana Smart Contract",
		],
	},
	{
		title: "PIF Quests",
		image: "/projects/quest.png",
		alt: "quests",
		link: "https://v1.playitfwd.io/",
		contributions: ["Admin CMS", "UI Conversion", "Backend Features"],
	},
	{
		title: "PIF Games",
		image: "/projects/pif-games.png",
		alt: "games",
		link: "https://app.pifnation.com/games",
		contributions: ["Admin CMS", "UI Conversion", "Backend Features"],
	},
];

const ProjectScreen = ({}) => {
	const [ref] = useInView({
		threshold: 0.5,
		triggerOnce: false,
	});

	return (
		<section
			ref={ref}
			id="projects"
			className="w-full lg:p-0 h-auto min-h-screen flex flex-col gap-5 ">
			<h1 className="text-[30px] lg:text-[60px] mt-20">Projects</h1>
			<CarouselContainer direction="rtl">
				{Projects.map((project, index) => {
					return (
						<SwiperSlide key={index}>
							<div
								style={{
									direction: "ltr",
								}}
								className="relative h-56 group w-[400px] overflow-hidden ">
								<Image
									src={project.image}
									fill
									alt={project.alt}
									objectFit="cover"
								/>
								<div className="relative z-40 transform w-full h-full border-2 flex flex-col border-gray-900 transition-all delay-100 p-5 duration-200 ease-in group-hover:translate-y-0 -translate-y-full bg-gray-900 bg-opacity-70 backdrop-blur-sm ">
									<h1 className="font-bold text-2xl text-blue-200 ">
										{project.title}
									</h1>
									<h1 className="font-base text-gray-200 ">Contributions</h1>
									<ol className="text-left list-disc text-sm ml-5 text-[12px] lg:text-[14px] font-thin text-gray-200">
										{project.contributions.map((contribution, index) => {
											return (
												<li key={index} className="text-left">
													{contribution}
												</li>
											);
										})}
									</ol>
									<MdOpenInNew
										onClick={() => window.open(project.link, "_blank")}
										className="absolute text-lg top-4 right-4 text-center rounded-md text-white cursor-pointer transition-all duration-200 hover:scale-110"
									/>
								</div>
							</div>
						</SwiperSlide>
					);
				})}
			</CarouselContainer>
			<CarouselContainer direction="ltr">
				{Projects2.map((project, index) => {
					return (
						<SwiperSlide key={index}>
							<div className="relative h-56 group w-[400px] overflow-hidden bg-gray-900">
								<Image
									src={project.image}
									fill
									alt={project.alt}
									objectFit="cover"
								/>
								<div className="relative z-40 transform w-full h-full border-2 border-gray-900 transition-all delay-100 p-5 duration-200 ease-in group-hover:translate-y-0 -translate-y-full bg-gray-900 bg-opacity-70 backdrop-blur-sm ">
									<h1 className="font-bold text-2xl text-blue-200">
										{project.title}
									</h1>
									<h1 className="font-base text-gray-200">Contributions</h1>
									<ol className="list-disc text-sm ml-5 text-[12px] lg:text-[14px] font-thin text-gray-200">
										{project.contributions.map((contribution, index) => {
											return <li key={index}>{contribution}</li>;
										})}
									</ol>
									<MdOpenInNew
										onClick={() => window.open(project.link, "_blank")}
										className="absolute text-lg top-4 right-4 text-center rounded-md text-white cursor-pointer transition-all duration-200 hover:scale-110"
									/>
								</div>
							</div>
						</SwiperSlide>
					);
				})}
			</CarouselContainer>
		</section>
	);
};
export default ProjectScreen;
