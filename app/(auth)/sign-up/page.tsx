/**
 * @fileoverview Sign Up page — matches Figma "Sign up" frame exactly.
 *
 * Layout: split screen — left panel (brand info), right panel (registration form).
 * Form fields: first name, last name, email, company name, password, confirm password.
 * Shows "Join Renewably UK" heading + "Begin Your Onboarding Journey" subtitle.
 */

"use client";

import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Logo from "@/components/shared/logo";

/** Feature badges reused from the login page left panel */
const FEATURE_BADGES = [
  {
    bgColor: "bg-[#DCFCE7]",
    text: "Instant IBG certificate generation for every installation",
  },
  {
    bgColor: "bg-[#FEF9C3]",
    text: "Full ECO4, GBIS, and LA Flex funding scheme compliance",
  },
  {
    bgColor: "bg-[#B4CDF7]",
    text: "Secure document storage with ICO-compliant data handling",
  },
];

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    password: "",
    confirmPassword: "",
  });

  /** Toggle password field visibility */
  const togglePasswordVisibility = () => setShowPassword((v) => !v);

  /** Handle field changes */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="flex min-h-screen">
      {/* ── Left brand panel ── */}
      <div className="hidden w-[45%] flex-col justify-center bg-[#F9FAFB] px-16 lg:flex">
        <div className="mb-12">
          <Logo variant="dark" linked={false} />
        </div>
        <h1 className="mb-4 max-w-[380px] text-4xl font-bold leading-tight text-[#030712]">
          Supporting Your Renewable Energy Business
        </h1>
        <p className="mb-10 max-w-[380px] text-sm text-[#6B7280]">
          Comprehensive solutions and support for your renewal energy
          installation business.
        </p>
        <div className="flex flex-col gap-3">
          {FEATURE_BADGES.map(({ bgColor, text }) => (
            <div
              key={text}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 ${bgColor}`}
            >
              <p className="text-sm text-[#030712]">{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Right form panel ── */}
      <div className="flex flex-1 items-center justify-center bg-white px-6 py-12">
        <div className="w-full max-w-[410px]">
          {/* Mobile logo */}
          <div className="mb-8 lg:hidden">
            <Logo variant="dark" />
          </div>

          <div className="mb-8">
            <h2 className="mb-1 text-3xl font-bold text-[#030712]">
              Join Renewably UK
            </h2>
            <p className="text-sm text-[#6B7280]">
              Begin Your Onboarding Journey to Professional Renewable Energy
              Installation
            </p>
          </div>

          <form className="flex flex-col gap-4">
            {/* Name row */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="firstName"
                  className="text-sm font-medium text-[#030712]"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  className="rounded-lg border border-[#D1D5DB] px-4 py-3 text-sm text-[#030712] outline-none placeholder:text-[#9CA3AF] focus:border-[#0F47A8] focus:ring-2 focus:ring-[#0F47A8]/20"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="lastName"
                  className="text-sm font-medium text-[#030712]"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Smith"
                  className="rounded-lg border border-[#D1D5DB] px-4 py-3 text-sm text-[#030712] outline-none placeholder:text-[#9CA3AF] focus:border-[#0F47A8] focus:ring-2 focus:ring-[#0F47A8]/20"
                />
              </div>
            </div>

            {/* Email */}
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
                value={form.email}
                onChange={handleChange}
                placeholder="you@company.co.uk"
                className="rounded-lg border border-[#D1D5DB] px-4 py-3 text-sm text-[#030712] outline-none placeholder:text-[#9CA3AF] focus:border-[#0F47A8] focus:ring-2 focus:ring-[#0F47A8]/20"
              />
            </div>

            {/* Company */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="company"
                className="text-sm font-medium text-[#030712]"
              >
                Company Name
              </label>
              <input
                id="company"
                name="company"
                type="text"
                required
                value={form.company}
                onChange={handleChange}
                placeholder="Your Installation Ltd"
                className="rounded-lg border border-[#D1D5DB] px-4 py-3 text-sm text-[#030712] outline-none placeholder:text-[#9CA3AF] focus:border-[#0F47A8] focus:ring-2 focus:ring-[#0F47A8]/20"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="password"
                className="text-sm font-medium text-[#030712]"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Min. 8 characters"
                  className="w-full rounded-lg border border-[#D1D5DB] px-4 py-3 pr-11 text-sm text-[#030712] outline-none placeholder:text-[#9CA3AF] focus:border-[#0F47A8] focus:ring-2 focus:ring-[#0F47A8]/20"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#6B7280]"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-2 w-full rounded-lg bg-[#0F47A8] py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0d3d90]"
            >
              Create Account
            </button>

            {/* Sign-in link */}
            <p className="text-center text-sm text-[#6B7280]">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-medium text-[#0F47A8] hover:underline"
              >
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
