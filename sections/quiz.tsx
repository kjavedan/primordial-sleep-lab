"use client";
import Image from "next/image";
import FadeInOnView from "@/components/animation/fade-in";
import SectionHeader from "@/components/section-header";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardAction,
	CardDescription,
	CardFooter,
	CardHeader,
	CardMedia,
	CardTitle,
} from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { quizzes } from "@/data";

export default function Quiz() {
	return (
		<section id="quiz" className="lg:container mx-auto">
			<SectionHeader title="Quizzes" />
			<FadeInOnView delay={0.4} className="relative">
				<Carousel>
					<CarouselContent className="pb-6 pl-2">
						{quizzes.map((quiz) => (
							<CarouselItem
								key={quiz.id}
								className="basis-8/9 md:basis-1/2 lg:basis-1/3"
							>
								<Card>
									<CardMedia>
										<Image
											src={quiz.image}
											alt={quiz.imageAlt}
											width={200}
											height={200}
											className="w-full h-full object-cover"
										/>
									</CardMedia>
									<CardHeader>
										<CardTitle>{quiz.title}</CardTitle>
										<CardDescription>{quiz.description}</CardDescription>
									</CardHeader>
									<CardFooter>
										<CardAction>
											<Button size="lg" href={quiz.href}>
												Take Quiz
											</Button>
										</CardAction>
									</CardFooter>
								</Card>
							</CarouselItem>
						))}
					</CarouselContent>
					{/* Show navigation buttons on large screens as well */}
					<div className="hidden md:block mr-4 absolute -top-12 left-0 right-0">
						<CarouselPrevious />
						<CarouselNext />
					</div>
				</Carousel>
			</FadeInOnView>
		</section>
	);
}
