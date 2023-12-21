import { z } from "zod";

const schema = z.object({
	id: z.string(),
	label: z.string(),
	type: z.string().optional(),
	placeholder: z.string(),
	data: z.any(),
	error: z.any().optional(),
	order: z.string().optional()
});
type Props = z.infer<typeof schema>;

export default function InputField({
	id,
	label,
	type,
	placeholder,
	data,
	error,
	order
}: Props) {
	return (
		<div className={`input-field flex flex-col gap-2 relative ${order} `}>
			<label
				htmlFor={id}
				className="text-white-300 font-medium leading-6 text-[14.5px]"
			>
				{label}
			</label>
			<input
				id={id}
				className="p-4 rounded-md bg-grey-50 outline-none border-none text-white-100 placeholder:text-grey-500"
				type={type}
				placeholder={placeholder}
				{...data}
			/>
			{error === "pattern" && (
				<p className="error text-red text-[10px] xl:text-[11.5px] absolute -bottom-[16px] tracking-[0.8px]">
					{type === "email" && "Invalid email format"}
				</p>
			)}
		</div>
	);
}
