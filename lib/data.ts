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

export const projectsData = [
	{
		title: 'Reventé',
		description:
			'An E-commerce website dedicated to promoting sustainability by simplifying the process of selling pre-loved clothing.',
		tags: ['Vue', 'Firebase firestore', 'HTML', 'CSS', 'Javascript'],
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
