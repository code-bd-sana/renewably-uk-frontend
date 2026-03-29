import {
  Clock4,
  Download,
  Funnel,
  Search,
  Upload,
  UserCheck,
} from "lucide-react";
import { InfoCard } from "../shared/info-card";
import SectionHeader from "../shared/section-header";

export default function DocumentManagement() {
  const compliantData = [
    {
      title: "Drag & Drop Upload",
      description:
        "Select multiple files or entire folders. System auto-detects file types and suggests categories.",
      icon: <Upload color='#0F47A8' />,
    },
    {
      title: "Auto-Categorization",
      description:
        "Documents automatically tagged by type: IBG certificates, compliance docs, contracts, photos, invoices.",
      icon: <Funnel color='#0F47A8' />,
    },
    {
      title: "Instant Search",
      description:
        "Full-text search across all documents. Find anything by filename, date, project, customer or content.",
      icon: <Search color='#0F47A8' />,
    },
    {
      title: "Version History",
      description:
        "Every document update saved as a new version. Restore previous versions anytime with full audit trail.",
      icon: <Clock4 color='#0F47A8' />,
    },
    {
      title: "Batch Download",
      description:
        "Download entire project folders as ZIP files. Perfect for audit submissions or offline backup.",
      icon: <Download color='#0F47A8' />,
    },
    {
      title: "Controlled Sharing",
      description:
        "Generate secure share links with expiry dates and view-only permissions. Track who accessed what.",
      icon: <UserCheck color='#0F47A8' />,
    },
  ];
  return (
    <section className='mx-6 lg:mx-35 px-4 py-12'>
      <SectionHeader
        title='Document Management That Actually Works'
        subTitle='Not just storage — intelligent organization, automatic categorization, and instant retrieval.'
        subTitleClassName='text-(--text-muted) font-medium text-[16px] max-w-100 mx-auto text-center'
      />

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 py-15'>
        {compliantData.map((cardData, index) => (
          <InfoCard
            key={index}
            title={cardData.title}
            titleClassName='text-xl'
            description={cardData.description}
            descriptionClassName='max-w-100 text-base'
            icon={cardData.icon}
            iconBgClassName='bg-[#B4CDF7]'
            className='bg-[linear-gradient(110deg,#F5F8FF_0%,#DBEAFE_60%)] border border-[#E5E7EB] hover:border-[#b0b1b6] rounded-[10px]!'
          />
        ))}
      </div>
    </section>
  );
}
