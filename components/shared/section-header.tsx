import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title?: string;
  subTitle?: string;
  className?: string;
  titleClassName?: string;
  subTitleClassName?: string;
  align?: "start" | "center";
}

const SectionHeader = ({
  title,
  subTitle,
  className,
  titleClassName,
  subTitleClassName,
  align = "center",
}: SectionHeaderProps) => {
  const isCenter = align === "center";

  return (
    (title || subTitle) && (
      <div className={cn(isCenter ? "text-center" : "text-start", className)}>
        {title && (
          <h2
            className={cn(
              "mb-2.5 text-4xl font-semibold leading-[1.3] sm:text-[2rem] lg:text-[2.5rem]",
              titleClassName,
            )}>
            {title}
          </h2>
        )}
        {subTitle && (
          <p
            className={cn(
              "text-xs  sm:text-sm lg:text-base",
              isCenter && "",
              subTitleClassName,
            )}>
            {subTitle}
          </p>
        )}
      </div>
    )
  );
};

export default SectionHeader;
