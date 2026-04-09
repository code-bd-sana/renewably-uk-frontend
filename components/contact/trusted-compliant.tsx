import Image from "next/image";
import SectionHeader from "../shared/section-header";

export default function TrustedCompliant() {
  const partnerImages = [
    { src: "/home/banner-partner/ico.png" },
    { src: "/home/banner-partner/cyber.png" },
    { src: "/home/banner-partner/aws.png" },
    { src: "/home/banner-partner/bluedrop.png" },
    {
      src: "/home/banner-partner/stripei.png",
      href: "https://climate.stripe.com/giN6qL",
    },
  ];
  return (
    <section className='mx-6 lg:mx-35 2xl:mx-85 px-4 pt-20'>
      <SectionHeader
        title='Trusted & Compliant'
        subTitle='We maintain the highest standards of data protection, security, and professional compliance.'
        subTitleClassName='text-(--text-muted) font-medium text-[16px] text-center'
      />
      <div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-center items-center mt-12'>
          {partnerImages.map((partner, index) => {
            const isLast = index === partnerImages.length - 1;
            const isOdd = partnerImages.length % 2 === 1;

            const wrapperClassName =
              isLast && isOdd
                ? "col-span-2 md:col-start-2 md:col-span-1 lg:col-auto flex justify-center mx-0 my-3"
                : "mx-4 md:mx-6 my-3";

            return (
              <div key={index} className={wrapperClassName}>
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
    </section>
  );
}
