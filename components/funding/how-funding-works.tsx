import Image from "next/image";
import { InfoCard } from "../shared/info-card";
import SectionHeader from "../shared/section-header";

export default function HowFundingWorks() {
  const fundingData = [
    {
      title: "Identify Schemes",
      icon: 1,
      description:
        "Search by measures or browse all 13 schemes to find the best funding opportunities for your projects",
    },
    {
      title: "Submit Applications",
      icon: 2,
      description:
        "Automated validation ensures your applications meet all scheme requirements before submission",
    },
    {
      title: "Manage Documentation",
      icon: 3,
      description:
        "Centralized storage of all compliance certificates, technical records and customer documentation",
    },
    {
      title: "Receive Funding",
      icon: 4,
      description:
        "Track approval status and receive payments aligned with scheme delivery structures and milestones",
    },
  ];
  const partnerImages = [
    { src: "/home/banner-partner/ico.png" },
    { src: "/home/banner-partner/cyber.png" },
    { src: "/home/banner-partner/aws.png" },
    { src: "/home/banner-partner/bluedrop.png" },
    {
      src: "/home/banner-partner/stripe-climate.png",
      href: "https://climate.stripe.com/giN6qL",
    },
  ];
  return (
    <section>
      <div className='py-15'>
        <SectionHeader title='How Funding Works' />
        <div className='mx-4 lg:mx-35 px-2 md:px-4 pt-15 '>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {fundingData.map((cardData, index) => (
              <InfoCard
                align='center'
                key={index}
                title={cardData.title}
                icon={cardData.icon}
                titleClassName='text-[20px] md:text-[22px] font-semibold text-gray-900 max-w-100'
                iconBgClassName='bg-[#B4CDF7] rounded-full'
                iconWrapperClassName='w-10 h-10 md:w-12 md:h-12 [&>svg]:w-6 [&>svg]:h-6 text-2xl text-(--text-primary) font-bold'
                className='bg-white rounded-2xl border border-[#D1D5DB] hover:border-[#a1a4aa] shadow-sm h-full'
                description={cardData.description}
                descriptionClassName='max-w-72 text-[#4A5565] text-base'
              />
            ))}
          </div>
        </div>
      </div>
      <div className='mx-6 lg:mx-85 px-4 pt-20'>
        <SectionHeader title='Trusted Infrastructure & Compliance Partners' />
        <div>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-center items-center mt-12'>
            {partnerImages.map((partner, index) => {
              const isLast = index === partnerImages.length - 1;
              const isOdd = partnerImages.length % 2 === 1;

              // If odd number of logos, make the last item span the full row on small
              // screens and start in the middle column on md so it appears centered.
              const lastItemClasses =
                isLast && isOdd
                  ? "col-span-2 md:col-start-2 md:col-span-1 lg:col-auto flex justify-center mx-0 my-3"
                  : "mx-4 md:mx-6 my-3";

              return (
                <div key={index} className={lastItemClasses}>
                  {partner.href ? (
                    <a
                      href={partner.href}
                      target='_blank'
                      rel='noreferrer'
                      aria-label={`Open partner link for Partner ${index + 1}`}>
                      <Image
                        src={partner.src}
                        alt={`Partner ${index + 1}`}
                        width={140}
                        height={72}
                        className='w-40 h-22 object-contain'
                      />
                    </a>
                  ) : (
                    <Image
                      src={partner.src}
                      alt={`Partner ${index + 1}`}
                      width={140}
                      height={72}
                      className='w-40 h-22 object-contain'
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
