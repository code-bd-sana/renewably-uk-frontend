import AccreditationBanner from "@/components/accreditation/accreditation-banner";
import EssentialAccreditation from "@/components/accreditation/essential-accreditation";
import PassAudits from "@/components/accreditation/pass-audits";
import ProfessionAccreditation from "@/components/accreditation/professional-accreditation";

export default function Accreditation() {
  return (
    <>
      <AccreditationBanner />
      <ProfessionAccreditation />
      <EssentialAccreditation />
      <PassAudits />
    </>
  );
}
