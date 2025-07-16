"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export function ShareButton({
	url,
	className,
}: {
	url: string;
	className: string;
}) {
	const [copied, setCopied] = useState(false);

	const handleCopy = async () => {
		// Construct the full blog URL
		let fullUrl = "";
		if (typeof window !== "undefined" && window.location) {
			fullUrl = `${window.location.origin}/blogs/${url}`;
		}
		await navigator.clipboard.writeText(fullUrl);
		setCopied(true);
		setTimeout(() => setCopied(false), 1200);
	};

	return (
		<Button
			onClick={handleCopy}
			aria-label="Copy blog link"
			variant="outline"
			size="lg"
			className={className}
		>
			<span className="relative w-5 h-5 flex items-center justify-center">
				<span
					className={`absolute transition-all duration-300 ${
						copied ? "opacity-0 scale-75" : "opacity-100 scale-100"
					}`}
				>
					<Copy size={20} />
				</span>
				<span
					className={`absolute transition-all duration-300 ${
						copied ? "opacity-100 scale-100" : "opacity-0 scale-75"
					}`}
				>
					<Check size={20} className="text-green-500" />
				</span>
			</span>
			<span className="text-sm">{copied ? "Copied!" : "Share"}</span>
		</Button>
	);
}
