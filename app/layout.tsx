import { TooltipProvider } from "@/components/ui/tooltip";
import { PrivacyPolicyModalProvider } from "@/components/shared/privacy-policy-modal-provider";
import CookieConsentBanner from "@/components/shared/cookie-consent-banner";
import type { Metadata, Viewport } from "next";
import { cookies } from "next/headers";
import { DM_Sans, Geist, Geist_Mono, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Renewably UK - Powering Renewables",
  description: "Renewably UK - Powering Renewables",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Renewably UK - Powering Renewables",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const consentCookie = cookieStore.get("renewably_cookie_consent")?.value;
  const initialConsent =
    consentCookie === "accepted"
      ? "accepted"
      : consentCookie === "rejected"
        ? "rejected"
        : null;

  return (
    <html
      lang='en'
      className={`${geistSans.variable} ${geistMono.variable} ${interFont.variable} ${dmSans.variable} h-full antialiased`}>
      <head>
        <link rel='apple-touch-icon' href='/icons/icon-512x512.png' />
        <meta name='theme-color' content='#ffffff' />
      </head>
      <body
        className='min-h-full flex flex-col'
        style={{
          fontFamily:
            '"SF Pro Display", "SF Pro Text", "SF Pro", var(--font-dm-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        }}>
        <TooltipProvider>
          <PrivacyPolicyModalProvider>
            {children}
            <CookieConsentBanner initialConsent={initialConsent} />
          </PrivacyPolicyModalProvider>
        </TooltipProvider>
        <Script id='register-sw' strategy='afterInteractive'>
          {`
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js')
                  .then(function(registration) {
                    console.log('Service Worker registered with scope:', registration.scope);
                  })
                  .catch(function(error) {
                    console.log('Service Worker registration failed:', error);
                  });
              });
            }
          `}
        </Script>
      </body>
    </html>
  );
}
