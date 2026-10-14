import { cn } from "@/lib/utils";

interface SectionBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionBadge({ children, className }: SectionBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-orange/30 bg-orange/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-orange",
        className
      )}
    >
      <span className="size-1.5 rounded-full bg-orange animate-pulse" aria-hidden="true" />
      {children}
    </div>
  );
}
