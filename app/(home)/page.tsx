/**
 * @fileoverview Home / Index page — matches Figma "Home" frame exactly.
 *
 * Sections (top to bottom):
 * 1. Hero — full-width solar panel image with gradient overlay + headline
 * 2. Stats bar — 3 key trust points on blue background
 * 3. Services intro — heading, body, 3 service cards
 * 4. How the Platform Works — 3-step process
 * 5. Dashboard preview CTA
 * 6. Document management section
 * 7. Join CTA — blue banner
 * 8. Accredited Partners bar
 */

import Link from "next/link";
import {
  ShieldCheck,
  Clock,
  LayoutDashboard,
  FileText,
  CheckCircle,
  Award,
  Zap,
  Users,
} from "lucide-react";

/** A single stat/trust badge shown in the hero bar */
interface StatItem {
  text: string;
}

const HERO_STATS: StatItem[] = [
  {
    text: "Hosting TrustMark approved services for the renewable energy sector, all in one place.",
  },
  {
    text: "24hr access to a Hosted Insurance Backed Guarantee facility with instant IBG generation",
  },
  {
    text: "Supports 50+ renewable energy measure categories across multiple schemes",
  },
];

/** A single service/feature card */
interface ServiceCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SERVICE_CARDS: ServiceCard[] = [
  {
    icon: <ShieldCheck className="h-6 w-6 text-[#0F47A8]" />,
    title: "Insurance Backed Guarantees",
    description:
      "Fully compliant IBG certificates generated instantly for your renewable energy installations.",
  },
  {
    icon: <Award className="h-6 w-6 text-[#0F47A8]" />,
    title: "Funding Support",
    description:
      "Access ECO4, Great British Insulation Scheme, and LA Flex funding frameworks in one place.",
  },
  {
    icon: <Zap className="h-6 w-6 text-[#0F47A8]" />,
    title: "Accreditation Management",
    description:
      "Stay compliant with TrustMark, MCS, and other industry standards from a single dashboard.",
  },
];

/** A single step in the platform workflow */
interface WorkflowStep {
  step: string;
  title: string;
  description: string;
}

const HOW_IT_WORKS: WorkflowStep[] = [
  {
    step: "01",
    title: "Create Your Account",
    description:
      "Sign up as an installer and complete your company profile with accreditation details.",
  },
  {
    step: "02",
    title: "Submit Installations",
    description:
      "Log each renewable energy installation with the required compliance documentation.",
  },
  {
    step: "03",
    title: "Generate Certificates",
    description:
      "Instantly produce IBG certificates and compliance documents for your customers.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero Section ── */}
      <section className="relative h-[520px] w-full overflow-hidden">
        {/* Background image via CSS */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1600&q=80')",
          }}
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />

        {/* Hero content */}
        <div className="relative mx-auto flex h-full max-w-[1240px] flex-col justify-center px-6">
          <div className="max-w-[600px]">
            <h1 className="mb-4 text-4xl font-bold leading-tight text-white md:text-5xl">
              Services that power a Greener Future for the United Kingdom
            </h1>
            <p className="mb-8 text-base text-[#F3F4F6]">
              Fast, and reliable services for renewable energy installation
              companies operating across the UK.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/sign-up"
                className="rounded-lg bg-[#0F47A8] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0d3d90]"
              >
                Get Started
              </Link>
              <Link
                href="/insurance"
                className="rounded-lg border border-white bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats / Trust bar ── */}
      <section className="bg-[#0F47A8] py-10">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-6 px-6 md:grid-cols-3">
          {HERO_STATS.map(({ text }) => (
            <div key={text} className="flex items-start gap-3">
              <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#4ADE80]" />
              <p className="text-sm leading-relaxed text-white">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Services intro ── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="mb-12 max-w-[600px]">
            <h2 className="mb-4 text-3xl font-bold text-[#030712]">
              Trusted Coverage for Renewable Installations
            </h2>
            <p className="text-base leading-relaxed text-[#6B7280]">
              At Renewably UK, we host and provide fully compliant services for
              renewable energy installation companies across the United Kingdom.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {SERVICE_CARDS.map(({ icon, title, description }) => (
              <div
                key={title}
                className="rounded-xl border border-[#E5E7EB] bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#EAF1FD]">
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

      {/* ── Compliance section ── */}
      <section className="bg-[#EAF1FD] py-20">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-[#030712]">
                How Renewably UK Platform Keeps You Compliant
              </h2>
              <p className="mb-6 text-base leading-relaxed text-[#6B7280]">
                Purpose-built for UK installers with ICO compliance as a core
                design principle.
              </p>
              <p className="mb-8 text-base leading-relaxed text-[#030712]">
                Stop Risking ICO Fines. Start Using Compliant Infrastructure.
              </p>
              <p className="text-sm leading-relaxed text-[#6B7280]">
                The Renewably UK Platform is designed specifically to keep
                installation companies on the right side of data protection,
                funding compliance, and installer accreditation standards.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-4">
              {[
                "Bank-level data encryption for all customer records",
                "ICO registered and fully GDPR compliant",
                "Automated audit trails for every installation",
                "Real-time compliance checks against funding rules",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#0F47A8]" />
                  <p className="text-sm text-[#030712]">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="bg-[#F9FAFB] py-20">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold text-[#030712]">
              How the Platform Works
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {HOW_IT_WORKS.map(({ step, title, description }) => (
              <div key={step} className="flex flex-col items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0F47A8] text-lg font-bold text-white">
                  {step}
                </div>
                <h3 className="text-lg font-semibold text-[#030712]">
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

      {/* ── Dashboard preview ── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="mb-12 max-w-[520px]">
            <h2 className="mb-3 text-3xl font-bold text-[#030712]">
              Your Installer Dashboard
            </h2>
            <p className="text-base text-[#6B7280]">
              Everything you need at a glance
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              {
                icon: <LayoutDashboard className="h-6 w-6 text-[#0F47A8]" />,
                title: "Submission Tracking",
                desc: "Monitor every installation submission in real-time with live status updates.",
              },
              {
                icon: <FileText className="h-6 w-6 text-[#0F47A8]" />,
                title: "Document Storage",
                desc: "Securely store and retrieve all compliance documents with intelligent organisation.",
              },
              {
                icon: <ShieldCheck className="h-6 w-6 text-[#0F47A8]" />,
                title: "Certificate Management",
                desc: "Generate, view, and share IBG certificates directly from your dashboard.",
              },
              {
                icon: <Users className="h-6 w-6 text-[#0F47A8]" />,
                title: "Team Collaboration",
                desc: "Manage multiple installers under one company account with role-based access.",
              },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="flex items-start gap-4 rounded-xl border border-[#E5E7EB] p-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#EAF1FD]">
                  {icon}
                </div>
                <div>
                  <h3 className="mb-1 text-base font-semibold text-[#030712]">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#6B7280]">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Join CTA ── */}
      <section className="bg-[#0F47A8] py-16">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-[560px]">
              <h2 className="mb-2 text-3xl font-bold text-white">
                Join the Installers Raising the Standard
              </h2>
              <p className="text-base text-[#F3F4F6]">
                Deliver Renewable Energy With Structure, Protection and
                Confidence
              </p>
            </div>
            <Link
              href="/sign-up"
              className="shrink-0 rounded-lg bg-white px-8 py-3 text-sm font-semibold text-[#0F47A8] transition-colors hover:bg-[#F3F4F6]"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>

      {/* ── Accredited Partners ── */}
      <section className="bg-[#0F47A8] border-t border-white/10 py-8">
        <div className="mx-auto max-w-[1240px] px-6">
          <p className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-white">
            Accredited Partners &amp; Industry Standards
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {["TrustMark", "MCS", "HIES", "RECC", "Competent Person"].map(
              (name) => (
                <div
                  key={name}
                  className="flex h-16 min-w-[120px] items-center justify-center rounded-lg bg-white px-4 text-xs font-semibold text-[#0F47A8]"
                >
                  {name}
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}
