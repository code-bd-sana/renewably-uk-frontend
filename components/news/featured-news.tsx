"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { newsItems } from "./news-data";
import NewsCard from "./news-card";
import { useState, useRef, useEffect } from "react";

const categories = [
  "All Categories",
  "Government & Policy",
  "Industry Standards",
  "Market Insights",
  "Company News",
];

export default function FeaturedNews() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] =
    useState<string>("All Categories");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredNews =
    selectedCategory === "All Categories"
      ? newsItems
      : newsItems.filter((item) => item.category === selectedCategory);

  const selectedCategoryLabel =
    selectedCategory === "All Categories"
      ? "Browse all category"
      : selectedCategory;

  const featuredNews = filteredNews.slice(0, 3);

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

        <div className='relative' ref={dropdownRef}>
          <Button
            variant='outline'
            className='h-10 rounded-[10px] border-[#E5E7EB] bg-white px-4 text-base flex items-center gap-2 hover:text-gray-700 transition-colors cursor-pointer'
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            {selectedCategoryLabel}
            <ChevronDown className='size-4' />
          </Button>

          {isDropdownOpen && (
            <div className='absolute right-0 mt-2 w-56 bg-white rounded-[15px] border border-[#E5E7EB] shadow-lg z-10'>
              {categories.map((category) => (
                <button
                  key={category}
                  className={`w-full text-left px-4 py-3 hover:bg-gray-100 transition-colors border-b last:border-b-0 ${
                    selectedCategory === category
                      ? "bg-blue-50 text-[#0F47A8] font-semibold"
                      : "text-(--text-muted)"
                  }`}
                  onClick={() => {
                    setSelectedCategory(category);
                    setIsDropdownOpen(false);
                  }}>
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>
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
