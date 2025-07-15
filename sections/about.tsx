import Image from "next/image";
import { Newsletter } from "@/components/newsletter";
import SectionHeader from "@/components/section-header";

export default function About() {
	return (
		<section id="about" className="max-w-5xl mx-auto px-2">
			<SectionHeader title="About" className="lg:justify-start lg:pl-12" />
			<div className="lg:flex gap-4 mb-4">
				<div className="max-w-[70%] md:min-w-92 mx-auto  rounded-full md:rounded-4xl overflow-hidden">
					<Image
						src={"/carolina.png"}
						alt="carolina"
						width={400}
						height={400}
						className="w-full rounded-4xl"
					/>
				</div>
				<div className="p-4 lg:p-8 lg:border rounded-4xl">
					<p className="text-muted-foreground text-center lg:text-left">
						As a qualified Naturopathic Nutritionist and Certified Holistic
						Health Coach focused on sleep, I’m on a mission to help people sleep
						better and live healthier, happier lives. I’ve seen firsthand the
						transformative power of quality sleep—it’s like magic! It reduces
						stress, boosts productivity, and improves wellbeing. But I know it’s
						not always easy to achieve. That’s why I’ve dedicated my career to
						helping people optimize their sleep using a unique blend of
						ancestral wisdom, modern technology, and biohacking. My approach
						considers the whole person and creates balance in all areas of life.
						I believe sleep is the foundation of health—by starting there, we
						create positive ripple effects in every part of life. I offer
						personalized coaching and corporate wellness programs to help people
						get restful, rejuvenating sleep and enhance their performance. I
						stay up to date with the latest research and love helping clients
						unlock the full potential of their sleep. If you're tired of feeling
						tired, let’s chat!
					</p>
				</div>
			</div>
			<Newsletter />
		</section>
	);
}
