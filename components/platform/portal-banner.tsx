import HeroBanner from "../shared/hero-banner";

export default function PortalBanner() {
  return (
    <HeroBanner
      title='Secure Installer Platform'
      descriptionsWrapperClassName='gap-y-6 lg:gap-y-8'
      descriptions={[
        "ICO-Compliant Document Management, Instant IBG Generation & Centralized Compliance Workflows",
        "A centralized, audit-ready system that transforms chaotic paperwork into structured, compliant project records — accessible anytime, from anywhere.",
      ]}
    />
  );
}
