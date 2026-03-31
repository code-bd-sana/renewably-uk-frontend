import Image from "next/image";
import { Button } from "../ui/button";

const HomeBanner = () => {
  return (
    <section className='relative w-full min-h-svh overflow-hidden'>
      <Image
        src='/home/banner.png'
        alt='Renewable energy installation'
        priority
        fill
        unoptimized
        sizes='100vw'
        className='object-cover object-center'
      />

      {/* Improves text readability while keeping the image visible */}
      <div className='absolute inset-0 bg-linear-to-r from-black/18 via-black/15 to-black/10' />

      <div className='relative z-10 min-h-svh flex items-start'>
        <div
          className='
            pt-54 sm:pt-58 lg:pt-60
            pl-6 sm:pl-10 lg:pl-18
            max-w-full sm:max-w-180 lg:max-w-245
          '>
          {["Powering the Future", "of Renewable Installation"].map(
            (line, index) => (
              <p
                key={index}
                className={`
                text-white
                font-bold
                leading-[1.15]
                ${index === 0 ? "mb-1 sm:mb-2" : "mb-5 sm:mb-6"}
                text-[42px]
                sm:text-[52px]
                lg:text-[64px]
                max-w-200
              `}>
                {line}
              </p>
            ),
          )}
          <div
            className='
              text-white
              leading-[1.7]
              text-[16px]
              sm:text-[17px]
              lg:text-[22px]
              max-w-full sm:max-w-90 lg:max-w-200
              space-y-4 p-1
            '>
            <p className='text-white'>
              Protect Your Customers. Strengthen Your Reputation. Scale With
              Confidence.
            </p>
            <ul className=' text-white marker:text-white [&>li]:text-white'>
              <li>The renewable energy market is accelerating.</li>
              <li>Funding frameworks are tightening.</li>
              <li>Consumer expectations are rising.</li>
              <li>Regulatory scrutiny is increasing.</li>
            </ul>
            <p className='text-white'>
              In this environment, professionalism is no longer optional — it’s
              a competitive advantage.
            </p>
          </div>
          <div className='flex gap-x-4 md:my-9 my-3 text-base'>
            <Button className='bg-background text-white rounded-[6px] border border-(--text-muted) px-6 py-5 cursor-pointer'>
              Get Started Today
            </Button>
            <Button className='bg-white text-(--text-primary) rounded-[6px] px-6 py-5 cursor-pointer'>
              How It Works
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
