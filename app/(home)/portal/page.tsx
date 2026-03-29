import CommonTools from "@/components/portal/common-tools";
import CorePlatform from "@/components/portal/core-platform";
import DocumentManagement from "@/components/portal/document-management";
import DocumentTypes from "@/components/portal/document-types";
import GetCompliant from "@/components/portal/get-compliant";
import HowPlatformWorks from "@/components/portal/how-platform-works";
import ICOBreach from "@/components/portal/ico-breach";
import ICORegulations from "@/components/portal/ico-regulations";
import InstallationCompanies from "@/components/portal/installation-companies";
import InstallerDashboard from "@/components/portal/installer-dashboard";
import PortalBanner from "@/components/portal/portal-banner";
import RenewablyCompliant from "@/components/portal/renewably-compliant";
import SecurityCertifications from "@/components/portal/security-certifications";
import SecurityProtection from "@/components/portal/security-protection";

export default function PortalPage() {
  return (
    <>
      <PortalBanner />
      <InstallationCompanies />
      <ICORegulations />
      <ICOBreach />
      <CommonTools />
      <RenewablyCompliant />
      <GetCompliant />
      <CorePlatform />
      <HowPlatformWorks />
      <InstallerDashboard />
      <DocumentManagement />
      <DocumentTypes />
      <SecurityProtection />
      <SecurityCertifications />
    </>
  );
}
