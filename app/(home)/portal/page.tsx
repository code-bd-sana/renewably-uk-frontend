import CommonTools from "@/components/portal/common-tools";
import CorePlatform from "@/components/portal/core-platform";
import DocumentManagement from "@/components/portal/document-management";
import DocumentTypes from "@/components/portal/document-types";
import FAQ from "@/components/portal/faq";
import GetCompliant from "@/components/portal/get-compliant";
import HowPlatformWorks from "@/components/portal/how-platform-works";
import IBGCertificates from "@/components/portal/ibg-certificates";
import ICOBreach from "@/components/portal/ico-breach";
import ICORegulations from "@/components/portal/ico-regulations";
import InstallationCompanies from "@/components/portal/installation-companies";
import InstallerDashboard from "@/components/portal/installer-dashboard";
import InstallersSaying from "@/components/portal/installers-saying";
import MobileDesign from "@/components/portal/mobile-design";
import PortalBanner from "@/components/portal/portal-banner";
import ProjectManagement from "@/components/portal/project-management";
import RenewablyCompliant from "@/components/portal/renewably-compliant";
import SecurityCertifications from "@/components/portal/security-certifications";
import SecurityProtection from "@/components/portal/security-protection";
import TimeAndImpact from "@/components/portal/time-impact";
import UserRolesAndManagement from "@/components/portal/user-roles-management";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Renewably UK - Portal",
  description:
    "Bringing a Greener Future to the United Kingdom One Service at a Time",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Renewably UK - Portal",
  },
};

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
      <UserRolesAndManagement />
      <IBGCertificates />
      <MobileDesign />
      <TimeAndImpact />
      <InstallersSaying />
      <FAQ />
      <ProjectManagement />
    </>
  );
}
