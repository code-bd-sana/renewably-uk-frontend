import {
  ChartColumn,
  Clock4,
  FileCheck,
  FileText,
  Search,
  Users,
} from "lucide-react";
import { InfoCard } from "../shared/info-card";
import SectionHeader from "../shared/section-header";

export default function CorePlatform() {
  const compliantData = [
    {
      title: "Document Repository",
      description:
        "Store all project documentation securely. Compliance certificates, customer contracts, IBG policies, installer accreditations — everything in one place, always accessible.",
      icon: <FileText color='#0F47A8' />,
    },
    {
      title: "Instant IBG Generation",
      description:
        "Create Insurance Backed Guarantees in seconds. Customer policy documents auto-deliver, certificates download instantly, records stored automatically.",
      icon: <FileCheck color='#0F47A8' />,
    },
    {
      title: "Project Tracking",
      description:
        "Monitor every installation from quote to completion. Track IBG status, compliance deadlines, document submissions and project milestones in real time.",
      icon: <ChartColumn color='#0F47A8' />,
    },
    {
      title: "Intelligent Search",
      description:
        "Find any document in seconds. Search by project, customer name, date, document type or IBG reference. Full-text search across all stored files.",
      icon: <Search color='#0F47A8' />,
    },
    {
      title: "Audit Trail & Version Control",
      description:
        "Complete visibility over who accessed what and when. Every document change logged, every version preserved, full compliance evidence maintained.",
      icon: <Clock4 color='#0F47A8' />,
    },
    {
      title: "Client Access & Sharing",
      description:
        "Share documents securely with customers, auditors or founders. Controlled permissions, time-limited access, full visibility over who sees what.",
      icon: <Users color='#0F47A8' />,
    },
  ];
  return (
    <section className='pt-12 py-12'>
      <SectionHeader
        title='How Renewably UK Platform Keeps You Compliant'
        subTitle='Purpose-built for UK installers with ICO compliance as a core design principle'
        subTitleClassName='text-(--text-muted) font-medium text-[16px] max-w-160 mx-auto text-center'
      />

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 px-6 lg:px-25 py-15'>
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
    </section>
  );
}
