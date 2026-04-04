"use client";

import { useMemo, useState } from "react";
import {
  Award,
  Building2,
  Euro,
  FileText,
  Home,
  Landmark,
  Target,
} from "lucide-react";
import { SchemeCard } from "@/components/funding/scheme-card";
import { SchemeDetailsModal } from "@/components/funding/scheme-details-modal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { InfoCard } from "../shared/info-card";
import { schema as SCHEMES } from "./schema-data";

interface FundingSchemesModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const schemeIcon = (id: string) => {
  if (id.includes("eco4") || id.includes("obligation")) {
    return <Home size={18} color='#0F47A8' />;
  }
  if (id.includes("warm-homes") || id.includes("grant")) {
    return <Landmark size={18} color='#0F47A8' />;
  }
  return <Building2 size={18} color='#0F47A8' />;
};

export function FundingSchemesModal({
  open,
  onOpenChange,
}: FundingSchemesModalProps) {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [selectedSchemeId, setSelectedSchemeId] = useState<string | null>(null);
  const schemesDialogOpen = open && !detailsOpen;

  const selectedScheme = useMemo(
    () => SCHEMES.find((scheme) => scheme.id === selectedSchemeId),
    [selectedSchemeId],
  );

  const handleViewDetails = (schemeId: string) => {
    setSelectedSchemeId(schemeId);
    setDetailsOpen(true);
  };

  const handleNavigateScheme = (schemeId: string) => {
    setSelectedSchemeId(schemeId);
    setDetailsOpen(true);
  };

  const handleSchemesDialogOpenChange = (nextOpen: boolean) => {
    if (!nextOpen) {
      setDetailsOpen(false);
      setSelectedSchemeId(null);
    }

    onOpenChange(nextOpen);
  };

  const handleDetailsOpenChange = (nextOpen: boolean) => {
    setDetailsOpen(nextOpen);

    if (!nextOpen) {
      // Restore the previous schemes modal after details modal closes.
      onOpenChange(true);
    }
  };

  const statsCards = [
    {
      icon: <Euro size={20} color='#0F47A8' />,
      title: "£24B+",
      description: "Total Funding",
    },
    {
      icon: <FileText size={20} color='#0F47A8' />,
      title: String(SCHEMES.length),
      description: "Active Schemes",
    },
    {
      icon: <Target size={20} color='#0F47A8' />,
      title: "2050",
      description: "Net Zero Target",
    },
  ];
  return (
    <>
      <Dialog
        open={schemesDialogOpen}
        onOpenChange={handleSchemesDialogOpenChange}>
        <DialogContent
          className='w-[186vw] sm:w-[min(1400px,96vw)] max-w-none! sm:max-w-none! h-[92vh] rounded-[10px] p-0 overflow-hidden bg-white'
          showCloseButton>
          <div className='bg-[#0F47A8] px-5 py-4'>
            <DialogHeader className='gap-1'>
              <DialogTitle className='text-white text-xl'>
                All Funding Schemes
              </DialogTitle>
              <DialogDescription className='text-white/85 text-sm'>
                Explore available schemes and open full details for each card.
              </DialogDescription>
            </DialogHeader>
          </div>

          <div className='p-4 sm:p-5 overflow-y-auto h-[calc(88vh-86px)] bg-white'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-7'>
              {statsCards.map((card, index) => (
                <InfoCard
                  key={index}
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                  align='start'
                  cardBg='bg-transparent text-[#1e293b]'
                  iconBgClassName='bg-[#B4CDF7]'
                  className='bg-[linear-gradient(110deg,#F5F8FF_0%,#DBEAFE_60%)] border border-[#E5E7EB] hover:border-[#b0b1b6] rounded-[10px]!'
                  titleClassName='text-[32px] text-(--text-primary) text-center'
                  descriptionClassName='text-base text-[#030712] max-w-110 -mt-3'
                />
              ))}
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6'>
              {SCHEMES.map((scheme) => (
                <SchemeCard
                  key={scheme.id}
                  icon={schemeIcon(scheme.id)}
                  headerTitle={scheme.headerTitle}
                  headerSubtitle={scheme.headerSubtitle}
                  regulatorIcon={<Award size={18} color='#0F47A8' />}
                  regulatorName={scheme.regulatorName}
                  description={scheme.description}
                  fundingValue={scheme.fundingValue}
                  onViewDetails={() => handleViewDetails(scheme.id)}
                />
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <SchemeDetailsModal
        open={detailsOpen}
        onOpenChange={handleDetailsOpenChange}
        scheme={selectedScheme}
        onNavigate={handleNavigateScheme}
      />
    </>
  );
}
