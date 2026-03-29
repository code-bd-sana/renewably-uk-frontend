import { InfoCard } from "../shared/info-card";
import SectionHeader from "../shared/section-header";
import { ClipboardList, Shield } from "lucide-react";

export default function WhoWeAre() {
  const aboutData = [
    {
      title: "Registered Company",
      icon: <ClipboardList color='#0F47A8' />,
      points: [
        {
          label: "Renewably UK Ltd",
        },
        {
          label: "Company No: 16076081",
        },
        {
          label: "Registered in England & Wales",
        },
      ],
    },
    {
      title: "Data Protection",
      icon: <Shield color='#0F47A8' />,
      points: [
        {
          label: "ICO Registration: ZC077762",
        },
        {
          label: "Fully compliant with Data Protection Act 2018",
        },
        {
          label: "UK GDPR certified",
        },
      ],
    },
  ];
  return (
    <section className='mx-6 lg:mx-25 px-4 pt-15'>
      <SectionHeader title='Who We Are' titleClassName='text-[#030712]' />
      <div className='flex flex-col gap-y-6 text-base font-medium max-w-395 pt-4'>
        <p className='text-(--text-muted) text-[16px]'>
          Renewably UK is a compliance and insurance infrastructure provider
          dedicated to the renewable energy installation sector. With over a
          decade of experience in the renewable energy sector, we operate at the
          intersection of regulatory compliance, financial protection, and
          digital platform technology—delivering the professional framework
          installers need to compete in an increasingly demanding market.
        </p>
        <p className='text-(--text-muted) text-[16px]'>
          Registered in England & Wales (Company No: 16076081), we are committed
          to supporting the UK’s transition to Net Zero by equipping installers
          with Insurance Backed Guarantees, ICO-compliant document management,
          and structured accreditation pathways that meet FCA, TrustMark, and
          MCS standards.
        </p>
      </div>
      <div className='xl:mx-69 px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 pt-15'>
          {aboutData.map((cardData, index) => (
            <InfoCard
              key={index}
              title={cardData.title}
              titleClassName='text-xl'
              icon={cardData.icon}
              iconBgClassName='bg-[#B4CDF7]'
              className='bg-[linear-gradient(110deg,#F5F8FF_0%,#DBEAFE_60%)] border border-[#E5E7EB] hover:border-[#b0b1b6] rounded-[10px]!'
              points={cardData.points}
              pointClassName='text-[#6B7280] text-base font-medium'
              pointIconClassName='hidden'
            />
          ))}
        </div>
      </div>
    </section>
  );
}
