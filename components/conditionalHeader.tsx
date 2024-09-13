'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/header';

export default function ConditionalHeader() {
	const pathname = usePathname();
	const isProjectsPage = pathname.startsWith('/projects');

	if (isProjectsPage) {
		return null;
	}

	return <Header />;
}
