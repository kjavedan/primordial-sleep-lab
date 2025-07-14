"use client";

import NavDesktop from "./nav-desktop";
import NavMobile from "./nav-mobile";

export default function Header() {
	return (
		<>
			<NavMobile />
			<NavDesktop />
		</>
	);
}
