"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { Lock, CheckCircle, XCircle } from "lucide-react";
import Link from "next/link";

export default function ResetPasswordPage() {
  const searchParams = useSearchParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [tokenValid, setTokenValid] = useState<boolean | null>(null);
  const [token, setToken] = useState("");

  useEffect(() => {
    const nextToken = searchParams.get("token") || "";

    setToken(nextToken);
    setTokenValid(Boolean(nextToken));
  }, [searchParams]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!token) {
      setError("Reset token is missing. Please request a new link.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);

    try {
      if (typeof window !== "undefined") {
        window.localStorage.setItem(
          "renewably-uk-reset-password",
          JSON.stringify({
            token,
            password,
            updatedAt: new Date().toISOString(),
          }),
        );
      }

      setSuccess(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (tokenValid === null) {
    return (
      <div className='min-h-screen bg-gray-50 flex items-center justify-center'>
        <div className='text-center'>
          <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-[#0F47A8] mx-auto'></div>
          <p className='mt-4 text-gray-600'>Verifying reset link...</p>
        </div>
      </div>
    );
  }

  if (!tokenValid) {
    return (
      <div className='min-h-screen bg-gray-50 flex items-center justify-center px-4'>
        <div className='bg-white rounded-lg border border-gray-200 p-8 shadow-sm max-w-md w-full text-center'>
          <div className='mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4'>
            <XCircle className='w-8 h-8 text-red-600' />
          </div>
          <h3 className='text-xl font-bold text-gray-900 mb-2'>
            Invalid or Expired Link
          </h3>
          <p className='text-gray-600 mb-6'>
            This password reset link is invalid or has expired. Please request a
            new one.
          </p>
          <Link
            href='/forgot-password'
            className='inline-block bg-[#0F47A8] hover:bg-blue-900 text-white font-medium py-2 px-6 rounded-lg'>
            Request New Link
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-gray-50 flex items-center justify-center px-4'>
      <div className='w-full max-w-md'>
        <div className='bg-white rounded-lg border border-gray-200 p-8 shadow-sm'>
          {success ? (
            <div className='text-center space-y-4'>
              <div className='mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center'>
                <CheckCircle className='w-8 h-8 text-green-600' />
              </div>
              <h3 className='text-xl font-bold text-gray-900'>
                Password Reset Successful
              </h3>
              <p className='text-gray-600'>
                Your password has been updated successfully.
              </p>
              <Link
                href='/login'
                className='inline-block mt-4 bg-[#0F47A8] hover:bg-blue-900 text-white font-medium py-2 px-6 rounded-lg'>
                Go to Login
              </Link>
            </div>
          ) : (
            <>
              <div className='text-center mb-6'>
                <h2 className='text-2xl font-bold text-gray-900 mb-2'>
                  Set New Password
                </h2>
                <p className='text-gray-600 text-sm'>
                  Enter your new password below
                </p>
              </div>

              <form onSubmit={handleSubmit} className='space-y-5'>
                {error && (
                  <div className='bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm'>
                    {error}
                  </div>
                )}

                <div>
                  <label
                    htmlFor='password'
                    className='block text-sm font-medium text-gray-700 mb-2'>
                    New Password
                  </label>
                  <div className='relative'>
                    <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                      <Lock className='h-5 w-5 text-gray-400' />
                    </div>
                    <input
                      id='password'
                      type='password'
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className='block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F47A8] focus:border-[#0F47A8]'
                      placeholder='Enter new password'
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor='confirmPassword'
                    className='block text-sm font-medium text-gray-700 mb-2'>
                    Confirm New Password
                  </label>
                  <div className='relative'>
                    <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                      <Lock className='h-5 w-5 text-gray-400' />
                    </div>
                    <input
                      id='confirmPassword'
                      type='password'
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className='block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F47A8] focus:border-[#0F47A8]'
                      placeholder='Confirm new password'
                    />
                  </div>
                </div>

                <button
                  type='submit'
                  disabled={loading}
                  className='w-full bg-[#0F47A8] hover:bg-blue-900 text-white font-medium py-2.5 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0F47A8] disabled:opacity-50 disabled:cursor-not-allowed'>
                  {loading ? "Updating..." : "Reset Password"}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
