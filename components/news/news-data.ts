export interface NewsSection {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface NewsItem {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  imageFit?: "contain" | "cover";
  imageClass?: string;
  sections?: NewsSection[];
}

export const newsItems: NewsItem[] = [
  {
    slug: "introducing-renewably-uk-ltd",
    title: "Introducing Renewably UK Ltd",
    excerpt:
      "A new chapter with the same trusted team and a stronger platform to support installers, homeowners, and funding partners.",
    category: "Company Update",
    date: "February 25, 2026",
    image: "/news/blog1.png",
    sections: [
      {
        heading: "A Stronger Identity",
        paragraphs: [
          "Renewably UK Ltd brings our experience under one focused brand, giving partners a clearer route to delivery and support.",
          "The team, values, and service standards remain the same, while the platform has been improved to support scale.",
        ],
      },
      {
        heading: "What This Means For Partners",
        bullets: [
          "Faster support response windows",
          "Improved document and workflow visibility",
          "A more unified experience across funding and compliance",
        ],
      },
    ],
  },
  {
    slug: "eco4-guidance-update",
    title: "ECO4 Guidance Update: What Installers Need to Know",
    excerpt:
      "Key compliance clarifications and practical steps to keep projects progressing smoothly under the latest ECO4 rules.",
    category: "Policy Brief",
    date: "March 05, 2026",
    image: "/news/blog2.png",
    sections: [
      {
        paragraphs: [
          "Recent ECO4 guidance updates emphasize evidence quality, journey traceability, and clearer installer documentation.",
          "Installers should review current templates and ensure every project file includes complete, audit-ready records.",
        ],
      },
    ],
  },
  {
    slug: "finance-pathways-expanded",
    title: "Finance Pathways Expanded for Heat Pump Projects",
    excerpt:
      "New partner-led funding options are now available, helping customers spread costs while improving project conversion rates.",
    category: "Funding",
    date: "March 12, 2026",
    image: "/news/blog3.png",
  },
  {
    slug: "quality-assurance-partnership",
    title: "New Quality Assurance Partnership Announced",
    excerpt:
      "Our latest collaboration strengthens QA monitoring and supports consistent standards from survey through installation.",
    category: "Partnership",
    date: "March 19, 2026",
    image: "/news/blog4.png",
  },
  {
    slug: "spring-2026-demand-trends",
    title: "Homeowner Demand Trends for Spring 2026",
    excerpt:
      "Regional demand data highlights where retrofit interest is rising fastest and how teams can prepare for increased enquiries.",
    category: "Market Insight",
    date: "March 24, 2026",
    image: "/home/banner-partner/cyber.png",
  },
  {
    slug: "document-workflow-improvements",
    title: "Document Workflow Improvements Now Live",
    excerpt:
      "Faster document handling and improved status visibility are now available in the portal to reduce admin overhead.",
    category: "Platform",
    date: "March 29, 2026",
    image: "/home/banner-partner/ico.png",
  },
];
