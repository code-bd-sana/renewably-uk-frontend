import { Check, CircleCheckBig, Lightbulb, Star, Zap } from "lucide-react";
import { InfoCard } from "../shared/info-card";
import SectionHeader from "../shared/section-header";
import { Button } from "../ui/button";

export default function PassAudits() {
  const essentialData = [
    {
      title: "During Your Audit",
      icon: <Star color='#0F47A8' />,
      points: [
        {
          label: "Auditor requests IBG for specific project",
          icon: <span className='block w-1 h-1 rounded-full bg-background' />,
        },
        {
          label: "Open mobile app, select project from portal",
          icon: <span className='block w-1 h-1 rounded-full bg-background' />,
        },
        {
          label: "Generate IBG certificate instantly",
          icon: <span className='block w-1 h-1 rounded-full bg-background' />,
        },
        {
          label: "Display or email certificate immediately",
          icon: <span className='block w-1 h-1 rounded-full bg-background' />,
        },
      ],
    },
    {
      title: "The Result",
      icon: <CircleCheckBig color='#0F47A8' className='w-6! h-6!' />,
      points: [
        {
          label: "Instant proof of compliance provided",
          icon: <Check color='var(--text-primary)' className='w-2 h-2' />,
        },
        {
          label: "No follow-up requests or delays",
          icon: <Check color='var(--text-primary)' className='w-2 h-2' />,
        },
        {
          label: "Auditor satisfied, audit progresses smoothly",
          icon: <Check color='var(--text-primary)' className='w-2 h-2' />,
        },
        {
          label: "Professional impression demonstrates control",
          icon: <Check color='var(--text-primary)' className='w-2 h-2' />,
        },
      ],
    },
  ];
  return (
    <section className='mx-6 lg:mx-35 px-4 py-15'>
      <SectionHeader
        title='Pass PAS Audits Instantly with On-Site IBG Generation'
        titleClassName='max-w-170 mx-auto'
        subTitle='When auditors arrive for your PAS 2030 compliance inspection, they often request evidence of Insurance Backed Guarantees for completed installations. Without instant access to IBG certificates, you face delays, follow-up requests, and potential non-compliance findings.'
        subTitleClassName='text-(--text-muted) max-w-220 mx-auto text-[18px] font-interFont'
      />
      <InfoCard
        title='Instant Compliance During Audits'
        titleClassName='text-[22px]'
        subtitle="With Renewably UK's mobile portal, you can generate and produce IBG certificates on-site in seconds during your audit. No waiting, no follow-ups, no delays."
        subtitleClassName='text-(--text-muted)! text-base'
        icon={<CircleCheckBig color='#0F47A8' className='w-8! h-8!' />}
        iconBgClassName='bg-none'
        iconWrapperClassName='hidden md:flex'
        className='bg-white md:-m-5'
      />

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 pt-4'>
        {essentialData.map((cardData, index) => (
          <InfoCard
            key={index}
            title={cardData.title}
            titleClassName='text-xl'
            icon={cardData.icon}
            iconBgClassName='bg-[#B4CDF7]'
            className='bg-[linear-gradient(110deg,#F5F8FF_0%,#DBEAFE_60%)] border border-[#E5E7EB] hover:border-[#b0b1b6] rounded-[10px]!'
            points={cardData.points}
            pointClassName='text-[#6B7280] text-base font-medium'
          />
        ))}
      </div>
      <InfoCard
        title='Why This Matters for Accreditation Bodies'
        titleClassName='text-[22px]'
        subtitle="PAS2030/2035, MCS, and TrustMark auditors need to verify that you're providing customers with required guarantees. Being able to instantly generate and show IBG certificates demonstrates robust systems, professional compliance infrastructure, and proves you're meeting consumer protection obligations in real-time"
        subtitleClassName='text-(--text-muted)! text-base'
        icon={<Lightbulb color='#0F47A8' className='w-8! h-8!' />}
        iconBgClassName='bg-none'
        iconWrapperClassName='hidden md:flex'
        className='bg-white md:-m-5'
      />
      <div className='flex items-center justify-center pt-6'>
        <Button className='bg-background text-white rounded-[6px] px-6 py-2 cursor-pointer text-base w-full max-w-64 md:max-w-100 h-auto whitespace-normal text-center leading-snug'>
          <Zap color='#FFFFFF' className='shrink-0' /> Learn More About Mobile IBG Generation
        </Button>
      </div>
    </section>
  );
}
