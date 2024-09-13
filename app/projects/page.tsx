import React from 'react';
import Link from 'next/link';
import { projectsData } from '@/lib/data';
import ProjectCard from '@/components/projectCard';
import { IoArrowBack } from 'react-icons/io5';

export default function ProjectsPage() {
	return (
		<div className="bg-slate-50 dark:bg-zinc-900 min-h-screen">
			<header className="bg-white dark:bg-zinc-800 py-8 px-4 shadow-md">
				<div className="container mx-auto relative">
					<Link
						href="/"
						className="absolute top-0 left-0 flex items-center px-4 py-2 rounded-full bg-slate-200 dark:bg-zinc-700 text-gray-800 dark:text-gray-200 text-sm hover:bg-slate-300 dark:hover:bg-zinc-600 transition-all duration-300"
					>
						<IoArrowBack className="mr-2" /> Back to Home
					</Link>
					<h1 className="text-4xl md:text-5xl font-bold text-center mt-8 text-gray-950 dark:text-gray-200">
						My Projects
					</h1>
					<p className="text-xl text-center mt-4 max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
						Explore a collection of my recent work and personal
						projects. Each project showcases different skills and
						technologies.
					</p>
				</div>
			</header>
			<main className="container mx-auto px-4 py-16">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projectsData.map((project, index) => (
						<ProjectCard key={index} {...project} />
					))}
				</div>
			</main>
		</div>
	);
}
