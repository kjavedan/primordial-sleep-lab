import Path from "./path";

export default function MenuToggle({
	toggle,
	isOpen,
}: {
	toggle: () => void;
	isOpen: boolean;
}) {
	return (
		<button
			type="button"
			className="relative z-10 cursor-pointer bg-white p-2 pt-3 rounded-full h-10 w-10 flex items-center justify-center"
			onClick={toggle}
		>
			<svg
				width="23"
				height="23"
				viewBox="0 0 23 23"
				aria-label="Menu toggle"
				role="img"
			>
				<title>Menu toggle</title>
				<Path
					variants={{
						closed: { d: "M 2 2.5 L 20 2.5" },
						open: { d: "M 3 16.5 L 17 2.5" },
					}}
					animate={isOpen ? "open" : "closed"}
				/>
				<Path
					d="M 2 9.423 L 20 9.423"
					variants={{
						closed: { opacity: 1 },
						open: { opacity: 0 },
					}}
					transition={{ duration: 0.1 }}
					animate={isOpen ? "open" : "closed"}
				/>
				<Path
					variants={{
						closed: { d: "M 2 16.346 L 20 16.346" },
						open: { d: "M 3 2.5 L 17 16.346" },
					}}
					animate={isOpen ? "open" : "closed"}
				/>
			</svg>
		</button>
	);
}
