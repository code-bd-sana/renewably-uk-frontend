import BannerPartner from "@/components/home/banner-partner";
import HomeBanner from "@/components/home/home-banner";
import Installers from "@/components/home/installers";
import Professionalism from "@/components/home/professionalism";

export default function Home() {
  return (
    <div>
      <HomeBanner />
      <BannerPartner />
      <Professionalism />
      <Installers />
    </div>
  );
}
