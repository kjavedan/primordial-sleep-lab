"use client";

import FadeInOnView from "@/components/animation/fade-in";
import BlogCard from "@/components/blog-card";
import SectionHeader from "@/components/section-header";
import { blogs } from "@/data";

export default function Blogs() {
	return (
		<div className="container mx-auto px-2 py-20">
			<SectionHeader title="Blogs" />
			<div className="grid grid-cols-[repeat(auto-fit,minmax(330px,1fr))] gap-4">
				{blogs.map((blog, idx) => (
					<FadeInOnView key={blog.id} delay={idx * 0.1}>
						<BlogCard
							href={blog.href}
							author={blog.author}
							readTime={blog.readTime}
							title={blog.title}
							image={blog.image}
						/>
					</FadeInOnView>
				))}
			</div>
		</div>
	);
}
