import { useEffect, useRef, useState } from "react";
import logo from "../assets/images/logo.svg";

const Header = () => {
	const [openMenu, setOpenMenu] = useState(false);
	const progressBar = useRef<HTMLSpanElement>(null);

	const handleScroll = () => {
		const maxY = document.documentElement.scrollHeight - document.documentElement.clientHeight;
		if (progressBar.current) progressBar.current.style.width = (window.scrollY * 100) / maxY + "%";
		window.removeEventListener("scroll", () => {})
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header className="header shadow py-3" data-aos="fade-down">
			<div className="container">
				<a href="#top" style={{ height: "30px" }}>
					<img src={logo} alt="Logo" className="logo" />
				</a>
				<div className="links-lg d-none d-md-block">
					<ul className="navbar-nav d-flex flex-row gap-4">
						<li className="nav-item">
							<a href="#top">Home</a>
							<hr />
						</li>
						<li className="nav-item">
							<a href="#services">Services</a>
							<hr />
						</li>
						<li className="nav-item">
							<a href="#portfolio">Portfolio</a>
							<hr />
						</li>
						<li className="nav-item">
							<a href="#about">About</a>
							<hr />
						</li>
						<li className="nav-item">
							<a href="#contact">Contact</a>
							<hr />
						</li>
					</ul>
				</div>
				<div onClick={() => setOpenMenu(!openMenu)} className="links links-mb d-md-none">
					<span className="icone">
						<span></span>
						<span id="secSpan" style={{ width: openMenu ? "100%" : "50%" }}></span>
						<span></span>
					</span>
					<ul className={openMenu ? "" : "d-none"}>
						<li>
							<a href="#top">Home</a>
						</li>
						<li>
							<a href="#services">Services</a>
						</li>
						<li>
							<a href="#portfolio">Portfolio</a>
						</li>
						<li>
							<a href="#about">About</a>
						</li>
						<li>
							<a href="#contact">Contact</a>
						</li>
					</ul>
				</div>
			</div>
			<span ref={progressBar} className="progress-bar"></span>
		</header>
	);
};

export default Header;
