import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import ActiveSectionContextProvider from '@/context/active-section-context';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/footer';
import ThemeSwitch from '@/components/theme-switch';
import ThemeContextProvider from '@/context/theme-context';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Glen | Personal Portfolio',
	description:
		'Glen Wangsanegara, a Information System penultimate year student with a dual-track focus in Fintech and Cloud solutions. Explore his projects, key skills, and insights into financial technology and cloud computing.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="!scroll-smooth">
			<body
				className={`${inter.className} bg-slate-50 text-gray-950 dark:bg-zinc-900 dark:text-gray-200 dark:text-opacity-90`}
			>
				<ThemeContextProvider>
					<ActiveSectionContextProvider>
						<Header />
						{children}
						<Footer />
						<Toaster position="bottom-right" />
						<ThemeSwitch />
					</ActiveSectionContextProvider>
				</ThemeContextProvider>
			</body>
		</html>
	);
}
