import { ArrowRight } from "lucide-react";
import SectionHeader from "../shared/section-header";
import { Button } from "../ui/button";

export default function FCAInsurance() {
  return (
    <section className='py-15'>
      <SectionHeader
        title='Protect Your Installations with FCA-Regulated Insurance Backed Guarantees'
        titleClassName='max-w-230 mx-auto'
        subTitle='Renewably UK hosts access to the Insurance Backed Guarantee facility operated by Bluedrop Services Ltd — featuring three-pillar protection: FCA regulation, TrustMark approval, and ICO-compliant UK data hosting.'
        subTitleClassName='text-(--text-muted) font-medium text-[16px] mx-auto text-center max-w-220'
      />
      <div className='flex flex-col md:flex-row gap-4 md:my-9 my-3 text-base justify-center items-center'>
        <Button className='bg-background text-white rounded-[6px] border border-(--text-muted) px-6 py-5 cursor-pointer'>
          Explore Insurance Solutions
          <ArrowRight className='size-4 ml-2' color='#FFFFFF' />
        </Button>
        <Button className='bg-white text-(--text-primary) font-medium border-[#E5E7EB] hover:border-[#83878d] rounded-[6px] px-6 py-5 cursor-pointer'>
          Get in Touch
        </Button>
      </div>
    </section>
  );
}
