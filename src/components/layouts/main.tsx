import Head from "next/head";
import { useRouter } from "next/router";
import { type ReactNode } from "react";

const DEFAULT_PATHNAME_TITLE = "Main";

const PATHNAME_TITLES: Record<string, string> = {};

export function MainLayout({ children }: { children: ReactNode }) {
	const { pathname } = useRouter();
	const pageTitle = PATHNAME_TITLES[pathname] ?? DEFAULT_PATHNAME_TITLE;

	return (
		<>
			<Head>
				<title>Space traders</title>
				<meta name="description" content="Cool shit" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="piece output">
				<section className="relative h-full border border-amber-main px-3 py-8">
					<header className="absolute -top-3 left-3 bg-amber-main px-3">
						<h1 className="font-bold uppercase text-black">{pageTitle}</h1>
					</header>
					{children}
				</section>
				<div className="scanlines piece noclick" />
				<div className="glow piece noclick" />
			</main>
		</>
	);
}
