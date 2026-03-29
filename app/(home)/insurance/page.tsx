import ApprovedMeasures from "@/components/insurance/approved-measures";
import BluedropService from "@/components/insurance/bluedrop-service";
import InsuranceBanner from "@/components/insurance/insurance-banner";

export default function Insurance() {
  return (
    <>
      <InsuranceBanner />
      <BluedropService />
      <ApprovedMeasures />
    </>
  );
}
