"use client";

/**
 * @fileoverview Navbar — matches Figma "Nav" frame exactly.
 *
 * Design: white bg, logo left, nav links center, login + sign-up right.
 * Active link: #030712. Inactive link: #6B7280. CTA button: #0F47A8.
 */

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Logo from "@/components/shared/logo";

/** A single navigation link entry */
interface NavLink {
  label: string;
  href: string;
}

/** All top-level public navigation routes */
const NAV_LINKS: NavLink[] = [
  { label: "Insurance", href: "/insurance" },
  { label: "Funding", href: "/funding" },
  { label: "Accreditation", href: "/accreditation" },
  { label: "News", href: "/news" },
  { label: "Contact us", href: "/contact" },
];

/**
 * Site-wide sticky navigation bar.
 * Highlights the currently active route automatically.
 */
export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-6 py-[18px]">
        {/* Logo */}
        <Logo variant="dark" />

        {/* Navigation links */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive =
              pathname === href || pathname.startsWith(href + "/");
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-[#0F47A8]",
                    isActive ? "text-[#030712]" : "text-[#6B7280]"
                  )}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Auth buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="text-sm font-medium text-[#6B7280] transition-colors hover:text-[#030712]"
          >
            Login
          </Link>
          <Link
            href="/sign-up"
            className="rounded-lg bg-[#0F47A8] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#0d3d90]"
          >
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
}
