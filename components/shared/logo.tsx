/**
 * @fileoverview Branded Renewably UK logo component.
 *
 * Renders the brand mark as styled text with a leaf icon.
 * Used wherever the logo appears — navbar, footer, auth pages, dashboard.
 *
 * @param variant - "dark" for use on light backgrounds, "light" for dark/blue backgrounds
 */

import { Leaf } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  /** "dark" = navy text (for light bg); "light" = white text (for dark bg) */
  variant?: "dark" | "light";
  /** Whether to wrap in a link to the home page */
  linked?: boolean;
  className?: string;
}

function LogoMark({ variant = "dark", className }: Omit<LogoProps, "linked">) {
  const textColor = variant === "light" ? "text-white" : "text-[#0F47A8]";
  const subColor = variant === "light" ? "text-white/80" : "text-[#6B7280]";
  const iconColor = variant === "light" ? "text-white" : "text-[#0F47A8]";

  return (
    <span className={cn("flex items-center gap-2 select-none", className)}>
      <span
        className={cn(
          "flex h-8 w-8 items-center justify-center rounded-lg bg-[#0F47A8]",
          variant === "light" && "bg-white/20"
        )}
      >
        <Leaf className="h-5 w-5 text-white" />
      </span>
      <span className="flex flex-col leading-none">
        <span className={cn("text-base font-bold tracking-tight", textColor)}>
          Renewably
        </span>
        <span className={cn("text-xs font-semibold tracking-widest uppercase", subColor)}>
          UK
        </span>
      </span>
    </span>
  );
}

export default function Logo({ variant = "dark", linked = true, className }: LogoProps) {
  if (!linked) return <LogoMark variant={variant} className={className} />;

  return (
    <Link href="/" aria-label="Renewably UK — go to home page">
      <LogoMark variant={variant} className={className} />
    </Link>
  );
}
