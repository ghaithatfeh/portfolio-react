import cv from "../assets/cv.pdf";

const Hero = () => {
	return (
		<section className="landing">
			<div className="intro-text">
				<h1 data-aos="fade-left">Hello There</h1>
				<p data-aos="fade-right">
					I am Ghaith Atfeh - Full Stack Web Developer & Software Engineer
				</p>
				<div className="d-flex justify-content-center gap-3">
					<a href="#features" className="btn btn-outline-primary">
						Explore My Work
					</a>
					<a
						href={cv}
						target="_blank"
						className="btn btn-primary"
					>
						Download My CV
					</a>
				</div>
			</div>
		</section>
	);
};

export default Hero;
