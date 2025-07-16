"use client";
import FadeInOnView from "@/components/animation/fade-in";
import BlogCard from "@/components/blog-card";
import SectionHeader from "@/components/section-header";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { blogs } from "@/data";

export default function Blogs() {
	return (
		<section id="blogs" className="lg:container mx-auto">
			<SectionHeader title="Blogs" />
			<FadeInOnView delay={0.3}>
				<Carousel>
					<CarouselContent className="pb-6 pl-2 px-2">
						{blogs.map((blog) => (
							<CarouselItem
								key={blog.id}
								className="basis-8/9 md:basis-1/2 lg:basis-1/3"
							>
								<BlogCard
									href={blog.href}
									author={blog.author}
									readTime={blog.readTime}
									title={blog.title}
									image={blog.image}
								/>
							</CarouselItem>
						))}
					</CarouselContent>
					<div className="hidden md:block mr-4 absolute -top-12 left-0 right-0">
						<CarouselPrevious />
						<CarouselNext />
					</div>
				</Carousel>
			</FadeInOnView>
		</section>
	);
}
