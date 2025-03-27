import React from 'react';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import { LiaEthereum } from 'react-icons/lia';
import reventeImg from '@/public/revente.png';
import viiickyImg from '@/public/viiicky.png';
import yataImg from '@/public/yata.png';
import timepieceImg from '@/public/timepiecetalk.png';
import abbaImg from '@/public/abba.png';
import eblImg from '@/public/ebl.png';

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
		title: 'Software Engineer Intern',
		institution: 'Formo, Ho Chi Minh City, Vietnam',
		description:
			'Delved into blockchain development, exploring web3 technologies and gaining hands-on experience with decentralized application workflows. Contributed to performance optimization and innovative solutions that bridged traditional web technologies with emerging blockchain ecosystems.',
		icon: React.createElement(LiaEthereum),
		date: '2024 - 2025',
	},
	{
		title: 'Software Engineer Intern',
		institution: 'Activate Interactive, Singapore',
		description:
			'Contributed to wearable health technology mobile app development, focusing on integrating device functionality and ensuring precise data accuracy. Collaborated across teams to enhance app performance and resolve critical technical challenges during the product development lifecycle.',
		icon: React.createElement(FaReact),
		date: '2023',
	},
	{
		title: 'Bachelor of Science (Information Systems)',
		institution: 'Singapore Management University',
		description:
			"I'm currently studying Information Systems, with a dual track in Fintech and Digitalisation and Cloud Solutions and a second major in Digital Business",
		icon: React.createElement(LuGraduationCap),
		date: '2022 - 2026',
	},
] as const;

export const projectsData = [
	{
		title: 'Timepiece Talk',
		description:
			'A website built for an ACRA-registered watch dealer in Singapore, enabling seamless listing management with image uploads and editing capabilities.',
		tags: ['Typescript', 'Tailwind', 'PostgreSQL'],
		imageUrl: timepieceImg,
		link: 'https://www.timepiecetalk.shop/',
		github: '',
		information: '',
	},
	{
		title: 'Cleaner Scheduler',
		description:
			'A scheduling app developed for Abba, a Singapore based cleaning company, enabling efficient task assignment, worker management, and shift reminders.',
		tags: ['Java', 'Spring Boot', 'Typescript', 'AWS'],
		imageUrl: abbaImg,
		link: '',
		github: 'https://github.com/0gw0/cleaner-scheduler',
		information: '',
	},
	{
		title: 'Electronic Bill of Lading (E-BL)',
		description:
			'A blockchain-based platform that digitizes traditional bills of lading, enhancing security, transparency, and efficiency in the shipping industry. Features include smart contract tracking, real-time document management, and seamless MetaMask integration.',
		tags: ['Solidity', 'Ethereum', 'Typescript', 'Tailwind'],
		imageUrl: eblImg,
		link: '',
		github: 'https://github.com/0gw0/blockchain-eBL',
		information: '',
	},
	{
		title: 'Reventé',
		description:
			'An E-commerce website dedicated to promoting sustainability by simplifying the process of selling pre-loved clothing.',
		tags: ['Vue', 'Firebase', 'HTML', 'CSS', 'Javascript'],
		imageUrl: reventeImg,
		link: 'https://smu-wad2.web.app/about',
		github: 'https://github.com/Terristwj/Revente',
		information: '',
	},
	{
		title: 'YATA',
		description:
			'An enterprise solution built using Service-Oriented Architecture (SOA) and scalable microservices - Empowering Healthcare in Singapore.',
		tags: ['Python', 'Flask', 'KrakenD', 'RabbitMQ', 'ExpressJS'],
		imageUrl: yataImg,
		link: '',
		github: 'https://github.com/0gw0/Healthcare-API',
		information:
			'https://www.canva.com/design/DAGAkk7bgUY/WfDpD9C12thxVQY5h292kg/view',
	},
	{
		title: 'Viiicky',
		description:
			'Recipient of the Most Creative Award in the 2023 Ellipsis Tech Series Hackathon',
		tags: ['React', 'TypeScript', 'Tailwind'],
		imageUrl: viiickyImg,
		link: 'https://vicky-nine.vercel.app',
		github: 'https://github.com/Terristwj/Vicky',
		information: '',
	},
] as const;

export const skillsData = [
	'Python',
	'Flask',
	'JavaScript',
	'TypeScript',
	'React',
	'React Native',
	'Next.js',
	'Vue',
	'Git',
	'PHP',
	'MongoDB',
	'SQL',
	'Docker',
	'Solidity',
	'Web3.js',
] as const;
