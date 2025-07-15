import Image from "next/image";
import SectionHeader from "@/components/section-header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardAction,
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

const blogs = [
	{
		id: 1,
		title: "Saunas and Better Sleep",
		author: "Carolina Ramuski",
		readTime: "2 min read",
		image: "/sauna.png",
	},
	{
		id: 2,
		title: "What About Caffeine?",
		author: "Carolina Ramuski",
		readTime: "3 min read",
		image: "/coffee.png",
	},
	{
		id: 3,
		title: "Is Oversleeping Good?",
		author: "Carolina Ramuski",
		readTime: "4 min read",
		image: "/extra-sleep.png",
	},
	{
		id: 4,
		title: "Sleep Cycles",
		author: "Carolina Ramuski",
		readTime: "5 min read",
		image: "/insomnia.png",
	},
	{
		id: 5,
		title: "Understanding Your Chronotype",
		author: "Carolina Ramuski",
		readTime: "3 min read",
		image: "/owel.png",
	},
];

export default function Blogs() {
	return (
		<section id="blogs" className="lg:container mx-auto">
			<SectionHeader title="Blogs" />
			<div>
				<Carousel>
					<CarouselContent className="pb-6 pl-2 px-2">
						{blogs.map((blog) => (
							<CarouselItem
								key={blog.id}
								className="basis-8/9 md:basis-1/2 lg:basis-1/3"
							>
								<Card className="gap-4">
									<div className="flex items-center gap-4 px-4 pt-4">
										<Avatar>
											<AvatarImage src={"/carolina.png"} alt="carolina" />
											<AvatarFallback>C</AvatarFallback>
										</Avatar>
										<div>
											<div>{blog.author}</div>
											<p className="text-sm text-muted-foreground">
												{blog.readTime}
											</p>
										</div>
									</div>
									<CardMedia className="px-4 h-40 xl:h-60 rounded-none">
										<Image
											src={blog.image}
											alt={blog.title}
											width={400}
											height={400}
											className="size-full object-cover rounded-3xl"
										/>
									</CardMedia>
									<CardHeader>
										<CardTitle>{blog.title}</CardTitle>
									</CardHeader>
									<CardFooter>
										<CardAction>
											<Button size="lg">Read</Button>
										</CardAction>
									</CardFooter>
								</Card>
							</CarouselItem>
						))}
					</CarouselContent>
					<div className="hidden md:block mr-4 absolute -top-12 left-0 right-0">
						<CarouselPrevious />
						<CarouselNext />
					</div>
				</Carousel>
			</div>
		</section>
	);
}
