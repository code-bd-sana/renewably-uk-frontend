"use client";

import { useState } from "react";
import {
  Mail,
  Lock,
  TrendingUp,
  Eye,
  EyeOff,
  FileCheck,
  Shield,
  Award,
} from "lucide-react";
import { InfoCard } from "@/components/shared/info-card";
import SectionHeader from "@/components/shared/section-header";
import Link from "next/link";
import Image from "next/image";

const portalFeatures = [
  {
    icon: <FileCheck size={22} color='#0F47A8' />,
    title: "Manage Insurance Guarantees",
    description:
      "Issue and track FCA-regulated guarantees for all installations",
  },
  {
    icon: <Shield size={22} color='#0F47A8' />,
    title: "Compliance Dashboard",
    description:
      "Track certifications, accreditations, and regulatory requirements",
  },
  {
    icon: <TrendingUp size={22} color='#0F47A8' />,
    title: "Funding Opportunities",
    description: "Search and apply for grants, schemes, and retrofit funding",
  },
  {
    icon: <Award size={22} color='#0F47A8' />,
    title: "Professional Tools",
    description: "Access documentation, templates, and compliance resources",
  },
];

function InputField({
  label,
  required,
  hint,
  icon,
  type = "text",
  placeholder,
  rightElement,
}: {
  label: string;
  required?: boolean;
  hint?: string;
  icon: React.ReactNode;
  type?: string;
  placeholder: string;
  rightElement?: React.ReactNode;
}) {
  return (
    <section className='flex flex-col gap-1.5'>
      <label className='text-base font-medium text-[#6B7280]'>
        {label} {required && <span className='text-(--text-muted)'>*</span>}{" "}
        {!required && <span className='text-(--text-muted)'>(Optional)</span>}
      </label>
      {hint && <p className='text-xs text-[#9CA3AF] -mt-1'>{hint}</p>}
      <div className='relative'>
        <span className='absolute left-3 top-1/2 -translate-y-1/2 text-[#6B7280] pointer-events-none'>
          {icon}
        </span>
        <input
          type={type}
          placeholder={placeholder}
          className='w-full pl-10 pr-12 py-2.5 border border-[#D1D5DB] rounded-[4px] text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all bg-white'
        />
        {rightElement && (
          <span className='absolute right-3 top-1/2 -translate-y-1/2'>
            {rightElement}
          </span>
        )}
      </div>
    </section>
  );
}

function PasswordField({
  label,
  placeholder,
  show,
  onToggle,
  icon = <Lock size={20} color='#6B7280' />,
}: {
  label: string;
  placeholder: string;
  show: boolean;
  onToggle: () => void;
  icon?: React.ReactNode;
}) {
  return (
    <section className='flex flex-col gap-1.5'>
      <label className='text-base font-medium text-[#6B7280]'>
        {label} <span className='text-(--text-muted)'>*</span>
      </label>
      <div className='relative'>
        <span className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none'>
          {icon}
        </span>
        <input
          type={show ? "text" : "password"}
          placeholder={placeholder}
          className='w-full pl-10 pr-12 py-2.5 border border-[#D1D5DB] rounded-[4px] text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all bg-white'
        />
        <button
          type='button'
          onClick={onToggle}
          className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors'>
          {show ? (
            <EyeOff size={20} color='#9CA3AF' />
          ) : (
            <Eye size={20} color='#9CA3AF' />
          )}
        </button>
      </div>
    </section>
  );
}

export default function Login() {
  const partnerImages = [
    "/home/banner-partner/ico.png",
    "/home/banner-partner/cyber.png",
    "/home/banner-partner/aws.png",
    "/home/banner-partner/bluedrop.png",
  ];
  const [showPassword, setShowPassword] = useState(false);
  const [consent, setConsent] = useState(false);

  return (
    <section className='min-h-screen px-4 py-8 bg-white'>
      {/* Header */}
      <div className='text-center mb-7'>
        <Link href='/' className='inline-block'>
          <Image
            src='/FullLogo_Transparent.png'
            alt='<- Renewably UK'
            width={140}
            height={72}
            className='w-48 h-32 object-contain -mb-3'
          />
        </Link>
        <SectionHeader
          title='Welcome Back'
          titleClassName='text-(--text-primary) text-[32px]'
          subTitle='Sign in to access your Renewably UK installer portal'
          subTitleClassName='text-(--text-muted) font-medium text-base text-center'
        />
      </div>

      {/* Layout */}
      <div className='mx-3 lg:mx-45 grid grid-cols-1 lg:grid-cols-2 gap-6 items-start'>
        {/* ─── LEFT: Form ─── */}
        <div className=' rounded-[10px] border border-[#E5E7EB] hover:border-[#D1D5DB] shadow-sm p-4 md:p-7'>
          <SectionHeader
            title='Sign In to Your Account'
            titleClassName='text-[36px]'
            subTitle='Access your compliance dashboard, insurance guarantees, and installer tools.'
            subTitleClassName='text-(--text-muted) font-medium text-base text-center max-w-130 mx-auto'
          />

          <div className='flex flex-col gap-4 mt-8'>
            <InputField
              label='Email Address'
              required
              icon={<Mail size={20} color='#6B7280' />}
              type='email'
              placeholder='john.smith@example.com'
            />
            <PasswordField
              label='Password'
              placeholder='Enter your password'
              show={showPassword}
              onToggle={() => setShowPassword(!showPassword)}
            />
            {/* Forgot Password */}
            <div className='flex items-start gap-3'>
              <label className='flex items-start gap-3 cursor-pointer'>
                <input
                  type='checkbox'
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className='mt-1 w-4 h-4 border-gray-300 rounded accent-background checked:bg-blue-900 checked:border-blue-900 focus:ring-blue-500'
                />
                <span className='text-sm text-[#6B7280]'>Remember Me</span>
              </label>
            </div>
            {/* Submit */}
            <button
              type='button'
              className={`w-full py-3 text-white font-semibold rounded-[10px] text-xl transition-colors bg-background hover:bg-background active:bg-blue-900 cursor-pointer`}>
              Sign In
            </button>

            <p className='text-center text-base text-gray-500'>
              Already have an account?{" "}
              <Link
                href='/sign-up'
                className='text-(--text-primary) hover:underline font-semibold'>
                Sign Up
              </Link>
            </p>
          </div>
        </div>

        {/* ─── RIGHT: Info Panel ─── */}
        <div className='flex flex-col gap-4'>
          {/* <InfoCard
            align='center'
            title='Trusted & Compliant'
            description='Highest standards of data protection, security, and professional compliance'
            className='rounded-xl border border-gray-200 shadow-sm'
            cardBg='bg-white text-[#1e293b]'
            contentClassName='p-5 space-y-2'
            titleClassName='text-[16px] font-bold text-gray-900'
            descriptionClassName='text-[13px] text-gray-500 leading-relaxed'
            footer={
              <div className='flex items-center justify-center gap-2.5 flex-wrap'>
                <span className='px-2 py-1 border border-gray-200 rounded text-[11px] font-bold text-gray-700 tracking-wide'>
                  ico.
                </span>
                <span className='px-2 py-1 border border-gray-200 rounded text-[11px] font-bold text-green-600'>
                  ✦ GREEN CREDENTIALS
                </span>
                <span className='px-2 py-1 border border-gray-200 rounded text-[11px] font-bold text-orange-500'>
                  aws
                </span>
                <span className='px-2 py-1 border border-gray-200 rounded text-[11px] font-bold text-blue-600 tracking-widest'>
                  BLUE<span className='font-black'>DROP</span>
                </span>
              </div>
            }
            footerClassName='pt-2 mt-0 border-0'
          /> */}
          <div className='border border-[#E5E7EB] hover:border-[#D1D5DB] rounded-[10px]'>
            <div className='mx-4 md:mx-8 lg:mx-12 xl:mx-16 '>
              <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 justify-center items-center'>
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
              <SectionHeader
                title='Trusted & Compliant'
                titleClassName='text-[22px]!'
                subTitle='Highest standards of data protection, security, and professional compliance'
                subTitleClassName='text-(--text-muted) font-medium text-base text-center max-w-100 mx-auto mb-3'
              />
            </div>
          </div>
          <div className=''>
            <InfoCard
              title='Your Installer Portal'
              className='bg-[linear-gradient(110deg,#F5F8FF_0%,#DBEAFE_60%)] shadow-sm border border-[#E5E7EB] hover:border-[#b0b1b6] rounded-[10px]! px-5 cursor-pointer '
              contentClassName='p-4 space-y-5'
              titleClassName='text-[22px] font-medium text-(--text-primary)'
              description={
                <div className=''>
                  <div className='flex flex-col gap-5'>
                    {portalFeatures.map((feature, i) => (
                      <div key={i} className='flex items-start gap-3'>
                        <div className='w-9 h-9 bg-[#B4CDF7] rounded-[10px] flex items-center justify-center shrink-0 text-blue-600 shadow-sm'>
                          {feature.icon}
                        </div>
                        <div>
                          <p className='text-base font-semibold text-gray-800 leading-tight mb-0.5'>
                            {feature.title}
                          </p>
                          <p className='text-sm text-gray-500 leading-snug'>
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              }
              footer={
                <div className='flex items-center justify-center gap-2 pt-3 border-t border-[#D1D5DB]'>
                  <p className='text-(--text-muted) text-sm'>
                    Secure, ICO-compliant portal designed for professional
                    installers
                  </p>
                </div>
              }
              footerClassName='pt-1 mt-0 border-0'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
