const FOOTER_LINKS = [
	'Meta',
	'About',
	'Blog',
	'Jobs',
	'Help',
	'API',
	'Privacy',
	'Terms',
	'Locations',
	'Popular',
	'Instagram Lite',
	'Meta AI',
	'Threads',
	'Contact Uploading & Non-Users',
	'Meta Verified',
];

const LANGUAGES = [
	'English',
	'Русский',
	'Español',
	'Français',
	'Deutsch',
	'Italiano',
	'Português',
	'日本語',
	'한국어',
	'中文',
];

export function AuthFooter() {
	return (
		<footer className="w-full px-6 py-6 lg:px-12">
			<nav className="flex flex-wrap justify-center gap-x-3 gap-y-1 lg:justify-start">
				{FOOTER_LINKS.map((link) => (
					<a key={link} href="#" className="text-xs text-[#a8a8a8] hover:underline">
						{link}
					</a>
				))}
			</nav>

			<div className="mt-3 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 lg:justify-start">
				<select
					aria-label="Switch Display Language"
					className="cursor-pointer border-none bg-transparent text-xs text-[#a8a8a8] outline-none"
					defaultValue="English">
					{LANGUAGES.map((lang) => (
						<option key={lang} value={lang}>
							{lang}
						</option>
					))}
				</select>
				<span className="text-xs text-[#a8a8a8]">© 2026 Instagram from Meta</span>
			</div>
		</footer>
	);
}
