import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette, faMobileAlt, faPencilRuler } from "@fortawesome/free-solid-svg-icons";
import { faInternetExplorer } from "@fortawesome/free-brands-svg-icons";
import Lottie from "react-lottie";
import Animation from "../assets/lotties/Animation1.json";

const Services = () => {
	const lottieOptions = {
		loop: true,
		autoplay: true,
		animationData: Animation,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	return (
		<section className="services" id="services">
			<div className="container">
				<h2 className="special-heading" data-aos="fade-up">
					Services
				</h2>
				<p data-aos="fade-up" data-aos-delay="300">
					Don't be busy, be productive
				</p>
				<div className="services-container">
					<div className="col">
						<div className="srv" data-aos="fade-right">
							<FontAwesomeIcon icon={faPalette} size="2x" color="#10cab7" />
							<div className="text ms-4">
								<h3>Graphic Design</h3>
								<p>
									Graphic design is the process of visual communication and problem-solving using one or more of
									typography, photography and illustration.
								</p>
							</div>
						</div>
						<div className="srv" data-aos="fade-left">
							<FontAwesomeIcon icon={faMobileAlt} size="2x" color="#10cab7" />
							<div className="text ms-4">
								<h3>Mobile Development</h3>
								<p>
									The process by which applications are created for devices running the Android/IOS operating
									systems.
								</p>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="srv" data-aos="fade-right">
							<FontAwesomeIcon icon={faPencilRuler} size="2x" color="#10cab7" />
							<div className="text ms-4">
								<h3>Web Design</h3>
								<p>
									Web design encompasses many different skills and disciplines in the production and maintenance of
									websites.
								</p>
							</div>
						</div>
						<div className="srv" data-aos="fade-left">
							<FontAwesomeIcon icon={faInternetExplorer} size="2x" color="#10cab7" />
							<div className="text ms-4">
								<h3>Web Development</h3>
								<p>
									Web development is a broad term for the work involved in developing a web site for the Internet
									or an intranet.
								</p>
							</div>
						</div>
					</div>
					<div className="image ms-5" data-aos="zoom-out">
						<Lottie options={lottieOptions} height={310} width={310} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
