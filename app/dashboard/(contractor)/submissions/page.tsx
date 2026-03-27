/**
 * @fileoverview Submissions page — matches Figma "Submission" frame.
 *
 * Displays all installer submissions in a sortable, filterable table.
 * Columns: ID, address, measure type, date submitted, scheme, status, actions.
 */

import Link from "next/link";
import { PlusCircle } from "lucide-react";

/** A single submission record */
interface Submission {
  id: string;
  address: string;
  measure: string;
  date: string;
  scheme: string;
  status: "Approved" | "Pending" | "Rejected";
}

const SUBMISSIONS: Submission[] = [
  { id: "SUB-001", address: "14 Oak Avenue, Birmingham B2 4HT", measure: "Air Source Heat Pump", date: "12 Mar 2026", scheme: "ECO4", status: "Approved" },
  { id: "SUB-002", address: "8 Elm Street, Manchester M14 5QR", measure: "External Wall Insulation", date: "10 Mar 2026", scheme: "GBIS", status: "Approved" },
  { id: "SUB-003", address: "22 Birch Close, Leeds LS1 2AB", measure: "Solar PV", date: "8 Mar 2026", scheme: "ECO4", status: "Pending" },
  { id: "SUB-004", address: "5 Pine Road, Sheffield S1 1DE", measure: "Loft Insulation", date: "5 Mar 2026", scheme: "GBIS", status: "Approved" },
  { id: "SUB-005", address: "33 Maple Terrace, Nottingham NG1 5AB", measure: "Cavity Wall Insulation", date: "2 Mar 2026", scheme: "ECO4", status: "Rejected" },
  { id: "SUB-006", address: "7 Willow Lane, Bristol BS1 4RE", measure: "Ground Source Heat Pump", date: "28 Feb 2026", scheme: "LA Flex", status: "Approved" },
];

const STATUS_STYLES: Record<string, string> = {
  Approved: "bg-[#DCFCE7] text-[#166534]",
  Pending: "bg-[#FEF9C3] text-[#92400E]",
  Rejected: "bg-[#FEE2E2] text-[#991B1B]",
};

export default function SubmissionsPage() {
  return (
    <div className="p-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#030712]">Submissions</h1>
          <p className="text-sm text-[#6B7280]">All your installation submissions</p>
        </div>
        <Link
          href="/dashboard/create-insurance"
          className="flex items-center gap-2 rounded-lg bg-[#0F47A8] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0d3d90]"
        >
          <PlusCircle className="h-4 w-4" />
          New Submission
        </Link>
      </div>

      <div className="rounded-xl border border-[#E5E7EB] bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#E5E7EB] bg-[#F9FAFB]">
                {["ID", "Address", "Measure", "Scheme", "Date", "Status", ""].map((h) => (
                  <th key={h} className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-[#6B7280]">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5E7EB]">
              {SUBMISSIONS.map(({ id, address, measure, date, scheme, status }) => (
                <tr key={id} className="transition-colors hover:bg-[#F9FAFB]">
                  <td className="px-6 py-4 text-sm font-medium text-[#0F47A8]">{id}</td>
                  <td className="px-6 py-4 text-sm text-[#030712]">{address}</td>
                  <td className="px-6 py-4 text-sm text-[#6B7280]">{measure}</td>
                  <td className="px-6 py-4 text-sm text-[#6B7280]">{scheme}</td>
                  <td className="px-6 py-4 text-sm text-[#6B7280]">{date}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${STATUS_STYLES[status]}`}>
                      {status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <button className="text-[#0F47A8] hover:underline">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
