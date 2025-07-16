"use client";

import { useEffect, useState } from "react";
import FadeInOnView from "@/components/animation/fade-in";
import SectionHeader from "@/components/section-header";
import { Card, CardContent, CardFooter, CardMedia } from "@/components/ui/card";
import {
	Carousel,
	type CarouselApi,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "@/data";

export default function Testimonials() {
	const [api, setApi] = useState<CarouselApi>();
	const [current, setCurrent] = useState(0);
	const [count, setCount] = useState(0);

	useEffect(() => {
		if (!api) {
			return;
		}

		setCount(api.scrollSnapList().length);
		setCurrent(api.selectedScrollSnap() + 1);

		api.on("select", () => {
			setCurrent(api.selectedScrollSnap() + 1);
		});
	}, [api]);

	return (
		<section id="testimonials" className="lg:container  mx-auto">
			<SectionHeader title="testimonials" />
			<FadeInOnView delay={0.4} className="relative">
				<Carousel setApi={setApi}>
					<CarouselContent className="pb-6 pl-2 px-2">
						{testimonials.map((testimonial) => (
							<CarouselItem
								key={testimonial.id}
								className="basis-8/9 md:basis-1/2 lg:basis-1/3"
							>
								<Card className="min-h-[380px]">
									<CardContent className="pt-6">
										<p className="text-muted-foreground">{testimonial.text}</p>
									</CardContent>
									<CardFooter className="px-6">
										<h4 className="font-sans">
											<span className="text-lg mr-2">{testimonial.author}</span>
											|
											<span className="text-muted-foreground ml-2">
												{testimonial.role}
											</span>
										</h4>
									</CardFooter>
								</Card>
							</CarouselItem>
						))}
					</CarouselContent>
					{/* Show navigation buttons on large screens as well */}
					<div className="hidden md:block mr-4 absolute -top-12 left-0 right-0">
						<CarouselPrevious />
						<CarouselNext />
						<div className="text-muted-foreground pl-4 text-sm">
							Slide {current} of {count}
						</div>
					</div>
				</Carousel>
			</FadeInOnView>
		</section>
	);
}
