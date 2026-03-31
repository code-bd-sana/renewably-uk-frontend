import { CircleCheckBig } from "lucide-react";
import { InfoCard } from "../shared/info-card";
import SectionHeader from "../shared/section-header";

export default function ProperAccreditation() {
  const compliantData = [
    {
      title: "Access to Funding Schemes",
      description:
        "MCS and TrustMark accreditation opens access to government-backed funding programs and grants.",
      icon: <CircleCheckBig color='#0F47A8' />,
    },
    {
      title: "Enhanced Credibility",
      description:
        "Professional accreditations build trust with customers and demonstrate commitment to quality.",
      icon: <CircleCheckBig color='#0F47A8' />,
    },
    {
      title: "Legal Compliance",
      description:
        "Stay compliant with building regulations, electrical safety standards, and consumer protection law.",
      icon: <CircleCheckBig color='#0F47A8' />,
    },
    {
      title: "Insurance & Guarantees",
      description:
        "Maintain compliant records for regulatory inspecti",
      icon: <CircleCheckBig color='#0F47A8' />,
    },
  ];

  return (
    <section className='mx-6 lg:mx-75 px-4 py-15'>
      <SectionHeader title='Benefits of Proper Accreditation' />

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
