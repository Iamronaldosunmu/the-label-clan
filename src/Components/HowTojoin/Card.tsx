interface Props {
	img: string;
	title: string;
	text: string;
}

export default function Card({ img, title, text }: Props) {
	return (
		<div className="bg-white-300 shadow-4xl rounded-[8px] text-center px-[10px] pt-16 py-6 grid gap-[14px] xs:gap-[20px] max-w-[505px] w-full mx-auto items-start">
			<img className="mx-auto" src={img} alt="" />
			<h4 className="font-bold xs:text-[1.2rem]">{title}</h4>
			<p className="text-[.8rem] vxs:text-[1rem] max-w-[295px] mx-auto w-full">
				{text}
			</p>
		</div>
	);
}
