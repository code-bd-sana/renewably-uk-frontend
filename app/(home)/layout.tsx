/**
 * @fileoverview Layout for public (home) routes.
 * Wraps all public pages with the shared Navbar and Footer.
 */

import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";

export default function HomeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
