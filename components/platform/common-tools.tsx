import { CircleCheckBig, Shield, X } from "lucide-react";
import { InfoCard } from "../shared/info-card";
import SectionHeader from "../shared/section-header";
// mx-6 lg:mx-25 px-4 py-15
export default function CommonTools() {
  const commonToolsData = [
    {
      title: "Dropbox",
      description:
        "Data stored across global infrastructure including US-based servers. No guarantee of UK-only storage.",
      icon: <X color='#0F47A8' />,
    },
    {
      title: "Google Sheets / Google Drive",
      description:
        "Data replicated across Google's worldwide server network. Customer information potentially stored in multiple countries.",
      icon: <X color='#0F47A8' />,
    },
    {
      title: "OneDrive (Standard)",
      description:
        "Microsoft's global infrastructure means data may be stored outside UK without specific configuration.",
      icon: <X color='#0F47A8' />,
    },
    {
      title: "Generic Cloud Storage",
      description:
        "Most consumer-grade cloud platforms prioritize convenience over regulatory compliance and UK data residency.",
      icon: <X color='#0F47A8' />,
    },
  ];

  // const commonPoints = [
  //   {
  //     icon: (
  //       <CircleCheckBig
  //         className='w-5 h-5 text-(--text-primary) shrink-0 mr-3'
  //         color='#FFFFFF'
  //       />
  //     ),
  //     label: "Submit projects in seconds",
  //   },
  //   {
  //     icon: (
  //       <CircleCheckBig
  //         className='w-5 h-5 text-(--text-primary) shrink-0 mr-3'
  //         color='#FFFFFF'
  //       />
  //     ),
  //     label: "Manage your customer data",
  //   },
  //   {
  //     icon: (
  //       <CircleCheckBig
  //         className='w-5 h-5 text-(--text-primary) shrink-0 mr-3'
  //         color='#FFFFFF'
  //       />
  //     ),
  //     label: "Track your submissions",
  //   },
  //   {
  //     icon: (
  //       <CircleCheckBig
  //         className='w-5 h-5 text-(--text-primary) shrink-0 mr-3'
  //         color='#FFFFFF'
  //       />
  //     ),
  //     label: "Manage your onboarding",
  //   },
  //   {
  //     icon: (
  //       <CircleCheckBig
  //         className='w-5 h-5 text-(--text-primary) shrink-0 mr-3'
  //         color='#FFFFFF'
  //       />
  //     ),
  //     label: "Fully aligned and compliant with Industry Standards",
  //   },
  // ];

  return (
    <section className='bg-[#EAF1FD] mb-12 py-12'>
      <SectionHeader title='Common Tools That Store Data Overseas:' />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 mt-10 px-6 lg:px-25 py-15'>
        {commonToolsData.map((cardData, index) => (
          <InfoCard
            key={index}
            icon={cardData.icon}
            title={cardData.title}
            titleClassName='text-[22px]'
            description={cardData.description}
            descriptionClassName='text-base'
            cardBg='bg-white'
            className='rounded-[10px]! border border-[#E5E7EB] hover:border-[#b0b1b6]'
            iconBgClassName='bg-[#B4CDF7] text-blue-400'
          />
        ))}
      </div>

      {/* <InfoCard
        title='What You Need To Be Compliant'
        titleClassName='text-[22px] text-white font-medium'
        cardBg='bg-white'
        className='rounded-[10px]! border border-[#E5E7EB] hover:border-[#b0b1b6] mx-6 lg:mx-55 p-4 bg-background'
        icon={<Shield color='#0F47A8' />}
        iconBgClassName='bg-white w-10 h-10'
        points={commonPoints}
        pointClassName='text-white font-medium text-base'
      /> */}
    </section>
  );
}
