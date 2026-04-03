"use client";

import type { MouseEvent } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePrivacyPolicyModal } from "@/components/shared/privacy-policy-modal-provider";

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "Portal", href: "/portal" },
  { label: "Insurance", href: "/insurance" },
  { label: "Funding", href: "/funding" },
  { label: "Accreditation", href: "/accreditation" },
  { label: "News", href: "/news" },
  { label: "Contact us", href: "/contact" },
];

const serviceLinks = [
  {
    label: "Insurance Backed Guarantees",
    id: "insurance-backed-guarantees",
  },
  {
    label: "Secure ICO-compliant Document Repository",
    id: "data-protection",
  },
  { label: "Renewable Project Funding", id: "project-funding" },
  { label: "Support and Guidance", id: "support-guidance" },
];

const connectItems = [
  {
    icon: Phone,
    label: "+44 161 524 3512",
    href: "tel:+441615243512",
  },
  {
    icon: Mail,
    label: "contact@renewably.energy",
    href: "mailto:contact@renewably.energy",
  },
  {
    icon: MapPin,
    label:
      "Lumaneri House, Blythe Gate, Blythe Valley Park, Solihull, West Midlands, United Kingdom, B90 8AH",
  },
];

const Footer = () => {
  const { openPrivacyPolicy } = usePrivacyPolicyModal();

  // Function to handle service click
  const handleServiceClick = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();

    // Update URL hash
    window.history.pushState(null, "", `#${id}`);

    // Dispatch a custom event that ServicesWeHost can listen to
    window.dispatchEvent(
      new CustomEvent("service-scroll", {
        detail: { id },
      }),
    );

    // Scroll to the element
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <footer className='w-full bg-background pt-18 pb-8'>
      <div className='max-w-440 mx-auto px-4'>
        {/* TOP GRID */}
        <div
          className='
            grid
            grid-cols-1
            gap-12
            sm:grid-cols-2
            lg:grid-cols-[1.2fr_1fr_1fr_1.2fr]
            lg:gap-20
          '>
          {/* BRAND */}
          <div>
            <div className='mb-5'>
              <Link href='/'>
                <Image
                  src='/footer/foot-logo.png'
                  alt='Renewably UK'
                  width={160}
                  height={40}
                />
              </Link>
            </div>

            <p className='text-[14px] leading-[1.6] text-white/80 max-w-65 font-interFont'>
              Designed for Installation Companies. Built for Compliance.
            </p>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className='text-[16px] font-semibold text-white mb-4'>
              Company
            </h4>

            <ul className='flex flex-col gap-2.5 text-[14px] text-white'>
              {companyLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className='text-white hover:text-white/90 transition-colors duration-300'>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className='text-[16px] font-semibold text-white mb-4'>
              Services
            </h4>

            <ul className='flex flex-col gap-2.5 text-[14px] text-white md:max-w-55'>
              {serviceLinks.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleServiceClick(e, item.id)}
                    className='text-white hover:text-white/90 transition-colors duration-300'>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONNECT */}
          <div>
            <h4 className='text-[16px] font-semibold text-white mb-4'>
              Connect
            </h4>

            <ul className='flex flex-col gap-3 text-[14px] text-white'>
              {connectItems.map((item) => {
                const Icon = item.icon;

                return (
                  <li key={item.label} className='flex items-start gap-2.5 '>
                    <span className='mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center'>
                      <Icon
                        size={16}
                        strokeWidth={2}
                        className='h-4 w-4 shrink-0 text-white stroke-white'
                      />
                    </span>
                    {item.href ? (
                      <a
                        href={item.href}
                        className='text-white hover:text-white/90 transition-colors duration-300'>
                        {item.label}
                      </a>
                    ) : (
                      <span className='leading-[1.6] text-white max-w-63'>
                        {item.label}
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className='w-full h-px bg-white my-10' />

        {/* BOTTOM */}
        <div className='text-center text-[14px] font-interFont'>
          <p className=' text-(--text-muted-foreground)'>
            © 2026 Renewably UK — Powering the future of Renewable
            Installations. All rights reserved. Registered in England & Wales |
            Company No: 16076081
          </p>
          <p className=' text-(--text-muted-foreground) pt-3 md:pt-0 lg:pt-0'>
            ICO Registration No: ZC077762 Registered with the Information
            Commissioner’s Office under the Data Protection Act 2018 and UK
            GDPR.{" "}
            <button
              type='button'
              onClick={openPrivacyPolicy}
              className='underline text-white cursor-pointer'>
              Privacy Policy
            </button>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
