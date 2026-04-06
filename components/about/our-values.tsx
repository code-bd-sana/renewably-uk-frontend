import { CircleCheckBig, Target, TrendingUp, Zap } from "lucide-react";
import { InfoCard } from "../shared/info-card";
import SectionHeader from "../shared/section-header";

export default function OurValues() {
  const compliantData = [
    {
      title: "Protection First",
      description:
        "Every decision we make prioritizes the protection of installers and their customers. Our hosted Insurance Backed Guarantees aren't an add-on—they're central to our entire operating model. ",
      icon: <CircleCheckBig color='#0F47A8' />,
    },
    {
      title: "Regulatory Rigour",
      description:
        "We don't just meet compliance standards—we embed them into platform workflows. From FCA oversight to ICO data protection, regulatory adherence is non-negotiable.",
      icon: <Target color='#0F47A8' />,
    },
    {
      title: "Operational Simplicity",
      description:
        "Complex infrastructure should feel effortless. Our platform turns multi-step compliance processes into simple, repeatable workflows that save time and reduce errors.",
      icon: <Zap color='#0F47A8' />,
    },
    {
      title: "Partnership Mindset",
      description:
        "Your success is our success. We grow when you grow. That alignment drives every feature we build and every support interaction we deliver.",
      icon: <TrendingUp color='#0F47A8' />,
    },
  ];

  return (
    <section className='mx-6 lg:mx-25 px-4 py-15'>
      <SectionHeader title='Our Values' />

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 mt-10'>
        {compliantData.map((cardData, index) => (
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
