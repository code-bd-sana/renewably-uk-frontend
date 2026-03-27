/**
 * @fileoverview Documents page — matches Figma "Documents" frame.
 *
 * Displays all stored compliance documents with type badges,
 * upload date, and download actions.
 */

import { FileText, Download, Upload } from "lucide-react";

/** A stored document record */
interface Document {
  id: string;
  name: string;
  type: "Certificate" | "Inspection" | "Insurance" | "Accreditation";
  uploadDate: string;
  size: string;
}

const DOCUMENTS: Document[] = [
  { id: "DOC-001", name: "IBG Certificate - 14 Oak Avenue.pdf", type: "Certificate", uploadDate: "12 Mar 2026", size: "245 KB" },
  { id: "DOC-002", name: "Pre-Installation Survey - 8 Elm Street.pdf", type: "Inspection", uploadDate: "10 Mar 2026", size: "1.2 MB" },
  { id: "DOC-003", name: "Liability Insurance 2026.pdf", type: "Insurance", uploadDate: "1 Jan 2026", size: "890 KB" },
  { id: "DOC-004", name: "TrustMark Certificate.pdf", type: "Accreditation", uploadDate: "15 Feb 2026", size: "340 KB" },
  { id: "DOC-005", name: "IBG Certificate - 22 Birch Close.pdf", type: "Certificate", uploadDate: "8 Mar 2026", size: "265 KB" },
  { id: "DOC-006", name: "MCS Registration Certificate.pdf", type: "Accreditation", uploadDate: "10 Jan 2026", size: "180 KB" },
];

const TYPE_STYLES: Record<string, string> = {
  Certificate: "bg-[#EAF1FD] text-[#0F47A8]",
  Inspection: "bg-[#FEF9C3] text-[#92400E]",
  Insurance: "bg-[#DCFCE7] text-[#166534]",
  Accreditation: "bg-[#F3E8FF] text-[#7C3AED]",
};

export default function DocumentsPage() {
  return (
    <div className="p-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#030712]">Documents</h1>
          <p className="text-sm text-[#6B7280]">
            All your compliance documents in one place
          </p>
        </div>
        <button className="flex items-center gap-2 rounded-lg bg-[#0F47A8] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0d3d90]">
          <Upload className="h-4 w-4" />
          Upload Document
        </button>
      </div>

      <div className="rounded-xl border border-[#E5E7EB] bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#E5E7EB] bg-[#F9FAFB]">
                {["Document", "Type", "Uploaded", "Size", ""].map((h) => (
                  <th
                    key={h}
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-[#6B7280]"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5E7EB]">
              {DOCUMENTS.map(({ id, name, type, uploadDate, size }) => (
                <tr key={id} className="transition-colors hover:bg-[#F9FAFB]">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#EAF1FD]">
                        <FileText className="h-4 w-4 text-[#0F47A8]" />
                      </div>
                      <span className="text-sm font-medium text-[#030712]">
                        {name}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${TYPE_STYLES[type]}`}
                    >
                      {type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-[#6B7280]">
                    {uploadDate}
                  </td>
                  <td className="px-6 py-4 text-sm text-[#6B7280]">{size}</td>
                  <td className="px-6 py-4">
                    <button className="flex items-center gap-1 text-sm text-[#0F47A8] hover:underline">
                      <Download className="h-3.5 w-3.5" />
                      Download
                    </button>
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
