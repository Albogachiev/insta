import { cn } from '@/lib/utils';

export function InstagramLogo({ className, size = 40 }: { className?: string; size?: number }) {
	return (
		<svg
			aria-label="Instagram"
			className={cn('shrink-0', className)}
			width={size}
			height={size}
			viewBox="0 0 48 48"
			fill="none">
			<defs>
				<radialGradient id="ig-grad" cx="0.3" cy="1" r="1.2">
					<stop offset="0%" stopColor="#FFDD55" />
					<stop offset="25%" stopColor="#FF543E" />
					<stop offset="50%" stopColor="#C837AB" />
					<stop offset="100%" stopColor="#8C3AAA" />
				</radialGradient>
			</defs>
			<rect width="48" height="48" rx="12" fill="url(#ig-grad)" />
			<circle cx="24" cy="24" r="10" stroke="white" strokeWidth="3" fill="none" />
			<circle cx="35" cy="13" r="2.5" fill="white" />
		</svg>
	);
}

export function InstagramWordmark({ className }: { className?: string }) {
	return (
		<svg
			aria-label="Instagram"
			className={cn('shrink-0', className)}
			viewBox="0 0 102 29"
			height="29"
			fill="white">
			<path d="M51.2 7.1c-5.5 0-9.8 4.3-9.8 9.8s4.3 9.8 9.8 9.8 9.8-4.3 9.8-9.8-4.3-9.8-9.8-9.8zm0 16.1c-3.5 0-6.3-2.8-6.3-6.3s2.8-6.3 6.3-6.3 6.3 2.8 6.3 6.3-2.8 6.3-6.3 6.3zM63.4 7.5h4.7v18.3h-4.7V7.5zm2.4-3.9c1.5 0 2.7 1.2 2.7 2.7s-1.2 2.7-2.7 2.7-2.7-1.2-2.7-2.7 1.2-2.7 2.7-2.7zM75.3 7.5h4.5v2.5h.1c.6-1.2 2.1-2.5 4.4-2.5 4.7 0 5.6 3.1 5.6 7.1v11.2h-4.7v-9.9c0-2.4 0-5.4-3.3-5.4-3.3 0-3.8 2.6-3.8 5.2v10.1h-4.7V7.5zM32.7 12.1c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5-2-4.5-4.5-4.5zm0 7.3c-1.5 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8 2.8 1.3 2.8 2.8-1.3 2.8-2.8 2.8z" />
			<path d="M16.5 0C7.4 0 0 7.4 0 16.5S7.4 33 16.5 33 33 25.6 33 16.5 25.6 0 16.5 0zm0 26.8c-5.7 0-10.3-4.6-10.3-10.3S10.8 6.2 16.5 6.2s10.3 4.6 10.3 10.3-4.6 10.3-10.3 10.3z" />
		</svg>
	);
}
