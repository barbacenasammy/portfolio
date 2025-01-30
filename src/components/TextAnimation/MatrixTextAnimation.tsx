"use client";

import { useEffect } from "react";
import AnimateCharacter from "./AnimateCharacter";

interface MatrixTextAnimationProps {
	text: string;
	shouldReanimate: boolean;
	animationSpeed?: "fast" | "slow" | "normal";
}

const MatrixTextAnimation: React.FC<MatrixTextAnimationProps> = ({
	text,
	shouldReanimate,
	animationSpeed,
}) => {
	useEffect(() => {}, [text]);
	return (
		<div className="flex flex-row flex-wrap items-start w-full text-wrap">
			{text.split("").map((char, index) => (
				<AnimateCharacter
					key={index}
					character={char}
					shouldReanimate={!!shouldReanimate}
					animationSpeed={animationSpeed}
				/>
			))}
		</div>
	);
};

export default MatrixTextAnimation;
