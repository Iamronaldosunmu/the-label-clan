import star from "/images/cursive-star.svg";

interface Props {
	colorBridge: string;
}

export default function AfterHero({ colorBridge }: Props) {
	return (
		<section className="relative h-[70ch] my-[60px]">
			<div>
				<div className="grid gap-[40px] top-[50%] left-[14.6vw] right-[14.6vw] absolute -translate-y-[50%] md:left-[10vw] md:right-[10vw]">
					<h2 className="text-[5.8vw] text-center leading-[3.125rem] -tracking-[0.4px] md:leading-[4rem] font-clashfont-medium xl:text-[4rem] max-w-[988px] w-full mx-auto relative">
						The <span className={`${colorBridge}`}>bridge</span>{" "}
						between creative young adults and the brands who need
						their work.
						<img
							className="absolute -top-[1.125rem] right-0"
							src={star}
							alt=""
						/>
						<img
							className="absolute -bottom-[1.125rem] left-0"
							src={star}
							alt=""
						/>
					</h2>
					<button
						className="flex gap-4 items-baseline mx-auto link-btn relative pb-1 w-fit text-[1.125rem] lg:text-[1.5rem] cursor-pointer"
						type="button"
					>
						<span>Learn More</span>
						&rarr;
					</button>
				</div>
			</div>
		</section>
	);
}
