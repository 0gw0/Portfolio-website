'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { projectsData } from '@/lib/data';
import Project from './project';
import { useSectionInView } from '@/lib/hooks';
import Link from 'next/link';

export default function Projects() {
	const { ref } = useSectionInView('Projects');

	return (
		<section ref={ref} id="projects" className="scroll-mt-28 mb-24 sm:mb-0">
			<SectionHeading>My Projects</SectionHeading>
			<div>
				{projectsData.slice(0, 2).map((project, index) => (
					<React.Fragment key={index}>
						<Project {...project} />
					</React.Fragment>
				))}
			</div>
			<div className="mt-10 text-center">
				<Link
					href="/projects"
					className="inline-block px-8 py-3 rounded-full bg-gray-900 text-white hover:bg-gray-700 dark:bg-white dark:bg-opacity-10 dark:hover:bg-opacity-20 transition-all duration-300 hover:scale-110"
				>
					See All Projects
				</Link>
			</div>
		</section>
	);
}
