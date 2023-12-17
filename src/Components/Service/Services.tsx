import { useState } from "react";

interface ServiceData {
	title: string;
	text: string;
}

export default function Services() {
	const [selected, setSelected] = useState<number | null>(0);
	const toggle = (i: number | null) => {
		if (selected === i) {
			return setSelected(null);
		}
		setSelected(i);
	};

	const data: ServiceData[] = [
		{
			title: "Creative and Design Services",
			text: "This is the cornerstone of what we do. From branding and identity development to graphic design, animation, and content creation.",
		},
		{
			title: "Marketing and Event Services",
			text: "This is the cornerstone of what we do. From branding and identity development to graphic design, animation, and content creation.",
		},
		{
			title: "Management Services",
			text: "This is the cornerstone of what we do. From branding and identity development to graphic design, animation, and content creation.",
		},
	];

	return (
		<section className="w-full overflow-hidden relative">
			<div className="grid grid-cols-2 h-[85vh] lg:h-[100vh] transition-all duration-150 ease-linear">
				<div className="w-full h-full bg-[url('/images/services-img.png')] bg-no-repeat bg-[center_top] bg-cover"></div>

				<div className="bg-purple-400 text-white-100 px-[24px] py-[38px] md:py-[48px] xl:py-[64px] xs:px-[30px] md:px-[56px] lg:px-[90px] 2xl:px-[100px] 3xl:px-[135px]">
					<div className="grid gap-[30px] xs:gap-[36px] items-start pb-[48px] md:pb-[56px] lg:pb-[70px] md:gap-[26px] 3xl:max-w-[450px] 3xl:mx-auto">
						<h4 className="text-[15px] xs:text-[18px] font-medium sm:text-[20px] md:text-[24px] leading-6">
							Our Services
						</h4>
						<h3 className="text-[21.5px] font-semibold leading-8 xs:text-[24px] sm:text-[32px] sm:leading-[40px] md:text-[40px] lg:text-[48px] xl:text-[56px] lg:leading-[54px] 2xl:leading-[72px] 2xl:text-[68px] tracking-[0.1px] font-playfair capitalize">
							Making your <br />{" "}
							<span className="text-white-300">ideas</span> happen
						</h3>
					</div>
					<div className=" 3xl:max-w-[450px] 3xl:mx-auto">
						{data.map((item, i) => (
							<div
								className={`border-t-[0.5px] border-b-[0.5px] py-[10px] sm:py-[18px] lg:py-[20px] 2xl:py-[24px] grid`}
								key={i}
							>
								<div
									className="flex items-start gap-[15px] cursor-pointer"
									onClick={() => toggle(i)}
								>
									<img
										className={`${
											selected === i
												? "pt-[9px]"
												: "pt-[5px]"
										}`}
										src={
											selected === i
												? "/images/listDash.svg"
												: "/images/plusList.svg"
										}
										alt=""
									/>
									<h3 className="text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[20px]">
										{item.title}
									</h3>
								</div>
								<p
									className={`text-[14px] md:text-[16px] 2xl:text-[18px] max-h-0 overflow-hidden transition-max-h ease-in-out duration-[400ms] ${
										selected === i
											? "max-h-[200px] py-[24px]"
											: "max-h-0"
									} `}
								>
									{item.text}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
