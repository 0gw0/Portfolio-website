import Link from 'next/link';

export default function Home() {
	return (
		<div>
			<main>
				<div>
					<Link href="/projects">Projects</Link>
					<Link href="/contact">Contact</Link>
					<h1 className="text-3xl">Glen</h1>
					<p>
						I&apos;m a Sophomore studying Information Systems,
						specialising in Financial Technologies &#38; Digital
						Cloud Solutions
					</p>
				</div>
			</main>
		</div>
	);
}
