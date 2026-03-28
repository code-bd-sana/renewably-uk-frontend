import { BadgeCheck, FileCheck, FolderLock, Search } from "lucide-react";
import { InfoCard } from "../shared/info-card";
import SectionHeader from "../shared/section-header";

export default function Installers() {
  const infoCardsData = [
    {
      title: "Insurance Backed Guarantees",
      description:
        "FCA-regulated insurance protection that continues even if you cease trading. Built on regulated frameworks, aligned with TrustMark standards.",
      icon: <FileCheck color='#0F47A8' />,
      learnMoreHref: "/insurance-backed-guarantees",
    },
    {
      title: "Secure ICO-Compliant Platform",
      description:
        "ICO-compliant document management, instant IBG generation, structured audit trails, and centralised compliance workflows.",
      icon: <FolderLock color='#0F47A8' />,
      learnMoreHref: "/data-protection",
    },
    {
      title: "Compliance & Accreditation",
      description:
        "Structured onboarding, data control, and audit-ready documentation that strengthens your position with funders and managing agents.",
      icon: <BadgeCheck color='#0F47A8' />,
      learnMoreHref: "/analytics-reporting",
    },
    {
      title: "Funding Opportunities",
      description:
        "Navigate £24B+ in government funding matched to your certifications. Access real-time scheme data across ECO4, BUS, and emerging programs to strengthen customer offerings.",
      icon: <Search color='#0F47A8' />,
      learnMoreHref: "/funding-opportunities",
    },
  ];

  return (
    <section className='mx-6 lg:mx-25 px-4 py-15'>
      <SectionHeader
        title='Comprehensive Infrastructure for Professional Installers'
        titleClassName='max-w-[800px] mx-auto text-[#030712]'
      />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 mt-10'>
        {infoCardsData.map((cardData, index) => (
          <InfoCard
            key={index}
            title={cardData.title}
            titleClassName='text-xl'
            description={cardData.description}
            descriptionClassName='max-w-[260px]'
            icon={cardData.icon}
            iconBgClassName='bg-[#B4CDF7]'
            className='bg-[linear-gradient(110deg,#F5F8FF_0%,#DBEAFE_60%)]'
            learnMoreHref={cardData.learnMoreHref}
          />
        ))}
      </div>
      {/*      
      <InfoCard
        icon={<BarChart2 />}
        title="Analytics & Reporting"
        description="Track your installation volume, IBG coverage..."
        points={[
          { label: "Monthly project volume reports" },
          { label: "IBG coverage statistics" },
          { label: "Export data for audits" },
        ]}
      />


      <InfoCard
        icon={<Shield />}
        title="Professional Indemnity Insurance"
        description="Provides protection against claims arising from..."
        align="center"
        cardBg="bg-white"
        iconBgClassName="bg-blue-50 text-blue-400"
      />


      <InfoCard
        icon={<Lock />}
        title="Secure & Compliant"
        description="End-to-end encrypted..."
        inverted
        points={[{ label: "GDPR compliant" }, { label: "ISO 27001 certified" }]}
      /> */}
    </section>
  );
}
