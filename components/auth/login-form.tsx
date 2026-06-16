'use client';

import { useActionState } from 'react';
import Link from 'next/link';
import { AuthInput } from '@/components/auth/auth-input';
import { FacebookIcon } from '@/components/instagram/facebook-icon';
import { InstagramLogo } from '@/components/instagram/instagram-logo';
import { MetaLogo } from '@/components/instagram/meta-logo';
import { loginAction } from '@/lib/actions/auth';
import type { AuthState } from '@/lib/actions/auth-types';

const initialState: AuthState = {};

export function LoginForm() {
	const [state, formAction, isPending] = useActionState(loginAction, initialState);

	return (
		<div className="flex w-full flex-col gap-4">
			<InstagramLogo size={48} className="mb-2 lg:hidden" />

			<h1 className="text-2xl font-semibold text-white">Log into Instagram</h1>

			<form action={formAction} className="flex flex-col gap-3">
				<AuthInput
					id="username"
					name="username"
					autoComplete="username"
					placeholder="Mobile number, username or email"
					required
				/>

				<AuthInput
					id="password"
					name="password"
					type="password"
					autoComplete="current-password"
					placeholder="Password"
					required
				/>

				{state.error && (
					<p className="text-center text-sm text-[#ff6b6b]" role="alert">
						{state.error}
					</p>
				)}

				<button
					type="submit"
					disabled={isPending}
					className="mt-1 h-11 rounded-lg bg-[#0064e0] text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-default disabled:opacity-40">
					{isPending ? 'Logging in...' : 'Log in'}
				</button>
			</form>

			<Link href="#" className="text-center text-sm text-[#708dff] hover:underline">
				Forgot password?
			</Link>

			<button
				type="button"
				className="flex h-11 items-center justify-center gap-2 rounded-lg border border-[#363636] text-sm font-semibold text-white transition-colors hover:bg-white/5">
				<FacebookIcon />
				Log in with Facebook
			</button>

			<Link
				href="/register"
				className="flex h-11 items-center justify-center rounded-lg border border-[#708dff] text-sm font-semibold text-[#708dff] transition-colors hover:bg-[#708dff]/10">
				Create new account
			</Link>

			<div className="mt-4 flex items-center justify-center gap-1.5 text-[#a8a8a8]">
				<MetaLogo className="text-[#a8a8a8]" />
			</div>
		</div>
	);
}
