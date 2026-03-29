import HeroBanner from "../shared/hero-banner";

export default function InsuranceBanner() {
  return (
    <div>
      <HeroBanner
        title='Insurance & Financial Protection Framework'
        titleWrapperClassName='max-w-200 pb-2'
        descriptionsWrapperClassName='gap-y-3 lg:gap-y-3 max-w-270'
        descriptions={[
          "FCA-Regulated Insurance Backed Guarantees Hosted Within UK Compliance Infrastructure",
          "Renewably UK Ltd hosts and administers access to the Insurance Backed Guarantee facility operated by Bluedrop Services Ltd, which is authorised and regulated by the Financial Conduct Authority.",
        ]}
      />
    </div>
  );
}
