"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface SchemeDetailsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  schemeName?: string;
}

export function SchemeDetailsModal({
  open,
  onOpenChange,
  schemeName,
}: SchemeDetailsModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className='w-[95vw] max-w-lg rounded-[10px] p-0 overflow-hidden'
        showCloseButton>
        <div className='bg-[#0F47A8] px-5 py-4'>
          <DialogHeader className='gap-1'>
            <DialogTitle className='text-white text-lg'>
              {schemeName || "Funding Scheme"}
            </DialogTitle>
            <DialogDescription className='text-white/85 text-sm'>
              Full details modal is ready. You can now add the detailed content
              in the next step.
            </DialogDescription>
          </DialogHeader>
        </div>
        <div className='p-5'>
          <p className='text-[#364153] text-sm leading-relaxed'>
            This is a placeholder details modal wired to the card action. Share
            the scheme-specific content and I will map it here.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
