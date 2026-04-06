"use client";

import { useState, useEffect, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import {
  User,
  Mail,
  Phone,
  Lock,
  Building2,
  FileText,
  MapPin,
  TrendingUp,
  Eye,
  EyeOff,
  Users,
  Ruler,
  HardHatIcon,
  ClipboardCheck,
  Target,
  FlaskConical,
  Euro,
  Building,
  FileCheck,
  Shield,
  Award,
  Briefcase,
} from "lucide-react";
import { InfoCard } from "@/components/shared/info-card";
import SectionHeader from "@/components/shared/section-header";
import Link from "next/link";
import { usePrivacyPolicyModal } from "@/components/shared/privacy-policy-modal-provider";
import Image from "next/image";

const userTypes = [
  {
    id: "installation",
    icon: <HardHatIcon size={16} color='#0F47A8' />,
    label: "Installation Company",
    description:
      "Solar PV, heat pumps, insulation, ventilation, and renewable installations",
  },
  {
    id: "retrofit_assessor",
    icon: <ClipboardCheck size={16} color='#0F47A8' />,
    label: "Retrofit Assessor",
    description: "Energy assessments, surveys, and PAS 2035 evaluation",
  },
  {
    id: "retrofit_coordinator",
    icon: <Target size={16} color='#0F47A8' />,
    label: "Retrofit Coordinator",
    description: "Project management and compliance coordination",
  },
  {
    id: "domestic_energy",
    icon: <FlaskConical size={16} color='#0F47A8' />,
    label: "Domestic Energy Assessor",
    description: "EPC assessments and energy efficiency surveys",
  },
  {
    id: "retrofit_designer",
    icon: <Ruler size={16} color='#0F47A8' />,
    label: "Retrofit Designer",
    description: "Design and specification of retrofit projects",
  },
  {
    id: "funding_partner",
    icon: <Euro size={16} color='#0F47A8' />,
    label: "Funding Partner",
    description: "Finance providers and grant administrators",
  },
  {
    id: "scheme_provider",
    icon: <Building size={16} color='#0F47A8' />,
    label: "Scheme Provider",
    description: "ECO, LA Flex, retrofit scheme administrators",
  },
  {
    id: "architect",
    icon: <Users size={16} color='#0F47A8' />,
    label: "Architect / Consultant",
    description: "Building consultancy and architectural services",
  },
];

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
          className='w-full pl-10 pr-12 py-2.5 border border-gray-200 rounded-[4px] text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all bg-white'
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

export default function SignUp() {
  const partnerImages = [
    "/home/banner-partner/ico.png",
    "/home/banner-partner/cyber.png",
    "/home/banner-partner/aws.png",
    "/home/banner-partner/bluedrop.png",
  ];
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [consent, setConsent] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const { openPrivacyPolicy } = usePrivacyPolicyModal();
  const siteKey = process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY || "";
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = useState(1);
  const WIDGET_WIDTH = 304; // default reCAPTCHA checkbox width

  useEffect(() => {
    if (!siteKey) {
      // Log call stack to help debug missing sitekey at runtime
      // This appears in the browser console (dev mode).
      console.error(
        "Missing required environment variable: NEXT_PUBLIC_CAPTCHA_SITE_KEY",
        new Error().stack,
      );
    }
  }, [siteKey]);

  useEffect(() => {
    if (!wrapperRef.current || !innerRef.current) return;

    const resize = () => {
      const width = wrapperRef.current?.clientWidth || 0;
      if (!width) return setScale(1);
      const newScale = Math.min(1, width / WIDGET_WIDTH);
      setScale(newScale || 1);
    };

    // Initial resize
    resize();

    // Observe container size changes
    const ro = new ResizeObserver(() => resize());
    ro.observe(wrapperRef.current);

    // Also handle window resize
    window.addEventListener("resize", resize);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", resize);
    };
    // refs should not be accessed in the dependency array — run once on mount
  }, []);

  const toggleType = (id: string) =>
    setSelectedTypes((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id],
    );

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
          title='Join Renewably UK'
          titleClassName='text-(--text-primary) text-[32px]'
          subTitle='Begin Your Onboarding Journey to Professional Renewable Energy Installation'
          subTitleClassName='text-(--text-muted) font-medium text-base text-center'
        />
      </div>

      {/* Layout */}
      <div className='mx-3 lg:mx-45 grid grid-cols-1 lg:grid-cols-2 gap-6 items-start'>
        {/* ─── LEFT: Form ─── */}
        <div className=' rounded-[10px] border border-[#E5E7EB] hover:border-[#D1D5DB] shadow-sm p-4 md:p-7'>
          <SectionHeader
            title='Create Your Account'
            titleClassName='text-[36px]'
            subTitle='Complete the form below to begin your onboarding process. Our team will review your application and be in touch within 24 hours.'
            subTitleClassName='text-(--text-muted) font-medium text-base text-center'
          />

          <div className='flex flex-col gap-4 mt-8'>
            <InputField
              label='Name'
              required
              icon={<User size={20} color='#6B7280' />}
              placeholder='John Smith'
            />
            <InputField
              label='Email Address'
              required
              icon={<Mail size={20} color='#6B7280' />}
              type='email'
              placeholder='john.smith@example.com'
            />
            <InputField
              label='Phone Number'
              required
              icon={<Phone size={20} color='#6B7280' />}
              type='tel'
              placeholder='+44 123 456 7890'
            />
            <PasswordField
              label='Password'
              placeholder='Create a strong password'
              show={showPassword}
              onToggle={() => setShowPassword(!showPassword)}
            />
            <PasswordField
              label='Confirm Password'
              placeholder='Re-enter your password'
              show={showConfirm}
              onToggle={() => setShowConfirm(!showConfirm)}
              icon={<Shield size={20} color='#6B7280' />}
            />

            {/* Company Information */}
            <div className='pt-6'>
              <SectionHeader
                title='Company Information'
                titleClassName='text-[22px]!'
                align='start'
              />
              <div className='flex flex-col gap-4 pt-4'>
                <InputField
                  label='Company Name'
                  required
                  icon={<Building2 size={20} color='#6B7280' />}
                  placeholder='Your Company Ltd'
                />
                <InputField
                  label='Company Registration Number'
                  required
                  hint='Companies House registration number for UK businesses (8 digits)'
                  icon={<FileText size={20} color='#6B7280' />}
                  placeholder='12345678'
                />

                {/* Address textarea */}
                <div className='flex flex-col gap-1.5'>
                  <label className='text-base font-medium text-[#6B7280]'>
                    Company Address{" "}
                    <span className='text-(--text-muted)'>*</span>
                  </label>
                  <div className='relative'>
                    <span className='absolute left-3 top-3 text-[#6B7280] pointer-events-none'>
                      <MapPin size={20} color='#6B7280' />
                    </span>
                    <textarea
                      rows={2}
                      placeholder='Street address, City, Postcode'
                      className='w-full pl-9 pr-3 py-2.5 border border-[#D1D5DB] rounded-[4px] text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all resize-none bg-white -mb-2'
                    />
                  </div>
                </div>

                <InputField
                  label='TrustMark Licence Number'
                  hint='Enter your TrustMark license number to automatically verify your accreditation'
                  icon={<Award size={20} color='#6B7280' />}
                  placeholder='TM12345'
                />
              </div>
            </div>
            {/* User Type */}
            <div>
              <div className='flex items-center gap-2 mb-1'>
                <Briefcase
                  size={20}
                  color='#6B7280'
                  className='text-blue-600'
                />
                <span className='text-base font-medium text-[#6B7280]'>
                  User Type
                </span>
                <span className='text-red-500 text-sm'>*</span>
                <span className='text-sm text-[#9CA3AF]'>
                  (Select all that apply)
                </span>
              </div>
              <p className='text-xs text-[#9CA3AF] mb-3'>
                Select your business type(s) to help us tailor your onboarding
                experience
              </p>
              <div className='grid grid-cols-1 xl:grid-cols-2 gap-2'>
                {userTypes.map((type) => {
                  // const active = selectedTypes.includes(type.id);
                  return (
                    <button
                      key={type.id}
                      type='button'
                      onClick={() => toggleType(type.id)}
                      className='text-left rounded-lg transition-all'>
                      {/* <InfoCard
                        icon={type.icon}
                        title={type.label}
                        description={type.description}
                        contentLayout='row'
                        className={
                          active
                            ? "rounded-lg border border-blue-500 bg-blue-50"
                            : "rounded-lg border border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50/40"
                        }
                        contentClassName='p-2.5 space-y-0'
                        rowClassName='items-start gap-2.5'
                        iconWrapperClassName={
                          active
                            ? "mt-0.5 h-auto w-auto rounded-none bg-transparent p-0 text-blue-600 [&>svg]:h-4 [&>svg]:w-4"
                            : "mt-0.5 h-auto w-auto rounded-none bg-transparent p-0 text-gray-400 [&>svg]:h-4 [&>svg]:w-4"
                        }
                        titleClassName='text-[12px] font-semibold text-gray-800 leading-tight mb-0.5'
                        descriptionClassName='text-[11px] text-gray-500 leading-snug'
                      /> */}
                      <InfoCard
                        icon={type.icon}
                        title={type.label}
                        titleClassName='text-[16px]'
                        subtitle={type.description}
                        subtitleClassName='text-[#9CA3AF] text-[10px]'
                        iconBgClassName='bg-[#B4CDF7]'
                        className='bg-[linear-gradient(110deg,#F5F8FF_0%,#DBEAFE_60%)] border border-[#E5E7EB] hover:border-[#b0b1b6] rounded-[10px]! -py-20 cursor-pointer'
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Privacy (required) */}
            <div className='flex items-start gap-3'>
              <label className='flex items-start gap-3 cursor-pointer'>
                <input
                  type='checkbox'
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className='mt-1 w-4 h-4 border-gray-300 rounded accent-background checked:bg-blue-900 checked:border-blue-900 focus:ring-blue-500'
                />
                <span className='text-sm text-[#6B7280]'>
                  I agree to the{" "}
                  <button
                    type='button'
                    onClick={openPrivacyPolicy}
                    className='text-(--text-primary) hover:underline font-medium'>
                    Privacy Policy
                  </button>{" "}
                  and consent to Renewably UK contacting me about my application
                  and services.
                </span>
              </label>
            </div>
            <div className='w-full flex justify-center my-2' ref={wrapperRef}>
              {siteKey ? (
                <div className='w-full overflow-hidden flex justify-center'>
                  <div
                    ref={innerRef}
                    style={{
                      width: `${WIDGET_WIDTH}px`,
                      transform: `scale(${scale})`,
                      transformOrigin: "center top",
                      margin: "0 auto",
                    }}>
                    <ReCAPTCHA
                      sitekey={siteKey}
                      onChange={(token) => setCaptchaToken(token)}
                      onExpired={() => setCaptchaToken(null)}
                      onErrored={() => setCaptchaToken(null)}
                    />
                  </div>
                </div>
              ) : (
                <p className='text-sm text-red-500 w-full text-center'>
                  ReCAPTCHA site key is missing. Set
                  NEXT_PUBLIC_CAPTCHA_SITE_KEY in your environment (.env.local)
                  to enable captcha.
                </p>
              )}
            </div>
            {/* Submit */}
            <button
              type='button'
              disabled={!consent || (siteKey ? !captchaToken : true)}
              className={`w-full py-3 text-white font-semibold rounded-[10px] text-xl transition-colors ${
                consent && (siteKey ? !!captchaToken : false)
                  ? "bg-background hover:bg-background active:bg-blue-900"
                  : "bg-gray-300 cursor-not-allowed"
              }`}>
              Sign Up
            </button>

            <p className='text-center text-base text-gray-500'>
              Already have an account?{" "}
              <Link
                href='/login'
                className='text-(--text-primary) hover:underline font-semibold'>
                Sign In
              </Link>
            </p>
          </div>
        </div>

        {/* ─── RIGHT: Info Panel ─── */}
        <div className='flex flex-col gap-4 lg:sticky lg:top-24 lg:self-start'>
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
                subTitleClassName='text-(--text-muted) font-medium text-base text-center max-w-[400px] mx-auto mb-3'
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
