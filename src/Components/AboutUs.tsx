import "../index.css";
import img1 from "/images/about_img1.png";
import img2 from "/images/about_img2.png";
import img3 from "/images/about_img3.svg";

interface Props {
	color?: string;
	visibility: string;
	text: string;
}

export default function AboutUs({ visibility, color, text }: Props) {
	return (
		<>
			<div className="grid gap-[100px] px-[8vw] items-start md:grid-cols-2 lg:grid-[40%_60%] md:gap-[50px] lg:gap-[65px] overflow-clip pb-[100px] md:pb-[150px] max-w-[1440px] mx-auto">
				<div className="grid gap-10">
					<h2 className="text-[3rem] relative font-clashfont-semi leading-tight xs:text-[3.2rem] sm:text-[4rem] lg:text-[4.8rem] 2xl:text-[5.2rem] transition-all ease-linear md:whitespace-nowrap lg:pt-[60px] 2xl:pt-[100px]">
						About The <br /> {text}
						<div className="absolute top-[50%] left-[60%] xs:left-[45%] sm:left-[38%] border-[0.5px] w-[32vw] md:left-[75%] lg:hidden border-black"></div>
					</h2>
					<p className="font-roboto text-[1rem] leading-6 xs:leading-8 max-w-[560px] xs:text-[1.125rem] mod:text-[1.2rem] 2xl:text-[1.5rem] lg:max-w-[430px] 2xl:max-w-[500px] 3xl:max-w-[550px]">
						Great software that allows you to chat from any place at
						any time without any interruption. Great software that
						allows you to chat from any place at any time without
						any interruption.{" "}
					</p>
				</div>
				<div className={`mx-auto overflow-visible ${color} relative`}>
					<div className="hidden lg:block absolute top-[10%] -left-[65%] -z-10 border-[0.5px] w-[40vw] border-black"></div>
					<img
						className="max-w-[490px] w-full pl-[30px] 2xl:ml-[10px]"
						src={img1}
						alt=""
					/>
					<div className="relative">
						<img
							className="max-w-[345px] w-full pr-[30px] -mt-[25px] object-cover lg:mt-[25px] 2xl:mt-[40px] xl:h-[230px] transition-all ease-linear 2xl:-ml-[40px]"
							src={img2}
							alt=""
						/>
						<img
							className={`top-[100%] -right-[25%] w-[100px] ml-[67%] vxs:ml-[70%] xs:ml-[65%] 
						xs:-mt-[55px] xs:w-[135px] -mt-[40px] vsm:-mt-[70px]
						vsm:w-[150px] sm:-mt-[140px] sm:w-[180px] transition-all ease-linear md:w-[130px]
						md:-mt-[40px] md:ml-[58%] mod:w-[150px] lg:-mt-[65px] lg:ml-[65%] xl:w-[180px] xl:-mt-[150px] 2xl:ml-[53%] 2xl:-mt-[270px] 2xl:w-[200px] ${visibility}`}
							src={img3}
							alt=""
						/>
					</div>
				</div>
			</div>
		</>
	);
}
