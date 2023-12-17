import Form from "./Form";

export default function Footer() {
	return (
		<footer className="bg-black text-white-100 px-8 lg:px-16 xl:px-[80px] 2xl:px-[100px] 3xl:px-[120px] pt-[105px] pb-[40px] font-roboto overflow-x-hidden">
			<div className="3xl:max-w-[1440px] w-full relative mx-auto">
				<div className="xl:mb-[141px]">
					<div className="grid gap-[21px] mb-[20px] xs:mb-[30px] md:mb-[42px]">
						<p className="uppercase text-white-300 font font-semibold leading-6 text-[14px]">
							Prospective Client ?
						</p>
						<div className="bg-grey-400 h-[1px] w-[200px] lg:w-[300px] xl:w-[500px] 3xl:w-[800px]"></div>
						<h3 className="text-[24px] md:text-[32px]  font-bold leading-[44px] xl:text-[40px] tracking-tight ">
							Let&apos;s handle your Next Project
						</h3>
					</div>
					<Form />
				</div>

				<div className="mb-[90px] lg:absolute top-0 right-0">
					<div className="md:pb-[20px]">
						<p className="text-[14px] uppercase text-white-300 font-semibold leading-[23px] lg:pb-[20px]">
							Get in touch
						</p>
						<div className="bg-grey-400 h-[1px] w-[200px] mb-[19px]"></div>
						<h3 className="text-[20px] font-bold leading-[44px] -tracking-[0.4px] md:text-[30px] lg:text-[40px]">
							Email us
						</h3>
					</div>
					<div>
						<p className="text-[14px] text-white-300 leading-[23px]">
							For Project inquiries only:
						</p>
						<p className="font-bold -tracking-[0.4px] text-[14px]">
							contactwacpeople@gmail.com
						</p>
					</div>
				</div>
				<div className="grid gap-[30px] pb-[42px] xs:grid-cols-2 relative">
					<div className="flex flex-col gap-[50px]">
						<div className="flex items-start gap-[6px]">
							<img
								className="xl:w-[45px]"
								src="public/img/Group 5.svg"
								alt=""
							/>
							<div className="w-[2px] h-[34px] lg:h-[48px] xl:h-[54px] bg-white-100"></div>
							<h3 className="font-inria font-bold uppercase text-[16px] leading-tight -mt-[2.3px] lg:text-[20px] xl:text-[24px]">
								The <br /> Label Clan
							</h3>
						</div>
						<p className="font-medium leading-[24px] text-white-300 text-[14px]">
							Fb. / Ig. /Tw.
						</p>
					</div>
					<div className="flex flex-col xs:gap-[6px] xs:-mt-[12px] -top-[40px] absolute xs:top-0 right-0">
						<p className="text-[13px] xl:text-[16px] text-white-300 leading-[23px]">
							Interested in working with us?
						</p>
						<p className="text-[13px] xl:text-[16px] text-white-300 leading-[23px]">
							contactwacpeople@gmail.com
						</p>
					</div>
				</div>
				<p className="leading-[24px] text-[15px] text-white-300 border-t-[0.05px] lg:py-[10px] 2xl:py-[20px]">
					&copy; 2021, WAC People. An RYDM Creatives Code.
				</p>
			</div>
		</footer>
	);
}
