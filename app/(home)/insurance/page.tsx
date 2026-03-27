/**
 * @fileoverview Insurance page — matches Figma "Insurance" frame.
 *
 * Sections:
 * 1. Hero banner with page title
 * 2. What Is an IBG — explainer + 3 feature pills
 * 3. Why IBGs Are Essential — 4 reason cards
 * 4. Measures We Host — blue section with measure grid
 * 5. CTA banner
 */

import Link from "next/link";
import { ShieldCheck, Clock, CheckCircle, Zap, Home, Leaf } from "lucide-react";

/** A single reason card explaining why IBGs are important */
interface ReasonCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const REASON_CARDS: ReasonCard[] = [
  {
    icon: <ShieldCheck className="h-5 w-5 text-[#3C79E0]" />,
    title: "Protect Homeowners",
    description:
      "Provides financial protection if an installer ceases trading after completing work.",
  },
  {
    icon: <CheckCircle className="h-5 w-5 text-[#4ADE80]" />,
    title: "Funding Compliance",
    description:
      "Required by ECO4, GBIS and other government funding schemes for eligible measures.",
  },
  {
    icon: <Clock className="h-5 w-5 text-[#C084FC]" />,
    title: "Instant Generation",
    description:
      "Our hosted platform issues IBG certificates instantly — no waiting for manual approval.",
  },
  {
    icon: <Zap className="h-5 w-5 text-[#F97316]" />,
    title: "Audit Ready",
    description:
      "Every certificate is stored and retrievable for Ofgem audits and scheme compliance checks.",
  },
];

/** A supported renewable energy measure type */
const MEASURES: string[] = [
  "Air Source Heat Pumps",
  "Solar PV",
  "Solar Thermal",
  "Ground Source Heat Pumps",
  "External Wall Insulation",
  "Cavity Wall Insulation",
  "Loft Insulation",
  "Room in Roof Insulation",
  "Underfloor Insulation",
  "Smart Heating Controls",
  "Biomass Boilers",
  "Wind Turbines",
];

export default function InsurancePage() {
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
            Insurance Backed Guarantees for Renewable Installations
          </h1>
          <p className="max-w-[600px] text-base text-[#F3F4F6]">
            Protecting renewable energy installations with compliant,
            insurance-backed guarantee certificates issued instantly.
          </p>
        </div>
      </section>

      {/* ── What Is an IBG ── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-[#030712]">
                What Is an Insurance Backed Guarantee?
              </h2>
              <p className="mb-4 text-base leading-relaxed text-[#6B7280]">
                An Insurance Backed Guarantee (IBG) protects homeowners if a
                renewable energy installer ceases trading after completing work,
                ensuring the guarantee remains valid.
              </p>
              <p className="text-base leading-relaxed text-[#030712]">
                Renewably UK hosts Bluedrop Services IBG&apos;s that meet the
                UK Government&apos;s requirements and are accepted by Ofgem,
                TrustMark and all major funding schemes.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { color: "bg-[#3C79E0]", text: "Fully compliant with Ofgem and TrustMark requirements" },
                { color: "bg-[#4ADE80]", text: "Hosted by Bluedrop Services — a leading IBG provider" },
                { color: "bg-[#C084FC]", text: "Generated instantly on installation completion" },
              ].map(({ color, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <div className={`mt-1.5 h-3 w-3 shrink-0 rounded-full ${color}`} />
                  <p className="text-sm text-[#030712]">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Why IBGs Are Essential ── */}
      <section className="bg-[#F9FAFB] py-20">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="mb-12">
            <h2 className="mb-3 text-3xl font-bold text-[#030712]">
              Why IBGs Are Essential
            </h2>
            <p className="max-w-[560px] text-base text-[#6B7280]">
              Insurance-backed guarantees are critical for renewable
              installations operating under government funding schemes.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {REASON_CARDS.map(({ icon, title, description }) => (
              <div
                key={title}
                className="rounded-xl border border-[#E5E7EB] bg-white p-6 shadow-sm"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#F3F4F6]">
                  {icon}
                </div>
                <h3 className="mb-2 text-sm font-semibold text-[#030712]">
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

      {/* ── Measures We Host ── */}
      <section className="bg-[#0F47A8] py-20">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="mb-10">
            <h2 className="mb-3 text-3xl font-bold text-white">
              Measures We Host
            </h2>
            <p className="max-w-[520px] text-base text-[#F3F4F6]">
              Comprehensive coverage for renewable energy installations, provided
              by leading UK IBG specialists.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {MEASURES.map((measure) => (
              <div
                key={measure}
                className="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-3"
              >
                <CheckCircle className="h-4 w-4 shrink-0 text-[#4ADE80]" />
                <span className="text-sm text-white">{measure}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1240px] px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#030712]">
            Ready to Start Generating IBG Certificates?
          </h2>
          <p className="mx-auto mb-8 max-w-[480px] text-base text-[#6B7280]">
            Join hundreds of UK installers using Renewably UK to manage their
            compliance documentation.
          </p>
          <Link
            href="/sign-up"
            className="inline-block rounded-lg bg-[#0F47A8] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0d3d90]"
          >
            Get Started Free
          </Link>
        </div>
      </section>
    </>
  );
}
