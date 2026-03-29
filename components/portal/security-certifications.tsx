import { FileCheck, Lock, Shield } from "lucide-react";
import { InfoCard } from "../shared/info-card";
import SectionHeader from "../shared/section-header";

export default function SecurityCertifications() {
  const certificationCards = [
    {
      title: "Cyber Essentials Certified",
      description: "Government-backed cybersecurity standard",
      icon: <Shield color='#0F47A8' />,
    },
    {
      title: "ICO Registered",
      description: "Registration No: ZC077762",
      icon: <Lock color='#0F47A8' />,
    },
    {
      title: "Regular Penetration Testing",
      description: "Annual security audits by certified professionals",
      icon: <FileCheck color='#0F47A8' />,
    },
  ];

  return (
    <section className='mx-6 lg:mx-35 px-4 py-20'>
      <SectionHeader
        title='Security Certifications & Compliance'
        subTitle='Independent standards and regulatory alignment that support trust and audit readiness'
        subTitleClassName='text-(--text-muted) font-medium text-[16px] max-w-180 mx-auto text-center'
      />

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 pt-12'>
        {certificationCards.map((card, index) => (
          <InfoCard
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
            align='center'
            cardBg='bg-transparent text-[#1e293b]'
            iconBgClassName='bg-[#B4CDF7] rounded-full'
            iconWrapperClassName='w-16 h-16 [&>svg]:w-8 [&>svg]:h-8'
            className="relative shadow-none border-0 rounded-none py-2 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-px after:w-0 after:bg-background after:transition-all after:duration-300 hover:after:w-14"
            titleClassName='text-xl text-center'
            descriptionClassName='text-base text-[#64748B] text-center max-w-110'
          />
        ))}
      </div>
    </section>
  );
}
