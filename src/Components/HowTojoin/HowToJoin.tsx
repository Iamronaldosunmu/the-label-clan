// import "../index.css";
import logo1 from "/images/workforce.svg";
import logo2 from "/images/design.svg";
import logo3 from "/images/resilience.svg";
import Card from "./Card";

const list = [
	{
		img: logo1,
		title: "Modern workforce",
		text: "Multi-stakeholder governance aligns employees with the organization’s wider community.",
	},
	{
		img: logo2,
		title: "Meritocratic by design",
		text: "Tokenized ownership aligns deeply committed individuals with the organization’s success.",
	},
	{
		img: logo3,
		title: "Engineered for resilience",
		text: "Open Enterprise supports best practices in sociocratic management.",
	},
];

const HowToJoin = () => {
	return (
		<section className="max-w-[1440px] mx-auto px-[8vw] overflow-x-hidden grid gap-[80px] md:pt-[100px]">
			<div className="grid gap-4">
				<h3 className="font-clashfont-medium text-center text-[1.8rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem] 2xl:text-[4rem]">
					How can you join?
				</h3>
				<p className="font-roboto font-light text-center text-[.95rem] vxs:text-[1rem] xs:text-[1.125rem] max-w-[700px] mx-auto">
					Like we said earlier you can join by clicking on the link
					below. Be assisted by the label clan members, a 3 month
					probation period,But let’s explain what you have to do to
					join.
				</p>
			</div>
			<div className="grid gap-[60px] pb-[60px] mod:grid-cols-3 mod:gap-[18px] ">
				{list.map((item) => (
					<Card
						key={item.title}
						img={item.img}
						title={item.title}
						text={item.text}
					/>
				))}
			</div>
		</section>
	);
};

export default HowToJoin;
