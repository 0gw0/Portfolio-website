'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { FaPaperPlane } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

export default function Contact() {
	const { ref } = useSectionInView('Contact');

	return (
		<motion.section
			ref={ref}
			id="contact"
			className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
			initial={{
				opacity: 0,
			}}
			whileInView={{
				opacity: 1,
			}}
			transition={{
				duration: 0.7,
			}}
			viewport={{
				once: true,
			}}
		>
			<SectionHeading>Contact Me</SectionHeading>
			<p className="text-gray-700 -mt-6">
				Drop me a message and I&apos;ll get back to you as soon as
				possible.
			</p>
			<form className="mt-10 flex flex-col">
				<input
					className="h-14 px-4 rounded-lg borderBlack"
					type="email"
					placeholder="Your email"
				/>
				<textarea
					className="h-52 my-3 rounded-lg borderBlack p-4"
					placeholder="Your message"
				/>
				<button
					type="submit"
					className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all hover:scale-110 hover:bg-gray-950 active:scale-105"
				>
					Submit{' '}
					<FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{' '}
				</button>
			</form>
		</motion.section>
	);
}
