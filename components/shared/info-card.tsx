import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export interface InfoCardPoint {
  label: string | React.ReactNode;
  icon?: React.ReactNode;
}

export interface InfoCardProps {
  icon?: React.ReactNode;
  title?: string;
  /** Coloured subheading rendered below the title (e.g. "Financial Conduct Authority") */
  subtitle?: string;
  description?: string;
  learnMoreHref?: string;
  points?: InfoCardPoint[];
  footer?: React.ReactNode;
  footerClassName?: string;

  // Layout
  align?: "start" | "center";
  contentLayout?: "stacked" | "row";
  inverted?: boolean;
  className?: string;

  // Colors
  cardBg?: string;
  iconVariant?: "negative" | "positive" | "neutral";
  iconBgClassName?: string;
  titleClassName?: string;
  /** Override subtitle color — defaults to blue */
  subtitleClassName?: string;
  descriptionClassName?: string;
  pointClassName?: string;
  pointIconClassName?: string;
  learnMoreClassName?: string;

  // Icon wrapper
  iconWrapperClassName?: string;
}

export function InfoCard({
  icon,
  title,
  subtitle,
  description,
  learnMoreHref,
  points,
  align = "start",
  contentLayout = "stacked",
  inverted = false,
  className,
  cardBg,
  iconVariant = "neutral",
  iconBgClassName,
  titleClassName,
  subtitleClassName,
  descriptionClassName,
  pointClassName,
  pointIconClassName,
  learnMoreClassName,
  iconWrapperClassName,
  footer,
  footerClassName,
}: InfoCardProps) {
  const isCenter = align === "center";
  const isRowLayout = contentLayout === "row" && !isCenter;

  const defaultIconBg: string =
    iconBgClassName ??
    {
      negative: inverted ? "bg-white/20 text-white" : "bg-red-100 text-red-500",
      positive: inverted
        ? "bg-white/20 text-white"
        : "bg-blue-100 text-blue-500",
      neutral: inverted
        ? "bg-white/20 text-white"
        : "bg-blue-100 text-blue-500",
    }[iconVariant];

  const defaultCardBg =
    cardBg ??
    (inverted ? "bg-[#1E3A8A] text-white" : "bg-[#EEF3FB] text-[#1e293b]");

  /** Subtitle element — reused across layout variants */
  const subtitleEl = subtitle ? (
    <p
      className={cn(
        "text-sm font-medium leading-snug",
        inverted ? "text-blue-200" : "text-blue-600",
        subtitleClassName
      )}
    >
      {subtitle}
    </p>
  ) : null;

  return (
    <Card
      className={cn(
        "rounded-2xl border-0 shadow-sm h-full",
        defaultCardBg,
        className,
      )}>
      <CardContent
        className={cn(
          "p-5 space-y-3 flex flex-col h-full",
          isCenter && "items-center text-center",
        )}>

        {/* ── ROW LAYOUT: icon + title + subtitle + description in one row group ── */}
        {isRowLayout && (icon || title || description) && (
          <div className='flex items-start gap-3'>
            {icon && (
              <span
                className={cn(
                  "flex items-center justify-center rounded-[10px] w-10 h-10 shrink-0 [&>svg]:w-5 [&>svg]:h-5",
                  defaultIconBg,
                  iconWrapperClassName,
                )}>
                {icon}
              </span>
            )}

            <div className='space-y-1'>
              {title && (
                <h3
                  className={cn(
                    "font-semibold text-base leading-snug",
                    inverted ? "text-white" : "text-[#1e293b]",
                    titleClassName,
                  )}>
                  {title}
                </h3>
              )}
              {subtitleEl}
              {description && (
                <p
                  className={cn(
                    "text-sm leading-relaxed",
                    inverted ? "text-blue-100" : "text-slate-500",
                    descriptionClassName,
                  )}>
                  {description}
                </p>
              )}
            </div>
          </div>
        )}

        {/* ── CENTER LAYOUT: icon above title ── */}
        {isCenter && icon && (
          <div
            className={cn(
              "flex items-center justify-center rounded-xl w-12 h-12 shrink-0 [&>svg]:w-6 [&>svg]:h-6",
              defaultIconBg,
              iconWrapperClassName,
            )}>
            {icon}
          </div>
        )}

        {/* ── START LAYOUT (default): icon inline with title ── */}
        {!isCenter && !isRowLayout && (icon || title) && (
          <div className='flex items-center gap-3'>
            {icon && (
              <span
                className={cn(
                  "flex items-center justify-center rounded-[10px] w-10 h-10 shrink-0 [&>svg]:w-5 [&>svg]:h-5",
                  defaultIconBg,
                  iconWrapperClassName,
                )}>
                {icon}
              </span>
            )}
            {title && (
              <div className="flex flex-col">
              <h3
                className={cn(
                  "font-semibold text-base leading-snug",
                  inverted ? "text-white" : "text-[#1e293b]",
                  titleClassName,
                )}>
                {title}
              </h3>
            {/* Subtitle — rendered after the header row in start/center layouts */}
            {!isRowLayout && subtitleEl}
            </div>
            )}
          </div>
        )}


        {/* Title for center layout (rendered after icon) */}
        {isCenter && title && (
          <h3
            className={cn(
              "font-semibold text-base leading-snug",
              inverted ? "text-white" : "text-[#1e293b]",
              titleClassName,
            )}>
            {title}
          </h3>
        )}

        {/* Description */}
        {!isRowLayout && description && (
          <p
            className={cn(
              "text-sm leading-relaxed",
              inverted ? "text-blue-100" : "text-slate-500",
              descriptionClassName,
            )}>
            {description}
          </p>
        )}

        {/* Points */}
        {points && points.length > 0 && (
          <ul
            className={cn(
              "flex flex-col gap-2 pt-1",
              isCenter && "items-center",
            )}>
            {points.map((point, i) => (
              <li
                key={i}
                className={cn(
                  "flex items-center gap-2 text-sm",
                  inverted ? "text-blue-100" : "text-slate-600",
                  pointClassName,
                )}>
                {point.icon ? (
                  <span
                    className={cn(
                      "shrink-0 [&>svg]:w-5 [&>svg]:h-5",
                      inverted ? "text-blue-200" : "text-blue-500",
                      pointIconClassName,
                    )}>
                    {point.icon}
                  </span>
                ) : (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className={cn(
                      "w-4 h-4 shrink-0",
                      inverted ? "text-blue-200" : "text-blue-500",
                      pointIconClassName,
                    )}
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth={2}>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                )}
                {point.label}
              </li>
            ))}
          </ul>
        )}

        {/* Learn More */}
        {learnMoreHref && (
          <Link
            href={learnMoreHref}
            className={cn(
              "inline-flex items-center gap-1 text-sm font-medium mt-auto transition-colors hover:opacity-80",
              "text-(--text-primary)",
              learnMoreClassName,
            )}>
            Learn More
            <ArrowRight
              color='#0F47A8'
              className='w-4 h-4 text-(--text-primary)'
            />
          </Link>
        )}

        {/* Footer */}
        {footer && (
          <div
            className={cn(
              "pt-3 mt-auto text-sm leading-relaxed",
              inverted
                ? "border-white/20 text-blue-100"
                : "border-slate-200 text-slate-500",
              footerClassName,
            )}>
            {footer}
          </div>
        )}
      </CardContent>
    </Card>
  );
}