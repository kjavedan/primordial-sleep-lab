// Structured testimonials data
"use client";

import { useEffect, useState } from "react";
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

type Testimonial = {
	id: number;
	text?: string;
	author?: string;
	role?: string;
	video?: string; // URL or embed code for video testimonials
};

export const testimonials: Testimonial[] = [
	{
		id: 1,
		text: `Carolina’s course taught me the importance of sleep hygiene and how it impacts overall health. I learned practical ways to improve my sleep, including understanding my chronotype and setting up my own sleep lab. Carolina is relatable, passionate, and always supportive. I highly recommend her course if you want to improve your sleep.`,
		author: "Robert Kent",
		role: "Therapist",
	},
	{
		id: 2,
		text: `Taking the Primordial Sleep course meant an important gain in health and professional performance for me. After following the classes, changing habits and adhering to the use of some devices recommended by Carolina Ramuski, I started to sleep the 8 hours recommended for my chronotype (hummingbird), I increased the duration of my REM sleep and my Deep sleep and got to lose 11 kilos in 8 months. I strongly recommend this excellent program for improving sleep quality and quality of life.`,
		author: "DDS, MSc, PhD André De Vito",
		role: "CEO Aluminus Academy",
	},
	{
		id: 3,
		text: `Really personalised approach with coach Zoom calls and regular check ups, I was able to have less anxiety around bedtime. Carolina is lovely, personable, and inspirational.\n\nThis was a truly great experience and I learnt a lot!`,
		author: "Tafara Graig",
		role: "Teacher",
	},
	{
		id: 4,
		text: `This experience was amazing! Engaging content and a lot of tips and further reading material. Identifying my chronotype - and what works best for me - allowed me to improve my time to sleep. With offices now introducing a better life balance and care for mental health, it would be interesting to have this workshop across businesses - so I would recommend for business, friends, and family.`,
		author: "Lili Avila",
		role: "Worldwide Account manager",
	},
	{
		id: 5,
		text: `Since starting the Primordial Sleep lab, I am less tired during the day and I am managing falling asleep within my sleep routine setup. I really like the content of the course and would recommend it to everyone.`,
		author: "Ana Jaloretto",
		role: "Business Support Officer",
	},
	{
		id: 6,
		text: `I've had  sleeping problems for years and after only one long coaching session with Carolina, I've realized that the base of my problem was psychological and it was related to some childhood traumas that I have. Once she helped me to identify what could be the problem I started paying attention to it and consequently started sleeping better, Thank you for that talk we had Carolina, it's been helping a lot`,
		author: "Marcel Vianna",
		role: "Tattoo Artist",
	},
	{
		id: 7,
		text: `All the content and follow-up I've had during this process was absolutely useful and effective. Each week Carolina brought contents that complemented each other. With small changes in my habits, I improved the quality of my sleep and was able to identify habits that were destroying my sleep and rest time in general. This process is highly recommended.`,
		author: "Bruna Magnoni",
		role: "Tattoo Artist",
	},
	{
		id: 8,
		text: `Carolina's Sleeping program was a life-changing experience for me and a few others in my company.
Even though I was coming out of burnout and had enormous sleeping problems when I started the program, I improved my sleep quality drastically after very small changes.
Carolina is a passionate professional who coaches with enthusiasm and attention to detail.
If you care about your employees and their mental health, I highly recommend her!`,
		author: "Mileni Bender",
		role: "Manager Strategic Partnerships",
	},
	// 9. Video testimonial
	{
		id: 9,
		video: "VIDEO_URL_1", // Replace with actual video URL or embed code
		author: "Mark Pamintuan",
		role: "Developer",
	},
	// 10. Video testimonial
	{
		id: 10,
		video: "VIDEO_URL_2", // Replace with actual video URL or embed code
		author: "Jen Trinanes",
		role: "Developer",
	},
];

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
			<div className="relative">
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
			</div>
		</section>
	);
}
