import image1 from "../images/img1.png";
import image2 from "../images/img2.png";
import image3 from "../images/img3.gif";

import styles from "./project.module.css";

const Project = () => {
	return (
		<>
			<div className="projects-section">
				<div className="grid md:grid-cols-2 gap-4 text-left">
					<div className="md:col-span-1 flex justify-start">
						<div className="flex flex-col">
							<h2 className="text-1xl mb-5 sm:mb-1 w-60 font-semibold">
								Projects
							</h2>
							<div className="mb-5 sm:mb-1 w-60 md:w-screen-1/4 border-t border-gray-600 border-opacity-75"></div>

							<p className="font-bold mb-2 text-2xl w-90">
								The{" "}
								<span className="text-purple-700">bridge</span>{" "}
								between creative young adults and the brands who
								need their work.
							</p>
						</div>
					</div>
					<div className="md:col-span-1 flex justify-start">
						<div className="flex flex-col">
							<p className="mb-3 ">
								WAC People Agency connects businesses with a
								pool of talented and creative young
								professionals from various fields.
							</p>
							<p>
								Our mission is to provide businesses with the
								right team for their creative projects.
							</p>
							<div className="flex justify-end md:justify-start mt-5 md:mt-0">
								<a
									className={`${styles["view-project-button"]} bg-500 rounded-lg link-arrow font-semibold`}
									href="#"
								>
									View Projects{" "}
									<span className={styles["arrow-icon"]}>
										&rarr;
									</span>
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className="grid grid-cols-2 gap-4 mt-6">
					<div className="md:col-span-1">
						<img
							src={image1}
							alt="Image 1"
							className="w-full h-auto"
						/>
					</div>
					<div className="md:col-span-1">
						<img
							src={image2}
							alt="Image 2"
							className="w-full h-auto"
						/>
					</div>
				</div>

				<div className="mt-6">
					<img src={image3} alt="Image 3" className="w-full h-auto" />
				</div>
			</div>
		</>
	);
};

export default Project;
