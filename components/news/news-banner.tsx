import HeroBanner from "../shared/hero-banner";

export default function NewsBanner() {
  return (
    <section>
      <HeroBanner
        title='News & Updates'
        titleWrapperClassName='max-w-200 pb-2'
        descriptionsWrapperClassName='gap-y-3 lg:gap-y-3 max-w-270'
        descriptions={[
          "Grow With Confidence",
          "The renewable energy landscape is changing rapidly — government schemes evolve, compliance standards tighten, and market conditions shift.",
        ]}
      />
    </section>
  );
}
