import Image from "next/image";
import SectionHeader from "@/components/section-header";
import Button from "@/components/ui/button";
import {
	Card,
	CardAction,
	CardDescription,
	CardFooter,
	CardHeader,
	CardImage,
	CardTitle,
} from "@/components/ui/card";

const services = [
	{
		id: 1,
		title: "One on One Sleep Coaching",
		description:
			"Customized sleep programs with tools, resources, and one-on-one support. I'll help interpret your sleep data and guide you to optimal sleep quality.",
		image: "/one-on-one.png",
		imageAlt: "One on One Sleep Coaching",
	},
	{
		id: 2,
		title: "Couples Sleep Coaching",
		description:
			"Most couples struggle to sleep well together, one always ends up sacrificing sleep. With my couples sleep coaching, I help you understand what's happening at night and improve sleep for both partners based on their individual needs.",
		image: "/couples.png",
		imageAlt: "Couples Sleep Coaching",
	},
	{
		id: 5,
		title: "Companies Sleep Coaching",
		description:
			"Optimize your sleep with a my online video course. I'll provide you with all the necessary tools, resources so you can do it yourself and improve your sleep in a more cost-effective way.",
		image: "/staff.png",
		imageAlt: "Companies Sleep Coaching",
	},
	{
		id: 3,
		title: "Group Sleep Coaching",
		description:
			"A more fun and accessible way to get the sleep coaching you need. You'll connect with others facing the same struggles in a supportive community full of motivation and accountability.",
		image: "/group.png",
		imageAlt: "Group Sleep Coaching",
	},
	{
		id: 4,
		title: "Sleep to thrive",
		description:
			"Are you a company that truly cares about your team? My program helps your staff become more focused, productive, and energized—by teaching them to sleep like cavemen. Boost performance, profit, and create a workplace full of healthier, happier people.",
		image: "/running.png",
		imageAlt: "Sleep to thrive",
	},
];

export default function Services() {
	return (
		<section id="services" className="container mx-auto px-2 lg:px-20">
			<SectionHeader title={"services"} />
			<div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-6">
				{services.map((service, idx) => (
					<Service
						key={service.id}
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
};

function Service({
	title,
	description,
	image,
	imageAlt,
	className,
}: ServiceProps) {
	return (
		<Card className={className}>
			<CardImage>
				<Image
					src={image}
					alt={imageAlt}
					width={200}
					height={200}
					className="w-full h-full object-cover"
				/>
			</CardImage>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardFooter>
				<CardAction>
					<Button>start now</Button>
				</CardAction>
			</CardFooter>
		</Card>
	);
}
