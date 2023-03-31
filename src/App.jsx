import About from "./components/About";
import Banner from "./components/Banner";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Image from "./components/Image";
import Services from "./components/Services";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";
import Works from "./components/Works";

function App() {
	return (
		<div>
			<Header />
			<Banner />
			<Services />
			<About />
			<Works />
			<Testimonial />
			<Features />
			<Team />
			<Contact />
			<Blog />
			<Image />
			<Footer />
		</div>
	);
}

export default App;
