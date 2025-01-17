import wasset from "./assets/images/wasset.png";
import youbu from "./assets/images/portfolio6.png";
import ancestry from "./assets/images/ancestry.png";
import crisper from "./assets/images/crisper.jpg";
import portfolio4 from "./assets/images/portfolio4.jpg";
import moneyManagement from "./assets/images/money-management.png";
import portfolio3 from "./assets/images/portfolio3.jpg";
import portfolio5 from "./assets/images/portfolio5.jpeg";
import portfolio7 from "./assets/images/portfolio7.png";
import portfolio8 from "./assets/images/portfolio8.png";
import portfolio10 from "./assets/images/portfolio10.png";
import portfolio9 from "./assets/images/portfolio9.png";
import gamehub from "./assets/images/gamehub.png";

const projects = [
	{
		image: portfolio7,
		title: "Homely Design",
		description: "Website and dashboard for company offers online landscape design services. full control of the content through the dashboard. Built with Laravel.",
		url: "https://homelydesign.ca/",
	},
	{
		image: wasset,
		title: "منصة وسيط للأعمال المستقلة",
		isArabic: true,
		description:
			"Al Waseet is an Arab platform that helps business owners to access the best professional freelance workers to contract with them to do business and projects online.",
		url: "https://wasset-demo.ghaithatfeh.online/",
	},
	{
		image: youbu,
		title: "YouBeeU",
		description: "A social media platform. The platform is available on the web, iPhone, and Android devices. My main task was to build the APIs for everything related to feeds, using the Laravel framework.",
		url: "https://youbeeu.com.au/feed/all/",
	},
	{
		image: ancestry,
		title: "Ancestry App",
		description: "A web application for mobiles and tablets built for an art event in Canada to view paintings and scan them to convert them to 3D objects. I built it with Vue.js and deployed it to AWS.",
		url: "https://historyrevealed.ghaithatfeh.online/",
	},
	{
		image: crisper,
		title: "Crisper Restaurant",
		description: "I developed this website for restaurant in KSA, Technologies used: HTML, CSS, Bootstrap 5, JavaScript and Jquery in Frontend, PHP and mySQL in Backend.",
		url: "https://ghaithatfeh.github.io/crisper/",
	},
	{
		image: portfolio4,
		title: "جمعية الصداقة العراقية الصينية",
		isArabic: true,
		description: "IQCH It is a website with full control over the content through the dashboard, I developed the front end and participated in the development of the back end.",
		url: "https://iqch.org/",
	},
	{
		image: moneyManagement,
		title: "Money Management System",
		description: "Light accounting web application for recording financial transactions (incoming - outcoming) and giving chart reports, supports both English and Arabic languages, developed using Yii2 Framework.",
		url: "https://money-management.ghaithatfeh.online/",
	},
	{
		image: portfolio3,
		title: "Morsbach Maschinenbau GmbH",
		description: "Website for a mechanical company, full control of the content through the dashboard, displaying products and send orders, I designed and developed for the frontend and backend.",
		url: "http://mmb-demo.ghaithatfeh.online/",
	},
	{
		image: portfolio5,
		title: "Offers Dashboard",
		description: "This project involved creating a dashboard to manage and provide a RESTful API for a mobile application. It supports multiple roles and languages. developed using Laravel Framework.",
		url: "https://offers-demo.ghaithatfeh.online/",
	},
	{
		image: portfolio8,
		title: "News Articles",
		description: "Web application allows users to create news articles with styleable text and GIFs. I built it with Laravel, Node.js, and Vue.js.",
		url: "https://github.com/ghaithatfeh/news_articles/",
	},
	{
		image: portfolio10,
		title: "Abba Medix",
		description: "An e-commerce platform in Canada, built with Shopify, Node.js, Strapi, PostgreSQL, and hosted on AWS. I implemented numerous improvements in both the frontend and backend of this project.",
		url: "https://abbamedix.com/",
	},
	{
		image: gamehub,
		title: "GameHub",
		description: "A video game discovery web app that helps you find new and interesting games to play. With GameHub, you can search for games by platform, genre, and more. Built with ReactJS, Chakra UI, React Query, and Zustand.",
		url: "https://gamehub.ghaithatfeh.online/",
	},
	{
		image: portfolio9,
		title: "ArtGate",
		description: "CMS and RESTful API for VR meta verse art gallery. managing arts media, e-payment. Built with Laravel, Repository Service Pattern, Stripe for payment, AWS EC2 for deployment.",
		url: "https://cms.artgatevr.com/",
	},
];

export default projects;
