import Link from 'next/link';

export default function Home() {
	return (
		<main className="h-96 flex items-center justify-center">
			<div>
				<div className="text-center">
					<Link href="/projects" className="px-16 underline">
						Projects
					</Link>
					<Link href="/contact" className="px-16 underline">
						Contact
					</Link>
					<h1 className="text-6xl m-10">Glen</h1>
					<p>
						I&apos;m a Sophomore studying Information Systems,
						specialising in Financial Technologies &#38; Digital
						Cloud Solutions
					</p>
				</div>
			</div>
		</main>
	);
}
