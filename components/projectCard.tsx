import React from 'react';
import Image from 'next/image';
import { projectsData } from '@/lib/data';
import { IoArrowRedo } from 'react-icons/io5';
import { FiGithub } from 'react-icons/fi';
import Link from 'next/link';

type ProjectCardProps = (typeof projectsData)[number];

export default function ProjectCard({
	title,
	description,
	tags,
	imageUrl,
	link,
	github,
	information,
}: ProjectCardProps) {
	return (
		<div className="bg-gray-100 rounded-lg overflow-hidden flex flex-col h-full dark:bg-white/10 hover:shadow-lg transition-shadow duration-300">
			<div className="relative h-48">
				<Image
					src={imageUrl}
					alt={title}
					fill
					className="object-cover"
				/>
			</div>
			<div className="p-4 flex flex-col flex-grow">
				<h3 className="text-xl font-semibold mb-2">{title}</h3>
				<p className="text-gray-700 dark:text-white/70 mb-4 flex-grow">
					{description}
				</p>
				<div>
					<div className="flex flex-wrap gap-3 mt-2">
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
								GitHub <FiGithub className="inline" />
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
					<ul className="flex flex-wrap mt-2 gap-2">
						{tags.map((tag, index) => (
							<li
								className="bg-black/[0.7] px-2 py-1 text-[0.6rem] uppercase tracking-wider text-white rounded-full"
								key={index}
							>
								{tag}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
