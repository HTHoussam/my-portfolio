import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Houssam Habbat | Software Engineer & Front-End Developer',
	description:
		'Explore the portfolio of Houssam Habbat, a passionate Software Engineer specializing in front-end development using React and TypeScript. Discover my experiences, skills, and projects in web development and learn how I create amazing web applications.',
	keywords:
		'Houssam Habbat, Software Engineer, Front-End Developer, React Developer, TypeScript, Web Development, Portfolio, Web Performance, Accessibility',
	authors: {
		name: 'Houssam Habbat',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
