/* eslint-disable @typescript-eslint/no-unused-vars */
import headerImgLarge from "/images/main-img-large.png";
import star from "/images/star.svg";

export default function Hero() {
	return (
		<section className="w-full overflow-hidden relative">
			<img
				className="h-[93.5vh] w-full object-cover transition duration-300 ease-in-out"
				src={headerImgLarge}
				alt="background-img"
			/>
			<div className="absolute left-0 top-[35%] px-[8vw] grid gap-5">
				<h1 className="text-[7.5vw] lg:leading-[5rem] lg:text-[4.8rem] 2xl:text-[5.06rem] text-white-100 leading-[8vw] font-clashfont-medium">
					More Than Just <br /> An Advertising Agency{" "}
				</h1>
				<p className="text-white-300 text-[0.93rem]font-roboto lg:text-[1.125rem] xl:text-[1.3rem] xs:w-[350px] lg:w-[400px] 2xl:w-[500px] 2xl:text-[1.5rem]">
					Great software that allows you to chat from any place at any
					time without any interruption.{" "}
				</p>
				<div className="flex flex-col gap-6 font-playfair font-medium sm:flex-row sm:items-center lg:mt-[12px] text-white-100 text-[0.93rem] lg:text-[1.125rem] xl:text-[1.25rem]">
					<button
						className="border py-[0.84em] px-[3.3125em] mx-auto sm:mx-0"
						type="button"
					>
						Book Now
					</button>
					<button
						className="flex gap-4 items-baseline mx-auto sm:mx-0 linkBtn relative pb-1"
						type="button"
					>
						<span>Learn More</span>
						&rarr;
					</button>
				</div>
				<img
					className="absolute -top-[5%] left-[70%] xs:w-[32px] sm:w-[48px] lg:w-[57px]"
					src={star}
					alt=""
				/>
			</div>
		</section>
	);
}
