import { InfoCard } from "../shared/info-card";
import SectionHeader from "../shared/section-header";
import { BadgeCheck, FileCheck, Shield } from "lucide-react";

export default function InstallersSaying() {
  const compliantData = [
    {
      title: "Time Savings",
      description: "Solar Installation Company",
      icon: <BadgeCheck color='#0F47A8' />,
      footerPrimary:
        '"We used to spend hours hunting for documents when auditors came calling. Now everything is searchable and accessible in seconds. The portal has saved us countless admin hours."',
      footerSecondary: "— M. Richardson, Director",
    },
    {
      title: "IBG Generation",
      description: "Heat Pump Specialist",
      icon: <FileCheck color='#0F47A8' />,
      footerPrimary:
        '"Instant IBG generation is a game-changer. Customers receive their insurance documentation immediately, and we can hand over certificates on-site. Hugely professional."',
      footerSecondary: "— S. Patel, Operations Manager",
    },
    {
      title: "ICO Compliance",
      description: "Multi-Technology Installer",
      icon: <Shield color='#0F47A8' />,
      footerPrimary:
        '"We had no idea we were non-compliant using Dropbox. The UK data residency guarantee gives us peace of mind, and our customers appreciate the professional approach to data protection."',
      footerSecondary: "— J. Thompson, Managing Director",
    },
  ];
  return (
    <section className='bg-background py-15 mt-15'>
      <SectionHeader
        title='What Installers Are Saying'
        titleClassName='text-white'
        subTitle='Real feedback from installers using the Renewably UK Platform'
        subTitleClassName='text-white font-medium text-[16px] max-w-120 mx-auto text-center'
      />
      <div className='mx-4 lg:mx-35 px-2 md:px-4 pt-15 '>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {compliantData.map((cardData, index) => (
            <InfoCard
              key={index}
              title={cardData.title}
              description={cardData.description}
              icon={cardData.icon}
              contentLayout='row'
              titleClassName='text-[22px] md:text-xl font-semibold text-gray-900'
              descriptionClassName='text-sm md:text-base text-gray-600'
              iconBgClassName='bg-[#B4CDF7]'
              iconWrapperClassName='w-12 h-12 md:w-14 md:h-14 [&>svg]:w-6 [&>svg]:h-6'
              className='bg-white rounded-2xl border border-gray-200 shadow-sm h-full'
              footer={
                <div className='space-y-1 '>
                  <p className='text-[15px] text-[#6B7280]'>
                    {cardData.footerPrimary}
                  </p>
                  <p className='text-base font-medium text-(--text-primary) pt-4'>
                    {cardData.footerSecondary}
                  </p>
                </div>
              }
              footerClassName='pt-6 mt-3 '
            />
          ))}
        </div>
      </div>
      <div className='pt-15'>
        <SectionHeader
          title='Join hundreds of installers building professional compliance infrastructure'
          titleClassName='text-white text-[22px]!'
          subTitle='Based on installer feedback • Results may vary'
          subTitleClassName='text-white font-light text-base max-w-120 mx-auto text-center'
        />
      </div>
    </section>
  );
}
