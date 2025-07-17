import { motion } from "motion/react";
import Link from "next/link";
import { itemVariants } from "./varients";

export default function MenuItem({
	label,
	href,
	onClick,
}: {
	label: string;
	href: string;
	onClick?: () => void;
}) {
	return (
		<motion.li
			variants={itemVariants}
			whileHover={{ underlineThickness: 2 }}
			whileTap={{ scale: 0.98 }}
			className="p-4"
		>
			<Link
				href={href}
				className={`animated-underline  font-sans ${onClick ? "text-background text-xl font-bold" : "font-semibold"}`}
				{...(onClick ? { onClick } : {})}
			>
				{label}
			</Link>
		</motion.li>
	);
}
