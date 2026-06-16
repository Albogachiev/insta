import { logoutAction } from '@/lib/actions/auth';
import { getCurrentUser } from '@/lib/actions/auth';
import { InstagramLogo } from '@/components/instagram/instagram-logo';

export default async function FeedPage() {
	const user = await getCurrentUser();

	if (!user) return null;

	return (
		<div className="min-h-screen bg-[#0c1014] text-white">
			<header className="flex items-center justify-between border-b border-[#363636] px-6 py-4">
				<InstagramLogo size={32} />
				<form action={logoutAction}>
					<button type="submit" className="text-sm font-semibold text-[#708dff] hover:underline">
						Log out
					</button>
				</form>
			</header>

			<main className="mx-auto flex max-w-lg flex-col items-center gap-6 px-6 py-16 text-center">
				<div className="flex size-24 items-center justify-center rounded-full bg-gradient-to-br from-[#FF543E] via-[#C837AB] to-[#8C3AAA] text-3xl font-bold">
					{user.username[0]?.toUpperCase()}
				</div>

				<div className="flex flex-col gap-2">
					<h1 className="text-2xl font-semibold">Welcome, {user.fullName}</h1>
					<p className="text-[#a8a8a8]">@{user.username}</p>
				</div>

				<p className="text-sm leading-relaxed text-[#a8a8a8]">
					You&apos;re logged in. This is a placeholder feed page — the next step would be building
					the main Instagram interface here.
				</p>
			</main>
		</div>
	);
}
