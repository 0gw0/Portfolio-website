'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { projectsData } from '@/lib/data';
import { motion, useScroll, useTransform } from 'framer-motion';
import { IoArrowRedo } from 'react-icons/io5';
import { FiGithub } from 'react-icons/fi';
import Link from 'next/link';

type ProjectProps = (typeof projectsData)[number];
export default function Project({
	title,
	description,
	tags,
	imageUrl,
	link,
	github,
	information,
}: ProjectProps) {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['0 1', '1.33 1'],
	});
	const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
	const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

	return (
		<motion.div
			ref={ref}
			style={{
				scale: scaleProgress,
				opacity: opacityProgress,
			}}
			className="group mb-3 sm:mb-8 last:mb-0"
		>
			<section className="bg-gray-100 max-w-[46rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative h-[20rem] sm:group-even:pl-8 hover:bg-gray-200 transition dark:bg-white/10 dark:hover:bg-white/20">
				<div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[55%] flex flex-col h-full sm:group-even:ml-[18rem]">
					<h3 className="text-2xl font-semibold">{title}</h3>
					<p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
						{description}
					</p>
					<div className="flex gap-4 mt-4">
						{link && (
							<Link
								href={link}
								target="_blank"
								className="text-sm text-gray-600 dark:text-white hover:underline"
							>
								Visit Site <IoArrowRedo className="inline" />
							</Link>
						)}
						{github && (
							<Link
								href={github}
								target="_blank"
								className="text-sm text-gray-600 dark:text-white hover:underline"
							>
								GitHub <FiGithub className='inline' />
							</Link>
						)}
						{information && (
							<Link
								href={information}
								target="_blank"
								className="text-sm text-gray-600 dark:text-white hover:underline"
							>
								More Info
							</Link>
						)}
					</div>
					<ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
						{tags.map((tag, index) => (
							<li
								className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
								key={index}
							>
								{tag}
							</li>
						))}
					</ul>
				</div>
				<Image
					src={imageUrl}
					alt={title}
					quality={95}
					className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:rotate-2 group-hover:scale-105 transition group-even:right-[initial] group-even:-left-40"
				/>
			</section>
		</motion.div>
	);
}
