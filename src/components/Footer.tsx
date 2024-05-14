const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className="footer">
			© {year} <span>Ghaith Atfeh</span> All Right Reserved
		</footer>
	);
};

export default Footer;
