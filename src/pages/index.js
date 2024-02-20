import Link from 'next/link';
// import styles from '@/styles/Home.module.css'; //

export default function Home() {
	return (
		<div>
			<main>
				<div className="container-fluid">
					<Link href="/projects">Projects</Link>
					<Link href="/contact">Contact</Link>
					<h1>Glen</h1>
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
