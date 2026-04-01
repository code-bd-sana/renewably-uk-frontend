import AboutBanner from "@/components/about/about-banner";
import BenefitsForHomeowners from "@/components/about/benefits-for-homeowners";
import OurCommitment from "@/components/about/our-commitment";
import OurMission from "@/components/about/our-mission";
import OurValues from "@/components/about/our-values";
import WhatWeDo from "@/components/about/what-we-do";
import WhoWeAre from "@/components/about/who-we-are";
import WhyWeExist from "@/components/about/why-we-exist";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Renewably UK - About Us",
  description:
    "Bringing a Greener Future to the United Kingdom One Service at a Time",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Renewably UK - About Us",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutBanner />
      <WhoWeAre />
      <WhyWeExist />
      <OurMission />
      <WhatWeDo />
      <OurValues />
      <BenefitsForHomeowners />
      <OurCommitment />
    </>
  );
}
