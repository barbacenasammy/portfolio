import { FC, useState } from "react";
import { FieldErrors, UseFormSetValue } from "react-hook-form";
import { TiArrowSortedDown } from "react-icons/ti";
import { ContactFormType } from "../HomePage/Contact";

interface CustomSelectProps {
	name: keyof ContactFormType;
	options: string[];
	errors: FieldErrors<ContactFormType>;
	setValue: UseFormSetValue<ContactFormType>;
}

const CustomSelect: FC<CustomSelectProps> = ({
	name,
	options,
	errors,
	setValue,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selected, setSelected] = useState(options[0]);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const handleSelect = (option: string) => {
		setSelected(option); // Update local state
		setValue(name, option, {
			shouldDirty: true,
		});
		setIsOpen(false);
	};

	return (
		<div className="relative">
			<div
				onClick={toggleDropdown}
				className="relative text-white bg-transparent border-b border-white w-full max-w-[600px] py-2 cursor-pointer">
				<span className="select-none">{selected}</span>
				<TiArrowSortedDown className="text-white absolute right-1 top-3 text-lg" />
			</div>

			{isOpen && (
				<ul className="absolute bg-black bg-opacity-50 backdrop-blur-sm text-white border-b border-white w-full mt-1 max-w-[600px] z-10">
					{options.map((option) => (
						<li
							key={option}
							onClick={() => handleSelect(option)} // Update the form value using setValue
							className="p-2 hover:bg-gray-800 cursor-pointer">
							{option}
						</li>
					))}
				</ul>
			)}

			{errors[name] && <p className="text-red-500">{errors[name]?.message}</p>}
		</div>
	);
};

export default CustomSelect;
