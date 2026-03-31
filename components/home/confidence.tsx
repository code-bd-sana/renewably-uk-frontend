import { ArrowRight } from "lucide-react";
import SectionHeader from "../shared/section-header";
import { Button } from "../ui/button";

export default function Confidence() {
  return (
    <section className='mx-6 lg:mx-30 px-4 py-15'>
      <SectionHeader
        title='Confidence That Continues — Even If You Can’t'
        align='start'
        titleClassName='text-[#030712]'
      />
      <div className='flex flex-col gap-y-6 text-base font-medium'>
        <p className='text-(--text-muted)'>
          Insurance Backed Guarantees Hosted by Renewably UK
        </p>
        <p className='text-(--text-muted)'>
          When homeowners invest in renewable technology, they need assurance
          that goes beyond promises. Our Insurance Backed Guarantee facility
          ensures installations remain protected even if the original installer
          ceases trading during the guarantee period.
        </p>
        <p className='text-(--text-muted)'>
          Delivered in partnership with Bluedrop Services, authorized and
          regulated by the Financial Conduct Authority, and aligned with
          TrustMark standards.
        </p>
      </div>
      <Button className='mt-9 bg-background text-white rounded-[6px] px-6 py-5 cursor-pointer'>
        View Full Insurance Details{" "}
        <ArrowRight color='#FFFFFF' className='ml-2' />
      </Button>
    </section>
  );
}
