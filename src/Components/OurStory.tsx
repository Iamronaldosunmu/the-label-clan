import img4 from "/images/story_img1.png";
import img5 from "/images/story_img2.png";

export default function OurStory() {
	return (
		<>
			<div className="px-[8vw] grayscale pb-[100px] grid gap-[100px] md:grid-cols-[40%_60%] md:gap-[10px] mod:gap-[30px] lg:gap-[60px] max-w-[1440px] mx-auto w-full">
				<div className="grid gap-[70px]">
					<div className="relative w-fit">
						<img
							className="w-[200px] h-[315px] xs:w-[220px] vsm:w-[260px] sm:w-[300px] transition-all ease-linear object-cover object-left md:w-[200px] mod:w-[250px] xl:w-[300px] 3xl:w-[400px] 2xl:h-[290px]"
							src={img4}
							alt=""
						/>
						<div className="absolute top-[50%] md:top-[18%] left-[100%] -z-10 border-[0.5px] w-[25vw] border-black"></div>
					</div>
					<h2 className="uppercase text-[3rem] relative font-clashfont-semi leading-tight xs:text-[3.2rem] sm:text-[4rem] lg:text-[4.8rem] 2xl:text-[5.2rem] transition-all ease-linear">
						OUR <br /> STORY
						<div className="border-[0.5px] w-full max-w-[215px] border-black"></div>
					</h2>
				</div>
				<div className="grid gap-[30px] md:pt-[80px] mod:gap-[70px] lg:gap-[110px] xl:gap-[150px]">
					<div className="relative w-fit ml-auto xl:w-[80%] mod:ml-0 transition-all ease-linear md:order-2">
						<img
							className="max-w-[400px] max-h-[300px] h-full w-full sm:max-w-[550px] md:w-[350px] transition-all mod:w-[400px] 2xl:ml-auto xl:max-h-[320px] xl:h-full ease-linear lg:max-w-[650px] 2xl:max-w-[700px] 2xl:w-full lg:w-full object-cover "
							src={img5}
							alt=""
						/>
						<div className="w-[220px] h-[180px] xs:w-[310px] xs:h-[240px] transition-all ease-linear bg-grey-300 absolute -z-10 -top-[28px] -right-[40px] md:w-[360px] md:h-[240px] lg:h-[270px] 2xl:h-[290px] lg:w-[420px] 2xl:w-[480px]"></div>
					</div>
					<p className="font-roboto text-[1rem] leading-6 xs:leading-8 max-w-[560px] xs:text-[1.125rem] mod:text-[1.2rem] md:order-1 md:max-w-[520px]">
						Great software that allows you to chat from any place at
						any time without any nterruption. Great software that
						allows you to chat from any place at any time without
						any interruption.{" "}
					</p>
				</div>
			</div>
		</>
	);
}
