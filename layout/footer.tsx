"use client";
import Image from "next/image";
import { InstagramIcon } from "@/components/icons/instagram";
import { LinkedinIcon } from "@/components/icons/linkedin";
import { TiktokIcon } from "@/components/icons/tiktok";

export default function Footer() {
	return (
		<footer className="bg-card border-t border-border">
			<div className="mx-auto max-w-7xl px-6 lg:px-20 py-16 lg:py-20">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center md:text-left">
					{/* Logo and Social */}
					<div className="space-y-6 w-fit mx-auto md:ml-0">
						<Image
							src={"/logo.png"}
							alt="logo"
							width={80}
							height={80}
							className="mx-auto"
						/>

						<div className="flex gap-2 w-30 ">
							<InstagramIcon
								onClick={() =>
									window.open(
										"https://www.instagram.com/primordialsleeplab/",
										"_blank",
									)
								}
							/>
							<LinkedinIcon
								onClick={() =>
									window.open(
										"https://www.linkedin.com/company/primordial-sleep-lab/",
										"_blank",
									)
								}
							/>
							<TiktokIcon
								onClick={() =>
									window.open(
										"https://www.tiktok.com/@carolina_ramuski",
										"_blank",
									)
								}
							/>
						</div>
					</div>

					{/* Links */}
					<div>
						<h3 className="text-xl font-heading font-bold text-foreground mb-4">
							Links
						</h3>
						<ul className="space-y-3">
							{[
								"Services",
								"Quizzes",
								"Testimonials",
								"About",
								"Blogs",
								"Contact",
							].map((link) => (
								<li key={link}>
									<a
										href={`#${link.toLowerCase().replace(" ", "-")}`}
										className="text-base hover:underline text-foreground hover:text-primary transition-colors"
									>
										{link}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Legal */}
					<div>
						<h3 className="text-xl font-heading font-bold text-foreground mb-4">
							Legal
						</h3>
						<ul className="space-y-3">
							<li>
								<a
									href="#"
									className="text-base text-foreground hover:underline transition-colors"
								>
									Terms and Conditions
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-base text-foreground hover:underline transition-colors"
								>
									Privacy Policy
								</a>
							</li>
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h3 className="text-xl font-heading font-bold text-foreground mb-4">
							Contact
						</h3>
						<a
							href="mailto:ca.sleepcoach@gmail.com"
							className="text-base text-foreground hover:underline transition-colors underline"
						>
							ca.sleepcoach@gmail.com
						</a>
					</div>
				</div>
			</div>

			{/* Copyright */}
			<div className="bg-muted py-6">
				<div className="mx-auto max-w-7xl px-6 lg:px-20">
					<div className="text-center space-y-2">
						<p className="text-base text-foreground">
							© 2025 All rights reserved.
						</p>
						<p className="text-sm text-foreground">
							Built by <span className="hover:underline">Buildo.ae</span>
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
