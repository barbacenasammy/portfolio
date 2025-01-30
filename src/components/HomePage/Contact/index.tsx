import CustomSelect from "@/components/Form/Select";
import TextInput from "@/components/Form/TextInput";
import { yupResolver } from "@hookform/resolvers/yup";
import type { FC } from "react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { FaTelegramPlane } from "react-icons/fa";
import * as yup from "yup";

const Positions = [
	"Full Stack Developer",
	"Frontend Developer",
	"Backend Developer",
];

const contactFormSchema = yup.object().shape({
	company: yup
		.string()
		.required("Name is required")
		.min(3, "Name must be at least 3 characters"),
	email: yup
		.string()
		.required("Email is required")
		.email("Invalid email address"),
	message: yup
		.string()
		.required("Message is required")
		.min(10, "Message must be at least 10 characters"),
	position: yup
		.string()
		.required("Position is required")
		.oneOf(Positions, "Invalid position")
		.default(Positions[0]),
});

export type ContactFormType = yup.InferType<typeof contactFormSchema>;

const ContactSection: FC = ({}) => {
	const {
		setValue,
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
	} = useForm({
		resolver: yupResolver(contactFormSchema),
	});

	const onError: SubmitErrorHandler<ContactFormType> = (errors) => {
		console.log("form error: ", errors);
		return;
	};
	const onSubmit: SubmitHandler<ContactFormType> = async (data) => {
		try {
			console.log("data: ", data);
			const response = await fetch("/api/send-email", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});

			if (response.ok) {
				alert("Message sent successfully!");
				reset();
			} else {
				alert("Failed to send message. Please try again.");
			}
		} catch (error) {
			console.error("Error sending message:", error);
			alert("Failed to send message. Please try again.");
		}
	};
	return (
		<div className="w-full h-auto min-h-screen text-white px-10">
			<h1 className="text-[30px] lg:text-[40px] pt-24 font-source-code">
				Let’s Build <br />
				<div className="overflow-hidden h-[60px]  flex flex-row gap-2">
					Something{" "}
					<div className="h-[40px] overflow-hidden mt-2">
						<ul className="list-none animate-change   font-bold ">
							{["Epic!", "Amazing!", "Powerful!"].map((item, index) => (
								<li
									key={index}
									className={` leading-[40px] overflow-hidden ${
										index === 0
											? "text-[#ff073a]"
											: index === 1
											? "text-cyan-400"
											: "text-green-400"
									}`}>
									{item}
								</li>
							))}
						</ul>
					</div>
				</div>
			</h1>

			<form
				onSubmit={handleSubmit(onSubmit, onError)}
				className="flex flex-col gap-10 max-w-[500px]">
				<div>
					<TextInput
						isRequired={true}
						errors={errors}
						name="company"
						register={register}
						placeholder="Your name"
					/>
				</div>
				<div>
					<TextInput
						isRequired={true}
						errors={errors}
						name="email"
						register={register}
						placeholder="Your Email"
					/>
				</div>
				<div>
					<CustomSelect
						setValue={setValue}
						errors={errors}
						name="position"
						options={Positions}
					/>
				</div>
				<div>
					<TextInput
						name="message"
						register={register}
						placeholder="Message"
						errors={errors}
						isRequired={true}
					/>
				</div>

				<button
					type="submit"
					disabled={isSubmitting}
					className="w-[180px] text-black text-center py-2 flex flex-row justify-center items-center gap-2 rounded-full  bg-green-400">
					{isSubmitting ? "Sending..." : "Send Message"}
					<FaTelegramPlane />
				</button>
			</form>
		</div>
	);
};
export default ContactSection;
