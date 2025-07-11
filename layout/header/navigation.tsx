import { motion } from "motion/react";
import MenuItem from "./menu-item";
import { navVariants } from "./varients";

const navLinks = [
	{ label: "Home", href: "#hero" },
	{ label: "Services", href: "#services" },
	{ label: "Quizzes", href: "#quiz" },
	{ label: "Testimonials", href: "#testimonials" },
	{ label: "About", href: "#about" },
	{ label: "Blogs", href: "#blogs" },
	{ label: "Contact", href: "#contact" },
];

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
