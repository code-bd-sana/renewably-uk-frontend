/**
 * @fileoverview Footer component — matches Figma "Footer" frame exactly.
 *
 * Design: #0F47A8 blue background, 4-column layout.
 * Columns: Logo + tagline, Company links, Services links, Connect links.
 * Bottom bar: copyright + ICO registration info.
 */

import Link from "next/link";
import Logo from "@/components/shared/logo";

/** A labelled list of footer links */
interface FooterColumn {
  heading: string;
  links: { label: string; href: string }[];
}

/** Footer link columns (Company, Services, Connect) */
const FOOTER_COLUMNS: FooterColumn[] = [
  {
    heading: "Company",
    links: [
      { label: "Insurance", href: "/insurance" },
      { label: "Funding", href: "/funding" },
      { label: "Accreditation", href: "/accreditation" },
      { label: "News", href: "/news" },
      { label: "Contact us", href: "/contact" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Hosted IBG Certificate Generator", href: "/insurance" },
      { label: "Renewable Energy Product Coverage", href: "/insurance" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "LinkedIn", href: "https://linkedin.com" },
      { label: "Twitter / X", href: "https://twitter.com" },
    ],
  },
];

/**
 * Site-wide footer with brand colours and navigation columns.
 * Used across all public (home) pages.
 */
export default function Footer() {
  return (
    <footer className="bg-[#0F47A8]">
      <div className="mx-auto max-w-[1240px] px-6 py-12">
        {/* Main columns */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <Logo variant="light" linked />
            <p className="max-w-[240px] text-sm leading-relaxed text-white/80">
              A portal designed for Installation Companies, built for
              Compliance.
            </p>
          </div>

          {/* Link columns */}
          {FOOTER_COLUMNS.map(({ heading, links }) => (
            <div key={heading} className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold text-white">{heading}</h3>
              <ul className="flex flex-col gap-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-[#F3F4F6] transition-colors hover:text-white"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-white/20" />

        {/* Bottom bar */}
        <div className="flex flex-col gap-1">
          <p className="text-sm text-[#D1D5DB]">
            © 2026 Renewably UK — Powering the future of Renewable
            Installations. All rights reserved.
          </p>
          <p className="text-xs text-[#3C79E0]">
            ICO Registration No: ZC077762 · Registered with the Information
            Commissioner&apos;s Office
          </p>
        </div>
      </div>
    </footer>
  );
}
