import AboutBanner from "@/components/about/about-banner";
import OurMission from "@/components/about/our-mission";
import OurValues from "@/components/about/our-values";
import WhatWeDo from "@/components/about/what-we-do";
import WhoWeAre from "@/components/about/who-we-are";
import WhyWeExist from "@/components/about/why-we-exist";

export default function AboutPage() {
  return (
    <>
      <AboutBanner />
      <WhoWeAre />
      <WhyWeExist />
      <OurMission />
      <WhatWeDo />
      <OurValues />
    </>
  );
}
