import { CircleCheckBig, Database, FileCheck, Key, Lock } from "lucide-react";
import { InfoCard } from "../shared/info-card";
import SectionHeader from "../shared/section-header";

export default function SecurityProtection() {
  const compliantData = [
    {
      title: "256-Bit Encryption",
      description:
        "All data encrypted in transit and at rest using industry-standard AES-256 encryption. Same technology used by major banks and financial institutions.",
      icon: <Lock color='#0F47A8' />,
      points: [
        {
          label: "SSL/TLS encryption for all data transfers",
          icon: (
            <CircleCheckBig color='var(--text-primary)' className='w-4 h-4' />
          ),
        },
        {
          label: "Encrypted backups stored in multiple UK locations",
          icon: (
            <CircleCheckBig color='var(--text-primary)' className='w-4 h-4' />
          ),
        },
        {
          label: "Zero-knowledge architecture options available",
          icon: (
            <CircleCheckBig color='var(--text-primary)' className='w-4 h-4' />
          ),
        },
      ],
    },
    {
      title: "Access Control & Authentication",
      description:
        "Multi-factor authentication, role-based permissions, and granular access controls ensure only authorised personnel access sensitive data.",
      icon: <Key color='#0F47A8' />,
      points: [
        {
          label: "Two-factor authentication (2FA) available",
          icon: (
            <CircleCheckBig color='var(--text-primary)' className='w-4 h-4' />
          ),
        },
        {
          label: "Role-based access permissions",
          icon: (
            <CircleCheckBig color='var(--text-primary)' className='w-4 h-4' />
          ),
        },
        {
          label: "IP whitelisting for sensitive accounts",
          icon: (
            <CircleCheckBig color='var(--text-primary)' className='w-4 h-4' />
          ),
        },
      ],
    },
    {
      title: "UK Data Residency",
      description:
        "All data stored exclusively on UK servers with redundant backups. Full compliance with UK GDPR and Data Protection Act 2018.",
      icon: <Database color='#0F47A8' />,
      points: [
        {
          label: "Data never leaves UK jurisdiction",
          icon: (
            <CircleCheckBig color='var(--text-primary)' className='w-4 h-4' />
          ),
        },
        {
          label: "ICO registered (ZC077762)",
          icon: (
            <CircleCheckBig color='var(--text-primary)' className='w-4 h-4' />
          ),
        },
        {
          label: "Subject Access Request (SAR) tools built-in",
          icon: (
            <CircleCheckBig color='var(--text-primary)' className='w-4 h-4' />
          ),
        },
      ],
    },
    {
      title: "Complete Audit Trail",
      description:
        "Every action logged with timestamp, user ID, and IP address. Immutable audit logs provide evidence for compliance reviews and regulatory audits.",
      icon: <FileCheck color='#0F47A8' />,
      points: [
        {
          label: "Document access logs",
          icon: (
            <CircleCheckBig color='var(--text-primary)' className='w-4 h-4' />
          ),
        },
        {
          label: "Change history for all records",
          icon: (
            <CircleCheckBig color='var(--text-primary)' className='w-4 h-4' />
          ),
        },
        {
          label: "Export audit reports for regulators",
          icon: (
            <CircleCheckBig color='var(--text-primary)' className='w-4 h-4' />
          ),
        },
      ],
    },
  ];

  return (
    <section className='mx-6 lg:mx-35 px-4 pt-20'>
      <SectionHeader
        title='Security & Data Protection'
        subTitle='Bank-level encryption, ICO registration, and full GDPR compliance as standard'
        subTitleClassName='text-(--text-muted) font-medium text-[16px] max-w-160 mx-auto text-center'
      />

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 pt-15'>
        {compliantData.map((cardData, index) => (
          <InfoCard
            key={index}
            title={cardData.title}
            titleClassName='text-xl'
            description={cardData.description}
            descriptionClassName='max-w-170 text-base pb-4'
            icon={cardData.icon}
            iconBgClassName='bg-[#B4CDF7]'
            className='bg-[linear-gradient(110deg,#F5F8FF_0%,#DBEAFE_60%)] border border-[#E5E7EB] hover:border-[#b0b1b6] rounded-[10px]!'
            points={cardData.points}
            pointClassName='text-[#6B7280] text-base font-medium'
          />
        ))}
      </div>
    </section>
  );
}
