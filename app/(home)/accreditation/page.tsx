import AccreditationBanner from "@/components/accreditation/accreditation-banner";
import AccreditationJourney from "@/components/accreditation/accreditation-journey";
import AccreditationSupport from "@/components/accreditation/accreditation-support";
import EssentialAccreditation from "@/components/accreditation/essential-accreditation";
import PassAudits from "@/components/accreditation/pass-audits";
import ProfessionAccreditation from "@/components/accreditation/professional-accreditation";
import ProperAccreditation from "@/components/accreditation/proper-accreditation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Renewably UK - Accreditation",
  description:
    "Bringing a Greener Future to the United Kingdom One Service at a Time",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Renewably UK - Accreditation",
  },
};

export default function Accreditation() {
  return (
    <>
      <AccreditationBanner />
      <ProfessionAccreditation />
      <EssentialAccreditation />
      <PassAudits />
      <AccreditationJourney />
      <ProperAccreditation />
      <AccreditationSupport />
    </>
  );
}
