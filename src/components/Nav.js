import Link from 'next/link';

const Nav = () => (
	<nav>
		<Link href="/">Home</Link>
		<Link href="/projects">Projects</Link>
		<Link href="/contact">Contact</Link>
	</nav>
);

export default Nav;
