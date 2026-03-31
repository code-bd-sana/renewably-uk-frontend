import { CircleCheckBig, Database, FileCheck, Key, Lock } from "lucide-react";
import { InfoCard } from "../shared/info-card";
import SectionHeader from "../shared/section-header";

export default function ComplianceAndStandard() {
  const compliantData = [
    {
      title: "FCA Regulation",
      subtitle: "Register installations instantly and generate comp",
      description:
        "Insurance Backed Guarantees are arranged through the Bluedrop Services facility, which operates under Financial Conduct Authority authorisation for its regulated insurance activities. Policies are underwritten by insurers via that facility, ensuring the highest standards of financial governance, consumer protection, and regulatory oversight.",
      icon: <Lock color='#0F47A8' />,
      points: [
        {
          label: "Full regulatory compliance and consumer protection",
          icon: (
            <CircleCheckBig color='var(--text-primary)' className='w-4 h-4' />
          ),
        },
        {
          label: "Independent financial oversight and stability requirements",
          icon: (
            <CircleCheckBig color='var(--text-primary)' className='w-4 h-4' />
          ),
        },
        {
          label: "Financial Services Compensation Scheme (FSCS) protection",
          icon: (
            <CircleCheckBig color='var(--text-primary)' className='w-4 h-4' />
          ),
        },
        {
          label: (
            <>
             Verification available via {<span className="text-(--text-primary) cursor-pointer">FCA Register</span>}
            </>
            ),
          icon: (
            <CircleCheckBig color='var(--text-primary)' className='w-4 h-4' />
          ),
        },
      ],
    },
    {
      title: "Bluedrop Partnership",
      subtitle: "Register installations instantly and generate comp",
      description:
        "Renewably UK Ltd hosts and administers access to the Insurance Backed Guarantee facility operated by Bluedrop Services Ltd. This facility has TrustMark approval and operates under FCA authorisation, providing specialist renewable energy insurance expertise with a proven track record of reliability and claims handling.",
      icon: <Key color='#0F47A8' />,
      points: [
        {
          label: "Specialist renewable energy insurance expertise",
          icon: (
            <CircleCheckBig color='var(--text-primary)' className='w-4 h-4' />
          ),
        },
        {
          label: "Instant certificate generation via platform integration",
          icon: (
            <CircleCheckBig color='var(--text-primary)' className='w-4 h-4' />
          ),
        },
        {
          label: "Streamlined claims process and support",
          icon: (
            <CircleCheckBig color='var(--text-primary)' className='w-4 h-4' />
          ),
        },
      ],
    },
    {
      title: "TrustMark Alignment",
      subtitle: "Register installations instantly and generate comp",
      description:
        "The Bluedrop Services Ltd Insurance Backed Guarantee facility has been approved by TrustMark, the government-endorsed quality scheme for tradespeople in the home improvement and retrofit sector. This approval aligns the facility with nationally recognised quality and consumer protection standards.",
      icon: <Database color='#0F47A8' />,
      points: [
        {
          label: "TrustMark-approved IBG facility for retrofit work",
          icon: (
            <CircleCheckBig color='var(--text-primary)' className='w-4 h-4' />
          ),
        },
        {
          label: "Required for many government-funded schemes",
          icon: (
            <CircleCheckBig color='var(--text-primary)' className='w-4 h-4' />
          ),
        },
        {
          label: (
            <>
              Framework details at <span className="text-(--text-primary) cursor-pointer">trustmark.org.uk</span>
            </>),
          icon: (
            <CircleCheckBig color='var(--text-primary)' className='w-4 h-4' />
          ),
        },
      ],
    },
    {
      title: "Industry Standards",
      subtitle: "MCS, PAS 2030 & PAS 2035",
      description:
        "Installers must maintain certification to the latest industry standards to qualify for our insurance backed guarantee program.",
      icon: <FileCheck color='#0F47A8' />,
      points: [
        {
          label: (
            <>
              <span className="text-bold text-black ">MCS Certification:</span> Microgeneration Certification Scheme compliance
            </>
          ),
          icon: (
            <CircleCheckBig color='var(--text-primary)' className='w-4 h-4' />
          ),
        },
        {
          label: (
            <>
              <span className="text-bold text-black ">PAS 2030:</span> Installation standards for energy efficiency measures
            </>
          ),
          icon: (
            <CircleCheckBig color='var(--text-primary)' className='w-4 h-4' />
          ),
        },
        {
          label: (
            <>
              <span className="text-bold text-black ">PAS 2035:</span> Retrofit design and installation standards
            </>),
          icon: (
            <CircleCheckBig color='var(--text-primary)' className='w-4 h-4' />
          ),
        },
      ],
    },
  ];

  return (
    <section className='mx-6 lg:mx-35 px-4 pt-20'>
      <SectionHeader
        title='Security & Data Protection'
        subTitle='Bank-level encryption, ICO registration, and full GDPR compliance as standard'
        subTitleClassName='text-(--text-muted) font-medium text-[16px] max-w-160 mx-auto text-center'
      />

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 pt-15'>
        {compliantData.map((cardData, index) => (
          <InfoCard
            key={index}
            title={cardData.title}
            titleClassName='text-xl'
            subtitle={cardData.subtitle}
            subtitleClassName="text-(--text-primary)"
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
