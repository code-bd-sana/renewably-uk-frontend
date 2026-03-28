import { ShieldCheck, Table2, CircleCheckBig } from "lucide-react";
import SectionHeader from "../shared/section-header";

const features = [
  "Submit projects in seconds",
  "Manage your customer data",
  "Track your submissions",
  "Manage your onboarding",
  "Fully aligned and compliant with Industry Standards",
];

const stats = [
  { label: "Certificates Generated", value: "250,000+" },
  { label: "Active Contractors", value: "500+" },
  { label: "Products Covered", value: "50+" },
];

export default function Commitment() {
  return (
    <section className='px-6 lg:px-25 py-15 w-full'>
      <div className='mx-auto'>
        {/* Header */}
        <div className='text-center mb-10'>
          <SectionHeader
            title='Our Commitment'
            subTitle='Supporting the Renewable Energy Sectors and the UK’s commitment to Net Zero'
            titleClassName='text-[#030712] text-[32px]'
            subTitleClassName='text-(--text-muted) font-medium max-w-[900px] mx-auto text-[18px] font-interFont'
          />
        </div>

        {/* Two-column content */}
        <div className='mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch'>
          {/* Left Column */}
          <div className='p-6 md:p-8 h-full'>
            {/* Icon + Title */}
            <div className='flex items-center gap-4 mb-6'>
              <div className='w-14 h-14 flex items-center justify-center shrink-0 bg-[#B4CDF7] rounded-[10px]'>
                <Table2 className='w-7 h-7' color='#0F47A8' />
              </div>
              <div>
                <p className='text-[#030712] font-semibold text-lg'>
                  Designed for Installation Companies.
                </p>
                <p className='text-(--text-muted) text-sm'>
                  Built for Compliance.
                </p>
              </div>
            </div>

            {/* Feature List */}
            <ul className='space-y-3'>
              {features.map((feature) => (
                <li
                  key={feature}
                  className='flex items-center gap-3 text-(--text-accent) text-sm md:text-base'>
                  <span className='w-6 h-6 rounded-full flex items-center justify-center shrink-0'>
                    <CircleCheckBig
                      className='w-5 h-5 text-(--text-primary) shrink-0'
                      color='#0F47A8'
                    />
                  </span>
                  <span className='text-(--text-muted) font-medium'>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div className='p-6 md:p-8 h-full'>
            {/* Icon + Title */}
            <div className='flex items-center gap-4 mb-6'>
              <div className='w-14 h-14 flex items-center justify-center shrink-0 bg-[#B4CDF7] rounded-[10px]'>
                <ShieldCheck className='w-7 h-7' color='#0F47A8' />
              </div>
              <div>
                <p className='text-[#030712] font-semibold text-lg'>
                  Industry Leading
                </p>
                <p className='text-(--text-muted) text-sm'>
                  Trusted by hundreds of installers
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className='divide-y divide-[#CFE0FD] border-t border-[#CFE0FD]'>
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className='flex items-center justify-between py-4 gap-4'>
                  <span className=' text-(--text-muted) font-medium text-sm md:text-base'>
                    {stat.label}
                  </span>
                  <span className='text-(--text-primary) font-semibold text-sm md:text-base shrink-0'>
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
