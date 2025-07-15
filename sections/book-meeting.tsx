"use client";
import { InlineWidget } from "react-calendly";
import SectionHeader from "@/components/section-header";

export default function BookMeeting() {
	return (
		<section id="meet">
			<SectionHeader title="Book a Metting" className={"mb-0"} />
			<InlineWidget
				url="https://calendly.com/devkhaledjavdan/new-meeting"
				styles={{ minWidth: "320px", height: "850px", marginTop: 0 }}
			/>
		</section>
	);
}
