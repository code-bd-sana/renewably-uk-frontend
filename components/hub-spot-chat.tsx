// "use client";

// import { useState } from "react";

// type HubSpotWidgetApi = {
//   load?: () => void;
//   open?: () => void;
// };

// type HubSpotApi = {
//   widget?: HubSpotWidgetApi;
// };

// declare global {
//   interface Window {
//     HubSpotConversations?: HubSpotApi;
//     hsConversationsOnReady?: Array<() => void>;
//   }
// }

// export default function HubSpotChat() {
//   const [opening, setOpening] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const tryOpen = () => {
//     const hs = window.HubSpotConversations;

//     if (hs?.widget?.load) {
//       hs.widget.load();
//     }

//     if (hs?.widget?.open) {
//       hs.widget.open();
//       return true;
//     }

//     return false;
//   };

//   const handleClick = () => {
//     setError(null);
//     setOpening(true);

//     if (tryOpen()) {
//       setOpening(false);
//       return;
//     }

//     window.hsConversationsOnReady = window.hsConversationsOnReady || [];
//     window.hsConversationsOnReady.push(() => {
//       void tryOpen();
//     });

//     let tries = 0;
//     const maxTries = 20;
//     const timer = window.setInterval(() => {
//       tries += 1;

//       if (tryOpen()) {
//         window.clearInterval(timer);
//         setOpening(false);
//         return;
//       }

//       if (tries >= maxTries) {
//         window.clearInterval(timer);
//         setOpening(false);
//         setError("Live chat is unavailable for this session.");
//       }
//     }, 250);
//   };

//   return (
//     <div className='fixed bottom-5 right-5 z-[2147483000] flex flex-col items-end gap-2'>
//       {error && (
//         <p className='rounded-md bg-white px-3 py-2 text-xs text-[#6B7280] shadow-md'>
//           {error}
//         </p>
//       )}
//       <button
//         type='button'
//         aria-label='Open HubSpot chat'
//         onClick={handleClick}
//         disabled={opening}
//         title='Chat with us'
//         className='h-14 w-14 rounded-full bg-[#ff7a59] text-white shadow-lg transition hover:bg-[#ff8f73] disabled:cursor-not-allowed disabled:opacity-80'>
//         <span className='sr-only'>Open HubSpot chat</span>
//         <svg
//           viewBox='0 0 24 24'
//           role='img'
//           aria-hidden='true'
//           className='mx-auto h-7 w-7 fill-current'>
//           <path d='M14.5 2a2.5 2.5 0 1 0 2.31 3.47l2.01 1.2a3.5 3.5 0 1 0 .94-1.56l-2-1.2A2.5 2.5 0 0 0 14.5 2Zm-9 8a3.5 3.5 0 1 0 2.38 6.08l3.47 2.1A2.5 2.5 0 1 0 12.9 17l-3.49-2.12A3.5 3.5 0 0 0 5.5 10Zm8.9-1.35a1 1 0 0 0-1.37.35l-2.2 3.67a1 1 0 0 0 1.72 1.03l2.2-3.67a1 1 0 0 0-.35-1.38Z' />
//         </svg>
//       </button>
//     </div>
//   );
// }

"use client";

import { useEffect } from "react";

type HubSpotWidgetApi = {
  refresh?: () => void;
};

type HubSpotApi = {
  widget?: HubSpotWidgetApi;
};

declare global {
  interface Window {
    HubSpotConversations?: HubSpotApi;
  }
}

export default function HubSpotChat() {
  useEffect(() => {
    // Prevent loading multiple times if already present
    if (document.getElementById("hs-script-loader")) {
      console.log("HubSpot script already exists");

      // Try to refresh the widget if it exists
      if (window.HubSpotConversations?.widget) {
        window.HubSpotConversations.widget.refresh?.();
        console.log("HubSpot widget refreshed");
      }
      return;
    }

    console.log("Loading HubSpot script...");

    const script = document.createElement("script");
    script.id = "hs-script-loader";
    script.src = "//js-eu1.hs-scripts.com/49105344.js";
    script.async = true;
    script.defer = true;

    script.onload = () => {
      console.log("HubSpot script loaded successfully");
      // force widget refresh after load
      if (window.HubSpotConversations?.widget) {
        window.HubSpotConversations.widget.refresh?.();
      }
    };

    script.onerror = (err) => {
      console.error("Failed to load HubSpot script:", err);
    };

    document.body.appendChild(script);

    // Cleanup when component unmounts
    return () => {
      const existingScript = document.getElementById("hs-script-loader");
      if (existingScript) {
        existingScript.remove();
        console.log("HubSpot script removed on unmount");
      }
    };
  }, []);

  return null;
}
