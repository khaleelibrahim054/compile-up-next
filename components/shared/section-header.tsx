import { cn } from "@/lib/utils";
import { SectionBadge } from "./section-badge";
import { FadeUp } from "./motion-wrapper";

interface SectionHeaderProps {
  badge?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        align === "left" && "items-start text-left",
        className
      )}
    >
      {badge && (
        <FadeUp>
          <SectionBadge>{badge}</SectionBadge>
        </FadeUp>
      )}
      <FadeUp delay={0.05}>
        <h2
          className={cn(
            "font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl",
            align === "center" && "max-w-3xl"
          )}
        >
          {title}
        </h2>
      </FadeUp>
      {description && (
        <FadeUp delay={0.1}>
          <p
            className={cn(
              "text-text-muted text-lg leading-relaxed",
              align === "center" && "max-w-2xl"
            )}
          >
            {description}
          </p>
        </FadeUp>
      )}
    </div>
  );
}
