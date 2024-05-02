import React from 'react';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import { PiCursorClick } from 'react-icons/pi';
import reventeImg from '@/public/revente.png';
import viiickyImg from '@/public/viiicky.png';

export const links = [
	{
		name: 'Home',
		hash: '#home',
	},
	{
		name: 'About',
		hash: '#about',
	},
	{
		name: 'Projects',
		hash: '#projects',
	},
	{
		name: 'Skills',
		hash: '#skills',
	},
	{
		name: 'Experience',
		hash: '#experience',
	},
	{
		name: 'Contact',
		hash: '#contact',
	},
] as const;

export const experiencesData = [
	{
		title: 'Self start',
		institution: 'edX - Harvard University & Udemy',
		description:
			'During my national service, I successfully completed the renowned CS50x course. I then delved into frontend fundamentals and successfully finished The Complete Web Development Bootcamp by Dr Angela Yu.',
		icon: React.createElement(PiCursorClick),
		date: '2021-2022',
	},
	{
		title: 'Bachelor of Science (Information Systems)',
		institution: 'Singapore Management University',
		description:
			"I'm currently studying Information Systems, with a dual track in Fintech and Cloud Solutions",
		icon: React.createElement(LuGraduationCap),
		date: '2022 - present',
	},
	{
		title: 'Software Engineer Intern',
		institution: 'Activate Interactive, Singapore',
		description:
			'During my internship, I refined my React Native skills while deeply engaging in enhancing and debugging our client-facing mobile application. I played a critical role in integrating new features and gained valuable insights into wearable technology.',
		icon: React.createElement(FaReact),
		date: '2023',
	},
] as const;

export const projectsData = [
	{
		title: 'Reventé',
		description:
			'An E-commerce website dedicated to promoting sustainability by simplifying the process of selling pre-loved clothing.',
		tags: ['Vue', 'Firebase', 'HTML', 'CSS', 'Javascript'],
		imageUrl: reventeImg,
	},
	{
		title: 'Viiicky',
		description:
			'Recipient of the Most Creative Award in the 2023 Ellipsis Tech Series Hackathon',
		tags: ['React', 'TypeScript', 'Tailwind'],
		imageUrl: viiickyImg,
	},
] as const;

export const skillsData = [
	'Python',
	'Pandas',
	'Flask',
	'HTML',
	'CSS',
	'JavaScript',
	'TypeScript',
	'React',
	'React Native',
	'Next.js',
	'Vue',
	'Git',
	'Tailwind',
	'PHP',
	'MongoDB',
	'SQL',
	'Framer Motion',
] as const;
