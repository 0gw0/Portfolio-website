'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import { sendEmail } from '@/lib/actions';
import SubmitBtn from './submit-btn';

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
			<form
				className="mt-10 flex flex-col"
				action={async (FormData) => {
					const { data, error } = await sendEmail(FormData);

					if (error) {
						alert(error);
						return;
					}

					alert('Email sent successfully');
				}}
			>
				<input
					className="h-14 px-4 rounded-lg borderBlack"
					name="email"
					type="email"
					placeholder="Your email"
					required
					maxLength={500}
				/>
				<textarea
					className="h-52 my-3 rounded-lg borderBlack p-4"
					name="message"
					placeholder="Your message"
					required
					maxLength={5000}
				/>
				<SubmitBtn />
			</form>
		</motion.section>
	);
}
