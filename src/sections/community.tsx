import Image1 from "../assets/images/communityImage1.png";
import Image2 from "../assets/images/communityImage2.png";
import Image3 from "../assets/images/communityImage3.png";
import Image4 from "../assets/images/communityImage4.png";
import Image5 from "../assets/images/communityImage5.png";

const Community = () => {
	return (
		<section className="bg-[#FEFEFE] w-full relative customGrid my-[164px]">
			<img className="image1" src={Image1} alt="" />
			<img
				className="image2 md:max-w-[282px] md:max-h-[386px]"
				src={Image5}
				alt=""
			/>
			<img className="image3" src={Image4} alt="" />
			{/* <img className="image4" src={Image2} alt="" /> */}
			<img className="image5" src={Image3} alt="" />
			<div className="relative gridText justify-center items-end text-right flex flex-col gap-y-3 star px-10">
				<h2 className="text-[#1A191D] font-semibold leading-tight growText font-clash">
					Can’t <span className="text-[#3F3F3F]">TAME THE NEW </span>
					Untamable
				</h2>
				<p className="text-[#12141D] sm:text-lg leading-normal lg:text-xl text-right max-w-[70%]">
					WAC People Agency connects businesses with a pool of
					talented and creative young professionals from various
					fields.
				</p>
				<a
					href="#"
					className="underline underline-offset-2 sm:text-[24px] xl:text-[32px] text-black"
				>
					View community
				</a>
			</div>
		</section>
	);
};

export default Community;
