import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWandMagicSparkles, faGem, faGlobeAsia } from "@fortawesome/free-solid-svg-icons";

const Features = () => {
	return (
		<section className="features" id="features">
			<div className="container">
				<div className="feat" data-aos="fade-right">
					<FontAwesomeIcon icon={faWandMagicSparkles} size="3x" color="#10cab7" />
					<h3>Tell Me Your Idea</h3>
					<p>
						I Would Love To Value Your Ideas !<br />
						contact me and you would be a part of my mission.
					</p>
				</div>
				<div className="feat" data-aos="fade-up">
					<FontAwesomeIcon icon={faGem} size="3x" color="#10cab7" />
					<h3>I Will Do All The Work</h3>
					<p>All you have to do is give me the beginning of the work and I will give you the end.</p>
				</div>
				<div className="feat" data-aos="fade-left">
					<FontAwesomeIcon icon={faGlobeAsia} size="3x" color="#10cab7" />
					<h3>Your Product is Worldwide</h3>
					<p>Go global with your new product and grow for the better.</p>
				</div>
			</div>
		</section>
	);
};

export default Features;
