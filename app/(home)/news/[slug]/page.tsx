import NewsDetails from "@/components/news/news-details";
import { Metadata } from "next";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const metadata: Metadata = {
  title: "Renewably UK - News Details",
  description:
    "Bringing a Greener Future to the United Kingdom One Service at a Time",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Renewably UK - News Details",
  },
};

const page = async ({ params }: PageProps) => {
  const resolvedParams = await params;

  return (
    <section>
      <NewsDetails slug={resolvedParams.slug} />
    </section>
  );
};

export default page;
