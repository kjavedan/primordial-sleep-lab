"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import FadeInOnView from "./animation/fade-in";

type PropsType = {
	title: string;
	position?: "left" | "center" | "right";
	className?: string;
};

export default function SectionHeader({
	title,
	position = "center",
	className,
}: PropsType) {
	return (
		<FadeInOnView
			className={cn(
				`flex justify-center lg:justify-${position} mb-6`,
				className,
			)}
		>
			<div className="w-fit flex flex-col items-center gap-3">
				<h2 className="text-5xl lg:text-7xl capitalize">{title}</h2>
				<Image
					src={"/underline.svg"}
					alt="underline"
					width={200}
					height={50}
					className="w-full"
				/>
			</div>
		</FadeInOnView>
	);
}
