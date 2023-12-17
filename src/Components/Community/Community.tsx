import img1 from "/images/community.jpeg";
import img2 from "/images/community2.jpeg";

export default function Community() {
	return (
		<section>
			<div className="grid px-[34px] lg:px-[65px] xl:px-[75px]  2xl:px-[110px] py-[150px] relative 3xl:px-0">
				<div className="lg:grid grid-cols-2 lg:gap-[54px] 2xl:gap-[54px] 3xl:gap-[62px] 4xl:gap-[200px] 3xl:max-w-[1440px] 3xl:mx-auto">
					<div className="lg:order-2 lg:pt-[80px]">
						<h3 className="font-playfair relative text-[40px] xs:text-[45px] w-fit pb-[100px] 2xl:pb-[120px] sm:text-[60px] sm:mx-auto lg:mx-0 lg:text-[70px] 2xl:text-[80px] 3xl:text-[90px] 3xl:pb-[140px]">
							Community
							<span className="font-sacramento text-[40px] sm:text-[42px] absolute top-[25px] xs:top-[32px] sm:top-[54px] -right-[45px] lg:top-[80px] lg:text-[45px] 2xl:top-[100px] 3xl:top-[124px]  text-purple-200">
								projects
							</span>
						</h3>
						<p className="font-roboto text-[18px] xs:text-[20px] font-light max-w-[300px] pb-[20px] sm:text-[21px] md:max-w-[450px] md:ml-auto md:mr-[60px] lg:mx-0 2xl:text-[24px] 2xl:max-w-[500px]">
							Assistant Video Producer in 2018, promoted to a
							Video Producer in{" "}
							<span className="invisible md:visible">
								2019 Assistant Video Producer in 2018, promoted
								to a Video Producer in 2019
							</span>{" "}
						</p>
					</div>

					<div className="relative mb-[14px] max-w-[450px] md:mb-[32px] md:ml-[80px] lg:mx-0 2xl:max-w-[520px] 3xl:max-w-full">
						<img src={img1} alt="" />
						<p className="text-[12px] xs:text-[14px] py-[19px] max-w-[200px] leading-tight sm:max-w-fit xl:pl-[24px] 2xl:pl-[48px]">
							Open Enterprise supports best practices in{" "}
						</p>
						<img
							className="w-[100px] xs:w-[110px] transition-width duration-150 ease-in-out absolute bottom-0 right-0 sm:-right-[52px] sm:w-[125px] xl:w-[140px] xl:-right-[85px] 2xl:-right-[112px] 2xl:w-[156px]"
							src={img2}
							alt=""
						/>
					</div>

					<p className="max-w-[200px] text-[16px] font-light font-roboto pb-[90px] xs:text-[18px] sm:text-[20px] sm:max-w-[270px] md:hidden">
						{" "}
						2019, Assistant Video Producer in 2018, promoted to a
						Video Producer in 2019
					</p>
				</div>

				<div className="flex gap-[32px] items-center lg:absolute top-[65%] left-[55%] 2xl:top-[70%] 2xl:left-[62%]">
					<p className="border-[0.5px] w-[53px] md:w-fit px-[12px] py-[10px] text-center rounded-[50vw] text-[20px] md:px-[21px] md:py-[16px] lg:px-[30px] lg:py-[22px] lg:text-[24px] cursor-pointer -rotate-[30deg] hover:rotate-0 transition duration-300 ease-in-out">
						&rarr;
					</p>
					<p className="font-light text-[18px] leading-tight max-w-[300px]">
						Here are some featured projects, Keep scrolling to see.
					</p>
				</div>
			</div>
		</section>
	);
}
