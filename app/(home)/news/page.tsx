/**
 * @fileoverview News listing page — matches Figma "News" frame.
 *
 * Sections:
 * 1. Hero banner
 * 2. News article grid — article cards with image, category tag, title, excerpt
 */

import Link from "next/link";

/** A news article summary card */
interface Article {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

const ARTICLES: Article[] = [
  {
    slug: "eco4-scheme-updates-2026",
    category: "Funding",
    title: "ECO4 Scheme Updates — What Installers Need to Know for 2026",
    excerpt:
      "Ofgem has published updated guidance for the ECO4 scheme. Here's everything installation companies need to act on before April.",
    date: "15 Mar 2026",
    readTime: "4 min read",
  },
  {
    slug: "trustmark-registration-guide",
    category: "Accreditation",
    title: "How to Get TrustMark Registered: A Step-by-Step Guide",
    excerpt:
      "TrustMark registration is now a prerequisite for many UK government funding schemes. This guide walks you through the process.",
    date: "8 Mar 2026",
    readTime: "6 min read",
  },
  {
    slug: "ibg-certificates-explained",
    category: "Insurance",
    title: "Insurance Backed Guarantee Certificates Explained",
    excerpt:
      "What are IBG certificates, why do homeowners need them, and how does Renewably UK help you generate them instantly?",
    date: "2 Mar 2026",
    readTime: "5 min read",
  },
  {
    slug: "gbis-updates-march-2026",
    category: "Funding",
    title: "Great British Insulation Scheme: March 2026 Update",
    excerpt:
      "New eligibility criteria and measure changes have been released for GBIS. We break down what changed and how it affects your pipeline.",
    date: "25 Feb 2026",
    readTime: "3 min read",
  },
  {
    slug: "solar-pv-compliance-checklist",
    category: "Compliance",
    title: "Solar PV Installation Compliance Checklist for UK Installers",
    excerpt:
      "A practical checklist covering every compliance step for solar PV installations — from MCS certification to IBG issuance.",
    date: "18 Feb 2026",
    readTime: "7 min read",
  },
  {
    slug: "data-protection-installers",
    category: "Compliance",
    title: "Data Protection for Renewable Energy Installers",
    excerpt:
      "How to handle customer data correctly under GDPR when running an installation business — avoiding costly ICO fines.",
    date: "10 Feb 2026",
    readTime: "5 min read",
  },
];

/** Colour map for article category badges */
const CATEGORY_COLORS: Record<string, string> = {
  Funding: "bg-[#DCFCE7] text-[#166534]",
  Accreditation: "bg-[#EAF1FD] text-[#0F47A8]",
  Insurance: "bg-[#F3E8FF] text-[#7C3AED]",
  Compliance: "bg-[#FEF9C3] text-[#92400E]",
};

export default function NewsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-[#0F47A8] py-16">
        <div className="mx-auto max-w-[1240px] px-6">
          <h1 className="mb-3 text-4xl font-bold text-white">
            News &amp; Insights
          </h1>
          <p className="max-w-[520px] text-base text-[#F3F4F6]">
            Stay up to date with the latest changes to UK funding schemes,
            accreditation standards, and compliance guidance.
          </p>
        </div>
      </section>

      {/* ── Article grid ── */}
      <section className="bg-[#F9FAFB] py-16">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ARTICLES.map(({ slug, category, title, excerpt, date, readTime }) => (
              <Link
                key={slug}
                href={`/news/${slug}`}
                className="group flex flex-col overflow-hidden rounded-xl border border-[#E5E7EB] bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                {/* Article image placeholder */}
                <div className="h-44 w-full bg-[#EAF1FD]" />

                <div className="flex flex-1 flex-col p-5">
                  {/* Category badge */}
                  <span
                    className={`mb-3 inline-block self-start rounded-full px-3 py-1 text-xs font-semibold ${
                      CATEGORY_COLORS[category] ?? "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {category}
                  </span>

                  <h2 className="mb-2 text-base font-semibold leading-snug text-[#030712] group-hover:text-[#0F47A8]">
                    {title}
                  </h2>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-[#6B7280]">
                    {excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-3 text-xs text-[#9CA3AF]">
                    <span>{date}</span>
                    <span>·</span>
                    <span>{readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
