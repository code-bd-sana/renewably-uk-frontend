"use client";

import {
  Award,
  Clock,
  Euro,
  FileText,
  TargetIcon,
  TrendingUp,
  Users,
  Home,
  Zap,
  Target,
  Lightbulb,
  Shield,
  CircleCheckBig,
} from "lucide-react";
import type { FundingSchema } from "./schema-data";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { InfoCard } from "@/components/shared/info-card";
import { cn } from "@/lib/utils";
import { schema as SCHEMES } from "./schema-data";

interface SchemeDetailsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  scheme?: FundingSchema;
  onNavigate?: (schemeId: string) => void;
}

const SectionHeader = ({
  icon,
  title,
  subtitle,
  iconBgClassName,
  titleClassName,
  subtitleClassName,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  iconBgClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}) => (
  <div className='flex items-start gap-2 mb-3'>
    <span
      className={cn(
        "flex items-center justify-center shrink-0 bg-[#E0E7FF] w-6 h-6 rounded-[10px]",
        iconBgClassName,
      )}>
      {icon}
    </span>
    <div>
      <p
        className={cn(
          "text-lg sm:text-[22px] font-medium text-[#030712]",
          titleClassName,
        )}>
        {title}
      </p>
      {subtitle && (
        <p
          className={cn(
            "text-xs sm:text-[10px]! text-[#030712] mt-0.5",
            subtitleClassName,
          )}>
          {subtitle}
        </p>
      )}
    </div>
  </div>
);

const Tag = ({ label, icon }: { label: string; icon?: React.ReactNode }) => (
  <span className='inline-flex items-center gap-1 px-2.5 py-1 rounded-full border border-[#BFDBFE] bg-[#EFF6FF] text-black text-xs font-medium'>
    <span className='text-[#0F47A8] [&>svg]:text-[#0F47A8] [&>svg]:stroke-current'>
      {icon || <span className='w-1.5 h-1.5 rounded-full bg-[#0F47A8]' />}
    </span>
    {label}
  </span>
);

const getApprovedMeasureTag = (
  tag: string | { label: string; icon?: string },
) => {
  const label = typeof tag === "string" ? tag : tag.label;
  const iconKey =
    typeof tag === "string"
      ? tag.toLowerCase()
      : (tag.icon || tag.label).toLowerCase();

  if (iconKey.includes("solar")) {
    return {
      label,
      icon: <Home size={12} color='#0F47A8' />,
    };
  }

  if (iconKey.includes("ventilation") || iconKey.includes("wind")) {
    return {
      label,
      icon: <Zap size={12} color='#0F47A8' />,
    };
  }

  if (iconKey.includes("heat") || iconKey.includes("heating")) {
    return {
      label,
      icon: <Target size={12} color='#0F47A8' />,
    };
  }

  return {
    label,
    icon: <Lightbulb size={12} color='#0F47A8' />,
  };
};

export function SchemeDetailsModal({
  open,
  onOpenChange,
  scheme,
  onNavigate,
}: SchemeDetailsModalProps) {
  if (!scheme) return null;

  const currentIndex = SCHEMES.findIndex((item) => item.id === scheme.id);
  const totalSchemes = SCHEMES.length;

  const handlePrevious = () => {
    if (!onNavigate || currentIndex === -1) return;

    const previousIndex = (currentIndex - 1 + totalSchemes) % totalSchemes;
    onNavigate(SCHEMES[previousIndex].id);
  };

  const handleNext = () => {
    if (!onNavigate || currentIndex === -1) return;

    const nextIndex = (currentIndex + 1) % totalSchemes;
    onNavigate(SCHEMES[nextIndex].id);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className='w-[calc(100vw-1rem)] sm:w-[min(1400px,96vw)] max-w-none! sm:max-w-none! max-h-[calc(100vh-1rem)] sm:max-h-[92vh] rounded-[10px] p-0 overflow-hidden bg-white'
        showCloseButton>
        {/* Header */}
        <div className='bg-[#0F47A8] px-4 sm:px-5 py-4'>
          <DialogHeader className='gap-1'>
            <DialogTitle className='text-white text-base sm:text-lg pr-10'>
              {scheme.headerTitle}
            </DialogTitle>
            <DialogDescription className='text-white/85 text-xs sm:text-sm flex flex-wrap items-center gap-x-2 gap-y-1'>
              <Award size={14} color='#FFFFFF' />
              <span className='text-white'>{scheme.regulatorName}</span>
              <Clock size={14} color='#FFFFFF' />
              <span className='text-white'>{scheme.schemeDuration}</span>
            </DialogDescription>
          </DialogHeader>
        </div>

        {/* Scrollable body */}
        <div className='p-4 sm:p-5 md:p-6 space-y-4 sm:space-y-5 overflow-y-auto max-h-[calc(100vh-9rem)] sm:max-h-[calc(92vh-220px)]'>
          {/* Top stats row */}
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3'>
            <InfoCard
              icon={<Euro size={18} color='#0F47A8' />}
              title='Total Funding'
              description={scheme.fundingValue}
              align='start'
              cardBg='bg-white/10 text-black'
              iconBgClassName='bg-[#B4CDF7]'
              className='bg-[linear-gradient(110deg,#F5F8FF_0%,#DBEAFE_60%)] shadow-sm border border-[#E5E7EB] hover:border-[#b0b1b6] rounded-[10px]! px-5 cursor-pointer '
              contentClassName='p-3 space-y-1'
              titleClassName='text-2xl! font-medium text-[#0F47A8] leading-tight '
              descriptionClassName='text-[18px] text-[#030712] leading-tight mt-3'
            />
            <InfoCard
              icon={<TrendingUp size={18} color='#0F47A8' />}
              title='Installer Opportunity'
              description={scheme.installerOpportunity}
              align='start'
              cardBg='bg-white/10 text-black'
              iconBgClassName='bg-[#B4CDF7]'
              className='bg-[linear-gradient(110deg,#F5F8FF_0%,#DBEAFE_60%)] shadow-sm border border-[#E5E7EB] hover:border-[#b0b1b6] rounded-[10px]! px-5 cursor-pointer '
              contentClassName='p-3 space-y-1'
              titleClassName='text-2xl! font-medium text-[#0F47A8] leading-tight'
              descriptionClassName='text-[18px] text-[#030712] leading-tight mt-3'
            />
            <InfoCard
              icon={<TargetIcon size={18} color='#0F47A8' />}
              title='Status'
              description={scheme.status}
              align='start'
              cardBg='bg-white/10 text-black'
              iconBgClassName='bg-[#B4CDF7]'
              className='bg-[linear-gradient(110deg,#F5F8FF_0%,#DBEAFE_60%)] shadow-sm border border-[#E5E7EB] hover:border-[#b0b1b6] rounded-[10px]! px-5 cursor-pointer '
              contentClassName='p-3 space-y-1'
              titleClassName='text-2xl! font-medium text-[#0F47A8] leading-tight'
              descriptionClassName='text-[18px] text-[#030712] text-black leading-tight mt-3'
            />
          </div>
          {/* Scheme Overview */}
          <div className='bg-white py-3 sm:py-4'>
            <SectionHeader
              icon={<FileText size={24} color='#0F47A8' />}
              iconBgClassName='bg-[#E0E7FF] w-8 h-8 sm:w-10 sm:h-10 rounded-[6px]'
              title='Scheme Overview'
            />
            <p className='text-[#030712] text-sm sm:text-base leading-relaxed'>
              {scheme.schemaDescription}
              {/* {scheme.description} */}
            </p>
            <div className='mt-3 bg-[#0F47A8] rounded-[4px] px-3 py-2'>
              <p className='text-white text-sm sm:text-base'>
                <span className='font-medium text-white'>
                  Net Zero Contribution:
                </span>{" "}
                {scheme.netZeroContribution}
              </p>
            </div>
          </div>

          {/* Funding Value & Duration */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <InfoCard
              icon={<Euro size={18} color='#0F47A8' />}
              title='Total Funding'
              description={scheme.fundingValue}
              align='start'
              cardBg='bg-white/10 text-black'
              iconBgClassName='bg-[#B4CDF7]'
              className='bg-[linear-gradient(110deg,#F5F8FF_0%,#DBEAFE_60%)] shadow-sm border border-[#E5E7EB] hover:border-[#b0b1b6] rounded-[10px]! px-5 cursor-pointer '
              contentClassName='p-3 space-y-1'
              titleClassName='text-2xl! font-medium text-[#0F47A8] leading-tight'
              descriptionClassName='text-[18px] text-[#030712] leading-tight mt-3'
            />
            <InfoCard
              icon={<Clock size={18} color='#0F47A8' />}
              title='Scheme Duration'
              description={scheme.schemeDuration}
              align='start'
              cardBg='bg-white/10 text-black'
              iconBgClassName='bg-[#B4CDF7]'
              className='bg-[linear-gradient(110deg,#F5F8FF_0%,#DBEAFE_60%)] shadow-sm border border-[#E5E7EB] hover:border-[#b0b1b6] rounded-[10px]! px-5 cursor-pointer '
              contentClassName='p-3 space-y-1'
              titleClassName='text-2xl! font-medium text-[#0F47A8] leading-tight'
              descriptionClassName='text-[18px] text-[#030712] leading-tight mt-3'
            />
          </div>

          {/* Eligibility Criteria */}
          <div className='bg-white py-3 sm:py-4'>
            <SectionHeader
              icon={<Users size={24} color='#0F47A8' />}
              iconBgClassName='bg-[#E0E7FF] w-8 h-8 sm:w-10 sm:h-10 rounded-[6px]'
              title='Eligibility Criteria'
            />
            <p className='text-[#030712] text-sm sm:text-base leading-relaxed'>
              Who can benefit from this scheme
            </p>
            <div className='mt-3 bg-[#0F47A8] rounded-[4px] px-3 py-2'>
              <p className='text-white text-sm sm:text-base'>
                {scheme.eligibilityCriteria}
              </p>
            </div>
          </div>

          {/* Delivery Structure */}
          <div className='bg-white py-3 sm:py-4'>
            <SectionHeader
              icon={<FileText size={24} color='#0F47A8' />}
              iconBgClassName='bg-[#E0E7FF] w-8 h-8 sm:w-10 sm:h-10 rounded-[6px]'
              title='Delivery Structure'
            />
            <p className='text-[#030712] text-sm sm:text-base leading-relaxed'>
              How the scheme operates and who delivers it
            </p>
            <div className='mt-3 bg-[#0F47A8] rounded-[4px] px-3 py-2'>
              <p className='text-white text-sm sm:text-base'>
                {scheme.deliveryStructure}
              </p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3'>
              <InfoCard
                title='Installer Role'
                description={scheme.installerRole}
                align='start'
                cardBg='bg-white/10 text-black'
                className='bg-[linear-gradient(110deg,#F5F8FF_0%,#DBEAFE_60%)] shadow-sm border border-[#E5E7EB] hover:border-[#b0b1b6] rounded-none! cursor-pointer '
                contentClassName='!py-2 -m-1 space-y-1'
                titleClassName='text-[22px] font-medium text-black leading-tight '
                descriptionClassName='text-[16px] text-[#6B7280] leading-tight mt-3'
              />
              <InfoCard
                title='Payment Structure'
                description={scheme.paymentStructure}
                align='start'
                cardBg='bg-white/10 text-black'
                className='bg-[linear-gradient(110deg,#F5F8FF_0%,#DBEAFE_60%)] shadow-sm border border-[#E5E7EB] hover:border-[#b0b1b6] rounded-none! px-5 cursor-pointer '
                contentClassName='!py-2 -m-1 space-y-1'
                titleClassName='text-[22px] font-medium text-black leading-tight'
                descriptionClassName='text-[16px] text-[#6B7280] leading-tight mt-3'
              />
            </div>
          </div>

          {/* Approved Measures & Technologies */}
          <div className='bg-white py-3 sm:py-4'>
            <SectionHeader
              icon={<Zap size={24} color='#0F47A8' />}
              iconBgClassName='bg-[#E0E7FF] w-8 h-8 sm:w-10 sm:h-10 rounded-[6px]'
              title='Approved Measures & Technologies'
            />
            <p className='text-[#030712] text-sm sm:text-base leading-relaxed'>
              What can be installed under this scheme
            </p>
            <div className='mt-3 bg-[#0F47A8] rounded-[4px] px-3 py-2'>
              <p className='text-white text-sm sm:text-base'>
                {scheme.approvedMeasures}
              </p>
            </div>
            <div className='flex flex-wrap gap-2 mt-2'>
              {scheme.approvedMeasureTags.map((tag) => {
                const normalizedTag = getApprovedMeasureTag(tag);

                return (
                  <Tag
                    key={normalizedTag.label}
                    label={normalizedTag.label}
                    icon={normalizedTag.icon}
                  />
                );
              })}
            </div>
          </div>

          {/* Compliance & Accreditation */}
          <div className='bg-white py-3 sm:py-4'>
            <SectionHeader
              icon={<Shield size={24} color='#0F47A8' />}
              iconBgClassName='bg-[#E0E7FF] w-8 h-8 sm:w-10 sm:h-10 rounded-[6px]'
              title='Compliance & Accreditation Requirements'
            />
            <p className='text-[#030712] text-sm sm:text-base leading-relaxed'>
              Standards and certifications required for installers
            </p>
            <p className='text-base text-(--text-primary) mt-1 font-medium'>
              {scheme.complianceRequirements}
            </p>
            <div className='mt-3 bg-[#0F47A8] rounded-[4px] px-3 py-2'>
              <p className='text-white text-sm sm:text-base'>
                <span className='font-medium text-white'>
                  RenewablyUk Support:
                </span>{" "}
                {scheme.renewablyUKSupport}
              </p>
            </div>
            {/* Certifications grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-5 mt-3'>
              {scheme.certifications.map((cert) => (
                <InfoCard
                  key={cert.name}
                  icon={<CircleCheckBig color='#0F47A8' />}
                  title={cert.name}
                  description={cert.description}
                  align='start'
                  cardBg='bg-[#F9FBFF] text-black'
                  className='bg-[linear-gradient(110deg,#F5F8FF_0%,#DBEAFE_60%)] shadow-sm border border-[#E5E7EB] hover:border-[#b0b1b6] rounded-none! '
                  contentClassName='p-3 space-y-1'
                  iconBgClassName='bg-transparent'
                  iconWrapperClassName='w-5 h-5 rounded-none p-0'
                  titleClassName='text-[#111827] text-base font-semibold leading-snug'
                  descriptionClassName='text-[#6B7280] text-[12px] mt-0.5 leading-relaxed'
                />
              ))}
            </div>
          </div>

          {/* Business Opportunity Assessment */}
          <div className='bg-white py-3 sm:py-4'>
            <SectionHeader
              icon={<TrendingUp size={24} color='#0F47A8' />}
              iconBgClassName='bg-[#E0E7FF] w-8 h-8 sm:w-10 sm:h-10 rounded-[6px]'
              title='Business Opportunity Assessment'
            />
            <p className='text-[#030712] text-sm sm:text-base leading-relaxed'>
              Market potential and growth opportunities for installers
            </p>
            <div className='mt-3 bg-[linear-gradient(110deg,#F5F8FF_0%,#DBEAFE_60%)] px-3 py-2 border-[#E5E7EB] rounded-[4px] border'>
              <p className='text-[#030712] text-sm sm:text-base pt-2'>
                Market Opportunity Level
              </p>
              <p className='text-lg sm:text-[22px] text-[#0F47A8] pt-2'>
                {scheme.installerOpportunity}
              </p>
              <p className='text-[#6B7280] text-sm sm:text-base pt-2'>
                {scheme.installerOpportunityDescription}
              </p>
            </div>
            <div className='mt-6'>
              <p className='text-[#030712] text-lg sm:text-[22px] font-medium mb-2'>
                Key Business Advantages
              </p>
              <ul className='space-y-2'>
                {scheme.keyBusinessAdvantages.map((advantage, i) => (
                  <li key={i} className='flex items-start gap-2'>
                    <CircleCheckBig
                      size={16}
                      color='#0F47A8'
                      className='shrink-0 mt-0.5'
                    />
                    <span className='text-[#6B7280] text-sm sm:text-base leading-relaxed'>
                      {advantage}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer navigation */}
        <div className='border-t border-[#E5E7EB] px-4 sm:px-5 py-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-[#F9FBFF]'>
          <div className='flex gap-2 w-full sm:w-auto'>
            <button
              type='button'
              onClick={handlePrevious}
              disabled={!onNavigate || totalSchemes < 2}
              className='flex-1 sm:flex-none items-center justify-center gap-1 px-3 py-2 rounded-[4px] border border-[#E5E7EB] bg-white text-[#374151] text-xs font-medium hover:bg-[#F3F4F6] transition-colors disabled:cursor-not-allowed disabled:opacity-50'>
              ← Previous
            </button>
            <button
              type='button'
              onClick={handleNext}
              disabled={!onNavigate || totalSchemes < 2}
              className='flex-1 sm:flex-none items-center justify-center gap-1 px-3 py-2 rounded-[4px] bg-[#0F47A8] text-white text-xs font-medium hover:bg-[#0D3D8F] transition-colors disabled:cursor-not-allowed disabled:opacity-50'>
              Next →
            </button>
          </div>
          <p className='text-[#6B7280] text-xs text-center sm:text-left'>
            Browse through all funding schemes
          </p>
          <button
            type='button'
            onClick={() => onOpenChange(false)}
            className='w-full sm:w-auto px-3 py-2 rounded-[4px] bg-[#EF4444] text-white text-xs font-medium hover:bg-[#DC2626] transition-colors'>
            Close
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
