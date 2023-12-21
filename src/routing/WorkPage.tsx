import NavigationBar from "../Components/NavigationBar";
import { useState } from "react";

export default function WorkPage() {
	const [menu, setMenu] = useState(false);
	return (
		<>
			<NavigationBar
				onClick={() => {
					setMenu(!menu);
				}}
				menu={menu}
			/>
		</>
	);
}
