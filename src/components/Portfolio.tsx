import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import projects from "../projects";
import ProjectCard from "./ProjectCard";
import { useRef } from "react";

const Portfolio = () => {
	const ref = useRef<HTMLDivElement>(null);
	const owlRef = useRef<OwlCarousel>(null);

	const observer = new IntersectionObserver((entries) => {
		if (entries[0].isIntersecting) {
			owlRef.current?.to(0, 900);
			owlRef.current?.play(2000, 900);
		} else {
			owlRef.current?.stop();
			owlRef.current?.to(0, 900);
		}
	});
	if (ref.current) observer.observe(ref.current);

	const responsive = {
		0: {
			items: 1,
			stagePadding: 19,
		},
		600: {
			items: 1,
			stagePadding: 20,
		},
		800: {
			items: 1,
			stagePadding: 100,
		},
		1000: {
			items: 1,
			stagePadding: 200,
		},
		1200: {
			items: 2,
		},
	};

	return (
		<section className="portfolio" id="portfolio">
			<div className="container">
				<h2 className="special-heading" data-aos="fade-up">
					Portfolio
				</h2>
				<p data-aos="fade-up" data-aos-delay="300" style={{ marginBottom: "90px" }}>
					If you do it right, it will last forever.
				</p>
				<span ref={ref}></span>
				<OwlCarousel
					ref={owlRef}
					className="owl-theme"
					loop
					dotsEach
					// autoplay
					autoplayHoverPause
					autoplayTimeout={2500}
					smartSpeed={900}
					margin={20}
					stagePadding={150}
					responsive={responsive}
					data-aos="zoom-in"
				>
					{projects.map((project) => (
						<ProjectCard key={project.title} project={project} />
					))}
				</OwlCarousel>
			</div>
		</section>
	);
};

export default Portfolio;
