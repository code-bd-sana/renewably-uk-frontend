import FeaturedNews from "@/components/news/featured-news";
import NewsBanner from "@/components/news/news-banner";
import RecentNews from "@/components/news/recent-news";
import StayAhead from "@/components/news/stay-ahead";

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
