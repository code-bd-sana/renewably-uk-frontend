import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { InfoCard } from "@/components/shared/info-card";
import Link from "next/link";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    lines: ["contact@renewably.energy", "We'll respond within 24 hours"],
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["+44 161 524 3512", "Monday - Friday, 9:00 AM – 5:30 PM"],
  },
  {
    icon: MapPin,
    title: "Address",
    lines: [
      "Luneside House",
      "Blythe Gate, Blythe Valley Park",
      "Solihull, West Midlands",
      "United Kingdom, B90 8AH",
    ],
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: ["Monday - Friday: 9:00 AM – 5:30 PM", "Saturday - Sunday: Closed"],
  },
];

const quickLinks = [
  { title: "Insurance & Guarantees", href: "/insurance" },
  { title: "Funding Options", href: "/funding" },
  { title: "Installer Portal", href: "/platform" },
  { title: "Accreditation Support", href: "/accreditation" },
];

export default function QuickAccess() {
  return (
    <section className='flex h-full flex-col gap-3'>
      {contactInfo.map(({ icon: Icon, title, lines }) => {
        const isAddress = title === "Address";
        return (
          <InfoCard
            key={title}
            icon={<Icon color='#0F47A8' />}
            title={title}
            contentLayout='row'
            rowClassName={isAddress ? "items-start" : "items-center"}
            description={
              <div className='space-y-0.5'>
                {lines.map((line, i) => (
                  <p
                    key={line}
                    className={i === 0 ? "text-gray-800" : "text-gray-500"}>
                    {line}
                  </p>
                ))}
              </div>
            }
            className='rounded-[10px] border border-blue-100 -p-10'
            contentClassName={
              isAddress ? "px-4 py-3 space-y-1" : "px-4 -py-3 space-y-1"
            }
            cardBg='bg-blue-50 text-[#0f172a]'
            iconWrapperClassName={`shrink-0 bg-blue-100 hover:bg-blue-100 rounded-full w-12 h-12 [&>svg]:w-6 [&>svg]:h-6${isAddress ? " mt-0.5" : ""}`}
            titleClassName='text-base font-medium text-gray-900'
            descriptionClassName='text-sm leading-snug break-words text-gray-800'
          />
        );
      })}

      <div className='bg-background rounded-[10px] px-5 py-4 md:flex-1'>
        <h3 className='text-white text-[22px] mb-1'>Quick Access</h3>
        <p className='text-[#F3F4F6] text-base mb-3'>
          Already know what you&apos;re looking for? Jump straight to the
          information you need.
        </p>
        <div className='flex flex-col gap-2'>
          {quickLinks.map((link) => (
            <Link
              href={link.href}
              key={link.title}
              className="className='text-left text-sm text-white bg-[#FFFFFF33] hover:bg-[#FFFFFF44] transition rounded-[8px] px-4 py-2.5 font-medium cursor-pointer'">
              <button key={link.title}>{link.title}</button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
