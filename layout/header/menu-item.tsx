import { motion } from "motion/react";
import { itemVariants } from "./varients";

export default function MenuItem({
	label,
	href,
	onClick,
}: {
	label: string;
	href: string;
	onClick: () => void;
}) {
	return (
		<motion.li
			variants={itemVariants}
			whileHover={{ underlineThickness: 2 }}
			whileTap={{ scale: 0.98 }}
			className="p-4"
		>
			<a
				href={href}
				className="animated-underline text-xl font-bold text-background font-sans"
				onClick={onClick}
			>
				{label}
			</a>
		</motion.li>
	);
}
