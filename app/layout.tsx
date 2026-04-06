import { TooltipProvider } from "@/components/ui/tooltip";
import { PrivacyPolicyModalProvider } from "@/components/shared/privacy-policy-modal-provider";
import HubSpotChat from "@/components/hub-spot-chat";
import type { Metadata, Viewport } from "next";
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
  title: "Renewably UK - Powering Renewable",
  description:
    "Bringing a Greener Future to the United Kingdom One Service at a Time",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Renewably UK - Powering Renewable",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
          <PrivacyPolicyModalProvider>{children}</PrivacyPolicyModalProvider>
        </TooltipProvider>
        {/* <HubSpotChat /> */}
        {/* <Script
          id='hs-script-loader'
          src='//js-eu1.hs-scripts.com/49105344.js'
          strategy='afterInteractive'
          async
        /> */}
        {/* HubSpot debug: logs presence and attempts a reload if available */}
        {/* <Script id='hs-debug' strategy='afterInteractive'>
          {`(function(){try{console.log('hs-debug: waiting for HubSpotConversations');function check(){if(window.HubSpotConversations){console.log('hs-debug: HubSpotConversations found', window.HubSpotConversations);try{if(typeof window.HubSpotConversations.resetAndReloadWidget==='function'){window.HubSpotConversations.resetAndReloadWidget();console.log('hs-debug: resetAndReloadWidget called');}else{console.log('hs-debug: resetAndReloadWidget not available');}}catch(e){console.error('hs-debug: error calling reset',e);} }else{console.log('hs-debug: not yet initialized, retrying');setTimeout(check,500);} }check();}catch(e){console.error('hs-debug init error',e);} })();`}
        </Script> */}
        {/* HubSpot tracking + chat script */}
        <HubSpotChat />
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
        <Script
          id='google-analytics-src'
          src='https://www.googletagmanager.com/gtag/js?id=G-3L1CC12Z4H'
          strategy='afterInteractive'
        />
        <Script id='google-analytics-init' strategy='afterInteractive'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3L1CC12Z4H');
          `}
        </Script>
        <Script id='hubspot-init' strategy='afterInteractive'>
          {`
            window.hsConversationsSettings = { loadImmediately: true };

            (function ensureHubSpotWidgetVisible() {
              var tries = 0;
              var maxTries = 40;
              var interval = setInterval(function () {
                tries += 1;
                var hs = window.HubSpotConversations;
                if (hs && hs.widget && typeof hs.widget.load === 'function') {
                  hs.widget.load();
                  clearInterval(interval);
                }
                if (tries >= maxTries) {
                  clearInterval(interval);
                }
              }, 250);
            })();
          `}
        </Script>
        <Script
          id='hs-script-loader'
          src='https://js-eu1.hs-scripts.com/49105344.js'
          strategy='afterInteractive'
        />
      </body>
    </html>
  );
}
