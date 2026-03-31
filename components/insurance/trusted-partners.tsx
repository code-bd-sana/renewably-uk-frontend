import Image from "next/image";
import SectionHeader from "../shared/section-header";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export default function TrustedPartners() {
  const partnerImages = [
    "/home/banner-partner/bluedrop.png",
    "/home/banner-partner/ico.png",
    "/home/banner-partner/cyber.png",
    "/home/banner-partner/aws.png",
  ];
  return (
    <section className='mx-6 lg:mx-35 px-4 pt-15'>
      <SectionHeader title='Trusted Partners & Accreditations' />
      <div>
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 justify-center items-center'>
          {partnerImages.map((src, index) => (
            <div key={index} className='mx-4 md:mx-6 my-3'>
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

      <div className='pt-15'>
        <SectionHeader
          title='Ready to Access FCA-Regulated IBGs Within UK Compliance Infrastructure?'
          titleClassName='max-w-220 mx-auto'
          subTitle='Join hundreds of installers who trust Bluedrop Services for their insurance backed guarantees.'
          subTitleClassName='text-(--text-muted) font-medium text-[16px] text-center'
        />
      </div>
      <div className='flex gap-x-4 md:my-9 my-3 text-base justify-center items-center'>
        <Button className='bg-background text-white rounded-[6px] border border-(--text-muted) px-6 py-5 cursor-pointer'>
          Get Started with IBG
          <ArrowRight color='#FFFFFF' className='ml-2' />
        </Button>
        <Button className='bg-white text-(--text-primary) font-medium border-[#E5E7EB] hover:border-[#83878d] rounded-[6px] px-6 py-5 cursor-pointer'>
          Contact Us
        </Button>
      </div>
    </section>
  );
}
