// components/ui/theme-toggle.tsx
"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
	const { theme, setTheme, resolvedTheme } = useTheme();

	return (
		<Button
			size="icon"
			aria-label="Toggle theme"
			onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
		>
			{theme === "dark" ? (
				<Sun className="size-5" />
			) : (
				<Moon className="size-5" />
			)}
		</Button>
	);
}
