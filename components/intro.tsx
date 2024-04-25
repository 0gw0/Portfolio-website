'use client';

import React from 'react';
import Image from 'next/image';
import profileImg from '@/public/profile.jpg';
import { motion } from 'framer-motion';

export default function Intro() {
	return (
		<section className="text-center">
			<div className="flex items-center justify-center">
				{/* Laptop view */}
				<div className="sm:h-screen relative overflow-hidden">
					<div className="w-full hidden sm:block">
						<video
							src={require('/public/placeholder.mp4')}
							autoPlay
							muted
							loop
							className="object-cover object-center w-full h-full"
						/>
					</div>
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

			<p className="mb-10 mt-2 px-4 text-2xl font-medium !leading-[1.5] sm:mt-36 sm:text-white sm:absolute sm:inset-0 md:text-3xl md:inset-8 lg:text-4xl lg:inset-24">
				<span className="font-bold">Hi, I&apos;m Glen</span>, a{' '}
				<span className="underline">Penultimate</span> student from{' '}
				<span className="underline">
					Singapore Management University
				</span>{' '}
				studying <span className="font-bold">Information Systems</span>{' '}
				with a dual track in <span className="font-bold">Fintech</span>{' '}
				and <span className="font-bold">Digital Cloud Solutions</span>.
			</p>
		</section>
	);
}
