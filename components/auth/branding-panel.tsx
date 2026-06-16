import type { ReactNode } from 'react';
import { InstagramLogo } from '@/components/instagram/instagram-logo';

function PhoneFrame({ className, children }: { className?: string; children: ReactNode }) {
	return (
		<div
			className={`relative overflow-hidden rounded-[28px] border-[3px] border-white/20 bg-black shadow-2xl ${className ?? ''}`}>
			<div className="absolute left-1/2 top-2 z-10 h-1 w-10 -translate-x-1/2 rounded-full bg-white/30" />
			{children}
		</div>
	);
}

function StoryPhoto({ gradient, className }: { gradient: string; className?: string }) {
	return (
		<div
			className={`absolute inset-0 bg-cover bg-center ${className ?? ''}`}
			style={{ backgroundImage: gradient }}
		/>
	);
}

export function BrandingPanel() {
	return (
		<div className="relative hidden flex-1 flex-col items-center justify-center overflow-hidden px-12 lg:flex">
			<div className="flex w-full max-w-[520px] flex-col gap-8">
				<InstagramLogo size={48} />

				<h2 className="text-[2rem] font-normal leading-tight tracking-tight text-white">
					See everyday moments from your{' '}
					<span className="bg-gradient-to-r from-[#FF543E] via-[#C837AB] to-[#8C3AAA] bg-clip-text text-transparent">
						close friends
					</span>
					.
				</h2>

				<div className="relative mx-auto h-[380px] w-full max-w-[420px]">
					<PhoneFrame className="absolute left-0 top-8 h-[300px] w-[170px] -rotate-6">
						<StoryPhoto gradient="linear-gradient(160deg, #667eea 0%, #764ba2 100%)" />
						<div className="absolute bottom-4 left-3 right-3">
							<div className="h-1 w-full rounded-full bg-white/40">
								<div className="h-1 w-2/3 rounded-full bg-white" />
							</div>
						</div>
					</PhoneFrame>

					<PhoneFrame className="absolute left-1/2 top-0 z-10 h-[340px] w-[190px] -translate-x-1/2">
						<StoryPhoto gradient="linear-gradient(160deg, #f093fb 0%, #f5576c 100%)" />
						<div className="absolute right-3 top-16 flex flex-col gap-2">
							<span className="text-lg">❤️</span>
							<span className="text-lg">⭐</span>
						</div>
						<div className="absolute bottom-4 left-3 right-3">
							<div className="h-1 w-full rounded-full bg-white/40">
								<div className="h-1 w-1/2 rounded-full bg-white" />
							</div>
						</div>
					</PhoneFrame>

					<PhoneFrame className="absolute right-0 top-12 h-[280px] w-[160px] rotate-6">
						<StoryPhoto gradient="linear-gradient(160deg, #4facfe 0%, #00f2fe 100%)" />
						<div className="absolute left-3 top-20 text-2xl">🔮</div>
						<div className="absolute bottom-4 left-3 right-3">
							<div className="h-1 w-full rounded-full bg-white/40">
								<div className="h-1 w-3/4 rounded-full bg-white" />
							</div>
						</div>
					</PhoneFrame>

					<div className="absolute -right-2 top-32 text-3xl">🤔</div>
				</div>
			</div>
		</div>
	);
}
