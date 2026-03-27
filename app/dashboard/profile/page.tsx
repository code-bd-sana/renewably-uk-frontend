/**
 * @fileoverview Profile page — matches Figma "Profile" frame.
 *
 * Editable profile with personal information, company details and
 * accreditation membership numbers.
 */

"use client";

import { useState } from "react";
import { User } from "lucide-react";

export default function ProfilePage() {
  const [form, setForm] = useState({
    firstName: "John",
    lastName: "Smith",
    email: "john.smith@example.co.uk",
    phone: "07700 900 123",
    company: "Smith Renewables Ltd",
    companyNumber: "12345678",
    vatNumber: "GB123456789",
    mcsNumber: "MCS-098765",
    trustmark: "TM-001234",
    addressLine1: "Unit 4, Innovation Park",
    addressLine2: "Birmingham",
    postcode: "B1 1AB",
  });

  /** Handle input field changes */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="p-8">
      <div className="mb-6 flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#EAF1FD]">
          <User className="h-8 w-8 text-[#0F47A8]" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-[#030712]">
            {form.firstName} {form.lastName}
          </h1>
          <p className="text-sm text-[#6B7280]">{form.company}</p>
        </div>
      </div>

      <form className="flex flex-col gap-6">
        {/* ── Personal Information ── */}
        <section className="rounded-xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-base font-semibold text-[#030712]">
            Personal Information
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {[
              { id: "firstName", label: "First Name", placeholder: "John" },
              { id: "lastName", label: "Last Name", placeholder: "Smith" },
              { id: "email", label: "Email Address", placeholder: "john@example.co.uk" },
              { id: "phone", label: "Phone Number", placeholder: "07700 900 123" },
            ].map(({ id, label, placeholder }) => (
              <div key={id} className="flex flex-col gap-2">
                <label htmlFor={id} className="text-sm font-medium text-[#030712]">
                  {label}
                </label>
                <input
                  id={id}
                  name={id}
                  type={id === "email" ? "email" : "text"}
                  value={form[id as keyof typeof form]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className="rounded-lg border border-[#D1D5DB] px-4 py-3 text-sm text-[#030712] outline-none placeholder:text-[#9CA3AF] focus:border-[#0F47A8] focus:ring-2 focus:ring-[#0F47A8]/20"
                />
              </div>
            ))}
          </div>
        </section>

        {/* ── Company Information ── */}
        <section className="rounded-xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-base font-semibold text-[#030712]">
            Company Information
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {[
              { id: "company", label: "Company Name", placeholder: "Smith Renewables Ltd" },
              { id: "companyNumber", label: "Company Number", placeholder: "12345678" },
              { id: "vatNumber", label: "VAT Number", placeholder: "GB123456789" },
              { id: "addressLine1", label: "Business Address", placeholder: "Unit 4, Innovation Park" },
              { id: "addressLine2", label: "Town / City", placeholder: "Birmingham" },
              { id: "postcode", label: "Postcode", placeholder: "B1 1AB" },
            ].map(({ id, label, placeholder }) => (
              <div key={id} className="flex flex-col gap-2">
                <label htmlFor={id} className="text-sm font-medium text-[#030712]">
                  {label}
                </label>
                <input
                  id={id}
                  name={id}
                  type="text"
                  value={form[id as keyof typeof form]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className="rounded-lg border border-[#D1D5DB] px-4 py-3 text-sm text-[#030712] outline-none placeholder:text-[#9CA3AF] focus:border-[#0F47A8] focus:ring-2 focus:ring-[#0F47A8]/20"
                />
              </div>
            ))}
          </div>
        </section>

        {/* ── Accreditations ── */}
        <section className="rounded-xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-base font-semibold text-[#030712]">
            Accreditations
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {[
              { id: "mcsNumber", label: "MCS Number", placeholder: "MCS-XXXXXX" },
              { id: "trustmark", label: "TrustMark Number", placeholder: "TM-XXXXXX" },
            ].map(({ id, label, placeholder }) => (
              <div key={id} className="flex flex-col gap-2">
                <label htmlFor={id} className="text-sm font-medium text-[#030712]">
                  {label}
                </label>
                <input
                  id={id}
                  name={id}
                  type="text"
                  value={form[id as keyof typeof form]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className="rounded-lg border border-[#D1D5DB] px-4 py-3 text-sm text-[#030712] outline-none placeholder:text-[#9CA3AF] focus:border-[#0F47A8] focus:ring-2 focus:ring-[#0F47A8]/20"
                />
              </div>
            ))}
          </div>
        </section>

        {/* ── Save ── */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="rounded-lg bg-[#0F47A8] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0d3d90]"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
