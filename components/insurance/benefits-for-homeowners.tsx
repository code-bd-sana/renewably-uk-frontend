import { Award, CircleCheckBig, FileCheck, FileText, Lock, TrendingUp } from "lucide-react";
import { InfoCard } from "../shared/info-card";
import SectionHeader from "../shared/section-header";

export default function BenefitsForHomeowners() {
  const benefitData = [
    {
      title: "Financial Security",
      description:
        "Your investment is protected even if the installer goes out of business. The insurance company covers the full cost of repairs, replacements, or completion work throughout the warranty period.",
      icon: <FileCheck color='#0F47A8' />,
    },
    {
      title: "Independent Protection",
      description:
        "Unlike standard warranties that rely on the installer remaining solvent, IBGs are backed by independent, FCA-regulated insurance companies via Bluedrop Services with proven financial stability.",
      icon: <Lock color='#0F47A8' />,
    },
    {
      title: "Long-Term Coverage",
      description:
        "Protection for 2-25 years, matching the expected lifespan of your renewable energy system. Your solar panels, heat pumps, or other installations are covered.",
      icon: <FileText color='#0F47A8' />,
    },
    {
      title: "Simple Claims Process",
      description:
        "If needed, claims are handled directly with Bluedrop Services through a straightforward process. No complex legal procedures or disputes with the original installer.",
      icon: <CircleCheckBig color='#0F47A8' />,
    },
    {
      title: "Property Value Protection",
      description:
        "Transferable guarantees can enhance property value when selling. Prospective buyers gain confidence knowing the renewable installation is fully protected.",
      icon: <TrendingUp color='#0F47A8' />,
    },
    {
      title: "Quality Assurance",
      description:
        "Installers offering IBGs must meet strict compliance standards. This ensures you're working with professional, certified installers who follow industry best practices.",
      icon: <Award color='#0F47A8' />,
    },
  ];

  return (
    <section className='mx-6 lg:mx-35 px-4 py-15'>
      <SectionHeader
        title='Benefits for Homeowners'
        subTitle='Complete peace of mind for your renewable energy investment'
        subTitleClassName='text-(--text-muted) font-medium text-[16px] max-w-210 mx-auto text-center'
      />

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 mt-10'>
        {benefitData.map((cardData, index) => (
          <InfoCard
            key={index}
            title={cardData.title}
            titleClassName='text-xl'
            description={cardData.description}
            descriptionClassName='text-base'
            icon={cardData.icon}
            iconBgClassName='bg-[#B4CDF7]'
            className='bg-[linear-gradient(110deg,#F5F8FF_0%,#DBEAFE_60%)] border border-[#E5E7EB] hover:border-[#b0b1b6] rounded-[10px]!'
          />
        ))}
      </div>
    </section>
  );
}
