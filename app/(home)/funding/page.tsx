/**
 * @fileoverview Funding page — matches Figma "Funding" frame.
 *
 * Sections:
 * 1. Hero — blue banner with title
 * 2. Funding Overview — intro text
 * 3. Funding Schemes — 3 scheme cards (ECO4, GBIS, LA Flex)
 * 4. Eligibility criteria
 * 5. CTA
 */

import Link from "next/link";
import { CheckCircle, Building, Home, Users } from "lucide-react";

/** A government funding scheme card */
interface FundingScheme {
  icon: React.ReactNode;
  name: string;
  description: string;
  measures: string[];
}

const FUNDING_SCHEMES: FundingScheme[] = [
  {
    icon: <Home className="h-6 w-6 text-[#0F47A8]" />,
    name: "ECO4 (Energy Company Obligation)",
    description:
      "Obligates large energy suppliers to fund energy efficiency improvements in low-income and vulnerable households.",
    measures: [
      "External Wall Insulation",
      "Air Source Heat Pumps",
      "Solar PV",
      "Loft Insulation",
    ],
  },
  {
    icon: <Building className="h-6 w-6 text-[#0F47A8]" />,
    name: "Great British Insulation Scheme (GBIS)",
    description:
      "Targets the least energy-efficient homes in Great Britain with a single insulation measure.",
    measures: [
      "Cavity Wall Insulation",
      "Loft Insulation",
      "Solid Wall Insulation",
      "Room in Roof",
    ],
  },
  {
    icon: <Users className="h-6 w-6 text-[#0F47A8]" />,
    name: "LA Flex",
    description:
      "Local Authority Flexible Eligibility — councils can nominate households who don't meet standard ECO criteria.",
    measures: [
      "All ECO4 Eligible Measures",
      "Local Authority Approved Works",
      "Fuel Poverty Targets",
    ],
  },
];

export default function FundingPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className="relative overflow-hidden bg-[#0F47A8] py-20">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1600&q=80')",
          }}
        />
        <div className="relative mx-auto max-w-[1240px] px-6">
          <h1 className="mb-4 text-4xl font-bold text-white">
            Funding Frameworks for Renewable Installations
          </h1>
          <p className="max-w-[600px] text-base text-[#F3F4F6]">
            Access ECO4, GBIS, and LA Flex funding schemes through a single
            compliant portal.
          </p>
        </div>
      </section>

      {/* ── Overview ── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="max-w-[760px]">
            <h2 className="mb-4 text-3xl font-bold text-[#101828]">
              Compliance-First Funding Support
            </h2>
            <p className="mb-4 text-base leading-relaxed text-[#4A5565]">
              Renewably UK&apos;s services are built to align with industry and
              government funding frameworks, enabling installation companies to
              operate with full confidence across every scheme they work under.
            </p>
            <p className="text-base leading-relaxed text-[#4A5565]">
              The renewable energy market is expanding fast — but so is
              scrutiny. Funding frameworks are tightly regulated, and
              non-compliance can cost your business dearly.
            </p>
          </div>
        </div>
      </section>

      {/* ── Scheme Cards ── */}
      <section className="bg-[#F9FAFB] py-20">
        <div className="mx-auto max-w-[1240px] px-6">
          <h2 className="mb-10 text-3xl font-bold text-[#030712]">
            Funding Schemes We Support
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {FUNDING_SCHEMES.map(({ icon, name, description, measures }) => (
              <div
                key={name}
                className="flex flex-col rounded-xl border border-[#E5E7EB] bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#EAF1FD]">
                  {icon}
                </div>
                <h3 className="mb-3 text-base font-semibold text-[#030712]">
                  {name}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-[#6B7280]">
                  {description}
                </p>
                <ul className="mt-auto flex flex-col gap-2">
                  {measures.map((m) => (
                    <li key={m} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 shrink-0 text-[#0F47A8]" />
                      <span className="text-sm text-[#030712]">{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#0F47A8] py-16">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="mb-2 text-2xl font-bold text-white">
                Start Delivering Funded Installations
              </h2>
              <p className="text-base text-[#F3F4F6]">
                Access all major UK funding frameworks from one compliant
                platform.
              </p>
            </div>
            <Link
              href="/sign-up"
              className="shrink-0 rounded-lg bg-white px-8 py-3 text-sm font-semibold text-[#0F47A8] transition-colors hover:bg-[#F3F4F6]"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
