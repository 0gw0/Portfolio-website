import Link from 'next/link';

const Nav = () => (
	<nav className="text-center space-x-8 m-4 text-lg">
		<Link href="/" className="hover:underline">
			Home
		</Link>
		<Link href="/projects" className="hover:underline">
			Projects
		</Link>
		<Link href="/contact" className="hover:underline">
			Contact
		</Link>
	</nav>
);

export default Nav;
