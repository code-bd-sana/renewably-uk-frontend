/**
 * @fileoverview Accreditation page — matches Figma "Accreditation" frame.
 *
 * Sections:
 * 1. Hero — "Built on Compliance"
 * 2. Compliance-First Platform overview
 * 3. What We Support — 6 accreditation scheme cards
 * 4. CTA
 */

import Link from "next/link";
import { Award, ShieldCheck, CheckCircle, Star, Zap, Building } from "lucide-react";

/** An accreditation scheme card */
interface SchemeCard {
  icon: React.ReactNode;
  bgColor: string;
  title: string;
  description: string;
}

const SCHEME_CARDS: SchemeCard[] = [
  {
    icon: <Award className="h-6 w-6 text-[#0F47A8]" />,
    bgColor: "bg-[#EAF1FD]",
    title: "TrustMark",
    description:
      "Government-endorsed quality scheme for home improvement and maintenance work.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-[#92400E]" />,
    bgColor: "bg-[#FEF3C7]",
    title: "MCS (Microgeneration Certification Scheme)",
    description:
      "Standards-setting body for small-scale low-carbon and renewable technologies.",
  },
  {
    icon: <Star className="h-6 w-6 text-[#7C3AED]" />,
    bgColor: "bg-[#F3E8FF]",
    title: "HIES (Home Insulation & Energy Systems)",
    description:
      "Consumer code protecting homeowners who purchase renewable products.",
  },
  {
    icon: <Zap className="h-6 w-6 text-[#DC2626]" />,
    bgColor: "bg-[#FEE2E2]",
    title: "RECC (Renewable Energy Consumer Code)",
    description:
      "Consumer protection code for companies selling small-scale renewable energy.",
  },
  {
    icon: <Building className="h-6 w-6 text-[#0F47A8]" />,
    bgColor: "bg-[#EAF1FD]",
    title: "Competent Person Scheme",
    description:
      "Self-certification scheme allowing installers to self-certify their work.",
  },
  {
    icon: <CheckCircle className="h-6 w-6 text-[#065F46]" />,
    bgColor: "bg-[#D1FAE5]",
    title: "ECO4 Compliance",
    description:
      "Full compliance framework for the Energy Company Obligation scheme.",
  },
];

export default function AccreditationPage() {
  return (
    <>
      {/* ── Hero ── */}
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
            Built on Compliance
          </h1>
          <p className="max-w-[560px] text-base text-[#F3F4F6]">
            Designed to support UK renewable and insulation standards.
          </p>
        </div>
      </section>

      {/* ── Overview ── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1240px] px-6">
          <h2 className="mb-6 text-3xl font-bold text-[#101828]">
            Compliance-First Platform
          </h2>
          <p className="max-w-[760px] text-base leading-relaxed text-[#4A5565]">
            Renewably UK&apos;s services are built to align with industry and
            government accreditation standards. Every certificate, document and
            submission through our platform is designed to meet or exceed the
            requirements of the UK&apos;s leading compliance frameworks.
          </p>
        </div>
      </section>

      {/* ── What We Support ── */}
      <section className="bg-[#F9FAFB] py-20">
        <div className="mx-auto max-w-[1240px] px-6">
          <h2 className="mb-10 text-3xl font-bold text-[#030712]">
            What We Support
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SCHEME_CARDS.map(({ icon, bgColor, title, description }) => (
              <div
                key={title}
                className="rounded-xl border border-[#E5E7EB] bg-white p-6 shadow-sm"
              >
                <div
                  className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl ${bgColor}`}
                >
                  {icon}
                </div>
                <h3 className="mb-2 text-base font-semibold text-[#030712]">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-[#6B7280]">
                  {description}
                </p>
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
                Operate with Full Compliance Confidence
              </h2>
              <p className="text-base text-[#F3F4F6]">
                Join installers who use Renewably UK to stay ahead of
                accreditation requirements.
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
