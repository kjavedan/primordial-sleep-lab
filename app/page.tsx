import About from "@/sections/about";
import Blogs from "@/sections/blogs";
import BookMeeting from "@/sections/book-meeting";
import Contact from "@/sections/contact";
import Hero from "@/sections/hero";
import Quiz from "@/sections/quiz";
import Services from "@/sections/services";
import Testimonials from "@/sections/testimonials";

export default function Home() {
	return (
		<div className="">
			<Hero />
			<Services />
			<Quiz />
			<About />
			<Testimonials />
			<BookMeeting />
			<Blogs />
			<Contact />
		</div>
	);
}
