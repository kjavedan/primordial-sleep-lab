import { type MotionProps, motion } from "motion/react";
import type { SVGProps } from "react";

type PathProps = SVGProps<SVGPathElement> & MotionProps;

export default function Path(props: PathProps) {
	return (
		<motion.path
			fill="transparent"
			strokeWidth="3"
			stroke="var(--background)"
			strokeLinecap="round"
			{...props}
		/>
	);
}
