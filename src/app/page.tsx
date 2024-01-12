import Clipboard from "@/components/clipboard";
import FeatureCard from "@/components/feature-card";
import Header from "@/components/header";
import { GeistMono } from "geist/font/mono";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-start bg-background text-foreground">
			<Header />
			<section className="h-[520px] flex flex-col justify-center items-center space-y-8">
				<div className="text-center">
					<h1 className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#ff5f6d] to-[#ffc371]">
						Next+
					</h1>
					<p className="text-transparent bg-clip-text bg-gradient-to-tr from-[#ff5f6d] to-[#ffc371]">
						Supercharge your Next.js app development
					</p>
				</div>
				<div className="bg-background text-foreground p-4 rounded-lg flex items-center justify-between gap-8 border">
					<code className={GeistMono.className}>
						bun create next-plus@latest
					</code>
					<Clipboard />
				</div>
			</section>
			<section className="w-10/12 mb-12">
				<div className="grid grid-cols-3 gap-8">
					<FeatureCard title="Next.js 14">
						A powerful backend framework for your React applications.
					</FeatureCard>
					<FeatureCard title="tRPC">
						Write end-to-end typesafe APIs without any code generation or
						runtime bloat.
					</FeatureCard>
					<FeatureCard title="Multi-DB support">
						Multi-database support with Drizzle for Supabase (PostgresQL) and
						PlanetScale (MySQL). Or Firebase Firestore (NoSQL).
					</FeatureCard>
					<FeatureCard title="TailwindCSS">
						A tiny, utility first CSS framework for building custom designs.
					</FeatureCard>
					<FeatureCard title="LangchainJS support">
						A framework for developing applications powered by language models.
					</FeatureCard>
					<FeatureCard title="Million.js support">
						A fast and lightweight virtual DOM that can improve React's speed by
						up to 70%.
					</FeatureCard>
				</div>
			</section>
		</main>
	);
}
