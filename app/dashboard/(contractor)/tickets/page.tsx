/**
 * @fileoverview Tickets page — matches Figma "Tickets" frame.
 *
 * Displays support tickets with priority, status, and last-updated info.
 */

import { PlusCircle, MessageSquare } from "lucide-react";

/** A single support ticket */
interface Ticket {
  id: string;
  subject: string;
  category: string;
  priority: "High" | "Medium" | "Low";
  status: "Open" | "In Progress" | "Resolved";
  updated: string;
}

const TICKETS: Ticket[] = [
  { id: "TKT-001", subject: "IBG certificate not generating for SUB-003", category: "Technical", priority: "High", status: "In Progress", updated: "2 hours ago" },
  { id: "TKT-002", subject: "ECO4 eligibility query for cavity wall installation", category: "Compliance", priority: "Medium", status: "Open", updated: "1 day ago" },
  { id: "TKT-003", subject: "Document upload failing for PDF over 5MB", category: "Technical", priority: "Low", status: "Resolved", updated: "3 days ago" },
  { id: "TKT-004", subject: "GBIS scheme submission rejected — reason unclear", category: "Compliance", priority: "High", status: "Open", updated: "5 hours ago" },
];

const PRIORITY_STYLES: Record<string, string> = {
  High: "bg-[#FEE2E2] text-[#991B1B]",
  Medium: "bg-[#FEF9C3] text-[#92400E]",
  Low: "bg-[#DCFCE7] text-[#166534]",
};

const STATUS_STYLES: Record<string, string> = {
  Open: "bg-[#EAF1FD] text-[#0F47A8]",
  "In Progress": "bg-[#FEF9C3] text-[#92400E]",
  Resolved: "bg-[#DCFCE7] text-[#166534]",
};

export default function TicketsPage() {
  return (
    <div className="p-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#030712]">Support Tickets</h1>
          <p className="text-sm text-[#6B7280]">Track and manage your support requests</p>
        </div>
        <button className="flex items-center gap-2 rounded-lg bg-[#0F47A8] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0d3d90]">
          <PlusCircle className="h-4 w-4" />
          New Ticket
        </button>
      </div>

      <div className="flex flex-col gap-3">
        {TICKETS.map(({ id, subject, category, priority, status, updated }) => (
          <div
            key={id}
            className="flex items-start justify-between rounded-xl border border-[#E5E7EB] bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#EAF1FD]">
                <MessageSquare className="h-5 w-5 text-[#0F47A8]" />
              </div>
              <div>
                <div className="mb-1 flex items-center gap-2">
                  <span className="text-xs font-medium text-[#9CA3AF]">{id}</span>
                  <span className="text-xs text-[#D1D5DB]">·</span>
                  <span className="text-xs text-[#6B7280]">{category}</span>
                </div>
                <p className="mb-2 text-sm font-semibold text-[#030712]">{subject}</p>
                <p className="text-xs text-[#9CA3AF]">Updated {updated}</p>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${PRIORITY_STYLES[priority]}`}>
                {priority}
              </span>
              <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${STATUS_STYLES[status]}`}>
                {status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
