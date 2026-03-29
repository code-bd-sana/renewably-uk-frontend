import { CircleCheckBig } from "lucide-react";
import { InfoCard } from "../shared/info-card";
import SectionHeader from "../shared/section-header";

export default function WhyMultilayer() {
  const compliantData = [
    {
      title: "Financial Layer",
      description:
        "FCA regulation ensures independent financial protection remains valid regardless of installer solvency",
      icon: <CircleCheckBig color='#0F47A8' />,
    },
    {
      title: "Quality Layer",
      description:
        "TrustMark approval demonstrates alignment with government-endorsed consumer protection standards",
      icon: <CircleCheckBig color='#0F47A8' />,
    },
    {
      title: "Data Security Layer",
      description:
        "UK data sovereignty reduces international transfer risk and strengthens audit defensibility under UK GDPR",
      icon: <CircleCheckBig color='#0F47A8' />,
    },
  ];

  return (
    <section className='mx-6 lg:mx-35 px-4 py-15'>
      <SectionHeader title='Why Multi-Layered Protection Matters' />

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
        {compliantData.map((cardData, index) => (
          <InfoCard
            key={index}
            title={cardData.title}
            titleClassName='text-[22px]'
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
