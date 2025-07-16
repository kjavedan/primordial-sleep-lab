"use client";

import { cva } from "class-variance-authority";
import type { ClassValue } from "clsx";
import { motion } from "motion/react";
import type React from "react";
import {
	forwardRef,
	useCallback,
	useImperativeHandle,
	useRef,
	useState,
} from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
	size?: "default" | "sm" | "lg" | "xl" | "icon";
	type?: "button" | "submit";
	variant?: "default" | "destructive" | "outline" | "secondary" | "ghost";
	className?: ClassValue;
	rippleClassName?: ClassValue;
	children?: React.ReactNode;
	ref?: React.Ref<HTMLButtonElement>;
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	href?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
	{
		type = "button",
		size = "default",
		variant = "default",
		children,
		className,
		rippleClassName,
		onClick,
		href,
		...props
	},
	ref,
) {
	const buttonVariants = cva(
		"relative overflow-hidden cursor-pointer font-sans inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
		{
			variants: {
				variant: {
					default: "bg-primary text-primary-foreground hover:bg-primary/90",
					destructive:
						"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
					outline:
						"border bg-background hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
					secondary:
						"bg-secondary text-secondary-foreground hover:bg-secondary/80",
					ghost:
						"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
				},
				size: {
					default: "h-10 px-4 py-2 has-[>svg]:px-3",
					sm: "h-9 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
					lg: "h-11 px-8 has-[>svg]:px-6",
					xl: "h-20 px-16 has-[>svg]:px-16 text-xl",
					icon: "size-10",
				},
			},
			defaultVariants: {
				variant: "default",
				size: "default",
			},
		},
	);

	const rippleVariants = cva(
		"absolute rounded-full size-5 pointer-events-none",
		{
			variants: {
				variant: {
					default: "bg-primary-foreground/40",
					destructive: "bg-destructive",
					outline: "bg-input",
					secondary: "bg-secondary",
					ghost: "bg-accent",
				},
			},
			defaultVariants: {
				variant: "default",
			},
		},
	);

	const [ripples, setRipples] = useState<
		{ id: number; x: number; y: number; size: number }[]
	>([]);
	const buttonRef = useRef<HTMLButtonElement>(null);

	useImperativeHandle(ref, () => buttonRef.current);

	const createRipple = useCallback(
		(event: React.MouseEvent<HTMLButtonElement>) => {
			const button = buttonRef.current;
			if (!button) return;

			const rect = button.getBoundingClientRect();
			const x = event.clientX - rect.left;
			const y = event.clientY - rect.top;

			// Calculate the farthest corner distance from the click point
			const topLeft = Math.hypot(x, y);
			const topRight = Math.hypot(rect.width - x, y);
			const bottomLeft = Math.hypot(x, rect.height - y);
			const bottomRight = Math.hypot(rect.width - x, rect.height - y);
			const size = 2 * Math.max(topLeft, topRight, bottomLeft, bottomRight);

			const newRipple = {
				id: Date.now(),
				x,
				y,
				size,
			};

			setRipples((prev) => [...prev, newRipple]);

			setTimeout(() => {
				setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
			}, 600);
		},
		[],
	);

	const handleClick = useCallback(
		(event: React.MouseEvent<HTMLButtonElement>) => {
			createRipple(event);
			if (onClick) {
				onClick(event);
			}
			if (!event.defaultPrevented && href) {
				window.location.href = href;
			}
		},
		[createRipple, onClick, href],
	);

	return (
		<motion.button
			ref={buttonRef}
			type={type}
			whileTap={{ scale: 0.95 }}
			className={cn(buttonVariants({ variant, size, className }))}
			onClick={handleClick}
			{...props}
		>
			{ripples.map((ripple) => (
				<motion.span
					key={ripple.id}
					initial={{ scale: 0, opacity: 0.5 }}
					animate={{ scale: 1, opacity: [0.8, 0.5, 0.3, 0] }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className={cn(
						rippleVariants({ variant, className: rippleClassName }),
					)}
					style={{
						position: "absolute",
						width: ripple.size,
						height: ripple.size,
						top: ripple.y - ripple.size / 2,
						left: ripple.x - ripple.size / 2,
						pointerEvents: "none",
						borderRadius: "50%",
					}}
				/>
			))}
			{children}
		</motion.button>
	);
});

export { Button };
