"use client";

import { useEffect, useState } from "react";
import { Cookie } from "lucide-react";
import { usePrivacyPolicyModal } from "./privacy-policy-modal-provider";

type ConsentState = "accepted" | "rejected" | null;

const CONSENT_COOKIE_NAME = "renewably_cookie_consent";
const CONSENT_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

type TrackingWindow = Window & {
  dataLayer?: unknown[];
  hsConversationsSettings?: {
    loadImmediately: boolean;
  };
};

function setConsentCookie(value: "accepted" | "rejected") {
  document.cookie = `${CONSENT_COOKIE_NAME}=${value}; path=/; max-age=${CONSENT_COOKIE_MAX_AGE}; samesite=lax`;
}

function appendScript(id: string, src: string) {
  if (document.getElementById(id)) {
    return;
  }

  const script = document.createElement("script");
  script.id = id;
  script.src = src;
  script.async = true;
  script.defer = true;
  document.body.appendChild(script);
}

function appendInlineScript(id: string, code: string) {
  if (document.getElementById(id)) {
    return;
  }

  const script = document.createElement("script");
  script.id = id;
  script.text = code;
  document.body.appendChild(script);
}

function loadTrackingScripts() {
  const win = window as TrackingWindow;

  appendScript(
    "google-analytics-src",
    "https://www.googletagmanager.com/gtag/js?id=G-3L1CC12Z4H",
  );

  appendInlineScript(
    "google-analytics-init",
    `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-3L1CC12Z4H');
    `,
  );

  win.hsConversationsSettings = { loadImmediately: true };
  appendScript("hs-script-loader", "https://js-eu1.hs-scripts.com/49105344.js");
}

export default function CookieConsentBanner({
  initialConsent,
}: {
  initialConsent: ConsentState;
}) {
  const [consent, setConsent] = useState<ConsentState>(initialConsent);
  const { openPrivacyPolicy } = usePrivacyPolicyModal();

  useEffect(() => {
    if (consent === "accepted") {
      loadTrackingScripts();
    }
  }, [consent]);

  if (consent) {
    return null;
  }

  const handleChoice = (value: "accepted" | "rejected") => {
    setConsentCookie(value);
    setConsent(value);

    if (value === "accepted") {
      loadTrackingScripts();
    }
  };

  return (
    <div className='fixed inset-x-0 bottom-0 z-1111 pointer-events-none px-4 pb-4 sm:px-6 lg:px-8'>
      <div className='mx-auto flex w-full flex-col gap-4 rounded-2xl border border-white/10 bg-white px-5 py-4 text-white shadow-[0_30px_80px_rgba(7,22,47,0.42)] backdrop-blur-xl sm:px-6 md:flex-row md:items-center md:justify-between'>
        <div className='pointer-events-auto flex items-center gap-4'>
          <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-background text-[#8FB4FF] ring-1 ring-inset ring-[#0F47A8]/20'>
            <Cookie className='h-6 w-6' aria-hidden='true' color='#FFFFFF' />
          </div>
          <div className='space-y-1'>
            <h2 className='text-[22px] font-semibold tracking-tight sm:text-lg'>
              We Value Your Privacy
            </h2>
            <p className='text-sm max-w-340 leading-6 text-[#6B7280]'>
              We use cookies to enhance your browsing experience, analyze site
              traffic, and provide personalized content. By clicking
              &quot;Accept All&quot;, you consent to our use of cookies. You can
              manage your preferences or learn more in our{" "}
              <span>
                {" "}
                <button
                  type='button'
                  onClick={openPrivacyPolicy}
                  className='text-(--text-primary) underline cursor-pointer'>
                  Privacy Policy
                </button>
              </span>
              .
            </p>
          </div>
        </div>

        <div className='pointer-events-auto flex flex-col gap-3 sm:flex-row sm:items-center'>
          <button
            type='button'
            onClick={() => handleChoice("rejected")}
            className='inline-flex h-11 items-center justify-center rounded-[8px] border border-[#E5E7EB] px-5 text-base font-semibold text-[#030712] transition hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#07162F] cursor-pointer'>
            Reject all
          </button>
          <button
            type='button'
            onClick={() => handleChoice("accepted")}
            className='inline-flex h-11 items-center justify-center rounded-[8px] bg-[#16A34A] px-5 text-sm font-semibold text-white transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-[#07162F] cursor-pointer'>
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
