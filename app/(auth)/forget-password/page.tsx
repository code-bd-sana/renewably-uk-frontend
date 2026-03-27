/**
 * @fileoverview Forgot Password page — matches Figma "Forgot Password" frame.
 *
 * Centred card layout with email input and submission to trigger a reset link.
 */

"use client";

import Link from "next/link";
import { useState } from "react";
import { Mail, ArrowLeft } from "lucide-react";
import Logo from "@/components/shared/logo";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F9FAFB] px-4">
      <div className="w-full max-w-[420px]">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <Logo variant="dark" />
        </div>

        <div className="rounded-2xl border border-[#E5E7EB] bg-white p-8 shadow-sm">
          {submitted ? (
            /* ── Success state ── */
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#DCFCE7]">
                <Mail className="h-7 w-7 text-[#166534]" />
              </div>
              <h2 className="mb-2 text-2xl font-bold text-[#030712]">
                Check Your Email
              </h2>
              <p className="mb-6 text-sm text-[#6B7280]">
                We&apos;ve sent a password reset link to{" "}
                <span className="font-medium text-[#030712]">{email}</span>.
                Please check your inbox and follow the instructions.
              </p>
              <Link
                href="/login"
                className="flex items-center gap-2 text-sm font-medium text-[#0F47A8] hover:underline"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Sign In
              </Link>
            </div>
          ) : (
            /* ── Form state ── */
            <>
              <div className="mb-6">
                <h2 className="mb-1 text-2xl font-bold text-[#030712]">
                  Forgot Password?
                </h2>
                <p className="text-sm text-[#6B7280]">
                  Enter your email address and we&apos;ll send you a link to
                  reset your password.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.co.uk"
                    className="rounded-lg border border-[#D1D5DB] px-4 py-3 text-sm text-[#030712] outline-none placeholder:text-[#9CA3AF] focus:border-[#0F47A8] focus:ring-2 focus:ring-[#0F47A8]/20"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-[#0F47A8] py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0d3d90]"
                >
                  Send Reset Link
                </button>
              </form>

              <div className="mt-4 flex justify-center">
                <Link
                  href="/login"
                  className="flex items-center gap-2 text-sm font-medium text-[#6B7280] hover:text-[#0F47A8]"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Sign In
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
