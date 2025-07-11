import { motion } from "motion/react";
import { navLinks } from "./data";
import MenuItem from "./menu-item";
import { navVariants } from "./varients";

export default function Navigation({ closeMenu }: { closeMenu: () => void }) {
	return (
		<motion.ul
			className="absolute w-72 top-20 p-8 pl-12.5"
			variants={navVariants}
		>
			{navLinks.map((link) => (
				<MenuItem
					key={link.label}
					label={link.label}
					href={link.href}
					onClick={closeMenu}
				/>
			))}
		</motion.ul>
	);
}
