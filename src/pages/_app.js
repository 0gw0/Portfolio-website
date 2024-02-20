import '@/styles/global.css'; // Global CSS import
import '@picocss/pico/css/pico.min.css';
import Header from '@/components/Header';
import { ThemeProvider } from '@/contexts/ThemeContext';

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider>
			<Header />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;
