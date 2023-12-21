import { useState } from "react";
import NavigationBar from "../Components/NavigationBar";
import AfterHero from "../Components/AfterHero";
import Footer from "../Components/Footer";
import HowToJoin from "../Components/HowTojoin/HowToJoin";
import AboutUs from "../Components/AboutUs";
import OurVision from "../Components/OurVision";
import Community from "../Components/Community";

export default function CommunityPage() {
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
				<AfterHero colorBridge="text-purple-400" />
				<AboutUs text="Community" visibility="hidden" />
				<OurVision />
				<HowToJoin />
				<Community />

				<Footer />
			</div>
		</>
	);
}
