import { Award, FileCheck, Scale, Shield } from "lucide-react";
import { InfoCard } from "../shared/info-card";
import SectionHeader from "../shared/section-header";

export default function WhatIsIBG() {
  const compliantData = [
    {
      title: "Financial Protection",
      description:
        "IBGs protect customers against financial loss if the installer ceases trading before the warranty period expires. The insurance policy steps in to cover repair, replacement, or completion costs.",
      icon: <Shield color='#0F47A8' />,
    },
    {
      title: "Regulatory Requirement",
      description:
        "For many renewable installations, particularly those covered by TrustMark and PAS2030 / PAS2035 schemes, insurance backed guarantees are mandatory to ensure consumer protection.",
      icon: <Scale color='#0F47A8' />,
    },
    {
      title: "Independent Assurance",
      description:
        "Unlike company-backed warranties, IBGs are underwritten by independent, FCA-regulated insurance providers, ensuring the guarantee remains valid regardless of the installer's financial status.",
      icon: <Award color='#0F47A8' />,
    },
    {
      title: "Comprehensive Coverage",
      description:
        "IBGs typically cover workmanship, materials, and installation defects for periods ranging from 2 to 25 years, providing long-term peace of mind for both installers and customers.",
      icon: <FileCheck color='#0F47A8' />,
    },
  ];

  return (
    <section className='mx-6 lg:mx-35 px-4 py-15'>
      <SectionHeader
        title='What is an Insurance Backed Guarantee?'
        subTitle='An Insurance Backed Guarantee (IBG) is a financial protection mechanism that ensures homeowners are covered if their renewable energy installer goes out of business during the guarantee period.'
        subTitleClassName='text-(--text-muted) font-medium text-[16px] max-w-210 mx-auto text-center'
      />

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 mt-10'>
        {compliantData.map((cardData, index) => (
          <InfoCard
            key={index}
            title={cardData.title}
            titleClassName='text-xl'
            description={cardData.description}
            descriptionClassName='text-base'
            icon={cardData.icon}
            iconBgClassName='bg-[#B4CDF7]'
            className='bg-[linear-gradient(110deg,#F5F8FF_0%,#DBEAFE_60%)] border border-[#E5E7EB] hover:border-[#b0b1b6] rounded-[10px]!'
          />
        ))}
      </div>
    </section>
  );
}
