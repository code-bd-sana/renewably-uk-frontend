import { InfoCard } from "../shared/info-card";
import SectionHeader from "../shared/section-header";

export default function AskedQuestions() {
  const questionData = [
    {
      title: "How quickly will I hear back?",
      description:
        "We aim to respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.",
    },
    {
      title: "Do I need to be MCS certified to join?",
      description:
        "While MCS certification is beneficial, we work with installers at various stages of accreditation and can support your journey.",
    },
    {
      title: "What areas do you cover?",
      description:
        "We support renewable energy installers throughout the United Kingdom, with services available nationwide.",
    },
    {
      title: "Is there a cost to join Renewably UK?",
      description:
        "Contact us to discuss your specific needs and we'll provide a transparent pricing structure tailored to your business.",
    },
  ];
  return (
    <section className='mx-6 lg:mx-45 px-4 pt-25 mb-20'>
      <SectionHeader title='Frequently Asked Questions' />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-12'>
        {questionData.map((cardData, index) => (
          <InfoCard
            key={index}
            title={cardData.title}
            titleClassName='text-[20px] md:text-[22px] font-semibold text-gray-900 max-w-100'
            className='bg-[linear-gradient(110deg,#F5F8FF_0%,#DBEAFE_60%)] border border-[#E5E7EB] hover:border-[#b0b1b6] rounded-[10px]!'
            description={cardData.description}
            descriptionClassName='max-w-162 text-[#4A5565] text-base'
          />
        ))}
      </div>
    </section>
  );
}
