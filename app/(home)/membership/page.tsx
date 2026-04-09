import HelpChoosing from "@/components/membership/help-choosing";
import MembershipBanner from "@/components/membership/membership-banner";
import MembershipPlans from "@/components/membership/membership-plans";
import RenewablyApi from "@/components/membership/renewably-api";

export default function Membership() {
  return (
    <>
      <MembershipBanner />
      <MembershipPlans />
      <RenewablyApi />
      <HelpChoosing />
    </>
  );
}
