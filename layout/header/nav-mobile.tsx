"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
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
		<header className="h-14 z-50 fixed w-full top-0 left-0 overflow-hidden lg:hidden flex justify-between p-2 border-b border-border bg-background">
			{/* Logo */}
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

			{/* Toggle button */}
			<div className="flex gap-4 items-center">
				<ThemeToggle />
				<MenuToggle toggle={() => setIsOpen(!isOpen)} isOpen={isOpen} />
			</div>

			{/* Navbar */}

			<motion.nav
				initial="closed"
				animate={isOpen ? "open" : "closed"}
				className="fixed inset-0 bg-foreground"
				variants={sidebarVariants}
			>
				<Navigation closeMenu={() => setIsOpen(false)} />
			</motion.nav>
		</header>
	);
}
