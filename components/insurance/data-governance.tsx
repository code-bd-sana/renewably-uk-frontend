import { InfoCard } from "../shared/info-card";
import SectionHeader from "../shared/section-header";
import { Award, Database, Scale } from "lucide-react";

export default function DataGovernance() {
  const compliantData = [
    {
      title: "FCA-Regulated Financial Protection",
      icon: <Scale color='#0F47A8' />,
      footerPrimary:
        "Insurance Backed Guarantees are arranged through the Bluedrop Services facility, which operates under Financial Conduct Authority authorisation. Policies are underwritten by insurers via that facility, ensuring independent financial backing.",
      footerSecondary: (
        <>
          FCA authorisation can be independently verified via the Financial
          Services Register at
          <span className='text-(--text-primary)'> register.fca.org.uk</span>
        </>
      ),
    },
    {
      title: "TrustMark-Approved Quality Framework",
      icon: <Award color='#0F47A8' />,
      footerPrimary:
        "The Bluedrop Services Insurance Backed Guarantee facility has been approved by TrustMark, aligning it with the UK's government-endorsed quality framework for work carried out in and around the home.",
      footerSecondary: (
        <>
          TrustMark approval status and framework details are available at
          <span className='text-(--text-primary)'> trustmark.org.uk</span>
        </>
      ),
    },
    {
      title: "ICO Compliance",
      icon: <Database color='#0F47A8' />,
      footerPrimary:
        "All consumer data associated with installations and Insurance Backed Guarantees is recorded and stored via UK-based data centres. Data handling processes are structured to operate in line with ICO requirements under UK GDPR and the Data Protection Act 2018.",
      footerSecondary:
        "Renewably UK Ltd is registered with the ICO under registration number ZC077762",
    },
  ];
  return (
    <section className='bg-[#EAF1FD] py-15 mt-15'>
      <SectionHeader
        title='Data Governance & UK Hosting Infrastructure'
        subTitle='Three-pillar protection: FCA regulation, TrustMark approval, and ICO-aligned UK data sovereignty'
        subTitleClassName='text-(--text-muted) font-medium text-[16px] max-w-150 mx-auto text-center'
      />
      <div className='mx-4 lg:mx-35 px-2 md:px-4 pt-15 '>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {compliantData.map((cardData, index) => (
            <InfoCard
              key={index}
              title={cardData.title}
              icon={cardData.icon}
              titleClassName='text-[20px] md:text-xl font-semibold text-gray-900 max-w-70'
              iconBgClassName='bg-[#B4CDF7]'
              iconWrapperClassName='w-10 h-10 md:w-12 md:h-12 [&>svg]:w-6 [&>svg]:h-6'
              className='bg-white rounded-2xl border border-[#D1D5DB] hover:border-[#a1a4aa] shadow-sm h-full'
              footer={
                <div className='space-y-1'>
                  <p className='text-base text-(--text-muted) pb-3'>
                    {cardData.footerPrimary}
                  </p>
                  <p className='text-base text-(--text-muted) pt-3  border-t border-[#D1D5DB]'>
                    {cardData.footerSecondary}
                  </p>
                </div>
              }
              footerClassName='pt-2 mt-1 '
            />
          ))}
        </div>
      </div>
    </section>
  );
}
