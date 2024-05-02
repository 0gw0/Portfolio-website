'use client';

import React, { useState } from 'react';
import SectionHeading from './section-heading';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import { sendEmail } from '@/lib/actions';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

type FormDataProps = {
	email: string;
	message: string;
};

export default function Contact() {
	const { ref } = useSectionInView('Contact');
	const [formData, setFormData] = useState<FormDataProps>({
		email: '',
		message: '',
	});

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

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
			<p className="text-gray-700 -mt-6 dark:text-white/80">
				Drop me a message and I&apos;ll get back to you as soon as
				possible.
			</p>
			<form
				className="mt-10 flex flex-col dark:text-black"
				action={async (FormData) => {
					const { data, error } = await sendEmail(FormData);

					if (error) {
						toast.error(error);
						return;
					}

					toast.success('Email sent successfully');
					setFormData({ email: '', message: '' });
				}}
			>
				<input
					className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-90 transition-all dark:outline-none"
					name="email"
					type="email"
					placeholder="Your email"
					required
					maxLength={500}
					value={formData.email}
					onChange={handleInputChange}
				/>
				<textarea
					className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-90 transition-all dark:outline-none"
					name="message"
					placeholder="Your message"
					required
					maxLength={5000}
					value={formData.message}
					onChange={handleInputChange}
				/>
				<SubmitBtn />
			</form>
		</motion.section>
	);
}
