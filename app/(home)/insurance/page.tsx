import ApprovedMeasures from "@/components/insurance/approved-measures";
import BenefitsForHomeowners from "@/components/insurance/benefits-for-homeowners";
import BenefitsForInstallers from "@/components/insurance/benefits-for-installers";
import BluedropService from "@/components/insurance/bluedrop-service";
import ComplianceAndStandard from "@/components/insurance/compliance-standard";
import ComprehensiveInsurance from "@/components/insurance/comprehensive-insurance";
import DataGovernance from "@/components/insurance/data-governance";
import HowIBGWorks from "@/components/insurance/how-ibg-works";
import InsuranceBanner from "@/components/insurance/insurance-banner";
import LegalCompliance from "@/components/insurance/legal-compliance";
import TrustedPartners from "@/components/insurance/trusted-partners";
import WhatIsIBG from "@/components/insurance/what-is-ibg";
import WhyMultilayer from "@/components/insurance/why-multilayer";

export default function Insurance() {
  return (
    <>
      <InsuranceBanner />
      <BluedropService />
      <ApprovedMeasures />
      <WhatIsIBG />
      <HowIBGWorks />
      <DataGovernance />
      <WhyMultilayer />
      <BenefitsForInstallers />
      <BenefitsForHomeowners />
      <ComprehensiveInsurance />
      <ComplianceAndStandard />
      <LegalCompliance />
      <TrustedPartners />
    </>
  );
}
