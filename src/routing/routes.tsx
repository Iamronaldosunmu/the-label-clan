import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import CommunityPage from "./CommunityPage";
import WorkPage from "./WorkPage";

const router = createBrowserRouter([
	{ path: "/", element: <HomePage /> },
	{ path: "/about", element: <AboutPage /> },
	{ path: "/work", element: <WorkPage /> },
	{ path: "/community", element: <CommunityPage /> },
]);

export default router;
