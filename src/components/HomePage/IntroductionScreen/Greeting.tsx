"use client";
import { useCallback, useEffect, useRef, useState, type FC } from "react";

const ListOfExpertise = [
	{
		id: 1,
		label: "React/Next.js Developer",
	},
	{
		id: 2,
		label: "NestJS API Developer",
	},
	{
		id: 3,
		label: "Apollo GraphQL Developer",
	},
];

const Greeting: FC = ({}) => {
	const [isVisible, setIsVisible] = useState(false);
	const [label, setLabel] = useState("");
	const [expertiseIndex, setExpertiseIndex] = useState<number>(0);
	const deleteTimeout = useRef<NodeJS.Timeout | null>(null);
	const [isDeleting, setIsDeleting] = useState(false);

	const typeEffect = useCallback(() => {
		const expertise = ListOfExpertise[expertiseIndex];
		let charIndex = 0;

		const typingInterval = setInterval(() => {
			if (charIndex < expertise.label.length) {
				setLabel(expertise.label.slice(0, charIndex + 1));
				charIndex++;
			} else {
				clearInterval(typingInterval);
				// Start delete effect after 2 seconds
				deleteTimeout.current = setTimeout(() => {
					setIsDeleting(true);
				}, 3000);
			}
		}, 50);
	}, [expertiseIndex]);

	const deleteEffect = useCallback(() => {
		const deletingInterval = setInterval(() => {
			setLabel((prev) => {
				if (prev.length === 0) {
					clearInterval(deletingInterval);
					setIsDeleting(false);
					setExpertiseIndex(
						(prevIndex) => (prevIndex + 1) % ListOfExpertise.length
					);
					return prev;
				}
				return prev.slice(0, -1);
			});
		}, 50);
	}, []);

	useEffect(() => {
		setTimeout(() => setIsVisible(true), 100);

		return () => {
			if (deleteTimeout?.current) clearTimeout(deleteTimeout.current);
		};
	}, []);

	useEffect(() => {
		if (isDeleting) {
			deleteEffect();
		} else {
			setTimeout(() => {
				typeEffect();
			}, 1000);
		}
	}, [isDeleting, typeEffect, deleteEffect]);

	const handleDownload = () => {
		const link = document.createElement("a");
		link.href = "/sam-cv.pdf";
		link.setAttribute("download", "Sammy Barbacena.pdf");
		document.body.appendChild(link);
		link.click();
		link.remove();
	};

	return (
		<div
			className={`w-full h-screen flex flex-col items-center justify-center gap-2 delay-200 duration-500 ease-in ${
				isVisible ? "opacity-100" : "opacity-0"
			}`}>
			<div
				className={`text-[#F7F7F7] text-[14px] flex flex-col items-center gap-2 md:flex-row md:text-lg `}>
				<p>Hi, I&apos;m Sam.</p> <p>An experienced Full Stack Developer.</p>
			</div>
			<div className="flex flex-row text-center gap-2">
				<h1
					className={`text-[#F7F7F7] text-[22px] md:text-[52px] h-10 md:h-20 font-semibold bg-gradient-to-t from-white via-blue-600 to-[#2C3E50] bg-clip-text text-transparent ${
						isVisible ? "opacity-100" : "opacity-0"
					}`}>
					{label}
				</h1>
				<div
					className={`animate-custom_pulse rounded-full w-[4px] h-5 md:w-[8px] md:h-14 mt-2 duration-75 font-bold bg-gradient-to-t from-white via-blue-600 to-[#2C3E50]`}></div>
			</div>

			<div className={`flex flex-row gap-5 mt-5`}>
				<button
					onClick={handleDownload}
					className="baseButton primary_button text-[#2C3E50]">
					Download CV
				</button>
				<a
					href="#Projects"
					className="w-[120px] text-center pt-2.5 rounded-md bg-[#2C3E50]">
					Projects
				</a>
			</div>
		</div>
	);
};

export default Greeting;
