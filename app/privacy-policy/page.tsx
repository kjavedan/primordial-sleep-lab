import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { Markdown } from "@/components/markdown";

export default function () {
	const filePath = path.join(
		process.cwd(),
		"app",
		"privacy-policy",
		"content.md",
	);

	const fileContent = fs.readFileSync(filePath, "utf-8");

	const { content } = matter(fileContent);

	return (
		<div className="max-w-3xl mx-auto px-4">
			<article className="prose-gray prose-lg prose-h1:font-bold prose-h2:font-bold prose-h3:font-bold prose-a:underline prose-ul:list-disc prose-ol:list-decimal prose-blockquote:border-l-4 prose-blockquote:border-gray-300 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-700 dark:prose-blockquote:border-gray-700 dark:prose-blockquote:text-gray-300 size-full px-4 pt-6 pb-20 lg:px-0">
				<Markdown>{content}</Markdown>
			</article>
		</div>
	);
}
