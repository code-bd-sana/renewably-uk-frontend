import {
  BookOpen,
  Database,
  FileText,
  Globe,
  TrendingUp,
  Zap,
} from "lucide-react";
import { InfoCard } from "../shared/info-card";
import SectionHeader from "../shared/section-header";

export default function FundingManagement() {
  const compliantData = [
    {
      title: "Automated Funding Partner Submissions",
      description:
        "Structured and automated submissions to funding partners with accurate, complete documentation aligned to scheme requirements. Reduces delays, improves approval timelines and supports audit readiness.",
      icon: <Zap color='#0F47A8' />,
    },
    {
      title: "Renewable Technology Delivery Support",
      description:
        "Platform supports compliant installation and documentation of renewable technologies including PV systems and solar thermal heating, ensuring alignment with scheme and accreditation standards.",
      icon: <Globe color='#0F47A8' />,
    },
    {
      title: "Secure Certificate & Customer Data Storage",
      description:
        "All certification and customer documentation stored in an encrypted environment. Provides long-term record retention, traceability and protection of sensitive project data.",
      icon: <Database color='#0F47A8' />,
    },
    {
      title: "Centralized Document Management",
      description:
        "Centralized document control system consolidates compliance records, technical documentation and installation evidence for consistent governance across funded projects.",
      icon: <FileText color='#0F47A8' />,
    },
    {
      title: "Simplified Audit Reporting",
      description:
        "Structured reporting framework enables straightforward audit preparation and rapid evidence retrieval. Reduces risk exposure and enhances transparency for funding partners.",
      icon: <BookOpen color='#0F47A8' />,
    },
    {
      title: "Built for Growth & Evolution",
      description:
        "Platform scales seamlessly as schemes evolve and regulatory requirements develop. Supports integration of new measures, increased project volumes and scheme transitions without disruption.",
      icon: <TrendingUp color='#0F47A8' />,
    },
  ];

  return (
    <section className='py-15'>
      <div className='mx-6 lg:mx-35 px-4 '>
        <SectionHeader
          title='Complete Funding Management Platform'
          subTitle='Renewably UK provides end-to-end support for accessing and managing government funding schemes'
          subTitleClassName='text-(--text-muted) font-medium text-[16px] max-w-160 mx-auto text-center'
        />

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
      </div>
      <div className='bg-background py-15 mt-15'>
        <SectionHeader
          title='Compliance-First Platform'
          titleClassName='text-white'
        />
        <div className='mx-6 mt-12'>
          <p className='text-white font-light text-[16px] max-w-250 mx-auto text-center'>
            Renewably UK operates a structured, compliance-led platform designed
            to align fully with industry standards, funding scheme requirements
            and regulatory frameworks. By embedding compliance controls,
            documentation governance and quality oversight into the delivery
            process, we enable high-quality installations to be delivered with
            confidence, consistency and long-term assurance.
          </p>
        </div>
      </div>
    </section>
  );
}
