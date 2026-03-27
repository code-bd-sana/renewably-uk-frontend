/**
 * @fileoverview Insurance Certificates page — matches Figma "My Certificates" frame.
 *
 * Displays all generated IBG certificates with property address, issue date,
 * expiry date, and download actions.
 */

import Link from "next/link";
import { Award, Download, PlusCircle } from "lucide-react";

/** A single IBG certificate record */
interface Certificate {
  id: string;
  address: string;
  measure: string;
  issued: string;
  expires: string;
  status: "Active" | "Expired";
}

const CERTIFICATES: Certificate[] = [
  { id: "IBG-001", address: "14 Oak Avenue, Birmingham B2 4HT", measure: "Air Source Heat Pump", issued: "12 Mar 2026", expires: "12 Mar 2036", status: "Active" },
  { id: "IBG-002", address: "8 Elm Street, Manchester M14 5QR", measure: "External Wall Insulation", issued: "10 Mar 2026", expires: "10 Mar 2036", status: "Active" },
  { id: "IBG-003", address: "5 Pine Road, Sheffield S1 1DE", measure: "Loft Insulation", issued: "5 Mar 2026", expires: "5 Mar 2036", status: "Active" },
  { id: "IBG-004", address: "7 Willow Lane, Bristol BS1 4RE", measure: "Ground Source Heat Pump", issued: "28 Feb 2026", expires: "28 Feb 2036", status: "Active" },
  { id: "IBG-005", address: "19 Cedar Drive, Liverpool L1 8AU", measure: "Solar PV", issued: "14 Jan 2025", expires: "14 Jan 2027", status: "Active" },
];

const STATUS_STYLES: Record<string, string> = {
  Active: "bg-[#DCFCE7] text-[#166534]",
  Expired: "bg-[#FEE2E2] text-[#991B1B]",
};

export default function InsuranceCertificatesPage() {
  return (
    <div className="p-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#030712]">My Certificates</h1>
          <p className="text-sm text-[#6B7280]">
            All issued Insurance Backed Guarantee certificates
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

      <div className="flex flex-col gap-3">
        {CERTIFICATES.map(({ id, address, measure, issued, expires, status }) => (
          <div
            key={id}
            className="flex items-center justify-between rounded-xl border border-[#E5E7EB] bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#EAF1FD]">
                <Award className="h-5 w-5 text-[#0F47A8]" />
              </div>
              <div>
                <div className="mb-0.5 flex items-center gap-2">
                  <span className="text-xs font-medium text-[#9CA3AF]">{id}</span>
                  <span
                    className={`inline-flex rounded-full px-2 py-0.5 text-xs font-semibold ${STATUS_STYLES[status]}`}
                  >
                    {status}
                  </span>
                </div>
                <p className="mb-0.5 text-sm font-semibold text-[#030712]">
                  {address}
                </p>
                <p className="text-xs text-[#6B7280]">
                  {measure} · Issued {issued} · Expires {expires}
                </p>
              </div>
            </div>
            <button className="flex items-center gap-1.5 rounded-lg border border-[#D1D5DB] px-3 py-2 text-sm text-[#030712] transition-colors hover:border-[#0F47A8] hover:text-[#0F47A8]">
              <Download className="h-4 w-4" />
              Download PDF
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
