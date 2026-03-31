/**
 * MeasuresTableModal
 *
 * A shadcn Dialog-based modal that renders categorised measure tables
 * with Net Zero / Part Funded / Able To Pay / Term / Price columns.
 *
 * Usage:
 *   <MeasuresTableModal />                      — renders a trigger button
 *   <MeasuresTableModal open={open} onOpenChange={setOpen} />  — controlled
 */

"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Flame,
  Thermometer,
  Layers,
  AppWindow,
  Sun,
  Check,
  Minus,
} from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

type CellValue = "check" | "dash" | string;

interface Measure {
  label: string;
  netZero: CellValue;
  partFunded: CellValue;
  ableToPay: CellValue;
  term: string;
  price: string;
}

interface Category {
  id: string;
  label: string;
  icon: React.ReactNode;
  measures: Measure[];
}

const check = "check" as const;
const dash = "dash" as const;

const CATEGORIES: Category[] = [
  {
    id: "heating",
    label: "Heating & Low Carbon",
    icon: <Flame className="w-4 h-4" color="#0F47A8"/>,
    measures: [
      { label: "Air Source Heat Pump", netZero: check, partFunded: check, ableToPay: check, term: "TBC", price: "TBC" },
      { label: "Biomass Boiler", netZero: check, partFunded: check, ableToPay: check, term: "TBC", price: "TBC" },
      { label: "Boiler", netZero: check, partFunded: check, ableToPay: check, term: "TBC", price: "TBC" },
      { label: "Gas-Fired Condensing Boiler", netZero: check, partFunded: check, ableToPay: check, term: "TBC", price: "TBC" },
      { label: "Oil-Fired Condensing Boiler", netZero: check, partFunded: check, ableToPay: check, term: "TBC", price: "TBC" },
      { label: "LPG Boiler", netZero: check, partFunded: check, ableToPay: check, term: "TBC", price: "TBC" },
      { label: "Electric Boiler", netZero: check, partFunded: check, ableToPay: check, term: "TBC", price: "TBC" },
      { label: "Electric Storage Heaters", netZero: check, partFunded: check, ableToPay: check, term: "TBC", price: "TBC" },
      { label: "Electric Storage Heating (ESH)", netZero: check, partFunded: check, ableToPay: check, term: "TBC", price: "TBC" },
      { label: "Ground Source Heat Pump", netZero: check, partFunded: check, ableToPay: check, term: "TBC", price: "TBC" },
      { label: "First Time Central Heating (FTCH)", netZero: check, partFunded: check, ableToPay: check, term: "TBC", price: "TBC" },
      { label: "District Heating System", netZero: check, partFunded: check, ableToPay: check, term: "TBC", price: "TBC" },
      { label: "Micro Combined Heat & Power", netZero: check, partFunded: check, ableToPay: check, term: "TBC", price: "TBC" },
      { label: "Hot Water Cylinder", netZero: check, partFunded: check, ableToPay: check, term: "TBC", price: "TBC" },
      { label: "Radiators & Pipework", netZero: check, partFunded: check, ableToPay: check, term: "TBC", price: "TBC" },
    ],
  },
  {
    id: "controls",
    label: "Heating Controls",
    icon: <Thermometer className="w-4 h-4" color="#0F47A8"/>,
    measures: [
      { label: "Heating Control: Load Compensation", netZero: check, partFunded: check, ableToPay: check, term: "TBC", price: "TBC" },
      { label: "Heating Control: Programmer", netZero: check, partFunded: check, ableToPay: check, term: "TBC", price: "TBC" },
      { label: "Heating Control: Smart Thermostat", netZero: check, partFunded: check, ableToPay: check, term: "TBC", price: "TBC" },
      { label: "Heating Control: TRV", netZero: check, partFunded: check, ableToPay: check, term: "TBC", price: "TBC" },
      { label: "Heating Control: TTZC", netZero: check, partFunded: check, ableToPay: check, term: "TBC", price: "TBC" },
      { label: "Smart Thermostat", netZero: check, partFunded: check, ableToPay: check, term: "TBC", price: "TBC" },
      { label: "General Heating Controls", netZero: check, partFunded: check, ableToPay: check, term: "TBC", price: "TBC" },
    ],
  },
  {
    id: "insulation",
    label: "Insulation",
    icon: <Layers className="w-4 h-4" color="#0F47A8"/>,
    measures: [
      { label: "Draught Proofing", netZero: check, partFunded: check, ableToPay: check, term: "TBC", price: "TBC" },
      { label: "External Wall Insulation", netZero: dash, partFunded: dash, ableToPay: dash, term: "TBC", price: "TBC" },
      { label: "Flat Roof Insulation", netZero: check, partFunded: check, ableToPay: check, term: "TBC", price: "TBC" },
      { label: "Internal Wall Insulation", netZero: dash, partFunded: dash, ableToPay: dash, term: "TBC", price: "TBC" },
      { label: "Loft Insulation", netZero: check, partFunded: check, ableToPay: check, term: "TBC", price: "TBC" },
      { label: "Loft or Rafter Insulation (Excluding Spray Foam)", netZero: check, partFunded: check, ableToPay: check, term: "TBC", price: "TBC" },
      { label: "Pitched Roof Insulation", netZero: check, partFunded: check, ableToPay: check, term: "TBC", price: "TBC" },
      { label: "Roof Insulation (Flat Roof – Excluding Spray Foam)", netZero: check, partFunded: check, ableToPay: check, term: "TBC", price: "TBC" },
      { label: "Roof Insulation (Pitched Roof – Excluding Spray Foam)", netZero: check, partFunded: check, ableToPay: check, term: "TBC", price: "TBC" },
      { label: "Room In Roof Insulation", netZero: dash, partFunded: dash, ableToPay: dash, term: "TBC", price: "TBC" },
      { label: "Solid Floor Insulation", netZero: check, partFunded: check, ableToPay: check, term: "TBC", price: "TBC" },
    ],
  },
  {
    id: "windows",
    label: "Windows & Doors",
    icon: <AppWindow className="w-4 h-4" color="#0F47A8"/>,
    measures: [
      { label: "Doors (Composite, Timber, uPVC)", netZero: check, partFunded: check, ableToPay: check, term: "TBC", price: "TBC" },
      { label: "Double Glazed Windows (Composite, Timber, uPVC)", netZero: check, partFunded: check, ableToPay: check, term: "TBC", price: "TBC" },
      { label: "Windows & Doors (Additional requirements may apply)", netZero: check, partFunded: check, ableToPay: check, term: "TBC", price: "TBC" },
    ],
  },
  {
    id: "renewables",
    label: "Micro-Generation & Renewables",
    icon: <Sun className="w-4 h-4" color="#0F47A8"/>,
    measures: [
      { label: "Battery Storage", netZero: check, partFunded: check, ableToPay: check, term: "TBC", price: "TBC" },
      { label: "LED Lighting", netZero: check, partFunded: check, ableToPay: check, term: "TBC", price: "TBC" },
      { label: "Micro-Generation", netZero: check, partFunded: check, ableToPay: check, term: "TBC", price: "TBC" },
      { label: "Solar PV", netZero: check, partFunded: check, ableToPay: check, term: "TBC", price: "TBC" },
    ],
  },
];

// ─── Sub-components ────────────────────────────────────────────────────────────

function Cell({ value }: { value: CellValue }) {
  if (value === "check")
    return (
      <span className="flex justify-center">
        <Check className="w-4 h-4" strokeWidth={2.5} color="#0F47A8" /> 
      </span>
    );
  if (value === "dash")
    return (
      <span className="flex justify-center text-slate-300">
        <Minus className="w-4 h-4" />
      </span>
    );
  return <span className="text-slate-400 text-xs">{value}</span>;
}

const COL_HEADERS = [
  { key: "measure", label: "Measure", className: "text-left w-[42%]" },
  { key: "netZero", label: "Net Zero", className: "text-center w-[11%]" },
  { key: "partFunded", label: "Part Funded", className: "text-center w-[14%]" },
  { key: "ableToPay", label: "Able To Pay", className: "text-center w-[14%]" },
  { key: "term", label: "Term (yrs)", className: "text-center w-[10%]" },
  { key: "price", label: "Price (inc IPT)", className: "text-right w-[12%]" },
] as const;

function CategoryTable({ category }: { category: Category }) {
  return (
    <div className="mb-8 last:mb-0">
      {/* Section heading */}
      <div className="flex items-center gap-2 mb-3">
        <span>{category.icon}</span>
        <h3 className="text-[#0F47A8] font-semibold text-sm sm:text-base">{category.label}</h3>
      </div>

      {/* Table — scrolls horizontally on small screens */}
      <div className="rounded-xl overflow-hidden border border-slate-200">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] text-sm border-collapse">
            {/* Header */}
            <thead>
              <tr className="bg-[#1E3A8A]">
                {COL_HEADERS.map((col) => (
                  <th
                    key={col.key}
                    className={cn(
                      "py-2.5 px-2 sm:px-3 text-white font-medium text-xs tracking-wide whitespace-nowrap",
                      col.className
                    )}
                  >
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>

            {/* Rows */}
            <tbody>
              {category.measures.map((m, i) => (
                <tr
                  key={i}
                  className={cn(
                    "border-b border-slate-100 last:border-0 transition-colors",
                    i % 2 === 0 ? "bg-white" : "bg-slate-50/60",
                    "hover:bg-blue-50/40"
                  )}
                >
                  <td className="py-2.5 px-2 sm:px-3 text-slate-700 font-normal text-xs sm:text-sm">{m.label}</td>
                  <td className="py-2.5 px-2 sm:px-3"><Cell value={m.netZero} /></td>
                  <td className="py-2.5 px-2 sm:px-3"><Cell value={m.partFunded} /></td>
                  <td className="py-2.5 px-2 sm:px-3"><Cell value={m.ableToPay} /></td>
                  <td className="py-2.5 px-2 sm:px-3 text-center text-slate-400 text-xs whitespace-nowrap">{m.term}</td>
                  <td className="py-2.5 px-2 sm:px-3 text-right text-slate-400 text-xs whitespace-nowrap">{m.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ─── Main component ────────────────────────────────────────────────────────────

export interface MeasuresTableModalProps {
  /** Controlled open state — omit to use the built-in trigger button */
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** Label for the built-in trigger button */
  triggerLabel?: string;
}

export function MeasuresTableModal({
  open: controlledOpen,
  onOpenChange,
  triggerLabel = "Browse all Categories",
}: MeasuresTableModalProps) {
  const [internalOpen, setInternalOpen] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = React.useState<string>("all");

  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : internalOpen;
  const handleOpenChange = isControlled ? onOpenChange! : setInternalOpen;

  const visibleCategories =
    selectedCategory === "all"
      ? CATEGORIES
      : CATEGORIES.filter((c) => c.id === selectedCategory);

  return (
    <>
      {/* Trigger (only shown in uncontrolled mode) */}
      {!isControlled && (
        <Button
          variant="outline"
          className="gap-2 border-slate-300 text-slate-700 hover:border-[#1E3A8A] hover:text-[#1E3A8A]"
          onClick={() => handleOpenChange(true)}
        >
          {triggerLabel}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </Button>
      )}

      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent
          className={cn(
            // 90% of viewport width on every screen size, including >= sm
            "w-[90vw] max-w-[90vw] sm:max-w-[90vw]",
            // Height
            "max-h-[90vh] flex flex-col",
            // Reset padding/gap, force white background
            "p-0 gap-0 overflow-hidden",
            "bg-white text-slate-900",
            "rounded-2xl shadow-xl"
          )}
        >
          {/* ── Sticky header ── */}
          <DialogHeader className="flex-shrink-0 bg-white px-4 sm:px-6 pt-5 pb-4 border-b border-slate-100">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <DialogTitle className="text-base sm:text-lg font-semibold text-slate-800">
                Measures &amp; Eligibility
              </DialogTitle>

              {/* Category filter */}
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-56 h-9 text-sm bg-white border-slate-200 rounded-lg">
                  <SelectValue placeholder="Browse all Category" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="all">Browse all Category</SelectItem>
                  {CATEGORIES.map((c) => (
                    <SelectItem key={c.id} value={c.id}>
                      {c.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </DialogHeader>

          {/* ── Scrollable body ── */}
          <div className="flex-1 overflow-y-auto bg-white px-3 sm:px-6 py-5">
            {visibleCategories.map((cat) => (
              <CategoryTable key={cat.id} category={cat} />
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}