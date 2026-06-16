import type { ReactNode } from 'react';
import { BrandingPanel } from '@/components/auth/branding-panel';
import { AuthFooter } from '@/components/auth/auth-footer';

type AuthShellProps = {
	children: ReactNode;
	variant?: 'login' | 'register';
};

export function AuthShell({ children, variant = 'login' }: AuthShellProps) {
	const isLogin = variant === 'login';

	return (
		<div className="flex min-h-screen flex-col bg-[#0c1014] text-[#f5f5f5]">
			<div className="flex flex-1">
				{isLogin && <BrandingPanel />}

				<div
					className={`flex flex-1 flex-col ${
						isLogin
							? 'items-center justify-center px-6 py-10 lg:items-start lg:px-16 xl:px-24'
							: 'items-center justify-start px-6 py-8'
					}`}>
					<div className={`w-full ${isLogin ? 'max-w-[350px]' : 'max-w-[400px]'}`}>{children}</div>
				</div>
			</div>

			<AuthFooter />
		</div>
	);
}
