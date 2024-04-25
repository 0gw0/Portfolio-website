import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Glen | Personal Portfolio',
	description:
		'Glen Wangsanegara, a Information System penultimate year student with a dual-track focus in fintech and cloud solutions. Explore his projects, key skills, and insights into financial technology and cloud computing.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} bg-slate-50 text-slate-950`}>
				<Header />
				{children}
			</body>
		</html>
	);
}
