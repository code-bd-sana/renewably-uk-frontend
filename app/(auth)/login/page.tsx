/**
 * @fileoverview Login page — matches Figma "Log in" / "Sign in" frame exactly.
 *
 * Layout: split screen — left panel (brand info + feature highlights),
 * right panel (white card with form).
 *
 * Left: Logo, brand headline, 3 coloured feature badges.
 * Right: "Welcome Back" heading, email + password fields, sign-in button,
 *        forgot password link, sign-up link.
 */

"use client";

import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Logo from "@/components/shared/logo";

/** A feature highlight badge on the left panel */
interface FeatureBadge {
  bgColor: string;
  text: string;
}

const FEATURE_BADGES: FeatureBadge[] = [
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

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });

  /** Toggle password visibility */
  const togglePasswordVisibility = () => setShowPassword((v) => !v);

  /** Handle field changes */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="flex min-h-screen">
      {/* ── Left brand panel ── */}
      <div className="hidden w-[55%] flex-col justify-center bg-[#F9FAFB] px-16 lg:flex">
        <div className="mb-12">
          <Logo variant="dark" linked={false} />
        </div>

        <h1 className="mb-4 max-w-[440px] text-4xl font-bold leading-tight text-[#030712]">
          Supporting Your Renewable Energy Business
        </h1>
        <p className="mb-10 max-w-[440px] text-base text-[#6B7280]">
          Comprehensive solutions and support for your renewable energy
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
              Welcome Back
            </h2>
            <p className="text-sm text-[#6B7280]">Sign in to your account</p>
          </div>

          <form className="flex flex-col gap-5">
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

            {/* Password */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-[#030712]"
                >
                  Password
                </label>
                <Link
                  href="/forget-password"
                  className="text-xs text-[#0F47A8] hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
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
              Sign In
            </button>
          </form>

          {/* Sign-up link */}
          <p className="mt-6 text-center text-sm text-[#6B7280]">
            Don&apos;t have an account?{" "}
            <Link
              href="/sign-up"
              className="font-medium text-[#0F47A8] hover:underline"
            >
              Sign up
            </Link>
          </p>

          <p className="mt-6 text-center text-xs text-[#9CA3AF]">
            By signing in, you agree to our{" "}
            <Link href="#" className="hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="#" className="hover:underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
