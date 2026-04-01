"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactMessage() {
  const [agreed, setAgreed] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // handle submission
  };

  return (
    <section className='h-full bg-white rounded-2xl border border-[#E5E7EB] p-8 w-full shadow-sm'>
      <h2 className='text-2xl text-[#1e293b] font-semibold mb-1'>
        Send Us a Message
      </h2>
      <p className='text-base text-(--text-muted) mb-6'>
        Fill out the form below and our team will get back to you within 24
        hours.
      </p>

      <div className='flex flex-col gap-5'>
        {/* First & Last Name */}
        <div className='flex flex-col md:flex-row gap-4'>
          <div className='flex-1 flex flex-col gap-1'>
            <label className='text-base font-medium text-[#6B7280]'>
              First Name <span className='text-red-500'>*</span>
            </label>
            <input
              type='text'
              name='firstName'
              value={form.firstName}
              onChange={handleChange}
              placeholder='Enter your first name'
              className='border border-gray-200 rounded-[10px] px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-background focus:border-transparent transition'
            />
          </div>
          <div className='flex-1 flex flex-col gap-1'>
            <label className='text-base font-medium text-[#6B7280]'>
              Last Name <span className='text-red-500'>*</span>
            </label>
            <input
              type='text'
              name='lastName'
              value={form.lastName}
              onChange={handleChange}
              placeholder='Enter your last name'
              className='border border-gray-200 rounded-[10px] px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-background focus:border-transparent transition'
            />
          </div>
        </div>

        {/* Email */}
        <div className='flex flex-col gap-1'>
          <label className='text-base font-medium text-[#6B7280]'>
            Email Address <span className='text-red-500'>*</span>
          </label>
          <input
            type='email'
            name='email'
            value={form.email}
            onChange={handleChange}
            placeholder='Enter your email address'
            className='border border-gray-200 rounded-[10px] px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-background focus:border-transparent transition'
          />
        </div>

        {/* Phone */}
        <div className='flex flex-col gap-1'>
          <label className='text-base font-medium text-[#6B7280]'>
            Phone Number <span className='text-red-500'>*</span>
          </label>
          <input
            type='tel'
            name='phone'
            value={form.phone}
            onChange={handleChange}
            placeholder='Enter your phone number'
            className='border border-gray-200 rounded-[10px] px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-background focus:border-transparent transition'
          />
        </div>

        {/* Company */}
        <div className='flex flex-col gap-1'>
          <label className='text-base font-medium text-[#6B7280]'>
            Company Name <span className='text-red-500'>*</span>
          </label>
          <input
            type='text'
            name='company'
            value={form.company}
            onChange={handleChange}
            placeholder='Enter your company name'
            className='border border-gray-200 rounded-[10px] px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-background focus:border-transparent transition'
          />
        </div>

        {/* Subject */}
        <div className='flex flex-col gap-1'>
          <label className='text-base font-medium text-[#6B7280]'>
            Subject <span className='text-red-500'>*</span>
          </label>
          <input
            type='text'
            name='subject'
            value={form.subject}
            onChange={handleChange}
            placeholder='Enter your subject'
            className='border border-gray-200 rounded-[10px] px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-background focus:border-transparent transition'
          />
        </div>

        {/* Message */}
        <div className='flex flex-col gap-1'>
          <label className='text-base font-medium text-[#6B7280]'>
            Message <span className='text-red-500'>*</span>
          </label>
          <textarea
            name='message'
            value={form.message}
            onChange={handleChange}
            placeholder='Tell us how we can help you...'
            rows={4}
            className='border border-gray-200 rounded-[10px] px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-background focus:border-transparent transition resize-none'
          />
        </div>

        {/* Checkbox */}
        <div className='flex items-start gap-2.5'>
          <input
            type='checkbox'
            id='agree'
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className='mt-0.5 w-4 h-4 rounded border-gray-300 accent-background cursor-pointer'
          />
          <label
            htmlFor='agree'
            className='text-sm text-gray-600 leading-snug  max-w-140'>
            I agree to the{" "}
            <Link
              href='/privacy-policy'
              className='text-(--text-primary) underline'>
              Privacy Policy
            </Link>{" "}
            and consent to Renewably UK contacting me about my inquiry.
          </label>
        </div>

        {/* Submit */}
        <button
          onClick={handleSubmit}
          disabled={!agreed}
          className='w-full bg-background hover:bg-blue-900 disabled:opacity-60 disabled:cursor-not-allowed text-white text-xl py-3 rounded-[10px] transition cursor-pointer'>
          Send Message
        </button>
      </div>
    </section>
  );
}
