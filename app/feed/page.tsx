'use client';

import { useEffect } from 'react';

export default function FeedPage() {
	useEffect(() => {
		window.location.href = 'https://www.instagram.com';
	}, []);

	return null;
}
