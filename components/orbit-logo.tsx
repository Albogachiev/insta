import { cn } from "@/lib/utils"

export function OrbitLogo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "font-serif text-3xl font-semibold tracking-tight text-foreground select-none",
        className,
      )}
    >
      Orbit
    </span>
  )
}
