import { Award, Shield, Zap } from "lucide-react";
import { InfoCard } from "../shared/info-card";
import SectionHeader from "../shared/section-header";

export default function WhatWeDo() {
  const infoCardsData = [
    {
      title: "Insurance Distribution",
      description:
        "We provide FCA-regulated Insurance Backed Guarantees in partnership with Bluedrop Services, ensuring customers are protected even if the original installer ceases trading.",
      icon: <Shield color='#0F47A8' />,
      learnMoreHref: "/insurance-backed-guarantees",
    },
    {
      title: "Digital Platform",
      description:
        "Our ICO-compliant platform delivers secure document management, instant IBG certificate generation, and audit-ready compliance trails—all in one centralized system.",
      icon: <Zap color='#0F47A8' />,
      learnMoreHref: "/data-protection",
    },
    {
      title: "Compliance Support",
      description:
        "We guide installers through MCS accreditation, TrustMark registration, and ongoing compliance requirements, ensuring you meet—and exceed—industry standards.",
      icon: <Award color='#0F47A8' />,
      learnMoreHref: "/analytics-reporting",
    },
  ];

  return (
    <section className='mx-6 lg:mx-25 px-4 py-15'>
      <SectionHeader
        title='What We Do'
        titleClassName='max-w-[800px] mx-auto text-[#030712]'
      />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 mt-10'>
        {infoCardsData.map((cardData, index) => (
          <InfoCard
            key={index}
            title={cardData.title}
            titleClassName='text-xl'
            description={cardData.description}
            descriptionClassName='max-w-[330px] text-base'
            icon={cardData.icon}
            iconBgClassName='bg-[#B4CDF7]'
            className='bg-[linear-gradient(110deg,#F5F8FF_0%,#DBEAFE_60%)] border border-[#E5E7EB] hover:border-[#b0b1b6]'
            learnMoreHref={cardData.learnMoreHref}
          />
        ))}
      </div>
    </section>
  );
}
