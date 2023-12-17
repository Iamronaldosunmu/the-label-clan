import { FieldValues, useForm } from "react-hook-form";
import InputField from "./InputField";

export default function Form() {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		reset,
	} = useForm();

	const onSubmit = (data: FieldValues) => {
		console.log(data);
		const person = { ...data };
		console.log(person);
		reset();
	};

	const btnColor = isValid
		? "bg-purple-400 cursor-pointer"
		: ["bg-purple-400", "opacity-75 cursor-not-allowed"].join(" ");

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex flex-col mb-[60px] lg:w-[680px] xl:w-[800px]"
		>
			<div className="flex flex-col gap-[30px] mb-[74px] md:grid md:grid-cols-2 md:grid-flow-row-dense">
				<InputField
					id="name"
					label="Name (required)"
					type="text"
					placeholder="Your Name"
					data={register("name", { required: true })}
					order=""
				/>
				<InputField
					id="email"
					type="email"
					label="Email (required)"
					placeholder="Your working email"
					data={register("email", {
						required: true,
						pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
							message: "Invalid email format",
						},
					})}
					error={errors.mail?.message}
					order="col-start-1 col-end-2"
				/>
				<InputField
					id="subject"
					label="Subject (optional)"
					placeholder="Choose a Subject"
					data={register("subject")}
					order="row-start-3 col-end-2"
				/>
				<InputField
					id="company"
					label="Company (required)"
					placeholder="Your Company Name"
					data={register("company", { required: true })}
					order="row-start-1 col-end-3"
				/>
				<InputField
					id="phone"
					label="Phone (optional)"
					placeholder="Your actual phone number"
					data={register("phone")}
				/>
				<InputField
					id="budget"
					label="Choose a Budget (USD)"
					placeholder="Less than 5k"
					data={register("budget", { required: true })}
					order="col-start-2 col-end-3"
				/>
			</div>
			<button
				type="submit"
				disabled={!isValid}
				className={`px-[18.5px] py-[16px] text-white-100 text-[16px] leading-[20px] font-semibold text-center rounded-[5px] w-[90px] mr-auto ${btnColor}
             `}
			>
				Submit
			</button>
		</form>
	);
}
