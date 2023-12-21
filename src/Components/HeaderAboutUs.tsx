// import React from "react";
// import "../App.css";
import "../index.css";
import headImg1 from "/images/Header1AboutUs.png";
import headImg2 from "/images/Header2AboutUs.png";
import headImg3 from "/images/Header3AboutUs.png";

const HeaderAboutUs = () => {
	return (
		<section className="w-full relative overflow-hidden">
			<div className="h-[93vh] grid grid-cols-3 overflow-clip">
				<div className="absolute z-10 inset-0 bg-black opacity-25"></div>
				<img
					src={headImg1}
					alt=""
					className="grayscale object-cover h-full"
				/>
				<img
					src={headImg2}
					alt=""
					className="grayscale object-cover h-full"
				/>
				<img
					src={headImg3}
					alt=""
					className="grayscale object-cover h-full"
				/>
			</div>

			<div className="overflow-x-hidden">
				<div className="absolute z-[35] top-[50%] xl:top-[55%] -translate-y-[50%] left-[50%] -translate-x-[50%]">
					<h1 className="font-clashfont-medium text-white-100 text-[20vw] sm:text-[7rem] lg:text-[8rem] leading-tight 2xl:text-[8.5rem] w-fit whitespace-nowrap">
						<span className="aboutHeaderText left-0 md:-left-[30px]">
							We are
						</span>
						About Us
						<span className="aboutHeaderText right-0 md:-right-[30px]">
							Creative
						</span>
					</h1>

					<div className="font-roboto text-white-300 text-center text-[1rem] sm:text-[1.25rem] md:text-[1.35rem] md:w-[470px] sm:w-[425px] lg:w-[500px] mx-auto ">
						Great software that allows you to chat from any place at
						any time without any interruption.
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeaderAboutUs;
