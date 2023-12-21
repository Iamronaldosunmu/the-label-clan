import img1 from "/images/team_img1.png";
import img2 from "/images/team_img2.png";
import img3 from "/images/team_img3.png";

export default function OurTeam() {
	return (
		<section className=" grid gap-[64px] md:pt-[120px] px-[8vw] max-w-[1440px] mx-auto pb-[100px] md:grid-cols-2 items-start">
			<div className="grid gap-[50px]">
				<h2 className="uppercase text-[3rem] relative font-clashfont-semi leading-tight xs:text-[3.2rem] sm:text-[4rem] lg:text-[4.8rem] 2xl:text-[5.2rem] transition-all ease-linear">
					Our <br /> team
					<div className="absolute top-[45%] left-[115px] md:left-[160px] lg:left-[200px] xl:left-[300px] border-[0.5px] 2xl:left-[350px] w-[110px] vsm:w-[150px] sm:w-[220px] md:w-[290px] lg:w-[360px] xl:w-[410px] 2xl:w-[460px] border-black"></div>
				</h2>
				<p className="font-roboto text-[1rem] leading-6 xs:leading-8 max-w-[560px] xs:text-[1.125rem] mod:text-[1.2rem] 2xl:text-[1.35rem] lg:max-w-[430px] xl:max-w-[480px]">
					Great software that allows you to chat from any place at any
					time without any interruption. Great software that allows
					you to chat from any place at any time without any
					interruption.{" "}
				</p>
			</div>
			<div className="grid grid-cols-2 gap-4 grayscale">
				<div className="grid gap-4">
					<img
						className="min-h-[290px] object-cover"
						src={img1}
						alt=""
					/>
					<img
						className="min-h-[290px] object-cover"
						src={img2}
						alt=""
					/>
				</div>
				<div>
					<img
						className="h-[95%] object-cover object-top"
						src={img3}
						alt=""
					/>
				</div>
			</div>
		</section>
	);
}
