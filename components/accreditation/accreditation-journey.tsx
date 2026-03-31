import { InfoCard } from "../shared/info-card";
import { ClipboardCheck, FileText, Users } from "lucide-react";
import SectionHeader from "../shared/section-header";

export default function AccreditationJourney() {
  const managementData = [
    {
      title: "Documentation Support",
      description:
        "Access templates, checklists and guidance for all major accreditation bodies and compliance requirements.",
      icon: <FileText color='#0F47A8' strokeWidth={1.5} />,
    },
    {
      title: "Compliance Tracking",
      description:
        "Track renewal dates, surveillance visits, and compliance obligations through your installer portal.",
      icon: <ClipboardCheck color='#0F47A8' strokeWidth={1.5} />,
    },
    {
      title: "Expert Guidance",
      description:
        "Get support from our team who understand the accreditation landscape and can guide you through the process.",
      icon: <Users color='#0F47A8' strokeWidth={1.5} />,
    },
  ];
  return (
    <section className='bg-background py-15'>
      <SectionHeader
        title='User Roles & Management'
        titleClassName='text-white'
        subTitle='Control who sees what with granular permission settings'
        subTitleClassName='text-white font-medium text-[16px] max-w-160 mx-auto text-center'
      />
      <div className='mx-6 lg:mx-35 px-4'>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 pt-12'>
          {managementData.map((cardData, index) => (
            <InfoCard
              key={index}
              title={cardData.title}
              titleClassName='text-2xl text-white'
              align='center'
              description={cardData.description}
              descriptionClassName='max-w-80 text-base text-white'
              icon={cardData.icon}
              iconBgClassName='bg-white rounded-full'
              iconWrapperClassName='w-16 h-16 [&>svg]:w-8 [&>svg]:h-8'
              className='bg-transparent rounded-[10px]! [&_ul]:w-full [&_ul]:items-start'
            />
          ))}
        </div>
      </div>
    </section>
  );
}
