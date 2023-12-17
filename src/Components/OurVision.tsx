import "../index.css";
import img1 from "/images/vision_img.png";

interface Props {
	color?: string;
}

export default function OurVision({ color }: Props) {
	return (
		<section className="px-[8vw] lg:pt-[150px] grid gap-[70px] pb-[100px] md:grid-cols-2 md:gap-[100px] items-start max-w-[1440px] mx-auto">
			<div className="grid gap-[40px] md:order-2 lg:gap-[60px] md:pt-[75px] lg:pt-[100px] 2xl:pt-[120px]">
				<h2 className="uppercase text-[3rem] relative font-clashfont-semi leading-tight xs:text-[3.2rem] sm:text-[4rem] lg:text-[4.8rem] 2xl:text-[5.2rem] transition-all ease-linear">
					Our <br /> Vision
					<div className="absolute top-[20%] left-[135px] sm:left-[180px] 2xl:left-[240px] border-[0.5px] w-[220px] border-black"></div>
				</h2>
				<div className="grid gap-[30px]">
					<p className="font-roboto text-[1rem] leading-6 xs:leading-8 max-w-[560px] xs:text-[1.125rem] mod:text-[1.2rem] 2xl:text-[1.35rem] lg:max-w-[430px] 2xl:max-w-[500px] 3xl:max-w-[550px]">
						Great software that allows you to chat from any place at
						any time without any interruption. Great software that
						allows you to chat from any place at any time without
						any interruption.{" "}
					</p>
					<p className="font-roboto text-[1rem] leading-6 xs:leading-8 max-w-[560px] xs:text-[1.125rem] mod:text-[1.2rem] 2xl:text-[1.35rem] lg:max-w-[430px] 2xl:max-w-[500px] 3xl:max-w-[550px] hidden md:block">
						Great software that allows you to chat from any place at
						any time without any interruption.{" "}
					</p>
				</div>
			</div>
			<div className={`grid gap-[50px] ${color}`}>
				<img
					className="h-[475px] md:h-[600px] lg:h-[700px] 2xl:h-[745px] object-cover w-full max-w-[620px] transition-all ease-linear"
					src={img1}
					alt=""
				/>
				<p className="font-roboto text-[1rem] leading-6 xs:leading-8 max-w-[560px] xs:text-[1.125rem] mod:text-[1.2rem] 2xl:text-[1.35rem] lg:max-w-[430px] 2xl:max-w-[500px] 3xl:max-w-[550px] md:hidden">
					Great software that allows you to chat from any place at any
					time without any interruption.{" "}
				</p>
			</div>
		</section>
	);
}
