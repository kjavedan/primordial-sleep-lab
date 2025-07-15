"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		// Contact form logic would go here
		console.log("Contact form submission:", formData);
		setFormData({ name: "", email: "", message: "" });
	};

	const handleChange = (e) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	return (
		<section id="contact" className="py-16 lg:py-24 bg-background">
			<div className="mx-auto max-w-6xl px-6 lg:px-20">
				<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
					{/* Content */}
					<div className="text-center lg:text-left">
						<h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-4">
							Contact Me
						</h2>
						<p className="text-lg text-muted-foreground leading-relaxed max-w-[400px] mx-auto lg:ml-0">
							Interested in working together? Book a free consultation. Looking
							forward to helping you sleep like a caveman.
						</p>
					</div>

					{/* Form */}
					<div className="w-full">
						<form
							onSubmit={handleSubmit}
							className="space-y-6 max-w-96 mx-auto"
						>
							<Input
								type="text"
								name="name"
								placeholder="Name"
								value={formData.name}
								onChange={handleChange}
								required
							/>
							<Input
								type="email"
								name="email"
								placeholder="Email"
								value={formData.email}
								onChange={handleChange}
								required
							/>
							<Textarea
								name="message"
								placeholder="Message"
								value={formData.message}
								onChange={handleChange}
								required
							/>
							<Button type="submit" size="lg" className="w-full">
								Send
							</Button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
