import { Bell, BookOpenIcon, Briefcase, Shield } from "lucide-react";
import { InfoCard } from "../shared/info-card";
import SectionHeader from "../shared/section-header";

export default function StayAhead() {
  const aheadData = [
    {
      title: "Government & Policy Updates",
      description:
        "Track policy changes, grant enhancements, and Net Zero initiatives as they happen. From Boiler Upgrade Scheme adjustments to ECO4 extensions, we translate government announcements into actionable insights for your business.",
      icon: <Bell color='#0F47A8' />,
    },
    {
      title: "Industry Standards & Compliance",
      description:
        "Stay compliant with evolving MCS standards, TrustMark frameworks, and FCA requirements. We monitor regulatory bodies so you're never caught off guard by certification changes or new audit protocols.",
      icon: <Shield color='#0F47A8' />,
    },
    {
      title: "Market Insights & Trends",
      description:
        "Understand market trends, installation growth data, and consumer behavior shifts. Gain strategic insights that help you position your business for long-term success in the renewable sector.",
      icon: <Briefcase color='#0F47A8' />,
    },
    {
      title: "Company News & Partnerships",
      description:
        "Discover new funding frameworks, finance partnerships, and market expansion opportunities. Be first to know about schemes that increase project viability and customer accessibility.",
      icon: <BookOpenIcon color='#0F47A8' />,
    },
  ];
  return (
    <section className='mx-6 lg:mx-25 px-4 pt-15 mb-15'>
      <SectionHeader
        title='Stay Ahead of the Curve'
        align='start'
        titleClassName='text-[#030712]'
      />
      <div className='flex flex-col gap-y-6 text-base font-medium mt-6'>
        <p className='text-(--text-muted)'>
          Renewably UK keeps you informed with the latest developments across
          four key areas that impact your business:
        </p>
        <p className='text-(--text-muted)'>
          From Government policy shifts and Net Zero targets, to funding scheme
          updates and compliance requirements — we deliver the insights you need
          to make informed decisions and stay competitive.
        </p>
      </div>
      <div className=' py-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 mt-10'>
          {aheadData.map((cardData, index) => (
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
      </div>
      <div className='bg-[linear-gradient(110deg,#F5F8FF_0%,#DBEAFE_60%)] border border-[#E5E7EB] hover:border-[#b0b1b6] rounded-[10px]! min-w-60 w-full max-w-280 p-5 md:p-14 mx-auto'>
        <SectionHeader
          title='Knowledge Is Competitive Advantage'
          titleClassName='text-[#030712]'
        />
        <div className='flex flex-col gap-y-6 text-base font-medium mt-6 max-w-210 mx-auto text-center'>
          <p className='text-(--text-muted)'>
            The renewable energy landscape evolves rapidly. Installers who stay
            informed win more contracts, maintain compliance effortlessly, and
            build stronger reputations. Renewably UK curates the information
            that matters most to your business.
          </p>
        </div>
      </div>
    </section>
  );
}
