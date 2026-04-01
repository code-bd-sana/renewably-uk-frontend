import Image from "next/image";
import SectionHeader from "../shared/section-header";

export default function TrustedCompliant() {
  const partnerImages = [
    "/home/banner-partner/ico.png",
    "/home/banner-partner/cyber.png",
    "/home/banner-partner/aws.png",
    "/home/banner-partner/bluedrop.png",
  ];
  return (
    <section className='mx-6 lg:mx-85 px-4 pt-20'>
      <SectionHeader
        title='Trusted & Compliant'
        subTitle='We maintain the highest standards of data protection, security, and professional compliance.'
        subTitleClassName='text-(--text-muted) font-medium text-[16px] text-center'
      />
      <div>
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 justify-center items-center mt-12'>
          {partnerImages.map((src, index) => (
            <div key={index}>
              <Image
                src={src}
                alt={`Partner ${index + 1}`}
                width={140}
                height={72}
                className='w-40 h-22 object-contain'
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
