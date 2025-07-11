"use client";

import NavDesktop from "./nav-desktop";
import NavMobile from "./nav-mobile";

export default function Header() {
	return (
		<header className="fixed w-full top-0">
			<NavMobile />
			<NavDesktop />
		</header>
	);
}
