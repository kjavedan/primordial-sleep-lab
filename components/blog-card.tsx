"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
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

type BlogCardProps = {
	href: string;
	author: string;
	readTime: string;
	image: string;
	title: string;
};

export default function BlogCard({
	href,
	author,
	readTime,
	image,
	title,
}: BlogCardProps) {
	const router = useRouter();

	return (
		<Card className="gap-4">
			<div className="flex items-center gap-4 px-4 pt-4">
				<Avatar>
					<AvatarImage src={"/carolina.png"} alt="carolina" />
					<AvatarFallback>C</AvatarFallback>
				</Avatar>
				<div>
					<div>{author}</div>
					<p className="text-sm text-muted-foreground">{readTime}</p>
				</div>
			</div>
			<CardMedia className="px-4 h-40 xl:h-60 rounded-none">
				<Image
					src={image}
					alt={title}
					width={400}
					height={400}
					className="size-full object-cover rounded-3xl"
				/>
			</CardMedia>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
			</CardHeader>
			<CardFooter>
				<CardAction>
					<Button size="lg" onClick={() => router.push(`/blogs/${href}`)}>
						Read
					</Button>
				</CardAction>
			</CardFooter>
		</Card>
	);
}
