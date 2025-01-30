"use client";
import { useEffect, useRef, useState, type FC } from "react";

interface AnimateCharacterProps {
	character: string;
	shouldReanimate: boolean;
	animationSpeed?: "fast" | "slow" | "normal";
}

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const characterCount = characters.length;
const AnimateCharacter: FC<AnimateCharacterProps> = ({
	character,
	shouldReanimate,
	animationSpeed = "normal",
}) => {
	const [textDisplay, setTextDisplay] = useState<string>(" ");
	const interval = useRef<NodeJS.Timeout>();
	const [reAnimate, setReAnimate] = useState(false);
	let characterIndex =
		animationSpeed === "fast"
			? Math.floor(Math.random() * characters.length)
			: 0;

	const speed =
		animationSpeed === "fast" ? 50 : animationSpeed === "slow" ? 200 : 100;

	useEffect(() => {
		interval.current = setInterval(() => {
			if (!character || character === " ") {
				console.log(" empty string 1 ");
				setTextDisplay("");
				characterIndex = 0;
				clearInterval(interval.current);
				return;
			}

			if (!characters.includes(character.toUpperCase())) {
				console.log(" empty string 2 ");
				characterIndex = 0;
				setTextDisplay(character);
				clearInterval(interval.current);
				return;
			}

			let randomChar = characters[characterIndex];

			if (randomChar.toLowerCase() === character.toLowerCase()) {
				characterIndex = 0;
				clearInterval(interval.current);
				setTextDisplay(character);
				return;
			} else {
				characterIndex =
					characterIndex >= characterCount - 1 ? 0 : characterIndex + 1;
				randomChar =
					character === character.toUpperCase()
						? randomChar.toUpperCase()
						: randomChar.toLowerCase();
				setTextDisplay(randomChar);
			}
		}, speed); // Adjust the speed of the animation here

		// Clean up interval when component is unmounted or animation ends
		return () => clearInterval(interval.current);
	}, [character, reAnimate]);

	useEffect(() => {
		if (shouldReanimate) {
			setReAnimate(!reAnimate);
		}
	}, [shouldReanimate]);

	return <p className="text-left">{textDisplay || <>&nbsp;</>}</p>;
};
export default AnimateCharacter;
