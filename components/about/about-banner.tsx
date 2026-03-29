import HeroBanner from "../shared/hero-banner";

export default function AboutBanner() {
  return (
    <HeroBanner
      title='About Renewably UK'
      descriptionsWrapperClassName='gap-y-3 lg:gap-y-1'
      descriptions={[
        "Professional infrastructure for renewable energy installers",
        "Designed for Installation Companies.",
        "Built for Compliance.",
      ]}
    />
  );
}
