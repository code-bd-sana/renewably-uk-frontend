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
    <div className='w-full rounded-2xl border border-[#E5E7EB] overflow-hidden bg-white shadow-sm'>
      <div className='bg-[#1A3BAA] px-4 py-4 flex items-center gap-3'>
        <div className='w-10 h-10 rounded-[10px] bg-white/20 flex items-center justify-center shrink-0'>
          {icon ?? (
            <svg
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='none'
              stroke='white'
              strokeWidth='2'>
              <path d='M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z' />
              <polyline points='9 21 9 12 15 12 15 21' />
            </svg>
          )}
        </div>
        <div>
          <p className='text-white font-semibold text-[15px] leading-tight'>
            {headerTitle}
          </p>
          <p className='text-white/80 text-[13px] mt-0.5'>{headerSubtitle}</p>
        </div>
      </div>

      <div className='px-4 pt-5 pb-4 flex flex-col gap-4'>
        <div className='flex items-center gap-2'>
          <span className='text-[#1A3BAA]'>
            {regulatorIcon ?? (
              <svg
                width='20'
                height='20'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'>
                <circle cx='12' cy='8' r='4' />
                <path d='M4 20c0-4 3.6-7 8-7s8 3 8 7' />
                <path d='M17 11l1.5 1.5L21 10' />
              </svg>
            )}
          </span>
          <span className='text-[#111827] font-semibold text-[17px]'>
            {regulatorName}
          </span>
        </div>

        <p className='text-[#364153] text-[15px] leading-snug'>{description}</p>

        <div className='bg-[linear-gradient(110deg,#F5F8FF_0%,#DBEAFE_60%)] border border-[#E5E7EB] rounded-[10px] px-4 py-3'>
          <p className='text-[#364153] text-[13px] mb-1'>{fundingLabel}</p>
          <p className='text-[#1A3BAA] font-semibold text-[22px] leading-tight'>
            {fundingValue}
          </p>
        </div>

        <button
          type='button'
          onClick={onViewDetails}
          className='w-full bg-[#1A3BAA] hover:bg-[#162e8a] active:bg-[#0f2070] transition-colors rounded-[10px] py-3.5 flex items-center justify-center gap-2 text-white font-semibold text-[15px]'>
          {viewDetailsLabel}
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
