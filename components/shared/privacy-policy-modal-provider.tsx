"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { Lock, X } from "lucide-react";
import PrivacyPolicy from "@/components/privacy-policy";
import { InfoCard } from "./info-card";

type PrivacyPolicyModalContextValue = {
  openPrivacyPolicy: () => void;
  closePrivacyPolicy: () => void;
};

const PrivacyPolicyModalContext =
  createContext<PrivacyPolicyModalContextValue | null>(null);

export function PrivacyPolicyModalProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const openPrivacyPolicy = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closePrivacyPolicy = useCallback(() => {
    setIsOpen(false);
  }, []);

  const contextValue = useMemo(
    () => ({ openPrivacyPolicy, closePrivacyPolicy }),
    [openPrivacyPolicy, closePrivacyPolicy],
  );

  return (
    <PrivacyPolicyModalContext.Provider value={contextValue}>
      {children}
      {isOpen && (
        <div className='fixed inset-0 z-50 flex items-center justify-center'>
          <div
            className='fixed inset-0 bg-black/50'
            onClick={closePrivacyPolicy}
          />
          <div className='bg-background rounded-[10px] max-w-400 w-full mx-4 z-50 overflow-auto max-h-[90vh]'>
            <div className='flex justify-between items-center -mt-4 -mb-5'>
              <InfoCard
                align='start'
                icon={<Lock size={16} color='#0F47A8' />}
                title='Privacy Policy'
                titleClassName='text-[22px] text-white'
                subtitle='Your Privacy Matters to Us | Last Updated: March 2026'
                subtitleClassName='text-[#F3F4F6] text-[14px] font-extralight'
                iconBgClassName='bg-white'
                className='bg-transparent cursor-pointer -p-24! -px-16'
              />
              <button
                type='button'
                onClick={closePrivacyPolicy}
                className='text-gray-500 hover:text-gray-700 px-5'
                aria-label='Close privacy policy modal'>
                <X size={20} color='#FFFFFF' />
              </button>
            </div>
            <PrivacyPolicy />
          </div>
        </div>
      )}
    </PrivacyPolicyModalContext.Provider>
  );
}

export function usePrivacyPolicyModal() {
  const context = useContext(PrivacyPolicyModalContext);

  if (!context) {
    throw new Error(
      "usePrivacyPolicyModal must be used within a PrivacyPolicyModalProvider",
    );
  }

  return context;
}
