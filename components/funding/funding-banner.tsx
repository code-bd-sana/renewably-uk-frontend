import HeroBanner from "../shared/hero-banner";

export default function FundingBanner() {
  return (
    <section>
      <HeroBanner
        title='Renewable Project Funding'
        titleWrapperClassName='max-w-200 pb-2'
        descriptionsWrapperClassName='gap-y-3 lg:gap-y-3 max-w-270'
        descriptions={[
          "Unlock Financial Solutions for Your Renewable Energy Installations",
          "Access comprehensive funding solutions across government schemes, customer finance, and business growth initiatives",
        ]}
      />
    </section>
  );
}
