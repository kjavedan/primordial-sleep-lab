import Path from "./path";

export default function MenuToggle({ toggle }: { toggle: () => void }) {
	return (
		<button type="button" className="absolute right-4 top-4" onClick={toggle}>
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
				/>
				<Path
					d="M 2 9.423 L 20 9.423"
					variants={{
						closed: { opacity: 1 },
						open: { opacity: 0 },
					}}
					transition={{ duration: 0.1 }}
				/>
				<Path
					variants={{
						closed: { d: "M 2 16.346 L 20 16.346" },
						open: { d: "M 3 2.5 L 17 16.346" },
					}}
				/>
			</svg>
		</button>
	);
}
