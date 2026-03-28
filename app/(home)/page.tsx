import BannerPartner from "@/components/home/banner-partner";
import Commitment from "@/components/home/commitment";
import Confidence from "@/components/home/confidence";
import FundingSchema from "@/components/home/funding-schema";
import HomeBanner from "@/components/home/home-banner";
import HowItWorks from "@/components/home/how-it-works";
import Installers from "@/components/home/installers";
import JoinInstaller from "@/components/home/join-installer";
import Professionalism from "@/components/home/professionalism";

export default function Home() {
  return (
    <div>
      <HomeBanner />
      <BannerPartner />
      <Professionalism />
      <Installers />
      <FundingSchema />
      <HowItWorks />
      <Confidence />
      <JoinInstaller />
      <Commitment />
    </div>
  );
}
