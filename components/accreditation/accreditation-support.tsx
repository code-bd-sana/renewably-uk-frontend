import SectionHeader from "../shared/section-header";
import { Button } from "../ui/button";

export default function AccreditationSupport() {
  return (
    <section className='bg-[#FAFAF9] py-15'>
      <SectionHeader
        title='Get Accreditation Support'
        subTitle='Join Renewably UK to access comprehensive accreditation support and compliance tracking'
        subTitleClassName='text-(--text-muted) font-medium text-[16px] mx-auto text-center'
      />
      <div className='flex gap-x-4 md:my-9 my-3 text-base justify-center items-center'>
        <Button className='bg-background text-white rounded-[6px] border border-(--text-muted) px-6 py-5 cursor-pointer'>
          Get Started
        </Button>
        <Button className='bg-white text-(--text-primary) font-medium border-[#E5E7EB] hover:border-[#83878d] rounded-[6px] px-6 py-5 cursor-pointer'>
          Contact Us
        </Button>
      </div>
    </section>
  );
}
