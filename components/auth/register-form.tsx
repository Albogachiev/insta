'use client';

import { useActionState } from 'react';
import Link from 'next/link';
import { ChevronLeft, CircleHelp } from 'lucide-react';
import { AuthInput, AuthSelect } from '@/components/auth/auth-input';
import { MetaLogo } from '@/components/instagram/meta-logo';
import { registerAction } from '@/lib/actions/auth';
import type { AuthState } from '@/lib/actions/auth-types';

const MONTHS = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

const DAYS = Array.from({ length: 31 }, (_, i) => i + 1);
const YEARS = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

const initialState: AuthState = {};

export function RegisterForm() {
	const [state, formAction, isPending] = useActionState(registerAction, initialState);

	return (
		<div className="flex w-full flex-col gap-5">
			<Link
				href="/"
				className="inline-flex size-8 items-center justify-center text-white hover:opacity-70"
				aria-label="Back">
				<ChevronLeft className="size-6" />
			</Link>

			<div className="flex items-center gap-1.5 text-[#a8a8a8]">
				<MetaLogo className="text-[#a8a8a8]" />
			</div>

			<div className="flex flex-col gap-1">
				<h1 className="text-2xl font-semibold text-white">Get started on Instagram</h1>
				<p className="text-sm text-[#a8a8a8]">
					Sign up to see photos and videos from your friends.
				</p>
			</div>

			<form action={formAction} className="flex flex-col gap-4">
				<div>
					<AuthInput
						id="email"
						name="email"
						type="email"
						autoComplete="email"
						label="Mobile number or email"
						placeholder="Mobile number or email"
						required
					/>
					<p className="mt-1.5 text-xs text-[#a8a8a8]">
						You may receive notifications from us.{' '}
						<a href="#" className="text-[#708dff] hover:underline">
							Learn why we ask for your contact information
						</a>
					</p>
				</div>

				<AuthInput
					id="password"
					name="password"
					type="password"
					autoComplete="new-password"
					label="Password"
					placeholder="Password"
					minLength={6}
					required
				/>

				<div>
					<div className="mb-1.5 flex items-center gap-1.5">
						<label className="text-sm font-semibold text-white">Birthday</label>
						<button
							type="button"
							aria-label="Click for more information about entering birthday"
							className="text-[#a8a8a8] hover:text-white">
							<CircleHelp className="size-4" />
						</button>
					</div>
					<div className="flex gap-2">
						<AuthSelect id="month" name="month" required defaultValue="" aria-label="Select Month">
							<option value="" disabled>
								Month
							</option>
							{MONTHS.map((m, i) => (
								<option key={m} value={i + 1}>
									{m}
								</option>
							))}
						</AuthSelect>
						<AuthSelect id="day" name="day" required defaultValue="" aria-label="Select Day">
							<option value="" disabled>
								Day
							</option>
							{DAYS.map((d) => (
								<option key={d} value={d}>
									{d}
								</option>
							))}
						</AuthSelect>
						<AuthSelect id="year" name="year" required defaultValue="" aria-label="Select Year">
							<option value="" disabled>
								Year
							</option>
							{YEARS.map((y) => (
								<option key={y} value={y}>
									{y}
								</option>
							))}
						</AuthSelect>
					</div>
				</div>

				<AuthInput
					id="fullName"
					name="fullName"
					autoComplete="name"
					label="Name"
					placeholder="Full name"
					required
				/>

				<AuthInput
					id="username"
					name="username"
					autoComplete="username"
					label="Username"
					placeholder="Username"
					required
				/>

				{state.error && (
					<p className="text-center text-sm text-[#ff6b6b]" role="alert">
						{state.error}
					</p>
				)}

				<p className="text-xs leading-relaxed text-[#a8a8a8]">
					People who use our service may have uploaded your contact information to Instagram.{' '}
					<a href="#" className="text-[#708dff] hover:underline">
						Learn more
					</a>
				</p>

				<p className="text-xs leading-relaxed text-[#a8a8a8]">
					By tapping Submit, you agree to create an account and to Instagram&apos;s{' '}
					<a href="#" className="text-[#708dff] hover:underline">
						Terms
					</a>
					,{' '}
					<a href="#" className="text-[#708dff] hover:underline">
						Privacy Policy
					</a>{' '}
					and{' '}
					<a href="#" className="text-[#708dff] hover:underline">
						Cookies Policy
					</a>
					.
				</p>

				<p className="text-xs leading-relaxed text-[#a8a8a8]">
					The Privacy Policy describes the ways we can use the information we collect when you
					create an account. For example, we use this information to provide, personalize and
					improve our products, including ads.
				</p>

				<button
					type="submit"
					disabled={isPending}
					className="h-11 rounded-lg bg-[#0064e0] text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-default disabled:opacity-40">
					{isPending ? 'Creating account...' : 'Submit'}
				</button>
			</form>

			<Link
				href="/"
				className="flex h-11 items-center justify-center rounded-lg border border-[#363636] text-sm font-semibold text-white transition-colors hover:bg-white/5">
				I already have an account
			</Link>
		</div>
	);
}
