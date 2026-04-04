import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

interface SchemeCardProps {
  icon?: ReactNode;
  headerTitle: string;
  headerSubtitle: string;
  regulatorIcon?: ReactNode;
  regulatorName: string;
  description: string;
  fundingLabel?: string;
  fundingValue: string;
  onViewDetails?: () => void;
  viewDetailsLabel?: string;
}

export function SchemeCard({
  icon,
  headerTitle,
  headerSubtitle,
  regulatorIcon,
  regulatorName,
  description,
  fundingLabel = "Total Funding",
  fundingValue,
  onViewDetails,
  viewDetailsLabel = "View Full Details",
}: SchemeCardProps) {
  return (
    <div className='w-full h-full rounded-2xl border border-[#E5E7EB] overflow-hidden bg-white shadow-sm flex flex-col'>
      <div className='bg-[#0F47A8] px-4 py-4 flex items-center gap-3'>
        <div className='w-10 h-10 rounded-[8px] bg-white flex items-center justify-center shrink-0'>
          {icon}
        </div>
        <div>
          <p className='text-white text-[12px] leading-tight'>{headerTitle}</p>
          <p className='text-white/80 text-[12px] mt-0.5'>{headerSubtitle}</p>
        </div>
      </div>

      <div className='px-4 pt-5 pb-4 flex flex-col gap-4 flex-1'>
        <div className='flex items-center gap-2'>
          <span className='text-[#1A3BAA]'>{regulatorIcon}</span>
          <span className='text-[#030712] font-semibold text-[16px]'>
            {regulatorName}
          </span>
        </div>

        <p className='text-[#6B7280] text-[14px] leading-snug'>{description}</p>

        <div className='mt-auto'>
          <div className='bg-[linear-gradient(110deg,#F5F8FF_0%,#DBEAFE_60%)] border border-[#E5E7EB] rounded-[10px] px-4 py-3 mb-5'>
            <p className='text-[#030712] text-[14px] mb-1'>{fundingLabel}</p>
            <p className='text-[#1A3BAA] font-semibold text-[22px] leading-tight'>
              {fundingValue}
            </p>
          </div>

          <button
            type='button'
            onClick={onViewDetails}
            className='w-full bg-[#1A3BAA] hover:bg-[#162e8a] active:bg-[#0f2070] transition-colors rounded-[10px] py-3.5 flex items-center justify-center gap-2 text-white font-semibold text-[15px]'>
            {viewDetailsLabel}
            <ArrowRight size={16} color='#FFFFFF' />
          </button>
        </div>
      </div>
    </div>
  );
}
