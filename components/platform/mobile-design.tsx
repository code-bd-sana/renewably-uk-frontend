"use client";

import { ArrowRight, Tablet, CircleCheckBig } from "lucide-react";
import Image from "next/image";
import { InfoCard } from "../shared/info-card";
import Mobile from "../../public/portal/mobile.png";
import { Button } from "../ui/button";
import { useState } from "react";
import { MobileAppModal } from "../shared/mobile-app-modal";

export default function MobileDesign() {
  const [mobileAppModalOpen, setMobileAppModalOpen] = useState(false);
  const platformItems = [
    { label: "iOS", sub: "iPhone & iPad" },
    { label: "Android", sub: "Phone & Tablet" },
    { label: "Desktop", sub: "Windows & Mac" },
    { label: "Web", sub: "Any Browser" },
  ];

  const accessFeatures = [
    "Upload installation photos directly from your phone",
    "Generate IBGs on-site for instant customer delivery",
    "Access documents during audits or customer meetings",
    "Secure biometric login for mobile devices",
  ];

  return (
    <section className='bg-[#B4CDF7] py-8 sm:py-10 md:py-14 lg:py-15 mt-8 sm:mt-10 md:mt-15'>
      <div className='mx-4 md:mx-6 lg:mx-35 px-2 md:px-4 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-24'>
        {/* Left Card */}
        <InfoCard
          title='Mobile-First Design'
          description='Optimized interface for touch devices. Same powerful features, streamlined for smaller screens.'
          contentLayout='row'
          titleClassName='text-xl md:text-2xl font-bold text-gray-900'
          descriptionClassName='text-base text-gray-500 max-w-100'
          icon={
            <Image
              src={Mobile}
              alt='Mobile app mockup'
              width={56}
              height={56}
              className='h-full w-full object-contain'
            />
          }
          iconBgClassName='overflow-hidden'
          iconWrapperClassName='w-14 h-14 md:w-18 md:h-18'
          className='bg-white rounded-2xl border border-gray-200 shadow-sm h-full'
          footer={
            <div className='space-y-4'>
              <InfoCard
                title='Native Mobile Apps Coming 2026'
                description='Dedicated iOS & Android applications'
                contentLayout='row'
                titleClassName='text-base sm:text-lg md:text-xl lg:text-2xl font-light text-white'
                descriptionClassName='text-xs sm:text-sm md:text-base text-white max-w-100 font-medium'
                className='bg-background rounded-2xl border border-gray-200 shadow-sm h-full [&>div]:p-3 sm:[&>div]:p-4'
                footer={
                  <Button
                    onClick={() => setMobileAppModalOpen(true)}
                    className='bg-transparent h-auto w-full justify-center text-center text-blue-200 underline text-sm hover:text-white transition-colors px-0 cursor-pointer'>
                    Click to learn more{" "}
                    <ArrowRight color='#B4CDF7' className='ml-1' />
                  </Button>
                }
                footerClassName='border-0 text-center pt-1 mt-0'
              />

              <div className='grid grid-cols-2 gap-2 md:gap-3'>
                {platformItems.map((item) => (
                  <div
                    key={item.label}
                    className='border border-[#E5E7EB] hover:border-[#adafb6] py-3 md:py-4 px-2 md:px-3 text-center bg-[#EAF1FD] rounded-[10px]'>
                    <p className='font-semibold text-gray-800 text-lg md:text-[22px]'>
                      {item.label}
                    </p>
                    <p className='text-[#6B7280] text-xs md:text-sm mt-0.5'>
                      {item.sub}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          }
          footerClassName='border-0 pt-4 mt-0 text-inherit'
        />

        {/* Right Card */}
        <InfoCard
          title='Access From Anywhere'
          description='Fully responsive portal accessible from desktop, tablet, or mobile. Work from the office, home, or on-site - your data is always available.'
          contentLayout='row'
          titleClassName='text-xl md:text-2xl font-light text-gray-900'
          descriptionClassName='text-sm md:text-base text-gray-500 font-medium'
          icon={
            <Image
              src={Mobile}
              alt='Mobile app mockup'
              width={56}
              height={56}
              className='h-full w-full object-contain'
            />
          }
          iconBgClassName='overflow-hidden'
          iconWrapperClassName='w-14 h-14 md:w-18 md:h-18'
          className='bg-transparent border border-[#E5E7EB] shadow-sm h-full'
          footer={
            <div className='space-y-4 mt-6 md:mt-10 lg:mt-16'>
              <div className='bg-background rounded-2xl border border-gray-200 shadow-sm px-4 md:px-5 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3'>
                <div className='flex items-center gap-3 min-w-0 w-full sm:w-auto'>
                  <span className='flex items-center justify-center w-14 h-14 md:w-16 md:h-16 shrink-0'>
                    <Tablet
                      color='#FFFFFF'
                      className='w-8 h-8 md:w-10 md:h-10'
                    />
                  </span>

                  <div
                    className='min-w-0 cursor-pointer'
                    onClick={() => setMobileAppModalOpen(true)}>
                    <p className='text-lg md:text-2xl font-bold text-white leading-tight'>
                      Coming Soon: Dedicated Mobile App
                    </p>
                    <p className='text-xs md:text-sm text-white mt-1'>
                      Native iOS &amp; Android apps launching 2026
                    </p>
                  </div>
                </div>

                <ArrowRight
                  color='#FFFFFF'
                  className='shrink-0 self-end sm:self-auto'
                />
              </div>

              <ul className='flex flex-col gap-3 mt-4 md:mt-9 px-1 md:px-2'>
                {accessFeatures.map((feature) => (
                  <li key={feature} className='flex items-start gap-2.5'>
                    <CircleCheckBig
                      color='#0F47A8'
                      className='w-5 h-5 shrink-0 mt-0.5'
                      strokeWidth={2.5}
                    />
                    <span className='text-[#030712] text-base font-medium'>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          }
          footerClassName='border-0 pt-2 mt-2 text-inherit'
        />
      </div>
      <MobileAppModal
        open={mobileAppModalOpen}
        onOpenChange={setMobileAppModalOpen}
      />
    </section>
  );
}
