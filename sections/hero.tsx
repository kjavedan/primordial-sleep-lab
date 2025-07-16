import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
	return (
		<section
			id="hero"
			className="container mx-auto px-2 content-center xl:content-start"
		>
			<div className="flex flex-col md:flex-row size-full items-center">
				<div className="w-full md:w-fit px-8 md:absolute md:top-20 md:right-18 lg:top-36 lg:right-32">
					<Image
						src={"/star.svg"}
						alt="star"
						width={50}
						height={50}
						className="ml-auto"
					/>
				</div>

				<div className="mt-35 md:mt-0 text-center w-full">
					<h2
						className="font-extrabold leading-18 md:leading-20 lg:leading-26"
						style={{
							fontSize: "clamp(3rem, 10vw, 5rem)", // min, preferred, max
						}}
					>
						Better
						<span className="mx-2 relative">
							{/* Floating Z animations */}
							<div className="absolute bottom-44 left-0 lg:bottom-52 lg:left-12">
								<FloatingZ delay={0} />
							</div>
							<div className="absolute bottom-38 left-8 lg:bottom-44 lg:left-24">
								<FloatingZ delay={0.5} />
							</div>
							<div className="absolute bottom-32 left-16 lg:bottom-36 lg:left-36">
								<FloatingZ delay={1} />
							</div>
							sleep
						</span>
						<span className="block">better life</span>
					</h2>
					<p className="text-muted-foreground md:text-2xl max-w-92 lg:max-w-[500px] mt-4 mx-auto px-4 ">
						Sleep like your ancestors. Wake up healthier, happier, and more
						energized every day.
					</p>

					<Button size="xl" className="mt-8" href="#meet">
						Start Now
					</Button>
				</div>
				{/* <div className="hidden md:block bg-card shadow-sm rounded-4xl border overflow-hidden">
					<Image
						src={"/hero-image.png"}
						alt="hero-image"
						width={400}
						height={400}
					/>
				</div> */}
			</div>
		</section>
	);
}

function FloatingZ({ delay = 0 }) {
	return (
		<div
			className="absolute text-6xl lg:text-7xl font-heading font-bold text-muted-foreground/40 select-none float-z"
			style={{ animationDelay: `${delay}s` }}
		>
			z
		</div>
	);
}
