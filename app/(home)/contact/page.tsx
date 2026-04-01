import ContactBanner from "@/components/contact/contact-banner";
import ContactContent from "@/components/contact/contact-content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Renewably UK - Contact Us",
  description:
    "Bringing a Greener Future to the United Kingdom One Service at a Time",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Renewably UK - Contact Us",
  },
};
export default function Contact() {
  return (
    <>
      <ContactBanner />
      <ContactContent />
    </>
  );
}
