import { InfoCard } from "../shared/info-card";
import SectionHeader from "../shared/section-header";
import { ArrowRight, ClipboardList, Shield, Users } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function ComprehensiveInsurance() {
  const comprehensiveData = [
    {
      title: "Professional Indemnity Insurance",
      icon: <Shield color='#0F47A8' />,
      description:
        "Provides protection against claims arising from professional negligence, specification errors, design miscalculations or technical advice failures — particularly relevant where installers undertake system design, retrofit specification input or technical performance assessments.",
    },
    {
      title: "Public Liability Insurance",
      icon: <Users color='#0F47A8' />,
      description:
        "Provides protection against third-party claims relating to property damage or bodily injury during installation works within occupied dwellings.",
    },
    {
      title: "Employers' Liability Insurance",
      icon: <ClipboardList color='#0F47A8' />,
      description:
        "A statutory requirement in the UK for businesses employing staff, protecting against claims from employees injured in the course of their work.",
    },
  ];
  return (
    <section className='bg-[#EAF1FD] py-15 mt-15'>
      <SectionHeader
        title='Comprehensive Insurance Protection Framework'
        subTitle='As part of the qualification and onboarding process, installers are required to maintain core liability and professional insurance coverage. Bluedrop Services provides access to these integrated protection products aligned with sector-specific risk profiles.'
        subTitleClassName='text-[#4A5565] font-medium text-[16px] max-w-200 text-center mx-4 md:mx-auto'
      />
      <div className='mx-4 lg:mx-35 px-2 md:px-4 pt-15 '>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {comprehensiveData.map((cardData, index) => (
            <InfoCard
              align='center'
              key={index}
              title={cardData.title}
              icon={cardData.icon}
              titleClassName='text-[20px] md:text-xl font-semibold text-gray-900 max-w-100'
              iconBgClassName='bg-[#B4CDF7] rounded-full'
              iconWrapperClassName='w-10 h-10 md:w-12 md:h-12 [&>svg]:w-6 [&>svg]:h-6'
              className='bg-white rounded-2xl border border-[#D1D5DB] hover:border-[#a1a4aa] shadow-sm h-full'
              description={cardData.description}
              descriptionClassName='max-w-100 text-[#4A5565]'
            />
          ))}
        </div>
      </div>
      <SectionHeader
        title='Integrated Protection Suite'
        className='mt-15 mb-8'
      />
      <div className='mx-4'>
        <p className='text-[#4A5565] font-medium text-[16px] max-w-300 mx-auto text-center'>
          These insurance products are not optional extras — they form part of
          the qualification framework required to access Insurance Backed
          Guarantee services. Installers must maintain adequate levels of
          Professional Indemnity Insurance (PI), Public Liability Insurance
          (PL), and Employers Liability Insurance (EL).
        </p>

        <p className='text-[#4A5565] font-medium text-[16px] max-w-280 mx-auto text-center mt-2'>
          Bluedrop Services verifies coverage during onboarding and can arrange
          compliant policies aligned with sector-specific risk profiles and
          minimum contractual thresholds.
        </p>
      </div>

      <div className='flex items-center justify-center pt-6'>
        <Link href='/contact'>
          {" "}
          <Button className='bg-background text-white rounded-[6px] px-6 py-5 cursor-pointer text-base'>
            Get a Non-Obligation Quote{" "}
            <ArrowRight color='#FFFFFF' className='ml-2' />
          </Button>
        </Link>
      </div>
    </section>
  );
}
