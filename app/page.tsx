import About from '@/components/about';
import Experience from '@/components/experience';
import Intro from '@/components/intro';
import Projects from '@/components/projects';
import SectionDivider from '@/components/section-divider';
import Skills from '@/components/skills';

export default function Home() {
	return (
		<main className="flex flex-col items-center">
			<Intro />
			<About />
			<SectionDivider />
			<Projects />
			<SectionDivider />
			<Skills />
			<Experience />
		</main>
	);
}
