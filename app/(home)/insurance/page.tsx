import ApprovedMeasures from "@/components/insurance/approved-measures";
import BluedropService from "@/components/insurance/bluedrop-service";
import InsuranceBanner from "@/components/insurance/insurance-banner";
import WhatIsIBG from "@/components/insurance/what-is-ibg";

export default function Insurance() {
  return (
    <>
      <InsuranceBanner />
      <BluedropService />
      <ApprovedMeasures />
      <WhatIsIBG />
    </>
  );
}
