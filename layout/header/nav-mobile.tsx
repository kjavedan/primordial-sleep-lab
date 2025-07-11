"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import MenuToggle from "./menu-toggle";
import Navigation from "./navigation";
import { sidebarVariants } from "./varients";

export default function NavMobile() {
	const [isOpen, setIsOpen] = useState(false);

	// Hide scrollbar when navbar is open
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [isOpen]);

	return (
		<div className="h-14 border-b border-border bg-background/95  w-full top-0 left-0 md:hidden flex px-4 pl-2">
			<a
				href="#hero"
				className="flex items-center gap-2 cursor-pointer relative z-50"
			>
				<Image src={"/logo.png"} alt="logo" width={50} height={50} />
				<span className="font-sans text-sm font-extrabold leading-4 text-secondary ">
					Primordial
					<span className="block text-xs font-normal">Sleep Lab</span>
				</span>
			</a>
			<motion.nav
				initial={false}
				animate={isOpen ? "open" : "closed"}
				className="fixed inset-0 size-full"
			>
				<motion.div className="bg-white size-full" variants={sidebarVariants} />
				<Navigation closeMenu={() => setIsOpen(false)} />
				<MenuToggle toggle={() => setIsOpen(!isOpen)} />
			</motion.nav>
		</div>
	);
}
