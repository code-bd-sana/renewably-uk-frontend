"use client";

import { motion } from "framer-motion";
import { FileCheck, FileText, TrendingUp, Upload } from "lucide-react";
import SectionHeader from "../shared/section-header";
import { Button } from "../ui/button";

const steps = [
  {
    id: 1,
    icon: <Upload color='#FFFFFF' size={20} />,
    title: "Submit New Project",
    text: "Enter customer details, installation type, and project information through our simple digital form. Takes less than 2 minutes. All data captured in a structured, compliant format automatically.",
  },
  {
    id: 2,
    icon: <FileCheck color='#FFFFFF' size={20} />,
    title: "Generate IBG Instantly",
    text: "Click 'Generate IBG' and the system creates a fully compliant Insurance Backed Guarantee. Customer policy document auto-emails, installer certificate downloads immediately, all records saved to project folder.",
  },
  {
    id: 3,
    icon: <FileText color='#FFFFFF' size={20} />,
    title: "Upload Supporting Documents",
    text: "Drag and drop installation photos, compliance certificates, planning approvals, customer contracts — anything relevant. Documents auto-categorise, attach to project, and become instantly searchable.",
  },
  {
    id: 4,
    icon: <TrendingUp color='#FFFFFF' size={20} />,
    title: "Track & Access Anytime",
    text: "Monitor project status from your dashboard. Need a document for an audit? Search and download in seconds. Want to share IBG proof with a customer? Generate a secure share link. Everything audit-ready, instantly accessible.",
  },
];

export default function HowPlatformWorks() {
  return (
    <section className='w-full bg-[#EAF1FD] py-15'>
      <div className='max-w-388 mx-auto px-4'>
        {/* Heading (UNCHANGED) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-20'>
          <SectionHeader
            title='How the Platform Works'
            subTitle='A streamlined workflow from project submission to IBG delivery'
            subTitleClassName='text-(--text-muted) font-medium'
          />
        </motion.div>

        {/* ================= DESKTOP ================= */}
        <div className='relative hidden xl:grid grid-cols-[1fr_80px_1fr] gap-y-16'>
          {/* Vertical dotted line */}
          <div className='absolute left-1/2 top-0 -translate-x-1/2 h-full border-l-2 border-dashed border-[#0F47A8]/60' />

          {steps.map((step, i) => (
            <div key={step.id} className='contents'>
              {/* Left Title */}

              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className='flex items-center justify-end pr-6'>
                <p className='bg-background p-3 rounded-full mr-4'>
                  {step.icon}
                </p>
                <h3 className='text-[28px]  mr-30 text-[#0F47A8] w-100 leading-tight'>
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
                  w-125
                  
                  rounded-[12px]
                  border
                  border-[#0F47A8]
                  bg-background
                  p-6
                  ml-10
                  flex items-center
                '>
                <p className='text-[13px] leading-[1.6] text-white'>
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
                  bg-background
                  p-6
                '>
                <p className='text-[14px] leading-[1.6] text-white'>
                  {step.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
