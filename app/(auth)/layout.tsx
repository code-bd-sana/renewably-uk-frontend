/**
 * @fileoverview Layout for auth routes (login, sign-up, forgot/reset password).
 * Auth pages handle their own full-screen layout with split panels,
 * so this wrapper is intentionally minimal.
 */

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="min-h-screen">{children}</div>;
}
