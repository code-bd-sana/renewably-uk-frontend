import HeroBanner from "../shared/hero-banner";

export default function AccreditationBanner() {
  return (
    <div>
      <HeroBanner
        title='Accreditation & Compliance'
        titleWrapperClassName='max-w-200 pb-2'
        descriptionsWrapperClassName='gap-y-3 lg:gap-y-3 max-w-270'
        descriptions={[
          "Industry Certifications & Professional Standards for Renewable Energy Installers",
        ]}
      />
    </div>
  );
}
