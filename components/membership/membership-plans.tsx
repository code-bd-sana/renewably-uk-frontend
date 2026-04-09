import {
  ArrowRight,
  Check,
  ClipboardList,
  Lock,
  Rocket,
  Star,
  Tablet,
  X,
} from "lucide-react";
import { Button } from "../ui/button";

export default function MembershipPlans() {
  const plans = [
    {
      popular: false,
      icon: Lock,
      type: "Access",
      title: "Free",
      subTitle:
        "The simplest way to get started with Renewably, allowing you to generate Insurance Backed Guarantees without committing to a full system.",
      included: [
        "IBG ordering and generation",
        "Certificate delivery to installer (email)",
        "Single user access",
      ],
      notIncluded: [
        "No document repository",
        "No access to historical IBGs",
        "No amendments or cancellations",
        "No customer delivery (manual forwarding required)",
        "No job or property management",
        "No compliance tools or audit tracking",
        "No TrustMark submission capability",
      ],
      description:
        "Free entry point for issuing IBGs without platform functionality.",
      buttonText: "Get Started Free",
    },
    {
      popular: true,
      icon: Tablet,
      type: "Operate",
      title: "£99",
      planDuration: "per month",
      subTitle:
        "Where installers move from issuing IBGs to managing installs through a structured, professional system.",
      included: [
        "Centralised job, customer, and property management",
        "IBG document repository (searchable and accessible)",
        "Automated IBG delivery to customer",
        "Full audit traceability (who created, sent, and updated records)",
        "IBG amendments and cancellations",
        "Basic workflow and job tracking",
        "Mobile app access (job visibility, uploads, updates)",
      ],
      notIncluded: [
        "No TrustMark lodgement capability",
        "No advanced compliance tools",
        "No scheme validation or EPC insights",
      ],
      description:
        "Run your installs in a structured system with full control over IBGs and documentation.",
      buttonText: "Start Operating",
    },
    {
      popular: false,
      icon: ClipboardList,
      type: "Comply",
      title: "£299",
      planDuration: "per month",
      subTitle:
        "Where your business becomes fully audit-ready and commercially optimised.",
      included: [
        "Everything in Operate",
        "ICO-aligned data structure",
        "Full audit trail (user-level activity tracking)",
        "Scheme and trade validation",
        "Eligibility assessment across Net Zero schemes",
        "Compliance-ready document structuring",
        "Enhanced mobile app (structured data capture, compliance evidence)",
        "TrustMark Lodgements",
        "Reduced all-in cost per job",
      ],
      notIncluded: [],
      description:
        "Operate with full compliance, audit readiness, and data-driven decision making.",
      buttonText: "Go Compliant",
    },
    {
      popular: false,
      icon: Rocket,
      type: "Deliver",
      title: "£599",
      planDuration: "per month",
      subTitle:
        "The complete end-to-end solution for installers operating at scale.",
      included: [
        "Everything in Comply",
        "Direct TrustMark API integration",
        "Automated submission workflows",
        "Pre-submission validation and error prevention",
        "Real-time submission tracking",
        "Resubmission handling",
        "Bulk processing and workflow automation",
        "Advanced mobile workflows (guided installs, validation in-field)",
        "TrustMark Lodgements",
        "Lowest all-in cost per job",
      ],
      notIncluded: [],
      description:
        "Manage, validate, and submit installs at scale through a fully automated workflow.",
      buttonText: "Scale Your Business",
    },
    {
      popular: false,
      icon: Rocket,
      type: "Enterprise",
      title: "Custom",
      subTitle:
        "Designed for organizations requiring multi-team, multi-system, or high-volume integration.",
      included: [
        "Everything in Deliver",
        "Custom workflows and configuration",
        "API-first integration across internal systems",
        "White-label or partner capabilities",
        "Dedicated onboarding and support",
        "Multi-organization and role segmentation",
        "Bulk processing and workflow automation",
        "Custom pricing based on scale and requirements",
      ],
      notIncluded: [],
      description:
        "Fully integrated infrastructure for large-scale operations and partners.",
      buttonText: "Get Started Free",
    },
  ];

  return (
    <section className='mx-4 lg:mx-15 xl:mx-35 px-2 md:px-4 py-15 '>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-9'>
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`border border-[#D1D5DB] bg-white rounded-[8px] shadow-sm h-full flex flex-col overflow-hidden ${
              index < 3
                ? "lg:col-span-2"
                : index === 3
                  ? "lg:col-start-2 lg:col-span-2"
                  : "lg:col-start-4 lg:col-span-2"
            } ${plan.popular ? "relative" : ""}`}>
            <div className='bg-background min-h-60 px-5 pt-5 pb-6 text-white flex flex-col relative'>
              {plan.popular && (
                <div className='absolute top-0 right-0 z-10'>
                  <span className='inline-flex items-center gap-x-2 rounded-bl-[16px] rounded-tr-[8px] bg-[#EAF1FF] px-3 py-1 text-sm font-medium text-[#0F47A8] shadow-sm border-l border-b border-[#C7D8FF]'>
                    <Star className='w-4 h-4 text-[#0F47A8]' color='#0F47A8' />{" "}
                    Most Popular
                  </span>
                </div>
              )}
              <div className='flex items-center gap-3 mb-7'>
                <div className='w-11 h-11 rounded-[10px] bg-[#4B74BE] flex items-center justify-center'>
                  <plan.icon className='w-5 h-5 text-white' color='#FFFFFF' />
                </div>
                <p className='text-[22px] text-white font-medium'>
                  {plan.type}
                </p>
              </div>
              <h3 className='text-[32px] text-white leading-none font-medium mb-2.5 flex items-end gap-x-2'>
                {plan.title}{" "}
                {plan.planDuration && (
                  <p className='text-sm text-white mb-1 font-light'>
                    {plan.planDuration}
                  </p>
                )}
              </h3>

              <p className='text-base leading-relaxed text-[#F3F4F6]'>
                {plan.subTitle}
              </p>
            </div>

            <div className='p-5 flex h-full flex-col justify-between mt-4'>
              <div>
                <h4 className='text-[22px] font-semibold text-[#030712] mb-4'>
                  What’s Included
                </h4>
                <ul className='space-y-2 mb-7'>
                  {plan.included.map((feature, idx) => (
                    <li
                      key={idx}
                      className='flex items-start gap-2 text-[#6B7280] text-base'>
                      <Check
                        className='w-4 h-4 mt-1 text-[#1D4ED8] shrink-0'
                        color='#0F47A8'
                      />
                      <span className='text-[#6B7280] text-sm'>{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.notIncluded.length > 0 && (
                  <div>
                    <h4 className='text-[14px] font-bold text-[#111827] mb-4 uppercase'>
                      What’s Not Included
                    </h4>
                    <ul className='space-y-2 mb-6'>
                      {plan.notIncluded.map((feature, idx) => (
                        <li
                          key={idx}
                          className='flex items-start gap-2 text-[#6B7280] text-base'>
                          <X className='w-4 h-4 mt-1 shrink-0' />
                          <span className='text-[#6B7280] text-sm'>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className='bg-[linear-gradient(110deg,#F5F8FF_0%,#DBEAFE_60%)] border border-[#E5E7EB] rounded-[10px] p-4 mb-6'>
                  <p className='text-sm text-[#6B7280] leading-relaxed max-w-100'>
                    {plan.description}
                  </p>
                </div>
              </div>

              <Button className='w-full bg-background hover:bg-blue-900 text-white rounded-[8px] py-6 px-4 text-[18px] font-medium flex items-center justify-center gap-2 transition-colors cursor-pointer'>
                {plan.buttonText}
                <ArrowRight className='w-5 h-5' color='#FFFFFF' />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
