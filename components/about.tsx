'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './section-heading';

export default function About() {
	return (
		<motion.section
			className="mb-16 max-w-[50rem] text-center leading-8 sm:mb-20 scroll-mt-28 px-4"
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
				and a{' '}
				<span className="font-medium">
					web development bootcamp by Dr. Angela Yu
				</span>
				. In my free time, I <span className="underline">love</span>{' '}
				<span className="italic">
					catching up on the latest AI news and learning about new
					technologies
				</span>
				.
			</p>
			<p>
				I am currently studying in Singapore Management University
				pursuing a degree in{' '}
				<span className="font-medium">Information Systems</span> where I
				am <span className="italic">eager</span> to learn more about
				real-world applications of{' '}
				<span className="underline">Fintech and Cloud solutions</span>.
			</p>
		</motion.section>
	);
}
