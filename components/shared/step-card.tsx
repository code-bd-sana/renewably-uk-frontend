import { cn } from "@/lib/utils";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface StepCardBadge {
  label: string;
  icon?: React.ReactNode;
}

export interface StepCardProps {
  /** Step number shown in the circle (e.g. 1, 2, 3) — omit to use icon only */
  step?: number;
  /** Icon shown inside the circle — takes precedence over step number */
  icon?: React.ReactNode;
  /** Card title */
  title: string;
  /** Main description paragraph(s) */
  description: string | React.ReactNode;
  /** Optional second paragraph (as seen in card 2 of the design) */
  subDescription?: string | React.ReactNode;
  /** Small badge/tag chips shown at the bottom */
  badges?: StepCardBadge[];

  // ── Styling overrides ──────────────────────────────────────────────────────
  className?: string;
  iconBgClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  badgeClassName?: string;
}

// ─── Component ────────────────────────────────────────────────────────────────

export function StepCard({
  step,
  icon,
  title,
  description,
  subDescription,
  badges,
  className,
  iconBgClassName,
  titleClassName,
  descriptionClassName,
  badgeClassName,
}: StepCardProps) {
  return (
    <div
      className={cn(
        // Card shell
        "flex items-start gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm",
        className,
      )}>
      {/* ── Left: circle icon ── */}
      <div
        className={cn(
          "flex shrink-0 items-center justify-center rounded-full w-11 h-11 mt-0.5",
          "[&>svg]:w-5 [&>svg]:h-5",
          "bg-[#1E3A8A] text-white",
          iconBgClassName,
        )}>
        {icon ??
          (step !== undefined ? (
            <span className='text-sm font-semibold'>{step}</span>
          ) : null)}
      </div>

      {/* ── Right: content ── */}
      <div className='flex flex-col gap-2 flex-1 min-w-0'>
        {/* Title */}
        <h3
          className={cn(
            "text-[22px] font-semibold leading-snug text-[#1e293b]",
            titleClassName,
          )}>
          {title}
        </h3>

        {/* Description */}
        <p
          className={cn(
            "text-base leading-relaxed text-slate-500",
            descriptionClassName,
          )}>
          {description}
        </p>

        {/* Optional sub-description */}
        {subDescription && (
          <p
            className={cn(
              "text-base leading-relaxed text-slate-500",
              descriptionClassName,
            )}>
            {subDescription}
          </p>
        )}

        {/* Badges row */}
        {badges && badges.length > 0 && (
          <div className='flex flex-wrap gap-2 pt-1'>
            {badges.map((badge, i) => (
              <span
                key={i}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-[8px] border border-[#E5E7EB] bg-white",
                  "px-2.5 py-1 text-sm font-medium text-slate-600",
                  badgeClassName,
                )}>
                {badge.icon && badge.icon}
                {badge.label}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── StepCardList convenience wrapper ─────────────────────────────────────────

export interface StepCardListProps {
  cards: StepCardProps[];
  className?: string;
  cardClassName?: string;
}

export function StepCardList({
  cards,
  className,
  cardClassName,
}: StepCardListProps) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      {cards.map((card, i) => (
        <StepCard
          key={i}
          {...card}
          className={cn(cardClassName, card.className)}
        />
      ))}
    </div>
  );
}
