'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './section-heading';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
	const { ref } = useSectionInView('About', 0.8);

	return (
		<motion.section
			ref={ref}
			className="mb-24 max-w-[50rem] text-center leading-8 sm:mb-0 scroll-mt-28 px-4"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
			id="about"
		>
			<SectionHeading>About me</SectionHeading>
			<p className="mb-3">
				Before enrolling into University , I decided to pursue my
				passion for programming and enrolled in courses such as the
				renowned{' '}
				<span className="font-medium">CS50x by Harvard University</span>{' '}
				and{' '}
				<span className="font-medium">web development bootcamps</span>.
				In my free time, I <span className="underline">love</span>{' '}
				<span className="italic">
					catching up on the latest AI news and learning about new
					technologies
				</span>
				.
			</p>
			<p>
				I am currently studying in Singapore Management University
				pursuing a degree in{' '}
				<span className="font-medium">Information Systems</span> with a
				focus on{' '}
				<span className="underline">Financial Technologies</span> and{' '}
				<span className="underline">Cloud solutions</span>.
			</p>
		</motion.section>
	);
}
