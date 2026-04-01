import ExploreSchema from "@/components/funding/explore-schema";
import FundingAccess from "@/components/funding/funding-access";
import FundingBanner from "@/components/funding/funding-banner";
import FundingManagement from "@/components/funding/funding-management";
import FundingSchema from "@/components/funding/funding-schema";
import GovernmentFunding from "@/components/funding/govt-funding";
import HowFundingWorks from "@/components/funding/how-funding-works";
import ReadyToExplore from "@/components/funding/ready-to-explore";
import SuccessSupport from "@/components/funding/success-support";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Renewably UK - Funding",
  description:
    "Bringing a Greener Future to the United Kingdom One Service at a Time",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Renewably UK - Funding",
  },
};

export default function Funding() {
  return (
    <>
      <FundingBanner />
      <FundingSchema />
      <GovernmentFunding />
      <ExploreSchema />
      <FundingAccess />
      <FundingManagement />
      <HowFundingWorks />
      <SuccessSupport />
      <ReadyToExplore />
    </>
  );
}
