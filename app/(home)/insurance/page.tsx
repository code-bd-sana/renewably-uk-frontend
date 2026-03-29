import ApprovedMeasures from "@/components/insurance/approved-measures";
import BluedropService from "@/components/insurance/bluedrop-service";
import DataGovernance from "@/components/insurance/data-governance";
import HowIBGWorks from "@/components/insurance/how-ibg-works";
import InsuranceBanner from "@/components/insurance/insurance-banner";
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
    </>
  );
}
