import { Info } from "lucide-react";
import React from "react";

export default function ICOBreach() {
  return (
    <section className='mx-6 lg:mx-25 px-4 py-15'>
      <div className='bg-[linear-gradient(110deg,#F5F8FF_0%,#DBEAFE_60%)] border border-[#E5E7EB] rounded-[10px]'>
        <div className='p-5'>
          <div>
            <div className='flex justify-start items-center gap-x-4'>
              <Info
                className='w-14 h-14 rotate-180 bg-[#B4CDF7] rounded-[10px] p-3'
                color='#0F47A8'
              />
              <p className='text-[22px] font-medium'>ICO Breach Risk</p>
            </div>
            <p className='text-(--text-muted) mt-4 text-base max-w-375 text-[16px]'>
              Storing UK consumer data on overseas servers without adequate
              safeguards can constitute a breach of UK GDPR Article 44
              (International Transfers). The ICO has enforcement powers
              including fines of up to{" "}
              <span className='text-(--text-primary)'>
                £17.5 million or 4% of annual turnover
              </span>
              , whichever is higher.
            </p>
          </div>
          <div className='bg-background rounded-[10px] p-5 mt-9'>
            <div className='text-center '>
              <p className='text-[32px] font-semibold text-white'>
                £17.5 Million
              </p>
              <p className='text-[16px] text-white'>
                Maximum ICO Fine for GDPR Breaches
              </p>
              <p className='text-[12px] text-white pt-4'>
                Or 4% of annual turnover - whichever is higher
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
