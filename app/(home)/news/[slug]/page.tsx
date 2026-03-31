import NewsDetails from "@/components/news/news-details";

type PageProps = {
  params: Promise<{ slug: string }>;
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
