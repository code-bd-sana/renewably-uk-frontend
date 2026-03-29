import {
  ArrowRight,
  CircleCheckBig,
  ClipboardList,
  Tablet,
  User,
  Zap,
} from "lucide-react";
import { InfoCard } from "../shared/info-card";
import SectionHeader from "../shared/section-header";
import { Button } from "../ui/button";

export default function IBGCertificates() {
  const compliantData = [
    {
      title: "During PAS Audits",
      description:
        "When auditors request proof of IBG compliance, pull up your portal and generate certificates on the spot. No delays, no follow-ups, no compliance issues.",
      icon: <ClipboardList color='#0F47A8' />,
      points: [
        {
          label: "Instant proof of consumer protection compliance",
          icon: (
            <CircleCheckBig color='var(--text-primary)' className='w-4 h-4' />
          ),
        },
        {
          label: "Demonstrate professional systems to auditors",
          icon: (
            <CircleCheckBig color='var(--text-primary)' className='w-4 h-4' />
          ),
        },
        {
          label: "Email certificates directly from mobile device",
          icon: (
            <CircleCheckBig color='var(--text-primary)' className='w-4 h-4' />
          ),
        },
        {
          label: "Pass audit requirements in real-time",
          icon: (
            <CircleCheckBig color='var(--text-primary)' className='w-4 h-4' />
          ),
        },
      ],
    },
    {
      title: "Customer Handover",
      description:
        "Complete the professional customer experience by delivering IBG certificates the moment you finish installation. No waiting, exceptional service.",
      icon: <User color='#0F47A8' />,
      points: [
        {
          label: "Hand over certificates before leaving site",
          icon: (
            <CircleCheckBig color='var(--text-primary)' className='w-4 h-4' />
          ),
        },
        {
          label: "Instant email delivery to customer inbox",
          icon: (
            <CircleCheckBig color='var(--text-primary)' className='w-4 h-4' />
          ),
        },
        {
          label: "Professional impression drives referrals",
          icon: (
            <CircleCheckBig color='var(--text-primary)' className='w-4 h-4' />
          ),
        },
        {
          label: "Meet consumer protection obligations immediately",
          icon: (
            <CircleCheckBig color='var(--text-primary)' className='w-4 h-4' />
          ),
        },
      ],
    },
    {
      title: "How It Works",
      icon: <Zap color='#0F47A8' />,
      points: [
        {
          label:
            "Log into the Renewably UK Platform from any device (phone, tablet, laptop)",
          icon: <span className='text-(--text-primary) font-semibold'>1.</span>,
        },
        {
          label: "Navigate to the project requiring an IBG certificate",
          icon: <span className='text-(--text-primary) font-semibold'>2.</span>,
        },
        {
          label: "Click 'Generate IBG' - certificate created instantly",
          icon: <span className='text-(--text-primary) font-semibold'>3.</span>,
        },
        {
          label: "Emailed directly to customer, download as PDF",
          icon: <span className='text-(--text-primary) font-semibold'>4.</span>,
        },
      ],
    },
  ];

  return (
    <section className='mx-6 lg:mx-35 px-4 pt-20'>
      <SectionHeader
        title='Generate IBG Certificates On-Site in Seconds'
        subTitle='Never face delays during PAS audits or customer handovers. Create and deliver Insurance Backed Guarantee certificates instantly from your mobile device or laptop.'
        subTitleClassName='text-(--text-muted) font-medium text-[16px] max-w-210 mx-auto text-center'
      />

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center items-center gap-6 pt-15'>
        {compliantData.map((cardData, index) => {
          const isLastOddCard =
            compliantData.length % 2 === 1 &&
            index === compliantData.length - 1;

          return (
            <div
              key={index}
              className={
                isLastOddCard
                  ? "md:col-span-2 md:mx-auto md:w-[calc(50%-0.75rem)]"
                  : ""
              }>
              <InfoCard
                title={cardData.title}
                titleClassName='text-xl'
                description={cardData.description}
                descriptionClassName='max-w-170 text-base pb-4'
                icon={cardData.icon}
                iconBgClassName='bg-[#B4CDF7]'
                className='bg-[linear-gradient(180deg,#F5F8FF_0%,#DBEAFE_60%)] border border-[#E5E7EB] hover:border-[#b0b1b6] rounded-[10px]!'
                points={cardData.points}
                pointClassName='text-[#6B7280] text-base font-medium'
              />
            </div>
          );
        })}
      </div>
      <div className='flex items-center justify-center pt-6'>
        <Button className='bg-background text-white rounded-[6px] px-6 py-5 cursor-pointer text-base'>
          <Tablet color='#FFFFFF' /> Search Funding Schemes{" "}
          <ArrowRight color='#FFFFFF' className='ml-2' />
        </Button>
      </div>
    </section>
  );
}
