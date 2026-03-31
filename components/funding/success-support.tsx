import { InfoCard } from "../shared/info-card";
import SectionHeader from "../shared/section-header";
import { CircleCheckBig } from "lucide-react";

export default function SuccessSupport() {
  const compliantData = [
    {
      title: "Automated Compliance Management",
      icon: <CircleCheckBig color='#0F47A8' />,
      description:
        "Streamlined documentation aligned with TrustMark, PAS 2030, PAS 2035, and MCS standards",
    },
    {
      title: "Secure Document Repository",
      icon: <CircleCheckBig color='#0F47A8' />,
      description:
        "Encrypted, ICO-compliant storage for all project certificates and records",
    },
    {
      title: "Funding Partner Integration",
      icon: <CircleCheckBig color='#0F47A8' />,
      description:
        "Direct submission pathways to scheme administrators and managing agents",
    },
    {
      title: "Audit-Ready Reporting",
      icon: <CircleCheckBig color='#0F47A8' />,
      description:
        "Simplified evidence retrieval and compliance reporting for inspections",
    },
  ];
  return (
    <section className='bg-[#EAF1FD] py-15 mt-15'>
      <SectionHeader title='How Renewably UK Supports Your Success' />
      <div className='mx-4 lg:mx-35 px-2 md:px-4 pt-15 '>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'>
          {compliantData.map((cardData, index) => (
            <InfoCard
              key={index}
              title={cardData.title}
              icon={cardData.icon}
              titleClassName='text-[20px] md:text-xl font-semibold text-gray-900'
              description={cardData.description}
              descriptionClassName='text-[#4A5565] text-base'
              iconBgClassName='bg-[#B4CDF7]'
              iconWrapperClassName='w-10 h-10 md:w-12 md:h-12 [&>svg]:w-6 [&>svg]:h-6'
              className='bg-white rounded-2xl border border-[#D1D5DB] hover:border-[#a1a4aa] shadow-sm h-full'
            />
          ))}
        </div>
      </div>
    </section>
  );
}
