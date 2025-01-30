"use client";
import { usePage } from "@/context/PathProvider";
import MatrixButton from "../Button/MatrixButton";
const fullstack = ["f", "u", "l", "l", "-", "S", "t", "a", "c", "k"];
const developer = ["d", "e", "v", "e", "l", "o", "p", "e", "r"];
const AboutMe = () => {
	const { setActivePageIndex } = usePage();
	const handleDownload = () => {
		const link = document.createElement("a");
		link.href = "/sam-cv.pdf";
		link.setAttribute("download", "Sammy Barbacena.pdf");
		document.body.appendChild(link);
		link.click();
		link.remove();
	};
	return (
		<div className="flex flex-col justify-between h-full items-center max-w-[400px] md:w-1/2">
			<div className=" text-white w-full  flex flex-col justify-center  rounded-2xl p-2 shadow-md  backdrop-blur-3xl  mt-5">
				<p className="text-3xl mb-0 font-bold uppercase font-source-code flex flex-row justify-between shadow-lg">
					{fullstack.map((letter, index) => (
						<span
							key={index}
							className={`relative transform transition text-white`}>
							{letter}
							<span className="absolute  -top-2 -left-2 flex border w-fit animate-custom_pulse bg-gradient-to-r blur-xl from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-6xl box-content font-extrabold text-transparent text-center select-none">
								{letter}
							</span>
						</span>
					))}
				</p>
				<span className="text-3xl mb-10 font-bold uppercase font-source-code tracking-widest flex flex-row justify-between">
					{developer.map((letter, index) => (
						<span
							key={index}
							className={`relative text-white	${index === 1 && " -rotate-45 "}`}>
							{letter}
							<span className="absolute  top-0 -left-2 flex border w-fit animate-custom_pulse bg-gradient-to-r blur-xl from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-6xl box-content font-extrabold text-transparent text-center select-none">
								{letter}
							</span>
						</span>
					))}
				</span>
				<p className="font-source-code text-lg pt-10 text-center min-w-full text-gray-200">
					Hi, I’m <span className="font-bold text-green-400">Sam</span>—a
					developer driven by creativity and innovation. I transform ideas into
					intuitive, impactful digital solutions. Let’s bring your vision to
					life!
				</p>
				<div className="flex flex-row justify-center items-center gap-5 mt-10 mb-10">
					<MatrixButton onClick={handleDownload}>Resume</MatrixButton>
					<MatrixButton
						onClick={() => setActivePageIndex(1)}
						variant="secondary">
						Projects
					</MatrixButton>
				</div>
			</div>
			<div className="w-full max-w-[300px] flex flex-col mt-10 px-5 justify-center border border-red-500 py-10 items-center bg-black  rounded-2xl p-2 shadow-md backdrop-blur-3xl">
				<p className="text-center font-source-code text-3xl  font-bold">
					STATUS
				</p>
				<span className="text-center font-source-code mt-5 inline-block w-full">
					Currently in the{" "}
					<a
						className="inline-block whitespace-nowrap text-green-400 font-bold"
						href="https://ippei.com/"
						target="_blank">
						&nbsp; ippei.com
					</a>{" "}
					simulation, writing code that keeps the Matrix running
				</span>
			</div>
		</div>
	);
};
export default AboutMe;
