import { motion } from "motion/react";
import Image from "next/image";
import { navLinks } from "./data";
import MenuItem from "./menu-item";
import { navVariants } from "./varients";

export default function NavDesktop() {
	return (
		// Wrapper div with border and responsive visibility
		<header className="hidden lg:block sticky top-0 left-0 z-50 w-full border-b border-border backdrop-blur-3xl">
			<div className="container mx-auto w-full flex justify-between h-18 items-center">
				<a
					href="#hero"
					className="flex items-center gap-2 cursor-pointer relative z-50"
				>
					<Image src={"/logo.png"} alt="logo" width={60} height={60} />
					<span className="font-sans font-extrabold leading-4 text-secondary ">
						Primordial
						<span className="block text-sm font-normal">Sleep Lab</span>
					</span>
				</a>
				<nav>
					<motion.ul className="flex" variants={navVariants}>
						{navLinks.map((link) => (
							<MenuItem key={link.label} label={link.label} href={link.href} />
						))}
					</motion.ul>
				</nav>
			</div>
		</header>
	);
}
