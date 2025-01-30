const MatrixButton = <T extends React.ElementType = "button">(
	props: React.ComponentProps<T> & {
		variant?: "primary" | "secondary";
	}
) => {
	const { children, className, variant = "primary", ...rest } = props;
	const baseStyles = ` bg-gradient-to-r  px-10 rounded-full py-2 shadow-lg`;
	const variantStyles =
		variant === "primary"
			? `from-green-400 to-green-900 text-white shadow-green-400/50 `
			: `from-gray-100 to-gray-100 text-black shadow-gray-400/50 `;
	return (
		<button className={`${baseStyles} ${className} ${variantStyles}`} {...rest}>
			{children}
		</button>
	);
};
export default MatrixButton;
