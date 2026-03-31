import {
  BadgeCheck,
  CircleCheckBig,
  ClipboardCheck,
  FileCheck,
  Shield,
  Star,
  Users,
} from "lucide-react";
import { InfoCard } from "../shared/info-card";
import SectionHeader from "../shared/section-header";

export default function PassAudits() {
  const essentialData = [
    {
      title: "MCS Certification",
      description:
        "Micro-generation Certification Scheme - the quality assurance standard for renewable energy installations.",
      icon: <Star color='#0F47A8' />,
      points: [
        {
          label: "Required for government funding schemes",
          icon: (
            <CircleCheckBig color='var(--text-primary)' className='w-4 h-4' />
          ),
        },
        {
          label: "Solar PV, heat pumps, battery storage",
          icon: (
            <CircleCheckBig color='var(--text-primary)' className='w-4 h-4' />
          ),
        },
        {
          label: "Annual surveillance and compliance",
          icon: (
            <CircleCheckBig color='var(--text-primary)' className='w-4 h-4' />
          ),
        },
      ],
    },
    {
      title: "TrustMark",
      description:
        "Government-endorsed quality scheme for tradespeople working in and around homes.",
      icon: <BadgeCheck color='#0F47A8' />,
      points: [
        {
          label: "Consumer protection and quality assurance",
          icon: (
            <CircleCheckBig color='var(--text-primary)' className='w-4 h-4' />
          ),
        },
        {
          label: "Required for ECO4 and other schemes",
          icon: (
            <CircleCheckBig color='var(--text-primary)' className='w-4 h-4' />
          ),
        },
        {
          label: "Enhanced business credibility",
          icon: (
            <CircleCheckBig color='var(--text-primary)' className='w-4 h-4' />
          ),
        },
      ],
    },
    {
      title: "NICEIC / NAPIT",
      description:
        "Electrical safety and competent person scheme registration for electrical installations.",
      icon: <Shield color='#0F47A8' />,
      points: [
        {
          label: "BS 7671 18th Edition compliance",
          icon: (
            <CircleCheckBig color='var(--text-primary)' className='w-4 h-4' />
          ),
        },
        {
          label: "Self-certification of electrical work",
          icon: (
            <CircleCheckBig color='var(--text-primary)' className='w-4 h-4' />
          ),
        },
        {
          label: "Regular assessment and inspection",
          icon: (
            <CircleCheckBig color='var(--text-primary)' className='w-4 h-4' />
          ),
        },
      ],
    },
    {
      title: "Gas Safe Register",
      description:
        "Legal requirement for any business carrying out gas work in the UK.",
      icon: <ClipboardCheck color='#0F47A8' />,
      points: [
        {
          label: "Mandatory for heat pump installations",
          icon: (
            <CircleCheckBig color='var(--text-primary)' className='w-4 h-4' />
          ),
        },
        {
          label: "Hybrid system qualifications",
          icon: (
            <CircleCheckBig color='var(--text-primary)' className='w-4 h-4' />
          ),
        },
        {
          label: "Annual renewal and competency checks",
          icon: (
            <CircleCheckBig color='var(--text-primary)' className='w-4 h-4' />
          ),
        },
      ],
    },
    {
      title: "HIES Membership",
      description:
        "Home Insulation & Energy Systems Quality Assured Contractors Scheme.",
      icon: <Users color='#0F47A8' />,
      points: [
        {
          label: "Consumer protection and dispute resolution",
          icon: (
            <CircleCheckBig color='var(--text-primary)' className='w-4 h-4' />
          ),
        },
        {
          label: "Insurance Backed Guarantee requirements",
          icon: (
            <CircleCheckBig color='var(--text-primary)' className='w-4 h-4' />
          ),
        },
        {
          label: "Code of Practice compliance",
          icon: (
            <CircleCheckBig color='var(--text-primary)' className='w-4 h-4' />
          ),
        },
      ],
    },
    {
      title: "RECC Membership",
      description:
        "Renewable Energy Consumer Code - consumer protection for renewable energy installations.",
      icon: <FileCheck color='#0F47A8' />,
      points: [
        {
          label: "Sales and marketing standards",
          icon: (
            <CircleCheckBig color='var(--text-primary)' className='w-4 h-4' />
          ),
        },
        {
          label: "Customer service requirements",
          icon: (
            <CircleCheckBig color='var(--text-primary)' className='w-4 h-4' />
          ),
        },
        {
          label: "Alternative dispute resolution",
          icon: (
            <CircleCheckBig color='var(--text-primary)' className='w-4 h-4' />
          ),
        },
      ],
    },
  ];
  return (
    <section className='mx-6 lg:mx-35 px-4 pt-15'>
      <SectionHeader
        title='Pass PAS Audits Instantly with On-Site IBG Generation'
        titleClassName='max-w-170 mx-auto'
        subTitle='When auditors arrive for your PAS 2030 compliance inspection, they often request evidence of Insurance Backed Guarantees for completed installations. Without instant access to IBG certificates, you face delays, follow-up requests, and potential non-compliance findings.'
        subTitleClassName='text-(--text-muted) max-w-220 mx-auto text-[18px] font-interFont'
      />

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 pt-15'>
        {essentialData.map((cardData, index) => (
          <InfoCard
            key={index}
            title={cardData.title}
            titleClassName='text-xl'
            description={cardData.description}
            descriptionClassName='max-w-170 text-base pb-4'
            icon={cardData.icon}
            iconBgClassName='bg-[#B4CDF7]'
            className='bg-white border border-[#E5E7EB] hover:border-[#b0b1b6] rounded-[10px]!'
            points={cardData.points}
            pointClassName='text-[#6B7280] text-base font-medium'
          />
        ))}
      </div>
    </section>
  );
}
