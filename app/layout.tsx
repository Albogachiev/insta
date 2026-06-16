import { Analytics } from '@vercel/analytics/next';
import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'Instagram',
	description: 'Log in to Instagram or sign up to see photos and videos from your friends.',
	icons: {
		icon: '/icon.svg',
	},
};

export const viewport: Viewport = {
	colorScheme: 'dark',
	themeColor: '#0c1014',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="antialiased">
				{children}
				{process.env.NODE_ENV === 'production' && <Analytics />}
			</body>
		</html>
	);
}
