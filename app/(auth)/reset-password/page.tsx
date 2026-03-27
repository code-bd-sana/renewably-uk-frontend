/**
 * @fileoverview Reset Password page — matches Figma "Reset Password" frame.
 *
 * Centred card with new password + confirm password fields and a toggle for visibility.
 * In production this page would receive a token via query param.
 */

"use client";

import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff, CheckCircle } from "lucide-react";
import Logo from "@/components/shared/logo";

export default function ResetPasswordPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ password: "", confirmPassword: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

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
                <CheckCircle className="h-7 w-7 text-[#166534]" />
              </div>
              <h2 className="mb-2 text-2xl font-bold text-[#030712]">
                Password Reset
              </h2>
              <p className="mb-6 text-sm text-[#6B7280]">
                Your password has been updated successfully. You can now sign in
                with your new password.
              </p>
              <Link
                href="/login"
                className="w-full rounded-lg bg-[#0F47A8] py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#0d3d90]"
              >
                Sign In
              </Link>
            </div>
          ) : (
            /* ── Form state ── */
            <>
              <div className="mb-6">
                <h2 className="mb-1 text-2xl font-bold text-[#030712]">
                  Reset Your Password
                </h2>
                <p className="text-sm text-[#6B7280]">
                  Enter your new password below.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* New password */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-[#030712]"
                  >
                    New Password
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
                      onClick={() => setShowPassword((v) => !v)}
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

                {/* Confirm password */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="confirmPassword"
                    className="text-sm font-medium text-[#030712]"
                  >
                    Confirm Password
                  </label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showPassword ? "text" : "password"}
                    required
                    value={form.confirmPassword}
                    onChange={handleChange}
                    placeholder="Repeat your new password"
                    className="w-full rounded-lg border border-[#D1D5DB] px-4 py-3 text-sm text-[#030712] outline-none placeholder:text-[#9CA3AF] focus:border-[#0F47A8] focus:ring-2 focus:ring-[#0F47A8]/20"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full rounded-lg bg-[#0F47A8] py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0d3d90]"
                >
                  Reset Password
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
