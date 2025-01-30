import { useEffect, useState, type FC } from "react";

interface ProgressBarProps {
	currentProgress: number;
	maxProgress?: number;
}

const ProgressBar: FC<ProgressBarProps> = ({
	currentProgress,
	maxProgress = 100,
}) => {
	const [progress, setProgress] = useState(0);
	useEffect(() => {
		let _progress = 0;
		const intervalId = setInterval(() => {
			if (_progress < currentProgress) {
				_progress += 1;
				setProgress(_progress);
			} else {
				clearInterval(intervalId);
			}
		}, 10);
	}, [currentProgress]);

	return (
		<div className="relative w-full bg-transparent border-2 border-white rounded-full h-4 overflow-hidden">
			<div
				className="bg-green-500 h-full transition-all duration-1000 ease-out"
				style={{ width: `${(progress / maxProgress) * 100}%` }}
			/>
			<div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10 flex">
				{[...Array(10)].map((_, index) => (
					<div
						key={index}
						className="border-r border-white"
						style={{
							width: `${100 / 10}%`, // Divide into 20 equal segments0
						}}
					/>
				))}
			</div>
		</div>
	);
};

export default ProgressBar;
