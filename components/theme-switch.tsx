'use client';

import { useTheme } from '@/context/theme-context';
import React from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';

export default function ThemeSwitch() {
	const { theme, toggleTheme } = useTheme();

	return (
		<button
			className="fixed bottom-5 right-5 w-[3rem] h-[3rem] whiteBg rounded-full flex items-center justify-center hover:scale-110 active:scale-105 transition-all dark:bg-gray-950"
			onClick={toggleTheme}
		>
			{theme === 'light' ? <BsSun /> : <BsMoon />}
		</button>
	);
}
