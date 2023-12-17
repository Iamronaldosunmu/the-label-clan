import themeBtn from "/images/color_Mode.svg";
import menuBtn from "/images/Menu.svg";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";

interface Props {
	onClick: () => void;
	menu: boolean;
}

export default function NavigationBar({ onClick, menu }: Props) {
	const menuDisplay = `${
		menu === false ? "hidden translate-x-[100vh]" : "block translate-x-0"
	}`;
	return (
		<nav className="relative px-[8vw] pt-5 pb-2">
			<div className="border-b-2 flex items-center justify-between">
				<p className="uppercase text-[4.8vw] font-playfair font-semibold xs:text-[4.5vw] sm:text-[22px] lg:text-[25px] 2xl:text-[28opx]">
					the label clan
				</p>
				<ul
					id="desktop-nav"
					className="hidden cursor-pointer md:flex items-center gap-5 lg:gap-8"
				>
					<li>
						<Link to="/" type="button">
							Home
						</Link>
					</li>
					<li>
						<Link to="/about" type="button">
							About Us
						</Link>
					</li>
					<li>
						<Link to="/work" type="button">
							Work
						</Link>
					</li>
					<li>
						<Link to="/community">Community</Link>
					</li>
				</ul>
				<div
					id="mobile-nav"
					className={`bg-white-100 shadow-lg absolute top-0 z-40 right-0 ${menuDisplay} bottom-0 w-[75vw] pt-16 px-[8vw] h-[100vh] transition duration-150 `}
				>
					<ul className="grid gap-[24px] font-roboto font-bold text-xl relative">
						<li>
							<Link to="/" type="button">
								Home
							</Link>
						</li>
						<li>
							<Link to="/about" type="button">
								About Us
							</Link>
						</li>
						<li>
							<Link to="/work" type="button">
								Work
							</Link>
						</li>
						<li>
							<Link to="/community">Community</Link>
						</li>
						<li
							onClick={onClick}
							className="absolute -top-8 right-0"
						>
							<FaXmark />
						</li>
					</ul>
				</div>
				<div className="flex items-center gap-5">
					<button
						className="-mt-[2.3px] cursor-pointer md:hidden"
						onClick={onClick}
					>
						<span className="sr-only">Menu Button</span>
						<img src={menuBtn} alt="" />
					</button>
					<div>
						<button className="lg:hidden">
							<span className="sr-only">Toggle Mode</span>
							<img src={themeBtn} alt="" />
						</button>
						<div className="hidden lg:flex gap-2">
							<button type="button">Dark</button>
							<button type="button">Light</button>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}
