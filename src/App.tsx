import AOS from "aos";
import "aos/dist/aos.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Loading from "./components/Loading";
import { useEffect, useState } from "react";

function App() {
	AOS.init({
		delay: 40,
		duration: 1200,
		easing: "ease-in-out",
	});
	const [showLoading, setShowLoading] = useState(true);

	useEffect(() => {
		const handleLoad = () => {
			setShowLoading(false);
			document.documentElement.style.overflowY = "inherit";
		};

		window.addEventListener("load", handleLoad);

		return () => {
			window.removeEventListener("load", handleLoad);
		};
	}, []);

	return (
		<>
			{showLoading && <Loading />}
			<Header />
			<Hero />
			<Features />
			<Services />
			<Portfolio />
			<About />
			<Contact />
			<Footer />
		</>
	);
}

export default App;
