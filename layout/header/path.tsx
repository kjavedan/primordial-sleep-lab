import type { Variants } from "motion/react";
import { motion } from "motion/react";

interface PathProps {
	d?: string;
	variants: Variants;
	transition?: { duration: number };
}

export default function Path(props: PathProps) {
	return (
		<motion.path
			fill="transparent"
			strokeWidth="3"
			stroke="hsl(0, 0%, 18%)"
			strokeLinecap="round"
			{...props}
		/>
	);
}
