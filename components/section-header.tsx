"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { cn } from "@/lib/utils";

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
		<motion.div
			className={cn(
				`flex justify-center lg:justify-${position} mb-6`,
				className,
			)}
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
		>
			<div className="w-fit flex flex-col items-center gap-2">
				<h2 className="text-5xl lg:text-7xl capitalize">{title}</h2>
				<Image
					src={"/underline.svg"}
					alt="underline"
					width={200}
					height={50}
					className="w-full"
				/>
			</div>
		</motion.div>
	);
}
