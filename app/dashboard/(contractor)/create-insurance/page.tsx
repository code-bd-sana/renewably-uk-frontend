/**
 * @fileoverview Create Certificate page — matches Figma "Create Insurance" frame.
 *
 * Multi-section form for generating a new IBG certificate:
 * - Property details (address, postcode, property type)
 * - Measure details (type, install date)
 * - Installer details (company name, MCS number)
 * - Scheme (ECO4, GBIS, LA Flex)
 */

"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

/** Instalation measure options */
const MEASURE_TYPES = [
  "Air Source Heat Pump",
  "Ground Source Heat Pump",
  "Solar PV",
  "External Wall Insulation",
  "Cavity Wall Insulation",
  "Loft Insulation",
  "Underfloor Insulation",
  "Solar Thermal",
];

const SCHEME_OPTIONS = ["ECO4", "GBIS", "LA Flex", "HUG2", "Self-funded"];
const PROPERTY_TYPES = ["Detached", "Semi-Detached", "Terraced", "Flat/Apartment", "Bungalow"];

export default function CreateInsurancePage() {
  const [form, setForm] = useState({
    addressLine1: "",
    addressLine2: "",
    town: "",
    postcode: "",
    propertyType: "",
    measureType: "",
    installDate: "",
    scheme: "",
    companyName: "",
    mcsNumber: "",
  });

  /** Handle any input or select field changes */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#030712]">
          Create IBG Certificate
        </h1>
        <p className="text-sm text-[#6B7280]">
          Complete the form below to generate an Insurance Backed Guarantee
          certificate.
        </p>
      </div>

      <form className="flex flex-col gap-6">
        {/* ── Property Details ── */}
        <section className="rounded-xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-base font-semibold text-[#030712]">
            Property Details
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-2 md:col-span-2">
              <label
                htmlFor="addressLine1"
                className="text-sm font-medium text-[#030712]"
              >
                Address Line 1
              </label>
              <input
                id="addressLine1"
                name="addressLine1"
                type="text"
                required
                value={form.addressLine1}
                onChange={handleChange}
                placeholder="14 Oak Avenue"
                className="rounded-lg border border-[#D1D5DB] px-4 py-3 text-sm text-[#030712] outline-none placeholder:text-[#9CA3AF] focus:border-[#0F47A8] focus:ring-2 focus:ring-[#0F47A8]/20"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="town"
                className="text-sm font-medium text-[#030712]"
              >
                Town / City
              </label>
              <input
                id="town"
                name="town"
                type="text"
                required
                value={form.town}
                onChange={handleChange}
                placeholder="Birmingham"
                className="rounded-lg border border-[#D1D5DB] px-4 py-3 text-sm text-[#030712] outline-none placeholder:text-[#9CA3AF] focus:border-[#0F47A8] focus:ring-2 focus:ring-[#0F47A8]/20"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="postcode"
                className="text-sm font-medium text-[#030712]"
              >
                Postcode
              </label>
              <input
                id="postcode"
                name="postcode"
                type="text"
                required
                value={form.postcode}
                onChange={handleChange}
                placeholder="B2 4HT"
                className="rounded-lg border border-[#D1D5DB] px-4 py-3 text-sm text-[#030712] outline-none placeholder:text-[#9CA3AF] focus:border-[#0F47A8] focus:ring-2 focus:ring-[#0F47A8]/20"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="propertyType"
                className="text-sm font-medium text-[#030712]"
              >
                Property Type
              </label>
              <select
                id="propertyType"
                name="propertyType"
                required
                value={form.propertyType}
                onChange={handleChange}
                className="rounded-lg border border-[#D1D5DB] px-4 py-3 text-sm text-[#030712] outline-none focus:border-[#0F47A8] focus:ring-2 focus:ring-[#0F47A8]/20"
              >
                <option value="">Select property type</option>
                {PROPERTY_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </section>

        {/* ── Measure Details ── */}
        <section className="rounded-xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-base font-semibold text-[#030712]">
            Measure Details
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="measureType"
                className="text-sm font-medium text-[#030712]"
              >
                Measure Type
              </label>
              <select
                id="measureType"
                name="measureType"
                required
                value={form.measureType}
                onChange={handleChange}
                className="rounded-lg border border-[#D1D5DB] px-4 py-3 text-sm text-[#030712] outline-none focus:border-[#0F47A8] focus:ring-2 focus:ring-[#0F47A8]/20"
              >
                <option value="">Select measure type</option>
                {MEASURE_TYPES.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="installDate"
                className="text-sm font-medium text-[#030712]"
              >
                Installation Date
              </label>
              <input
                id="installDate"
                name="installDate"
                type="date"
                required
                value={form.installDate}
                onChange={handleChange}
                className="rounded-lg border border-[#D1D5DB] px-4 py-3 text-sm text-[#030712] outline-none focus:border-[#0F47A8] focus:ring-2 focus:ring-[#0F47A8]/20"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="scheme"
                className="text-sm font-medium text-[#030712]"
              >
                Funding Scheme
              </label>
              <select
                id="scheme"
                name="scheme"
                required
                value={form.scheme}
                onChange={handleChange}
                className="rounded-lg border border-[#D1D5DB] px-4 py-3 text-sm text-[#030712] outline-none focus:border-[#0F47A8] focus:ring-2 focus:ring-[#0F47A8]/20"
              >
                <option value="">Select scheme</option>
                {SCHEME_OPTIONS.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </section>

        {/* ── Installer Details ── */}
        <section className="rounded-xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-base font-semibold text-[#030712]">
            Installer Details
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="companyName"
                className="text-sm font-medium text-[#030712]"
              >
                Company Name
              </label>
              <input
                id="companyName"
                name="companyName"
                type="text"
                value={form.companyName}
                onChange={handleChange}
                placeholder="Your Installation Ltd"
                className="rounded-lg border border-[#D1D5DB] px-4 py-3 text-sm text-[#030712] outline-none placeholder:text-[#9CA3AF] focus:border-[#0F47A8] focus:ring-2 focus:ring-[#0F47A8]/20"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="mcsNumber"
                className="text-sm font-medium text-[#030712]"
              >
                MCS Registration Number
              </label>
              <input
                id="mcsNumber"
                name="mcsNumber"
                type="text"
                value={form.mcsNumber}
                onChange={handleChange}
                placeholder="MCS-XXXXXX"
                className="rounded-lg border border-[#D1D5DB] px-4 py-3 text-sm text-[#030712] outline-none placeholder:text-[#9CA3AF] focus:border-[#0F47A8] focus:ring-2 focus:ring-[#0F47A8]/20"
              />
            </div>
          </div>
        </section>

        {/* ── Submit ── */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="flex items-center gap-2 rounded-lg bg-[#0F47A8] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0d3d90]"
          >
            Generate Certificate
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </form>
    </div>
  );
}
