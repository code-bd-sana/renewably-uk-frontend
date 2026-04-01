import HeroBanner from "../shared/hero-banner";

export default function ContactBanner() {
  return (
    <section>
      <HeroBanner
        title='Get In Touch'
        titleWrapperClassName='max-w-200 pb-2'
        descriptionsWrapperClassName='gap-y-3 lg:gap-y-3 max-w-270'
        descriptions={["We're Here to Help You Succeed in Renewable Energy"]}
      />
    </section>
  );
}
