import type { FC } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { ContactFormType } from "../HomePage/Contact";

interface TextInputProps {
	name: keyof ContactFormType;
	register: UseFormRegister<ContactFormType>;
	placeholder?: string;
	errors: FieldErrors<ContactFormType>;
	isRequired?: boolean;
}

const TextInput: FC<TextInputProps> = ({
	name,
	register,
	placeholder,
	errors,
	isRequired,
}) => {
	return (
		<>
			<input
				type="text"
				placeholder={`${placeholder}${isRequired ? "*" : ""}`}
				className={`text-white focus:outline-none bg-transparent border-b-[1px] py-2  w-full max-w-[600px] ${
					errors[name] ? "border-red-400" : "border-gray-400"
				}`}
				{...register(name)} // Spread the register function here with the name
			/>
		</>
	);
};

export default TextInput;
