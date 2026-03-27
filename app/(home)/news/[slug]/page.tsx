/**
 * @fileoverview News article detail page — matches Figma "News Details" frame.
 *
 * Renders a single news article with:
 * - Category badge + publish date
 * - Article heading + author info
 * - Long-form article body
 * - Related articles sidebar
 *
 * @param params.slug - The article slug from the URL
 */

import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

/** Article data type */
interface ArticleData {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  body: string;
}

/** All available articles (mirrors news listing page data) */
const ALL_ARTICLES: ArticleData[] = [
  {
    slug: "eco4-scheme-updates-2026",
    category: "Funding",
    title: "ECO4 Scheme Updates — What Installers Need to Know for 2026",
    excerpt:
      "Ofgem has published updated guidance for the ECO4 scheme. Here's everything installation companies need to act on before April.",
    date: "15 Mar 2026",
    readTime: "4 min read",
    body: `Ofgem has released updated technical guidance for the ECO4 scheme, bringing significant changes that affect eligibility, measure combinations, and reporting requirements.

The key changes include updated U-value requirements for insulation measures, revised eligibility criteria for fuel poverty households, and new requirements for pre- and post-installation inspections.

Installation companies operating under ECO4 must ensure their processes are updated to reflect these changes before the April 2026 compliance deadline.

Key Action Points:
- Review the updated technical standards document on the Ofgem website
- Update your installation quality checklists to meet new inspection requirements
- Ensure all subcontractors are briefed on the revised eligibility criteria
- Contact your ECO4 obligated supplier to confirm any scheme-specific requirements

Renewably UK's platform has already been updated to reflect the new compliance requirements, ensuring your submissions remain valid.`,
  },
  {
    slug: "trustmark-registration-guide",
    category: "Accreditation",
    title: "How to Get TrustMark Registered: A Step-by-Step Guide",
    excerpt:
      "TrustMark registration is now a prerequisite for many UK government funding schemes. This guide walks you through the process.",
    date: "8 Mar 2026",
    readTime: "6 min read",
    body: `TrustMark registration has become increasingly important for installation companies operating in the UK renewable energy sector, with many government funding schemes now requiring it as a prerequisite.

This guide walks through the registration process step by step.

Step 1: Choose a Registered Body
TrustMark operates through a network of Scheme Operators. You'll need to apply through one that covers your trade sector.

Step 2: Meet the Technical Standards
Your business must demonstrate technical competence through appropriate trade body membership, insurance certificates, and references.

Step 3: Complete the Registration Application
Submit your application with all required documentation including evidence of insurance, qualifications, and references.

Step 4: Pass the Assessment
An independent assessment of your work quality and business practices will be conducted.

Renewably UK can help ensure your documentation is complete and compliant before you submit your TrustMark application.`,
  },
  {
    slug: "ibg-certificates-explained",
    category: "Insurance",
    title: "Insurance Backed Guarantee Certificates Explained",
    excerpt:
      "What are IBG certificates, why do homeowners need them, and how does Renewably UK help you generate them instantly?",
    date: "2 Mar 2026",
    readTime: "5 min read",
    body: `Insurance Backed Guarantees (IBGs) are a critical piece of consumer protection for homeowners who invest in renewable energy installations.

What Is an IBG?
An IBG is an insurance policy that protects the homeowner's guarantee if the installation company ceases trading. If the installer goes out of business, the IBG ensures the guarantee remains valid and any warranty claims can still be honoured.

Why Are They Required?
Most UK government funding schemes — including ECO4, GBIS, and many local authority schemes — require IBG certificates as a condition of funding. They are also required by consumer protection codes such as HIES and RECC.

How Renewably UK Helps
Through our partnership with Bluedrop Services, one of the UK's leading IBG providers, Renewably UK enables installation companies to generate compliant IBG certificates instantly at the point of installation completion.

No manual paperwork, no delays — just immediate certificate generation that's stored securely and accessible for audits at any time.`,
  },
];

/** Colour map for article category badges */
const CATEGORY_COLORS: Record<string, string> = {
  Funding: "bg-[#DCFCE7] text-[#166534]",
  Accreditation: "bg-[#EAF1FD] text-[#0F47A8]",
  Insurance: "bg-[#F3E8FF] text-[#7C3AED]",
  Compliance: "bg-[#FEF9C3] text-[#92400E]",
};

interface NewsDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { slug } = await params;
  const article =
    ALL_ARTICLES.find((a) => a.slug === slug) ?? ALL_ARTICLES[0];
  const relatedArticles = ALL_ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-[#0F47A8] py-12">
        <div className="mx-auto max-w-[1240px] px-6">
          <Link
            href="/news"
            className="mb-6 flex items-center gap-2 text-sm text-[#F3F4F6] transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to News
          </Link>
          <span
            className={`mb-4 inline-block rounded-full px-3 py-1 text-xs font-semibold ${
              CATEGORY_COLORS[article.category] ?? "bg-gray-100 text-gray-600"
            }`}
          >
            {article.category}
          </span>
          <h1 className="mb-4 max-w-[760px] text-4xl font-bold text-white">
            {article.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-[#B4CDF7]">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {article.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {article.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* ── Article body ── */}
      <section className="bg-[#F9FAFB] py-16">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-12 px-6 lg:grid-cols-3">
          {/* Article content */}
          <article className="lg:col-span-2">
            <div className="rounded-xl border border-[#E5E7EB] bg-white p-8 shadow-sm">
              <p className="mb-6 text-base leading-relaxed text-[#6B7280]">
                {article.excerpt}
              </p>
              <div className="prose prose-sm max-w-none">
                {article.body.split("\n\n").map((paragraph, i) => (
                  <p
                    key={i}
                    className="mb-4 text-sm leading-relaxed text-[#030712]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </article>

          {/* Related articles */}
          <aside className="flex flex-col gap-4">
            <h2 className="text-base font-semibold text-[#030712]">
              Related Articles
            </h2>
            {relatedArticles.map(({ slug: relSlug, category, title, date }) => (
              <Link
                key={relSlug}
                href={`/news/${relSlug}`}
                className="group rounded-xl border border-[#E5E7EB] bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
              >
                <span
                  className={`mb-2 inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                    CATEGORY_COLORS[category] ?? "bg-gray-100 text-gray-600"
                  }`}
                >
                  {category}
                </span>
                <p className="mb-2 text-sm font-semibold leading-snug text-[#030712] group-hover:text-[#0F47A8]">
                  {title}
                </p>
                <p className="text-xs text-[#9CA3AF]">{date}</p>
              </Link>
            ))}
          </aside>
        </div>
      </section>
    </>
  );
}
