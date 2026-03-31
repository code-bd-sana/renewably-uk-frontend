import { InfoCard } from "../shared/info-card";
import { Clock, FileText, Shield } from "lucide-react";
import SectionHeader from "../shared/section-header";

export default function FundingAccess() {
  const managementData = [
    {
      title: "Streamlined Submissions",
      description:
        "Find suitable funding schemes and submit compliant projects quickly with built-in validation",
      icon: <Clock color='#0F47A8' strokeWidth={1.5} />,
    },
    {
      title: "All-in-One Platform",
      description:
        "Manage funding applications, insurance, and compliance all in one centralized portal",
      icon: <FileText color='#0F47A8' strokeWidth={1.5} />,
    },
    {
      title: "Expert Guidance",
      description:
        "Navigate eligibility requirements and application processes with dedicated support",
      icon: <Shield color='#0F47A8' strokeWidth={1.5} />,
    },
  ];
  return (
    <section className='bg-[#EAF1FD] py-15'>
      <SectionHeader title='Why Use Renewably UK for Funding Access?' />
      <div className='mx-6 lg:mx-35 px-4'>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 pt-12'>
          {managementData.map((cardData, index) => (
            <InfoCard
              key={index}
              title={cardData.title}
              titleClassName='text-2xl'
              align='center'
              description={cardData.description}
              descriptionClassName='max-w-100 text-base'
              icon={cardData.icon}
              iconBgClassName='bg-[#B4CDF7] rounded-full'
              iconWrapperClassName='w-16 h-16 [&>svg]:w-8 [&>svg]:h-8'
              className='bg-transparent rounded-[10px]! [&_ul]:w-full [&_ul]:items-start'
            />
          ))}
        </div>
      </div>
    </section>
  );
}
