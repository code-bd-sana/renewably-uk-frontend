import { Award, Shield, Users, Zap } from "lucide-react";
import { InfoCard } from "../shared/info-card";
import SectionHeader from "../shared/section-header";

export default function BenefitsForHomeowners() {
  const benefitData = [
    {
      title: "FCA-Regulated Insurance",
      description:
        "Our hosted Insurance Backed Guarantees are delivered through Bluedrop Services, an FCA-authorized insurance distributor, ensuring full regulatory compliance and customer protection.",
      icon: <Shield color='#0F47A8' />,
    },
    {
      title: "TrustMark & MCS Alignment",
      description:
        "Our compliance frameworks align with TrustMark consumer protection standards and MCS accreditation requirements, positioning you for funding scheme eligibility.",
      icon: <Award color='#0F47A8' />,
    },
    {
      title: "ICO-Compliant Platform",
      description:
        "Registered with the Information Commissioner's Office (ZC077762), our platform meets UK GDPR and Data Protection Act 2018 standards for secure customer data handling.",
      icon: <Zap color='#0F47A8' />,
    },
    {
      title: "Simple Claims ProcessInstaller-Focused Design",
      description:
        "Built by people who understand installation workflows, not generic software developers. Every feature solves a real problem installers face daily.",
      icon: <Users color='#0F47A8' />,
    },
  ];

  return (
    <section className='bg-background py-15'>
      <SectionHeader
        title='Benefits for Homeowners'
        titleClassName='text-white'
        subTitle='Complete peace of mind for your renewable energy investment'
        subTitleClassName='text-white font-medium text-[16px] max-w-160 mx-auto text-center'
      />
      <div className='mx-6 lg:mx-35 px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 mt-10 py-15'>
          {benefitData.map((cardData, index) => (
            <InfoCard
              key={index}
              title={cardData.title}
              titleClassName='text-xl text-white'
              description={cardData.description}
              descriptionClassName='text-white text-base max-w-150'
              icon={cardData.icon}
              iconBgClassName='bg-[#FFFFFF]'
              className='bg-[#FFFFFF33]  border border-[#E5E7EB] hover:border-[#6e6eaf] rounded-[10px]!'
            />
          ))}
        </div>
      </div>
    </section>
  );
}
