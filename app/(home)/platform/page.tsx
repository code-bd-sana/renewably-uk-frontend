import CommonTools from "@/components/platform/common-tools";
import CorePlatform from "@/components/platform/core-platform";
import DocumentManagement from "@/components/platform/document-management";
import DocumentTypes from "@/components/platform/document-types";
import FAQ from "@/components/platform/faq";
import GetCompliant from "@/components/platform/get-compliant";
import HowPlatformWorks from "@/components/platform/how-platform-works";
import IBGCertificates from "@/components/platform/ibg-certificates";
import ICOBreach from "@/components/platform/ico-breach";
import ICORegulations from "@/components/platform/ico-regulations";
import InstallationCompanies from "@/components/platform/installation-companies";
import InstallerDashboard from "@/components/platform/installer-dashboard";
import InstallersSaying from "@/components/platform/installers-saying";
import MobileDesign from "@/components/platform/mobile-design";
import PortalBanner from "@/components/platform/portal-banner";
import ProjectManagement from "@/components/platform/project-management";
import RenewablyCompliant from "@/components/platform/renewably-compliant";
import SecurityCertifications from "@/components/platform/security-certifications";
import SecurityProtection from "@/components/platform/security-protection";
import TimeAndImpact from "@/components/platform/time-impact";
import UserRolesAndManagement from "@/components/platform/user-roles-management";
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
