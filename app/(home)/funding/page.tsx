import ExploreSchema from "@/components/funding/explore-schema";
import FundingAccess from "@/components/funding/funding-access";
import FundingBanner from "@/components/funding/funding-banner";
import FundingManagement from "@/components/funding/funding-management";
import FundingSchema from "@/components/funding/funding-schema";
import GovernmentFunding from "@/components/funding/govt-funding";
import HowFundingWorks from "@/components/funding/how-funding-works";
import ReadyToExplore from "@/components/funding/ready-to-explore";
import SuccessSupport from "@/components/funding/success-support";

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
