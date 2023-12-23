// import Community from "./Components/Community";
// import Footer from "./Components/Footer";
import { useEffect } from "react";
import HomePage from "./routing/HomePage";
// import Services from "./Components/Services";
// import "./App.css";
import Lenis from "@studio-freight/lenis";

export default function App() {
	useEffect(() => {
		const lenis = new Lenis();

		lenis.on("scroll", (e) => {
			console.log(e);
		});

		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	}, []);
	return (
		<>
			<HomePage />
			{/* <Services />
			<Community />
			<Footer /> */}
		</>
	);
}
