import NavigationBar from "../Components/NavigationBar";
import Hero from "../Components/Header";
import AfterHero from "../Components/AfterHero";
import { useState } from "react";
import Services from "../Components/Service";
import Footer from "../Components/Footer";

export default function HomePage() {
	const [menu, setMenu] = useState(false);
	return (
		<>
			<NavigationBar
				onClick={() => {
					setMenu(!menu);
				}}
				menu={menu}
			/>
			<Hero />
			<AfterHero colorBridge="text-purple-400" />
			<Services />
			<Footer />
		</>
	);
}
