import type { Metadata } from "next";
import { Lato, Playpen_Sans } from "next/font/google";
import "./globals.css";

import Footer from "@/layout/footer";
import Header from "@/layout/header";

const playpenSans = Playpen_Sans({
	variable: "--font-heading",
	subsets: ["latin"],
});

const lato = Lato({
	variable: "--font-body",
	subsets: ["latin"],
	weight: ["400", "700"],
});

export const metadata: Metadata = {
	title: "Sleep Lab - Better Sleep, Better Life",
	description:
		"Sleep like your ancestors. Wake up healthier, happier, and more energized every day. Professional sleep coaching services.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${playpenSans.variable} ${lato.variable} antialiased`}>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
