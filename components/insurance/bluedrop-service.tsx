import { BadgeCheck, FileCheck, Shield, Zap } from "lucide-react";
import Image from "next/image";
import { InfoCard } from "../shared/info-card";
import Bluedrop from "../../public/insurance/bluedrop.png";

export default function BluedropService() {
  const certificationCards = [
    {
      title: "2-25 Years",
      description: "IBG Policy Coverage Period",
      icon: <Shield color='#0F47A8' />,
    },
    {
      title: "Instant",
      description: "IBG Certificate Generation",
      icon: <Zap color='#0F47A8' />,
    },
    {
      title: "Certification",
      description: "Policy Holder Certificate Submission",
      icon: <FileCheck color='#0F47A8' />,
    },
    {
      title: "100%",
      description: "Bluedrop Services - FCA Regulated",
      icon: <BadgeCheck color='#0F47A8' />,
    },
  ];

  return (
    <section className='mx-6 lg:mx-35 px-4 pt-15 mb-12'>
      <div className='flex justify-center'>
        <Image
          src={Bluedrop}
          alt='Bluedrop Services'
          className='object-contain'
          width={200}
          height={52}
          sizes='200px'
          quality={100}
          priority
        />
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 pt-5'>
        {certificationCards.map((card, index) => (
          <InfoCard
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
            align='center'
            cardBg='bg-transparent text-[#1e293b]'
            iconBgClassName='bg-[#D9E5FB] rounded-full'
            iconWrapperClassName='w-16 h-16 [&>svg]:w-8 [&>svg]:h-8'
            className="relative shadow-none border-0 rounded-none py-2 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-px after:w-0 after:bg-background after:transition-all after:duration-300 hover:after:w-14"
            titleClassName='text-[32px] text-(--text-primary) text-center'
            descriptionClassName='text-base text-[#64748B] text-center max-w-110 -mt-3'
          />
        ))}
      </div>
    </section>
  );
}
