import { CircleCheckBig, CircleX } from "lucide-react";
import { InfoCard } from "../shared/info-card";
import SectionHeader from "../shared/section-header";

export default function TimeAndImpact() {
  const pointBullet = (
    <span className='w-2.5 h-2.5 rounded-full bg-(--text-primary) block' />
  );

  const timeData = [
    {
      title: "Faster Document Retrieval",
      description: "Find any document in seconds, not hours",
      icon: "90% ",
    },
    {
      title: "Project Submission Time",
      description: "From data entry to IBG generation",
      icon: "2 min",
    },
    {
      title: "Audit-Ready Compliance",
      description: "No scrambling for documentation",
      icon: "100%",
    },
    {
      title: "Document Access",
      description: "Never wait for office hours",
      icon: "24/7",
    },
  ];

  const impactData = [
    {
      title: "Manual Process",
      icon: <CircleX color='#FFFFFF' />,
      points: [
        {
          label: "Email IBG request to admin office",
          icon: pointBullet,
        },
        {
          label: "Wait 24-48 hours for processing",
          icon: pointBullet,
        },
        {
          label: "Certificate emailed, printed, filed manually",
          icon: pointBullet,
        },
        {
          label: "Customer documents sent separately",
          icon: pointBullet,
        },
        {
          label: "No central record of project",
          icon: pointBullet,
        },
        {
          label: "Documents lost in email threads",
          icon: pointBullet,
        },
        {
          label: "Audit requests take days to fulfill",
          icon: pointBullet,
        },
      ],
    },
    {
      title: "Submit project in portal (2 minutes)",
      icon: <CircleCheckBig color='#FFFFFF' />,
      points: [
        {
          label: "Submit project in portal (2 minutes)",
          icon: pointBullet,
        },
        {
          label: "IBG generated instantly",
          icon: pointBullet,
        },
        {
          label: "Customer receives policy automatically",
          icon: pointBullet,
        },
        {
          label: "Installer downloads certificate immediately",
          icon: pointBullet,
        },
        {
          label: "IP whitelisting for sensitive accounts",
          icon: pointBullet,
        },
        {
          label: "IP whitelisting for sensitive accounts",
          icon: pointBullet,
        },
        {
          label: "IP whitelisting for sensitive accounts",
          icon: pointBullet,
        },
      ],
    },
  ];
  return (
    <section className='mx-4 lg:mx-35 px-2 md:px-4 pt-15'>
      <div>
        <SectionHeader
          title='Time Savings That Add Up'
          subTitle='Less time on administration means more time for installations Based on installer feedback and internal time studies'
          subTitleClassName='text-(--text-muted) font-medium text-[16px] max-w-120 mx-auto text-center'
        />

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 pt-12'>
          {timeData.map((card, index) => (
            <InfoCard
              key={index}
              icon={
                <span className='text-(--text-primary) font-bold text-4xl leading-none whitespace-nowrap'>
                  {card.icon}
                </span>
              }
              title={card.title}
              description={card.description}
              align='center'
              cardBg='bg-transparent text-[#1e293b]'
              iconBgClassName='bg-transparent'
              iconWrapperClassName='w-auto h-auto p-0'
              className='py-2 bg-[linear-gradient(110deg,#F5F8FF_0%,#DBEAFE_60%)] border border-[#E5E7EB] hover:border-[#b0b1b6] rounded-[10px]!'
              titleClassName='text-xl text-center'
              descriptionClassName='text-base text-[#64748B] text-center max-w-60'
            />
          ))}
        </div>
      </div>
      <div className='pt-15'>
        <SectionHeader title='Real Impact: Manual Process vs Platform' />

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 pt-15'>
          {impactData.map((cardData, index) => (
            <InfoCard
              key={index}
              title={cardData.title}
              titleClassName='text-(--text-primary) text-[22px]'
              icon={cardData.icon}
              iconBgClassName='bg-background'
              className='bg-[linear-gradient(110deg,#F5F8FF_0%,#DBEAFE_60%)] border border-[#E5E7EB] hover:border-[#b0b1b6] rounded-[10px]!'
              points={cardData.points}
              pointClassName='text-[#6B7280] text-base font-medium gap-3'
            />
          ))}
        </div>
      </div>
    </section>
  );
}
