import TextInput from "@/components/Form/TextInput";
import type { FC } from "react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import CustomSelect from "@/components/Form/Select";

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
		<section id="Contact" className="w-full h-auto min-h-screen text-white">
			<h1 className="text-[30px] lg:text-[60px] pt-24">Contact Me</h1>

			<form
				onSubmit={handleSubmit(onSubmit, onError)}
				className="flex flex-col gap-10">
				<div>
					<TextInput
						isRequired={true}
						errors={errors}
						name="company"
						register={register}
						placeholder="Company"
					/>
				</div>
				<div>
					<TextInput
						isRequired={true}
						errors={errors}
						name="email"
						register={register}
						placeholder="Email"
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
					className="w-[180px] text-center py-2  bg-blue-900">
					{isSubmitting ? "Sending..." : "Send Message"}
				</button>
			</form>
		</section>
	);
};
export default ContactSection;
