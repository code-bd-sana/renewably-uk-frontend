import Image from "next/image";
import SectionHeader from "../shared/section-header";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function TrustedPartners() {
  const partnerImages = [
    { src: "/home/banner-partner/bluedrop.png" },
    { src: "/home/banner-partner/ico.png" },
    { src: "/home/banner-partner/cyber.png" },
    { src: "/home/banner-partner/aws.png" },
    {
      src: "/home/banner-partner/stripe-climate.png",
      href: "https://climate.stripe.com/giN6qL",
    },
  ];
  return (
    <section className='mx-6 lg:mx-35 px-4 pt-15'>
      <SectionHeader title='Trusted Partners & Accreditations' />
      <div>
        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 justify-center items-center'>
          {partnerImages.map((partner, index) => {
            const isLast = index === partnerImages.length - 1;
            const isOdd = partnerImages.length % 2 === 1;
            const wrapperClassName =
              isLast && isOdd
                ? "col-span-2 lg:col-auto flex justify-center mx-2 md:mx-3 my-3"
                : "flex justify-center mx-2 md:mx-3 my-3";

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

      <div className='pt-20'>
        <SectionHeader
          title='Ready to Access FCA-Regulated IBGs Within UK Compliance Infrastructure?'
          titleClassName='max-w-220 mx-auto'
          subTitle='Join hundreds of installers who trust Bluedrop Services for their insurance backed guarantees.'
          subTitleClassName='text-(--text-muted) font-medium text-[16px] text-center'
        />
      </div>
      <div className='flex gap-x-4 md:my-9 my-3 text-base justify-center items-center'>
        <Link href='/sign-up'>
          <Button className='bg-background text-white rounded-[6px] border border-(--text-muted) px-6 py-5 cursor-pointer'>
            Get Started with IBG
            <ArrowRight color='#FFFFFF' className='ml-2' />
          </Button>
        </Link>
        <Link href='/contact'>
          {" "}
          <Button className='bg-white text-(--text-primary) font-medium border-[#E5E7EB] hover:border-[#83878d] rounded-[6px] px-6 py-5 cursor-pointer'>
            Contact Us
          </Button>
        </Link>
      </div>
    </section>
  );
}
