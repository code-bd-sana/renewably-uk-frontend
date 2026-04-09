import HeroBanner from "../shared/hero-banner";

export default function MembershipBanner() {
  return (
    <section>
      <HeroBanner
        title='Membership Plans'
        titleWrapperClassName='max-w-200 pb-2'
        descriptionsWrapperClassName='gap-y-3 lg:gap-y-3 max-w-270'
        descriptions={[
          "From free IBG generation to enterprise-scale automation — ",
          "choose the plan that fits your business.",
        ]}
      />
    </section>
  );
}
