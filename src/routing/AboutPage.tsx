import { useState } from "react";
import AboutUs from "../Components/AboutUs";
import HeaderAboutUs from "../Components/HeaderAboutUs";
import NavigationBar from "../Components/NavigationBar";
import AfterHero from "../Components/AfterHero";
import Footer from "../Components/Footer";
import OurVision from "../Components/OurVision";
import OurTeam from "../Components/OurTeam";
import OurStory from "../Components/OurStory";

export default function AboutPage() {
	const [menu, setMenu] = useState(false);
	return (
		<>
			<div className="overflow-x-hidden">
				<NavigationBar
					onClick={() => {
						setMenu(!menu);
					}}
					menu={menu}
				/>
				<HeaderAboutUs />
				<AfterHero colorBridge="text-black" />
				<AboutUs
					visibility="block"
					color="grayscale"
					text="label Clan"
				/>
				<OurStory />
				<OurVision color="grayscale" />
				<OurTeam />
			</div>
			<Footer />
		</>
	);
}
