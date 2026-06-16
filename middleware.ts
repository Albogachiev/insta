import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const COOKIE_NAME = 'session';

async function getUserId(request: NextRequest) {
	const token = request.cookies.get(COOKIE_NAME)?.value;
	if (!token) return null;

	const secret = process.env.AUTH_SECRET;
	if (!secret) return null;

	try {
		const { payload } = await jwtVerify(token, new TextEncoder().encode(secret));
		return payload.userId as string;
	} catch {
		return null;
	}
}

export async function middleware(request: NextRequest) {
	const userId = await getUserId(request);
	const { pathname } = request.nextUrl;

	const isAuthRoute = pathname === '/' || pathname === '/register';

	if (userId && isAuthRoute) {
		return NextResponse.redirect(new URL('/feed', request.url));
	}

	if (!userId && pathname.startsWith('/feed')) {
		return NextResponse.redirect(new URL('/', request.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: ['/', '/register', '/feed'],
};
