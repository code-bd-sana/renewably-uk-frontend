/**
 * @fileoverview Dashboard overview page — matches Figma "Dashboard" main frame.
 *
 * Layout: page header + 4 stat cards + recent submissions table + quick actions.
 * Colors follow the design system: #0F47A8 primary, #EAF1FD blue tints.
 */

import Link from "next/link";
import {
  FileText,
  Award,
  CheckCircle,
  Clock,
  PlusCircle,
  ArrowRight,
} from "lucide-react";

/** A summary stat card shown at the top of the dashboard */
interface StatCard {
  label: string;
  value: string;
  icon: React.ReactNode;
  bgColor: string;
  textColor: string;
}

const STAT_CARDS: StatCard[] = [
  {
    label: "Total Submissions",
    value: "24",
    icon: <FileText className="h-5 w-5" />,
    bgColor: "bg-[#EAF1FD]",
    textColor: "text-[#0F47A8]",
  },
  {
    label: "Active Certificates",
    value: "18",
    icon: <Award className="h-5 w-5" />,
    bgColor: "bg-[#DCFCE7]",
    textColor: "text-[#166534]",
  },
  {
    label: "Approved",
    value: "21",
    icon: <CheckCircle className="h-5 w-5" />,
    bgColor: "bg-[#FEF9C3]",
    textColor: "text-[#92400E]",
  },
  {
    label: "Pending Review",
    value: "3",
    icon: <Clock className="h-5 w-5" />,
    bgColor: "bg-[#FEE2E2]",
    textColor: "text-[#991B1B]",
  },
];

/** A recent submission row */
interface SubmissionRow {
  id: string;
  address: string;
  measure: string;
  date: string;
  status: "Approved" | "Pending" | "Rejected";
}

const RECENT_SUBMISSIONS: SubmissionRow[] = [
  {
    id: "SUB-001",
    address: "14 Oak Avenue, Birmingham B2 4HT",
    measure: "Air Source Heat Pump",
    date: "12 Mar 2026",
    status: "Approved",
  },
  {
    id: "SUB-002",
    address: "8 Elm Street, Manchester M14 5QR",
    measure: "External Wall Insulation",
    date: "10 Mar 2026",
    status: "Approved",
  },
  {
    id: "SUB-003",
    address: "22 Birch Close, Leeds LS1 2AB",
    measure: "Solar PV",
    date: "8 Mar 2026",
    status: "Pending",
  },
  {
    id: "SUB-004",
    address: "5 Pine Road, Sheffield S1 1DE",
    measure: "Loft Insulation",
    date: "5 Mar 2026",
    status: "Approved",
  },
];

/** Status badge colour map */
const STATUS_STYLES: Record<string, string> = {
  Approved: "bg-[#DCFCE7] text-[#166534]",
  Pending: "bg-[#FEF9C3] text-[#92400E]",
  Rejected: "bg-[#FEE2E2] text-[#991B1B]",
};

export default function DashboardPage() {
  return (
    <div className="p-8">
      {/* ── Page header ── */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#030712]">Dashboard</h1>
          <p className="text-sm text-[#6B7280]">
            Welcome back. Here&apos;s an overview of your account.
          </p>
        </div>
        <Link
          href="/dashboard/create-insurance"
          className="flex items-center gap-2 rounded-lg bg-[#0F47A8] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0d3d90]"
        >
          <PlusCircle className="h-4 w-4" />
          New Certificate
        </Link>
      </div>

      {/* ── Stat cards ── */}
      <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {STAT_CARDS.map(({ label, value, icon, bgColor, textColor }) => (
          <div
            key={label}
            className="rounded-xl border border-[#E5E7EB] bg-white p-5 shadow-sm"
          >
            <div
              className={`mb-3 flex h-10 w-10 items-center justify-center rounded-lg ${bgColor} ${textColor}`}
            >
              {icon}
            </div>
            <p className="text-2xl font-bold text-[#030712]">{value}</p>
            <p className="text-sm text-[#6B7280]">{label}</p>
          </div>
        ))}
      </div>

      {/* ── Recent submissions ── */}
      <div className="rounded-xl border border-[#E5E7EB] bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-[#E5E7EB] px-6 py-4">
          <h2 className="text-base font-semibold text-[#030712]">
            Recent Submissions
          </h2>
          <Link
            href="/dashboard/submissions"
            className="flex items-center gap-1 text-sm text-[#0F47A8] hover:underline"
          >
            View all <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#E5E7EB] bg-[#F9FAFB]">
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-[#6B7280]">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-[#6B7280]">
                  Address
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-[#6B7280]">
                  Measure
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-[#6B7280]">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-[#6B7280]">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5E7EB]">
              {RECENT_SUBMISSIONS.map(
                ({ id, address, measure, date, status }) => (
                  <tr key={id} className="transition-colors hover:bg-[#F9FAFB]">
                    <td className="px-6 py-4 text-sm font-medium text-[#0F47A8]">
                      {id}
                    </td>
                    <td className="px-6 py-4 text-sm text-[#030712]">
                      {address}
                    </td>
                    <td className="px-6 py-4 text-sm text-[#6B7280]">
                      {measure}
                    </td>
                    <td className="px-6 py-4 text-sm text-[#6B7280]">{date}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${STATUS_STYLES[status]}`}
                      >
                        {status}
                      </span>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
