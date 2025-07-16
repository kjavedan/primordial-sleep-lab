// components/animation/FadeInOnView.tsx
import { motion, type TargetAndTransition } from "motion/react";
import type React from "react";

type FadeInOnViewProps = {
	children: React.ReactNode;
	className?: string;
	initial?: TargetAndTransition;
	animate?: TargetAndTransition;
	transition?: object;
	viewport?: object;
	delay?: number; // Add delay prop
};

export default function FadeInOnView({
	children,
	className,
	initial = { opacity: 0, y: 40 },
	animate = { opacity: 1, y: 0 },
	transition = { duration: 0.6, ease: "easeOut" },
	viewport = { once: true, amount: 0.2 },
	delay = 0, // Default delay to 0
}: FadeInOnViewProps) {
	// Merge delay into transition
	const mergedTransition = { ...transition, delay };

	return (
		<motion.div
			initial={initial}
			whileInView={animate}
			transition={mergedTransition}
			viewport={viewport}
			className={className}
		>
			{children}
		</motion.div>
	);
}
