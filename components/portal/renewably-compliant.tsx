import { Database, FileCheck, Lock, UserCheck } from "lucide-react";
import { InfoCard } from "../shared/info-card";
import SectionHeader from "../shared/section-header";

export default function RenewablyCompliant() {
  const compliantData = [
    {
      title: "100% UK Data Storage",
      description:
        "All customer data stored exclusively on servers physically located in the United Kingdom. No replication to overseas data centres. No international transfers. Your customers' data never leaves UK jurisdiction.",
      icon: <Database color='#0F47A8' />,
    },
    {
      title: "ICO Registered Platform",
      description:
        "Renewably UK is registered with the Information Commissioner's Office (ICO Registration No: ZC077762) and operates under strict UK GDPR compliance. We understand data controller obligations because we hold them ourselves.",
      icon: <FileCheck color='#0F47A8' />,
    },
    {
      title: "Enterprise-Grade Security",
      description:
        "Bank-level 256-bit encryption, two-factor authentication, role-based access controls, and complete audit trails. Everything the ICO expects to see during a compliance review.",
      icon: <Lock color='#0F47A8' />,
    },
    {
      title: "Built-In Data Subject Rights",
      description:
        'Tools to handle Subject Access Requests (SARs), data deletion requests, and data portability — all required under UK GDPR. No manual spreadsheet hunting when a customer asks "what data do you hold about me?"',
      icon: <UserCheck color='#0F47A8' />,
    },
  ];

  return (
    <section className='pt-12 mb-12 py-12 px-3'>
      <SectionHeader
        title='How Renewably UK Platform Keeps You Compliant'
        subTitle='Purpose-built for UK installers with ICO compliance as a core design principle'
        subTitleClassName='text-(--text-muted) font-medium text-[16px] max-w-160 mx-auto text-center'
      />

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 mt-10 px-6 lg:px-25 py-15'>
        {compliantData.map((cardData, index) => (
          <InfoCard
            key={index}
            title={cardData.title}
            titleClassName='text-xl'
            description={cardData.description}
            icon={cardData.icon}
            iconBgClassName='bg-[#B4CDF7]'
            className='bg-[linear-gradient(110deg,#F5F8FF_0%,#DBEAFE_60%)] border border-[#E5E7EB] rounded-[10px]!'
          />
        ))}
      </div>

      <SectionHeader
        title='Stop Risking ICO Fines. Start Using Compliant Infrastructure.'
        titleClassName='!text-[22px]'
        subTitle='The Renewably UK Platform is designed specifically to keep installation companies compliant with UK data protection law — protecting you, and protecting your customers.'
        subTitleClassName='text-(--text-muted) font-medium text-[16px] max-w-220 mx-auto text-center'
      />
    </section>
  );
}
