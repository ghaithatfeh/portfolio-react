import Lottie from "react-lottie";
import Animation from "../assets/lotties/Animation2.json";

const About = () => {
	const lottieOptions = {
		loop: true,
		autoplay: true,
		animationData: Animation,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	return (
		<section className="about" id="about">
			<div className="container">
				<div className="special-heading" data-aos="fade-up">
					About
				</div>
				<p data-aos="fade-up" data-aos-delay="300">
					Less is more work
				</p>
				<div className="about-container">
					<div className="image" data-aos="zoom-out">
						<Lottie options={lottieOptions} height={350} width={350} />

						{/* <dotlottie-player
							src="https://lottie.host/8a43feea-5ed1-48c1-95a2-03821bd88c4f/pRYfmKDN8S.json"
							background="transparent"
							speed="1"
							style="width: 350px; height: 350px"
							loop
							autoplay
						></dotlottie-player> */}
					</div>
					<div className="text">
						<p data-aos="fade-up">
							An ambitious person with high organizational abilities, a passionate Full-Stack Developer with a
							Bachelor's degree in Computer Science and 3 years of experience in web development, I possess strong
							skills in <b>Laravel, React.js, and Vue.js</b>.
						</p>
						<hr data-aos="fade-left" />
						<p data-aos="fade-up">
							I graduated from Damascus University in the field of Computer Science, and I gained good experience
							while working on college projects, Now I work as Full Stack Developer, I possess excellent skills in
							Laravel, Yii2, Vue.js, React.js, Node.js, Strapi, MySQL, Bootstrap, Git, AWS, jQuery, SASS, CSS, and
							HTML. I am also familiar with Livewire, Agile methodology, Jira, Stripe, MongoDB, Node.js,
							Express.js. Shopify, and WordPress.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
