import Link from "next/link";
import { ArrowRight, Check, Shield, Zap } from "lucide-react";
import Image from "next/image";

export default function RenewablyApi() {
  return (
    <section className='bg-[#D9E5FB]'>
      <div className='mx-4 md:mx-6 lg:mx-24 xl:mx-35 px-2 md:px-4 py-8 md:py-12'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-10 items-stretch'>
          {/* Left Column */}
          <div className='w-full h-full flex flex-col'>
            <div className='flex items-start gap-4'>
              <div className='flex flex-row items-start gap-4'>
                {/* ICON */}
                <span className='flex items-center justify-center w-14 h-14 rounded-[12px] bg-[#B4CDF7] text-[#0F47A8]'>
                  <Zap className='w-7 h-7' color='#0F47A8' />
                </span>
                {/* TEXT */}
                <div className='flex flex-col!'>
                  <div className='flex flex-row items-center gap-3'>
                    <h3 className='text-[32px] leading-none font-semibold text-[#111827]'>
                      Renewably API
                    </h3>
                    <span className='rounded-[8px] bg-[#0F47A8] px-2.5 py-1 text-sm font-medium text-white leading-none'>
                      Optional Add-On
                    </span>
                  </div>
                  <p className='text-sm pt-2 leading-relaxed text-[#364153] max-w-175'>
                    Connect your internal systems, CRM, or third-party platforms
                    directly into Renewably.
                  </p>
                </div>
              </div>
            </div>

            <div className='mt-7 inline-flex items-center gap-2 rounded-[10px] bg-[#F8FAFC] px-3 py-1.5 max-w-90'>
              <Shield className='w-4 h-4' color='#0F47A8' />
              <span className='text-sm text-[#030712]'>
                Active membership required (Comply or above)
              </span>
            </div>

            <h4 className='mt-8 text-sm font-semibold uppercase text-[#111827] tracking-wide'>
              API Capabilities
            </h4>

            <ul className='mt-4 space-y-3'>
              {[
                "IBG creation via API",
                "EPC and property data access",
                "Scheme validation",
                "Workflow automation",
                "Real-time data exchange",
              ].map((item) => (
                <li
                  key={item}
                  className='flex items-start gap-3 text-[#364153]! text-sm'>
                  <Check className='w-4 h-4 mt-1 shrink-0' color='#0F47A8' />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className='mt-7 bg-[linear-gradient(110deg,#F5F8FF_0%,#DBEAFE_60%)] shadow-sm border border-[#E5E7EB] rounded-[10px] px-4 p-2 max-w-190'>
              <p className='text-sm text-[#030712] leading-relaxed'>
                Embed Renewably into your existing systems for fully connected
                operations.
              </p>
            </div>

            <Link
              href='/contact'
              className='mt-15 inline-flex items-center gap-2 rounded-[8px] bg-[#0F47A8] px-7 py-3 text-white text-base font-medium hover:bg-[#0b3a8c] transition-colors max-w-75'>
              Request API Integration
              <ArrowRight className='w-5 h-5' color='#FFFFFF' />
            </Link>
          </div>

          {/* Right Column */}
          <div className='w-full h-full flex justify-center'>
            <Image
              src='/membership/laptop.jpg'
              alt='Mobile app mockup'
              width={533}
              height={486}
              quality={100}
              sizes='(max-width: 1023px) 100vw, 533px'
              className='w-full max-w-133.25 h-full rounded-[12px] object-cover'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
