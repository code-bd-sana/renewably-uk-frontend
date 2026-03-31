import { cn } from "@/lib/utils";
import SectionHeader from "./section-header";

interface HeroBannerProps {
  title: string;
  descriptions: string[];
  sectionClassName?: string;
  contentWrapperClassName?: string;
  titleWrapperClassName?: string;
  titleClassName?: string;
  descriptionsWrapperClassName?: string;
  descriptionClassName?: string;
}

export default function HeroBanner({
  title,
  descriptions,
  sectionClassName,
  contentWrapperClassName,
  titleWrapperClassName,
  titleClassName,
  descriptionsWrapperClassName,
  descriptionClassName,
}: HeroBannerProps) {
  return (
    <section
      className={cn(
        "bg-background pt-48! md:pt-52 lg:pt-70 px-6 lg:px-25 py-15",
        sectionClassName,
      )}>
      <div className={cn(contentWrapperClassName)}>
        <SectionHeader
          title={title}
          align='start'
          className={cn(titleWrapperClassName)}
          titleClassName={cn(
            "text-white !text-[48px] !lg:text-[64px]",
            titleClassName,
          )}
        />

        <div
          className={cn(
            "flex flex-col gap-y-6 text-base max-w-189",
            descriptionsWrapperClassName,
          )}>
          {descriptions.map((description) => (
            <p
              key={description}
              className={cn(
                "text-(--text-muted-foreground) text-[18px] lg:text-[21px]",
                descriptionClassName,
              )}>
              {description}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
