"use client";
import { usePage } from "@/context/PathProvider";
import { useEffect } from "react";

const MatrixEffect: React.FC = () => {
	const { activePageIndex } = usePage();

	useEffect(() => {
		const canvas = document.getElementById("matrixCanvas") as HTMLCanvasElement;
		const ctx = canvas.getContext("2d");

		// Set canvas size
		canvas.height = window.innerHeight;
		canvas.width = window.innerWidth;

		const matrix =
			`QWERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*()_+{}|[]\\:;\"'<>?,./1234567890`.split(
				""
			);
		const font_size = 20;
		const columns = canvas.width / font_size;
		const drops = Array(Math.floor(columns)).fill(0);

		// Draw function for matrix effect
		const draw = () => {
			ctx!.fillStyle = "rgba(0, 0, 0, 0.1)"; // Add fade effect
			ctx!.fillRect(0, 0, canvas.width, canvas.height);
			ctx!.fillStyle = "#0F0"; // Green text color
			ctx!.font = `${font_size}px monospace`;

			// Draw each column of letters
			for (let i = 0; i < drops.length; i++) {
				const text = matrix[Math.floor(Math.random() * matrix.length)];
				ctx!.fillText(text, i * font_size, drops[i] * font_size);

				// Reset the drop after it reaches the bottom of the canvas
				if (drops[i] * font_size > canvas.height && Math.random() > 0.975) {
					drops[i] = 0;
				}

				drops[i]++;
			}
		};

		// Set up an interval to animate
		const interval = setInterval(draw, 50);

		// Clean up the interval when the component is unmounted
		return () => {
			clearInterval(interval);
		};
	}, []);

	if (activePageIndex !== 0) return null;

	return (
		<canvas
			id="matrixCanvas"
			className="absolute top-0 left-0 z-0 opacity-20"></canvas>
	);
};

export default MatrixEffect;
