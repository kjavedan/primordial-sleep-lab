"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Newsletter() {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Newsletter signup logic would go here
		console.log("Newsletter signup:", { name, email });
		setName("");
		setEmail("");
	};

	return (
		<div className="">
			<div className="p-8 lg:p-16 rounded-3xl border">
				<div className="flex flex-col lg:flex-row gap-8 lg:gap-16 lg:justify-around items-center">
					{/* Content */}
					<div className="text-center lg:text-left max-w-[500px]">
						<h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
							Join our newsletter
						</h2>
						<p className="text-lg text-muted-foreground leading-relaxed">
							Get access to my course content, exclusive offers, and biweekly
							sleep tips.
						</p>
					</div>

					{/* Form */}
					<div className="space-y-6 min-w-80">
						<form onSubmit={handleSubmit} className="space-y-4">
							<Input
								type="text"
								placeholder="Name"
								value={name}
								onChange={(e) => setName(e.target.value)}
								required
							/>
							<Input
								type="email"
								placeholder="Email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
							<Button type="submit" size="lg">
								Subscribe
							</Button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
