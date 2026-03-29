"use client";

import { motion } from "framer-motion";
import { Award, FileText, TrendingUp, UserPlus } from "lucide-react";
import SectionHeader from "../shared/section-header";
import { Button } from "../ui/button";

const steps = [
  {
    id: 1,
    icon: <UserPlus color='#FFFFFF' size={20} />,
    title: "Onboard",
    text: "Join the Renewably UK network in minutes. Upload your compliance documentation, business details, and accreditation evidence through our streamlined digital process.",
  },
  {
    id: 2,
    icon: <Award color='#FFFFFF' size={20} />,
    title: "Generate IBGs",
    text: "Create Insurance Backed Guarantees instantly for every project. Policy documents auto-deliver to customers, certificates download immediately, and all records store securely in your platform.",
  },
  {
    id: 3,
    icon: <FileText color='#FFFFFF' size={20} />,
    title: "Submit Projects",
    text: "Submit new projects with just a few clicks. Enter customer and installation details, monitor project status, and access all associated IBG documentation from one central dashboard.",
  },
  {
    id: 4,
    icon: <TrendingUp color='#FFFFFF' size={20} />,
    title: "Grow",
    text: "Expand your installations with complete infrastructure support. Access real-time analytics, leverage your IBG track record for marketing, and grow knowing every customer is fully protected.",
  },
];

export default function HowItWorks() {
  return (
    <section className='w-full bg-white py-15'>
      <div className='mx-auto w-full max-w-350 px-6 lg:px-10'>
        {/* Heading (UNCHANGED) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-20'>
          <SectionHeader
            title='How It Works'
            subTitle='A simple, structured onboarding process designed for professional installers'
            subTitleClassName='text-(--text-muted) font-medium'
          />
        </motion.div>

        {/* ================= DESKTOP ================= */}
        <div className='relative hidden xl:grid grid-cols-[minmax(0,1fr)_80px_minmax(0,1fr)] gap-y-16'>
          {/* Vertical dotted line */}
          <div className='absolute left-1/2 top-0 -translate-x-1/2 h-full border-l-2 border-dashed border-[#0F47A8]/60 pointer-events-none' />

          {steps.map((step, i) => (
            <div key={step.id} className='contents'>
              {/* Left Title */}

              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className='flex min-w-0 items-center justify-start'>
                <p className='bg-background p-3 rounded-full mr-4'>
                  {step.icon}
                </p>
                <h3 className='text-[32px] font-semibold text-[#0F47A8] max-w-104 text-left leading-tight'>
                  {step.title}
                </h3>
              </motion.div>

              {/* Center Number */}
              <div className='flex items-center justify-center'>
                <div className='w-8 h-8 rounded-full bg-[#0F47A8] text-white text-[14px] font-semibold flex items-center justify-center z-10'>
                  {step.id}
                </div>
              </div>

              {/* Right Card */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className='
                  w-full
                  max-w-lg
                  rounded-[10px]
                  border
                  border-[#0F47A8]
                 hover:border-[#b0b1b6]
                  bg-linear-to-r
                  from-[#F5F9FF]
                  to-[#DCEBFF]
                  p-6
                  ml-18
                  flex items-center
                '>
                <p className='text-base leading-[1.6] text-[#1E3A8A]'>
                  {step.text}
                </p>
              </motion.div>
            </div>
          ))}
        </div>

        {/* ================= MOBILE & TABLET ================= */}
        <div className='xl:hidden flex flex-col gap-10'>
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className='flex flex-col gap-4'>
              {/* Number + Title */}
              <div className='flex items-center gap-3'>
                <div className='w-9 h-9 p-1 rounded-full bg-[#0F47A8] text-white text-[13px] font-semibold flex items-center justify-center'>
                  {step.icon}
                </div>
                <h3 className='text-[20px] font-semibold text-[#0F47A8]'>
                  {step.title}
                </h3>
              </div>

              {/* Card */}
              <div
                className='
                  w-full
                  rounded-[10px]
                  border
                  border-[#0F47A8]
                  bg-linear-to-r
                  from-[#F5F9FF]
                  to-[#DCEBFF]
                  p-6
                '>
                <p className='text-[14px] leading-[1.6] text-[#1E3A8A]'>
                  {step.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className='max-w-120 mx-auto mt-12 text-base text-center'>
        <p className=' text-[#9CA3AF] font-interFont font-medium pb-4'>
          Ready to strengthen your professional infrastructure?
        </p>
        <Button className='bg-background text-white rounded-[6px] px-6 py-5 cursor-pointer'>
          Start Your Onboarding
        </Button>
      </div>
    </section>
  );
}
