'use client';

import React from 'react';
import Image from 'next/image';
import profileImg from '@/public/profile.jpg';
import { motion } from 'framer-motion';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { useSectionInView } from '@/lib/hooks';

export default function Intro() {
	const { ref } = useSectionInView('Home');

	return (
		<section ref={ref} id="home" className="text-center mb-12 sm:mb-28">
			<div className="flex items-center justify-center">
				{/* Laptop view */}
				<div className="w-full hidden sm:block">
					<video
						src={require('/public/placeholder.mp4')}
						autoPlay
						muted
						loop
						className="object-cover object-center w-full "
					/>
				</div>

				{/* Mobile view */}
				<div className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem] sm:hidden">
					<div className="pt-28">
						<motion.div
							initial={{ opacity: 0, scale: 0 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ type: 'tween', duration: 0.2 }}
						>
							<Image
								src={profileImg}
								alt="Glen"
								className="h-24 w-24 object-cover rounded-full border-4 border-white shadow-xl"
							></Image>
						</motion.div>
					</div>
				</div>
			</div>

			<motion.h1
				className="mb-10 mt-2 px-8 text-2xl font-medium !leading-[1.5] sm:mt-36 sm:text-white sm:absolute sm:inset-0 md:text-3xl md:inset-8 lg:text-4xl lg:inset-24"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
			>
				<span className="font-bold">Hi, I&apos;m Glen</span>, a{' '}
				<span className="underline">Penultimate</span> student from{' '}
				<span className="underline">
					Singapore Management University
				</span>{' '}
				studying <span className="font-bold">Information Systems</span>{' '}
				with a dual track in <span className="font-bold">Fintech</span>{' '}
				and <span className="font-bold">Digital Cloud Solutions</span>.
				<div className="flex justify-center gap-4 mt-4">
					<a
						className="bg-white p-4 text-gray-700 flex items-center justify-center gap-2 text-[1.35rem] rounded-full hover:scale-110 active:scale-105 hover:text-gray-950 transition cursor-pointer borderBlack"
						href="https://www.linkedin.com/in/glen-wangsanegara/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<BsLinkedin />
					</a>
					<a
						className="bg-white p-4 text-gray-700 flex items-center justify-center gap-2 text-[1.35rem] rounded-full hover:scale-110 active:scale-105 hover:text-gray-950 transition cursor-pointer borderBlack"
						href="https://github.com/0gw0"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaGithubSquare />
					</a>
					<a
						className="bg-white p-4 text-gray-700 flex items-center justify-center gap-2 text-[1.35rem] rounded-full hover:scale-110 active:scale-105 hover:text-gray-950 transition cursor-pointer borderBlack"
						href="mailto:glenw.2022@smu.edu.sg"
					>
						<MdEmail />
					</a>
				</div>
			</motion.h1>
		</section>
	);
}
