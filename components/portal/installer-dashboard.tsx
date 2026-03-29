import {
  Bell,
  ChartColumn,
  CircleCheckBig,
  TrendingUp,
  Zap,
} from "lucide-react";
import { InfoCard } from "../shared/info-card";
import SectionHeader from "../shared/section-header";

export default function InstallerDashboard() {
  const compliantData = [
    {
      title: "Live Project Overview",
      description:
        "See all active projects at a glance. Status indicators show which need attention, which are awaiting documents, which have pending IBG generation.",
      icon: <TrendingUp color='#0F47A8' />,
      points: [
        {
          label: "Real-time project status updates",
          icon: (
            <CircleCheckBig color='var(--text-primary)' className='w-4 h-4' />
          ),
        },
        {
          label: "Filter by status, date or customer",
          icon: (
            <CircleCheckBig color='var(--text-primary)' className='w-4 h-4' />
          ),
        },
        {
          label: "One-click access to project folders",
          icon: (
            <CircleCheckBig color='var(--text-primary)' className='w-4 h-4' />
          ),
        },
      ],
    },
    {
      title: "Smart Notifications",
      description:
        "Never miss a compliance deadline or document expiry. Automated alerts keep you informed of upcoming renewals, missing documents, pending submissions.",
      icon: <Bell color='#0F47A8' />,
      points: [
        {
          label: "Accreditation renewal reminders",
          icon: (
            <CircleCheckBig color='var(--text-primary)' className='w-4 h-4' />
          ),
        },
        {
          label: "IBG expiry warnings",
          icon: (
            <CircleCheckBig color='var(--text-primary)' className='w-4 h-4' />
          ),
        },
        {
          label: "Compliance deadline tracking",
          icon: (
            <CircleCheckBig color='var(--text-primary)' className='w-4 h-4' />
          ),
        },
      ],
    },
    {
      title: "Analytics & Reporting",
      description:
        "Track your installation volume, IBG coverage, document compliance rates. Export reports for funders, auditors or internal review.",
      icon: <ChartColumn color='#0F47A8' />,
      points: [
        {
          label: "Monthly project volume reports",
          icon: (
            <CircleCheckBig color='var(--text-primary)' className='w-4 h-4' />
          ),
        },
        {
          label: "IBG coverage statistics",
          icon: (
            <CircleCheckBig color='var(--text-primary)' className='w-4 h-4' />
          ),
        },
        {
          label: "Export data for audits",
          icon: (
            <CircleCheckBig color='var(--text-primary)' className='w-4 h-4' />
          ),
        },
      ],
    },
    {
      title: "Quick Actions",
      description:
        "Frequently used tasks accessible with one click. New project submission, IBG generation, document search — everything designed for speed.",
      icon: <Zap color='#0F47A8' />,
      points: [
        {
          label: "Submit new project in under 2 minutes",
          icon: (
            <CircleCheckBig color='var(--text-primary)' className='w-4 h-4' />
          ),
        },
        {
          label: "Generate IBG with one click",
          icon: (
            <CircleCheckBig color='var(--text-primary)' className='w-4 h-4' />
          ),
        },
        {
          label: "Bulk document upload",
          icon: (
            <CircleCheckBig color='var(--text-primary)' className='w-4 h-4' />
          ),
        },
      ],
    },
  ];

  return (
    <section className='mx-6 lg:mx-35 px-4 py-20'>
      <SectionHeader
        title='Your Installer Dashboard'
        subTitle='Everything you need at a glance'
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
