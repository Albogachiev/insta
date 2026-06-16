import { cn } from '@/lib/utils';

export function AuthInput({
	className,
	label,
	...props
}: React.ComponentProps<'input'> & { label?: string }) {
	return (
		<div className="flex flex-col gap-1.5">
			{label && (
				<label htmlFor={props.id} className="text-sm font-semibold text-white">
					{label}
				</label>
			)}
			<input
				className={cn(
					'h-11 w-full rounded-lg border border-[#363636] bg-[#121212] px-3 text-base text-[#f2f4f6] outline-none placeholder:text-[#737373] focus:border-[#a8a8a8]',
					className,
				)}
				{...props}
			/>
		</div>
	);
}

export function AuthSelect({
	className,
	label,
	children,
	...props
}: React.ComponentProps<'select'> & { label?: string }) {
	return (
		<div className="flex flex-1 flex-col gap-1.5">
			{label && (
				<label htmlFor={props.id} className="text-sm font-semibold text-white">
					{label}
				</label>
			)}
			<select
				className={cn(
					'h-11 w-full appearance-none rounded-lg border border-[#363636] bg-[#121212] px-3 text-base text-[#737373] outline-none focus:border-[#a8a8a8]',
					className,
				)}
				{...props}>
				{children}
			</select>
		</div>
	);
}
