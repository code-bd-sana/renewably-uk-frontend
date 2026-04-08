"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import {
  MapPin,
  CheckCircle2,
  Clock,
  Zap,
  Upload,
  Bell,
  Search,
  ArrowRight,
  Sparkles,
  Smartphone,
  Camera,
  FileCheck,
  RefreshCcw,
  Lock,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { InfoCard } from "./info-card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export interface MobileAppModalProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function MobileAppModal({
  open: controlledOpen,
  onOpenChange,
}: MobileAppModalProps) {
  const [internalOpen, setInternalOpen] = React.useState(false);

  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : internalOpen;
  const handleOpenChange = isControlled ? onOpenChange! : setInternalOpen;

  const actionFeatures = [
    {
      icon: <MapPin size={24} className='w-9 h-9' color='#0F47A8' />,
      title: "Auto-Detect Location",
      description: "GPS automatically fills in project address",
    },
    {
      icon: <Camera size={24} className='w-9 h-9' color='#0F47A8' />,
      title: "Snap & Auto-Fill",
      description: "AI reads measurements from photos instantly",
    },
    {
      icon: <FileCheck size={24} className='w-9 h-9' color='#0F47A8' />,
      title: "One-Tap Certificates",
      description: "Generate and email IBG's on site in seconds",
    },
    {
      icon: <Zap size={24} className='w-9 h-9' color='#0F47A8' />,
      title: "Save Hours Per Job",
      description: "Complete documentation in minutes, not hours",
    },
  ];

  const detailFeatures = [
    {
      icon: <MapPin color='#0F47A8' />,
      title: "Smart Geo-Location",
      description:
        "The app automatically detects when you arrive on-site and pre-populates project addresses using GPS technology.",
      points: [
        {
          label: "Instant address capture when you arrive on-site",
          icon: <CheckCircle2 className='w-4 h-4' color='#0F47A8' />,
        },
        {
          label: "Reduces manual data entry errors",
          icon: <CheckCircle2 className='w-4 h-4' color='#0F47A8' />,
        },
        {
          label: "Verifies installation location for compliance",
          icon: <CheckCircle2 className='w-4 h-4' color='#0F47A8' />,
        },
        {
          label: "Time-stamps site arrival for project tracking",
          icon: <CheckCircle2 className='w-4 h-4' color='#0F47A8' />,
        },
      ],
    },
    {
      icon: <Camera color='#0F47A8' />,
      title: "AI Measurement Recognition",
      description:
        "Take a photo of measurement tools or displays, and AI automatically identifies and records the data for your IBG documentation.",
      points: [
        {
          label: "Reads digital and analog meters automatically",
          icon: <CheckCircle2 className='w-4 h-4' color='#0F47A8' />,
        },
        {
          label: "Identifies equipment model numbers and serial codes",
          icon: <CheckCircle2 className='w-4 h-4' color='#0F47A8' />,
        },
        {
          label: "Auto-populates IBG measurements and calculations",
          icon: <CheckCircle2 className='w-4 h-4' color='#0F47A8' />,
        },
        {
          label: "Stores original photos as compliance evidence",
          icon: <CheckCircle2 className='w-4 h-4' color='#0F47A8' />,
        },
      ],
    },
  ];

  const workflowFeatures = [
    {
      icon: <Upload color='#0F47A8' />,
      title: "Photo Upload",
      description:
        "Upload installation photos directly from your phone camera to the project repository",
    },
    {
      icon: <Lock color='#0F47A8' />,
      title: "Biometric Security",
      description:
        "Face ID, Touch ID, and fingerprint authentication for secure access to customer data",
    },
    {
      icon: <Clock color='#0F47A8' />,
      title: "Offline Mode",
      description:
        "Work in areas with poor signal - data syncs automatically when connection is restored",
    },
    {
      icon: <Bell color='#0F47A8' />,
      title: "Push Notifications",
      description:
        "Real-time alerts for instant IBG approvals, document requests, and compliance updates",
    },
    {
      icon: <Search color='#0F47A8' />,
      title: "Quick Search",
      description:
        "Find any project, document, or certificate in seconds with voice search capability",
    },
  ];

  // Step 4 uses a checkmark icon instead of number
  const workflowSteps = [
    {
      number: "1",
      isCheck: false,
      title: "Arrive on-site",
      description: `App detects location and auto-populates "123 High Street, Manchester, M1 1AB"`,
    },
    {
      number: "2",
      isCheck: false,
      title: "Take photo of solar panel installation",
      description: `AI reads "5.6 kWp system size, 14 panels, 40° roof angle" and auto-fills IBG fields`,
    },
    {
      number: "3",
      isCheck: false,
      title: "Generate IBG certificate",
      description: `Tap "Generate" → IBG created with all installation details. Photos stored in portal project file`,
    },
    {
      number: "4",
      isCheck: true,
      title: "Certificate automatically emailed to customer",
      description: `Meets Ofgem requirement: Instant email on completion with timestamp and delivery tracked for audit trail`,
    },
  ];

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent
        className={cn(
          "max-w-350!",
          "max-h-[95vh] flex flex-col",
          "p-0 gap-0 overflow-hidden",
          "bg-white text-slate-900",
          "rounded-[12px] shadow-2xl",
        )}>
        {/* ── HEADER ── */}
        <DialogHeader className='shrink-0 bg-[#1a3fa8] px-6 py-4 text-white'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-3'>
              {/* Smartphone icon box */}
              <div className='w-9 h-9 bg-white rounded-[10px] flex items-center justify-center shrink-0'>
                <Smartphone className='w-5 h-5 text-white' color='#0F47A8' />
              </div>
              <div>
                <DialogTitle className='text-[22px]  text-white leading-tight'>
                  Renewably UK Mobile App
                </DialogTitle>
                <p className='text-blue-200 text-base font-normal leading-tight mt-0.5'>
                  Intelligent on-site documentation powered by AI
                </p>
              </div>
            </div>
            <DialogClose asChild>
              <button
                type='button'
                className='text-white/60 hover:text-white transition-colors'
                aria-label='Close'>
                {/* <X className='w-5 h-5' color='#0F47A8' /> */}
              </button>
            </DialogClose>
          </div>
        </DialogHeader>

        {/* Scrollable body */}
        <div className='flex-1 overflow-y-auto'>
          {/* ── COMING 2026 BANNER ── */}
          <div className='mx-4 mt-4 mb-0 py-3 bg-white'>
            <div className='flex items-center gap-2 mb-1'>
              <Sparkles className='w-6 h-6' color='#0F47A8' />
              <span className='text-[22px] font-medium text-[#030712]'>
                Coming 2026
              </span>
            </div>
            <p className='text-base text-[#6B7280] leading-snug'>
              Native iOS &amp; Android applications launching throughout 2026.
              Early access available for Renewably UK members.
            </p>
          </div>

          {/* ── SEE IT IN ACTION (blue section) ── */}
          <div className='bg-[#0F47A8] mx-4 mt-4 rounded-[10px] px-6 py-6'>
            <div className='grid grid-cols-2 gap-8 items-center'>
              {/* Left: Phone mockup - real screenshot style */}
              <div className='flex justify-center'>
                <Image
                  src='/portal/mobile.png'
                  alt='<- Renewably UK'
                  width={140}
                  height={102}
                  className='w-48 h-84 object-contain -mb-3'
                />
              </div>

              {/* Right: Feature list */}
              <div>
                <h3 className='text-white text-[22px] font-medium mb-4'>
                  See It In Action
                </h3>
                <div className='space-y-3'>
                  {actionFeatures.map((feature, idx) => (
                    <div key={idx} className='flex items-center gap-3'>
                      <div className='w-10 h-10 rounded-[10px] bg-[#B4CDF7] flex items-center justify-center shrink-0 [&>svg]:w-4 [&>svg]:h-4'>
                        {feature.icon}
                      </div>
                      <div>
                        <p className='text-white text-[18px] leading-tight'>
                          {feature.title}
                        </p>
                        <p className='text-blue-200 text-xs leading-snug mt-0.5'>
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── DETAIL FEATURE CARDS (Smart Geo-Location + AI Measurement) ── */}
          <div className='grid grid-cols-2 gap-4 px-4 mt-4'>
            {detailFeatures.map((feature, idx) => (
              <InfoCard
                key={idx}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                points={feature.points}
                className='bg-[linear-gradient(110deg,#F5F8FF_0%,#DBEAFE_60%)] shadow-sm border border-[#E5E7EB] hover:border-[#b0b1b6] rounded-[10px]! cursor-pointer -py-2'
                iconBgClassName='bg-[#B4CDF7]'
                titleClassName='text-[22px] font-medium text-[#030712]'
                descriptionClassName='text-base! text-[#6B7280]'
                pointClassName='text-base! text-[#6B7280]'
              />
            ))}
          </div>

          {/* ── COMPLETE MOBILE WORKFLOW ── */}
          <div className='px-4 mt-6'>
            <h2 className='text-[22px] font-medium text-[#030712] mb-3 flex items-center gap-2'>
              Complete Mobile Workflow
            </h2>

            {/* Featured card: Instant Platform Synchronization */}
            <div className='bg-[#1a3fa8] rounded-[10px] px-5 py-4 flex items-center gap-4 mb-4'>
              <div className='w-12 h-12 bg-white rounded-[10px] flex items-center justify-center shrink-0'>
                <RefreshCcw className='w-6 h-6' color='#0F47A8' />
              </div>
              <div>
                <p className='text-white text-[22px] leading-tight'>
                  Instant Platform Synchronization
                </p>
                <p className='text-[#F3F4F6] text-base leading-snug mt-1'>
                  Everything captured on the mobile app—images, data, and
                  customer information—is instantly stored in the Renewably UK
                  portal and made accessible via your installer account. No
                  manual uploads, no delays, just seamless cloud sync.
                </p>
              </div>
            </div>

            {/* 3-column grid of remaining workflow features */}
            <div className='grid grid-cols-3 gap-3 mb-2'>
              {/* Row 1: Instant IBG Generation explicitly shown in image */}
              <InfoCard
                icon={<Zap color='#0F47A8' />}
                title='Instant IBG Generation'
                description='Generate Insurance Backed Guarantee certificates on-site and email directly to customers'
                className='bg-[linear-gradient(110deg,#F5F8FF_0%,#DBEAFE_60%)] shadow-sm border border-[#E5E7EB] hover:border-[#b0b1b6] rounded-[10px]! cursor-pointer -py-2'
                iconBgClassName='bg-[#B4CDF7]'
                titleClassName='text-[22px] font-medium text-slate-900'
                descriptionClassName='text-base! text-[#6B7280]'
              />
              {workflowFeatures.slice(0, 2).map((feature, idx) => (
                <InfoCard
                  key={idx}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  className='bg-[linear-gradient(110deg,#F5F8FF_0%,#DBEAFE_60%)] shadow-sm border border-[#E5E7EB] hover:border-[#b0b1b6] rounded-[10px]! cursor-pointer -py-2'
                  iconBgClassName='bg-[#B4CDF7]'
                  titleClassName='text-[22px] font-medium text-slate-900'
                  descriptionClassName='text-base! text-[#6B7280]'
                />
              ))}
            </div>
            <div className='grid grid-cols-3 gap-3'>
              {workflowFeatures.slice(2).map((feature, idx) => (
                <InfoCard
                  key={idx}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  className='bg-[linear-gradient(110deg,#F5F8FF_0%,#DBEAFE_60%)] shadow-sm border border-[#E5E7EB] hover:border-[#b0b1b6] rounded-[10px]! cursor-pointer -py-2'
                  iconBgClassName='bg-[#B4CDF7]'
                  titleClassName='text-[22px] font-medium text-slate-900'
                  descriptionClassName='text-base! text-[#6B7280]'
                />
              ))}
            </div>
          </div>

          {/* ── REAL-WORLD EXAMPLE ── */}
          <div className='px-8 mt-6 pb-2'>
            <h2 className='text-[22px] font-medium text-[#101828] mb-4'>
              Real-World Example
            </h2>
            <div className='space-y-4'>
              {workflowSteps.map((step, idx) => (
                <div key={idx} className='flex gap-3'>
                  {/* Circle with number or checkmark */}
                  <div
                    className={cn(
                      "w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-white font-bold text-[12px]",
                      "bg-[#1a3fa8]",
                    )}>
                    {step.isCheck ? (
                      <Check className='w-4 h-4 border-none' color='#FFFFFF' />
                    ) : (
                      step.number
                    )}
                  </div>
                  <div>
                    <p className='text-base font-medium text-[#030712] leading-tight'>
                      {step.title}
                    </p>
                    <p className='text-[12px] text-[#6B7280] mt-0.5 leading-snug'>
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── EARLY ACCESS CTA ── */}
          <div className='bg-[#0F47A8] m-5 rounded-[10px] mt-6 px-8 py-8 text-center text-white'>
            <h3 className='text-[32px] font-medium text-white mb-2'>
              Want Early Access?
            </h3>
            <p className='text-[#F3F4F6] text-base mb-5'>
              Renewably UK members will get priority access to the mobile app
              beta program
            </p>
            <Link href='/sign-up'>
              <Button className='bg-white text-(--text-primary) font-medium border-[#E5E7EB] hover:border-[#83878d] rounded-[6px] px-6 py-5 cursor-pointer'>
                Join Renewably UK
                <ArrowRight className='w-4 h-4' color='#0F47A8' />
              </Button>
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
