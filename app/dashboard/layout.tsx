/**
 * @fileoverview Dashboard layout — matches Figma "Dashboard" frame.
 *
 * Structure:
 * - Left sidebar (250px, #EAF1FD background) with logo + nav items
 * - Main content area (flex-1, white background)
 *
 * Sidebar nav items: Dashboard, Submissions, Documents, Tickets,
 * Create Certificate, My Certificates, Profile
 */

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/shared/logo";
import {
  LayoutDashboard,
  FileText,
  FolderOpen,
  Ticket,
  PlusCircle,
  Award,
  User,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";

/** A single sidebar navigation item */
interface SidebarItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

/** Dashboard sidebar navigation links */
const SIDEBAR_ITEMS: SidebarItem[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: <LayoutDashboard className="h-5 w-5" />,
  },
  {
    label: "Submissions",
    href: "/dashboard/submissions",
    icon: <FileText className="h-5 w-5" />,
  },
  {
    label: "Documents",
    href: "/dashboard/documents",
    icon: <FolderOpen className="h-5 w-5" />,
  },
  {
    label: "Tickets",
    href: "/dashboard/tickets",
    icon: <Ticket className="h-5 w-5" />,
  },
  {
    label: "Create Certificate",
    href: "/dashboard/create-insurance",
    icon: <PlusCircle className="h-5 w-5" />,
  },
  {
    label: "My Certificates",
    href: "/dashboard/insurance-certificates",
    icon: <Award className="h-5 w-5" />,
  },
  {
    label: "Profile",
    href: "/dashboard/profile",
    icon: <User className="h-5 w-5" />,
  },
];

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen">
      {/* ── Sidebar ── */}
      <aside className="flex w-[250px] shrink-0 flex-col bg-[#EAF1FD]">
        {/* Logo */}
        <div className="flex h-[77px] items-center px-6">
          <Logo variant="dark" />
        </div>

        {/* Navigation */}
        <nav className="flex flex-1 flex-col px-3 py-2">
          <ul className="flex flex-col gap-1">
            {SIDEBAR_ITEMS.map(({ label, href, icon }) => {
              const isActive =
                pathname === href ||
                (href !== "/dashboard" && pathname.startsWith(href));
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-[#0F47A8] text-white"
                        : "text-[#374151] hover:bg-[#B4CDF7]/50"
                    )}
                  >
                    {icon}
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Log out */}
          <div className="mt-auto pb-4">
            <Link
              href="/login"
              className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-[#374151] transition-colors hover:bg-[#B4CDF7]/50"
            >
              <LogOut className="h-5 w-5" />
              Log Out
            </Link>
          </div>
        </nav>
      </aside>

      {/* ── Main content ── */}
      <main className="flex-1 bg-[#F9FAFB]">{children}</main>
    </div>
  );
}
