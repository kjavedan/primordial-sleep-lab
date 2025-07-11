import type { Variants } from "motion/react";

export const navVariants: Variants = {
	open: {
		transition: { staggerChildren: 0.07, delayChildren: 0.2 },
	},
	closed: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 },
	},
};

export const itemVariants: Variants = {
	open: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: -100 },
		},
	},
	closed: {
		y: 50,
		opacity: 0,
		transition: {
			y: { stiffness: 1000 },
		},
	},
};

export const sidebarVariants: Variants = {
	open: (height = 1000) => ({
		clipPath: `circle(${height * 2 + 200}px at calc(100% - 40px) 40px)`,
		transition: {
			type: "spring",
			stiffness: 20,
			restDelta: 2,
		},
	}),
	closed: {
		clipPath: "circle(20px at calc(100% - 28px) 26px)",
		transition: {
			delay: 0.2,
			type: "spring",
			stiffness: 400,
			damping: 40,
		},
	},
};
