import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export interface NewsCardProps {
  coverImageSrc?: string;
  coverImageAlt?: string;
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
  return (
    <Card
      className={cn(
        "w-full h-full flex flex-col overflow-hidden rounded-[10px] border border-[#E5E7EB] bg-white shadow-none transition-colors hover:border-[#b0b1b6] p-0 gap-0",
        className,
      )}>
      {/* Cover Image */}
      {coverImageSrc && (
        <div className='relative aspect-video w-full overflow-hidden bg-white'>
          <Image
            src={coverImageSrc}
            alt={coverImageAlt}
            fill
            className='object-cover'
            sizes='(min-width: 1280px) 360px, (min-width: 768px) 50vw, 100vw'
          />
        </div>
      )}

      {/* Banner */}
      {!coverImageSrc && (logoSrc || brandName) && (
        <div
          className='flex flex-col items-center justify-center gap-2 px-6 py-4'
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
      )}

      {/* Body */}
      <CardHeader className='space-y-1 pb-2 pt-4'>
        <div className='flex items-center justify-between gap-2'>
          {badgeLabel && (
            <Badge
              variant='secondary'
              className='rounded-full bg-[#0F47A8]/10 px-3 py-0.5 text-xs font-medium text-(--text-primary)'>
              {badgeLabel}
            </Badge>
          )}
          {date && (
            <span className='ml-auto text-xs text-(--text-muted)'>{date}</span>
          )}
        </div>

        <h3 className='text-[22px] leading-snug tracking-tight'>{title}</h3>
      </CardHeader>

      {/* Footer pinned bottom */}
      <CardFooter className='pb-5 pt-2 border-0 mt-auto flex flex-col items-start'>
        {/* Content grows */}
        {excerpt && (
          <CardContent className='pb-3 pt-0 grow px-0'>
            <p className='line-clamp-3 text-sm text-(--text-muted)'>
              {excerpt}
            </p>
          </CardContent>
        )}

        {ctaHref ? (
          <Button
            asChild
            className='rounded-[8px] px-5 py-2 text-sm font-semibold text-white'
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
            className='rounded-[8px] px-5 py-2 text-sm font-semibold text-white'
            style={{ backgroundColor: bannerColor }}>
            {ctaLabel}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
