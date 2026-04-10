import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export interface NewsCardProps {
  coverImageSrc?: string;
  coverImageAlt?: string;
  coverImageContainerClassName?: string;
  logoSrc?: string;
  logoAlt?: string;
  brandName?: string;
  tagline?: string;
  bannerColor?: string;
  badgeLabel?: string;
  date?: string;
  title: string;
  excerpt?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
  ctaHref?: string;
  className?: string;
}

export default function NewsCard({
  coverImageSrc,
  coverImageAlt = "News cover image",
  coverImageContainerClassName,
  logoSrc,
  logoAlt = "Brand logo",
  brandName,
  tagline,
  bannerColor = "#1a3fcc",
  badgeLabel,
  date,
  title,
  excerpt,
  ctaLabel = "Read more",
  onCtaClick,
  ctaHref,
  className,
}: NewsCardProps) {
  const titlePreview = truncateText(title, 60);
  const subtitle = excerpt ? truncateText(excerpt, 140) : "";

  return (
    <article
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-[14px] border border-[#EEF2F7] bg-white transition hover:shadow-[0_12px_30px_rgba(15,23,42,0.08)]",
        className,
      )}>
      {coverImageSrc ? (
        <div
          className={cn(
            "relative h-90 w-full overflow-hidden bg-[#F8FAFC] sm:h-72 lg:h-80",
            coverImageContainerClassName,
          )}>
          <Image
            src={coverImageSrc}
            alt={coverImageAlt}
            fill
            quality={95}
            className='object-cover object-center'
            sizes='(min-width: 1536px) 400px, (min-width: 1280px) 30vw, (min-width: 768px) 50vw, 100vw'
          />
        </div>
      ) : logoSrc || brandName ? (
        <div
          className='flex min-h-72 flex-col items-center justify-center gap-2 px-6 py-4'
          style={{ backgroundColor: bannerColor }}>
          {logoSrc && (
            <div className='relative h-16 w-16'>
              <Image
                src={logoSrc}
                alt={logoAlt}
                fill
                className='object-contain'
                sizes='64px'
              />
            </div>
          )}
          {brandName && (
            <p className='text-lg font-extrabold uppercase tracking-[0.2em] text-white'>
              {brandName}
            </p>
          )}
          {tagline && (
            <p className='text-[0.65rem] font-medium uppercase tracking-[0.25em] text-white/80'>
              {tagline}
            </p>
          )}
        </div>
      ) : null}

      <div className='flex flex-1 flex-col p-5'>
        <div className='mb-2 flex items-center gap-2.5'>
          {badgeLabel && (
            <Badge
              variant='secondary'
              className='rounded-full bg-[#EAF2FF] px-2 py-1 text-[11px] font-medium text-[#2563EB]'>
              {badgeLabel}
            </Badge>
          )}
          {date && <span className='text-[11px] text-[#6B7280]'>{date}</span>}
        </div>

        <h3 className='mb-1.5 text-[22px] font-semibold leading-[1.45] text-[#0F172A]'>
          {titlePreview}
        </h3>

        <div className='mt-auto pt-1'>
          {excerpt && (
            <p className='mb-4 flex-1 text-[14px] leading-[1.7] text-[#6B7280]'>
              {subtitle}
            </p>
          )}
          {ctaHref ? (
            <Button
              asChild
              className='inline-flex h-10 rounded-[8px] px-5 text-base font-medium text-white'
              style={{ backgroundColor: bannerColor }}>
              {ctaHref.startsWith("/") ? (
                <Link href={ctaHref}>{ctaLabel}</Link>
              ) : (
                <a href={ctaHref} target='_blank' rel='noopener noreferrer'>
                  {ctaLabel}
                </a>
              )}
            </Button>
          ) : (
            <Button
              onClick={onCtaClick}
              className='inline-flex h-10 rounded-[8px] px-5 text-base font-medium text-white'
              style={{ backgroundColor: bannerColor }}>
              {ctaLabel}
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}

function truncateText(text: string, maxCharacters: number) {
  const trimmed = text.trim();

  if (trimmed.length <= maxCharacters) {
    return trimmed;
  }

  return `${trimmed.slice(0, maxCharacters).trimEnd()}...`;
}
