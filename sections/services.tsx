"use client";
import { motion } from "motion/react";
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
import { services } from "@/data";

export default function Services() {
	return (
		<section id="services" className="container mx-auto px-2">
			<SectionHeader title={"services"} />
			<div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-6">
				{services.map((service, idx) => (
					<Service
						key={service.id}
						idx={idx}
						title={service.title}
						description={service.description}
						image={service.image}
						imageAlt={service.imageAlt}
						className={
							idx === 0 || idx === 1 ? "lg:col-span-3" : "lg:col-span-2"
						}
					/>
				))}
			</div>
		</section>
	);
}

type ServiceProps = {
	title: string;
	description: string;
	image: string;
	imageAlt: string;
	className?: string;
	idx?: number;
	isLargeScreen?: boolean;
};

function Service({
	idx,
	title,
	description,
	image,
	imageAlt,
	className,
}: ServiceProps) {
	return (
		<FadeInOnView className={className} delay={idx * 0.1}>
			<Card className="size-full">
				<CardMedia>
					<Image
						src={image}
						alt={imageAlt}
						placeholder="blur"
						blurDataURL={image}
						width={500}
						height={500}
						className="size-full object-cover"
					/>
				</CardMedia>
				<CardHeader>
					<CardTitle>{title}</CardTitle>
					<CardDescription>{description}</CardDescription>
				</CardHeader>
				<CardFooter>
					<CardAction>
						<Button size="lg" href="#meet">
							start now
						</Button>
					</CardAction>
				</CardFooter>
			</Card>
		</FadeInOnView>
	);
}
