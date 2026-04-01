import FeaturedNews from "@/components/news/featured-news";
import NewsBanner from "@/components/news/news-banner";
import RecentNews from "@/components/news/recent-news";
import StayAhead from "@/components/news/stay-ahead";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Renewably UK - News",
  description:
    "Bringing a Greener Future to the United Kingdom One Service at a Time",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Renewably UK - News",
  },
};

export default function News() {
  return (
    <>
      <NewsBanner />
      <StayAhead />
      <FeaturedNews />
      <RecentNews />
    </>
  );
}
