/**
 * @fileoverview Contact Us page — matches Figma "Contact us" frame.
 *
 * Sections:
 * 1. Hero banner
 * 2. Contact form (name, email, subject, message)
 * 3. Speak to Our Team CTA card
 */

"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  /** Handle form field changes */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  /** Handle form submission */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-[#0F47A8] py-16">
        <div className="mx-auto max-w-[1240px] px-6">
          <h1 className="mb-3 text-4xl font-bold text-white">Contact Us</h1>
          <p className="max-w-[480px] text-base text-[#F3F4F6]">
            Have a question about our services or need support? Our team is
            ready to help.
          </p>
        </div>
      </section>

      {/* ── Contact layout ── */}
      <section className="bg-[#F9FAFB] py-16">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-10 px-6 lg:grid-cols-3">
          {/* Contact form */}
          <div className="lg:col-span-2">
            <div className="rounded-xl border border-[#E5E7EB] bg-white p-8 shadow-sm">
              <h2 className="mb-6 text-2xl font-bold text-[#030712]">
                Send Us a Message
              </h2>

              {submitted ? (
                <div className="rounded-lg bg-[#DCFCE7] p-6 text-center">
                  <p className="text-base font-semibold text-[#166534]">
                    Thank you! We&apos;ll be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-[#030712]"
                      >
                        Full Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className="rounded-lg border border-[#D1D5DB] px-4 py-2.5 text-sm text-[#030712] outline-none placeholder:text-[#9CA3AF] focus:border-[#0F47A8] focus:ring-2 focus:ring-[#0F47A8]/20"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-[#030712]"
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="john@company.co.uk"
                        className="rounded-lg border border-[#D1D5DB] px-4 py-2.5 text-sm text-[#030712] outline-none placeholder:text-[#9CA3AF] focus:border-[#0F47A8] focus:ring-2 focus:ring-[#0F47A8]/20"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium text-[#030712]"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formState.subject}
                      onChange={handleChange}
                      className="rounded-lg border border-[#D1D5DB] px-4 py-2.5 text-sm text-[#030712] outline-none focus:border-[#0F47A8] focus:ring-2 focus:ring-[#0F47A8]/20"
                    >
                      <option value="">Select a topic</option>
                      <option value="insurance">Insurance Backed Guarantees</option>
                      <option value="funding">Funding Schemes</option>
                      <option value="accreditation">Accreditation</option>
                      <option value="technical">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-[#030712]"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help..."
                      className="resize-none rounded-lg border border-[#D1D5DB] px-4 py-2.5 text-sm text-[#030712] outline-none placeholder:text-[#9CA3AF] focus:border-[#0F47A8] focus:ring-2 focus:ring-[#0F47A8]/20"
                    />
                  </div>

                  <button
                    type="submit"
                    className="self-start rounded-lg bg-[#0F47A8] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0d3d90]"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Speak to our team */}
          <div className="flex flex-col gap-6">
            <div className="rounded-xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-lg font-semibold text-[#030712]">
                Speak to Our Team
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-[#6B7280]">
                Prefer to talk? Our expert team is available Monday to Friday,
                9am–5pm.
              </p>
              <a
                href="mailto:hello@renewablyuk.com"
                className="block rounded-lg bg-[#0F47A8] px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#0d3d90]"
              >
                hello@renewablyuk.com
              </a>
            </div>

            <div className="rounded-xl border border-[#E5E7EB] bg-[#EAF1FD] p-6">
              <h3 className="mb-2 text-base font-semibold text-[#0F47A8]">
                Quick Response Guarantee
              </h3>
              <p className="text-sm leading-relaxed text-[#6B7280]">
                We aim to respond to all enquiries within 1 business day.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
