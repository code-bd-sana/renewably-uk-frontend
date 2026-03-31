import SectionHeader from "../shared/section-header";
import { Button } from "../ui/button";

export default function OurCommitment() {
  return (
    <section className='mx-6 lg:mx-30 px-4 py-15'>
      <SectionHeader
        title='Our Commitment to You'
        titleClassName='text-[#030712]'
      />
      <div className='flex flex-col gap-y-3 text-base font-medium pt-9'>
        <p className='text-(--text-muted)'>
          We understand that renewable energy installers operate in a demanding,
          fast-moving environment where administrative burden can undermine
          technical excellence. That’s why we’ve built Renewably UK to remove
          that friction.
        </p>
        <p className='text-(--text-muted)'>
          From the moment you join, you gain access to Insurance Backed
          Guarantees that protect every installation, a digital platform that
          eliminates paperwork, and accreditation support that opens doors to
          new funding opportunities.
        </p>
        <p className='text-(--text-muted)'>
          You focus on installations. We handle the infrastructure.
        </p>
        <p className='text-(--text-muted)'>
          Together, we’re building a renewable energy sector where
          professionalism isn’t reserved for large corporations—it’s accessible
          to every installer committed to delivering quality, protected,
          compliant installations.
        </p>
      </div>
      <div className='flex items-center justify-center'>
        <Button className='mt-9 bg-background text-white rounded-[6px] px-6 py-5 cursor-pointer'>
          Join Renewably UK Today
        </Button>
      </div>
    </section>
  );
}
