import { ArrowRight } from "lucide-react";
import SectionHeader from "../shared/section-header";
import { Button } from "../ui/button";

export default function ProjectManagement() {
  return (
    <section className='bg-[#FAFAF9] py-15'>
      {/* Header */}
      <SectionHeader
        title='Ready to Transform Your Project Management?'
        subTitle='Join the Renewably UK network and gain instant access to the installer portal, IBG generation, and professional compliance infrastructure.'
        subTitleClassName='text-(--text-muted) font-medium text-[16px] max-w-220 mx-auto text-center'
      />
      <div className='flex items-center justify-center pt-6'>
        <Button className='mt-9 bg-background text-white rounded-[6px] px-6 py-5 cursor-pointer'>
          Start Your Onboarding <ArrowRight color='#FFFFFF' className='ml-2' />
        </Button>
      </div>
      <p className='text-[14px] text-center text-[#6B7280] mt-4'>
        Platform access included with all Renewably UK memberships
      </p>
    </section>
  );
}
