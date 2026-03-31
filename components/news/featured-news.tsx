import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";
import { newsItems } from "./news-data";
import NewsCard from "./news-card";

export default function FeaturedNews() {
  const featuredNews = newsItems.slice(0, 3);

  return (
    <section className='mx-6 mb-18 px-4 lg:mx-25'>
      <div className='mb-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
        <div>
          <h2 className='mb-2 text-4xl font-semibold leading-[1.3] text-[#030712] sm:text-[2rem] lg:text-[2.5rem]'>
            Featured News
          </h2>
          <p className='text-sm text-(--text-muted) lg:text-base'>
            Latest updates across company milestones, policy changes, and market
            opportunities.
          </p>
        </div>

        <Button
          variant='outline'
          className='h-10 rounded-lg border-[#0F47A8] bg-white px-4 text-sm font-semibold '>
          <SlidersHorizontal className='size-4' />
          Filter news
        </Button>
      </div>

      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3'>
        {featuredNews.map((item) => (
          <NewsCard
            key={`${item.title}-${item.date}`}
            coverImageSrc={item.image}
            coverImageAlt={item.title}
            brandName='Renewably UK'
            tagline='Powering Renewables'
            bannerColor='#0F47A8'
            badgeLabel={item.category}
            date={item.date}
            title={item.title}
            excerpt={item.excerpt}
            ctaLabel='Read more'
            ctaHref={`/news/${item.slug}`}
          />
        ))}
      </div>
    </section>
  );
}
