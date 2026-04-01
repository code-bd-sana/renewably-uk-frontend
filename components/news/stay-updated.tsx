import SectionHeader from "../shared/section-header";
import { Button } from "../ui/button";

export default function StayUpdated() {
  return (
    <section className='bg-[#FAFAF9] py-15'>
      <SectionHeader
        title='Stay Updated'
        subTitle='Subscribe to our newsletter for the latest industry news, regulatory updates, and insights delivered directly to your inbox.'
        subTitleClassName='text-(--text-muted) font-medium text-[16px] mx-auto text-center'
      />
      <div className='flex flex-col md:flex-row gap-4 md:mt-9 mt-3 mb-2 text-base justify-center items-center'>
        <input
          type='email'
          placeholder='Enter your email address'
          aria-label='Email address'
          className='rounded-[6px] border border-[#E5E7EB] px-4 h-12 w-[320px] md:w-105 text-base bg-white placeholder:text-(--text-muted)'
        />

        <Button className='bg-background text-white rounded-[6px] border border-(--text-muted) px-6 h-12 flex items-center justify-center cursor-pointer w-[320px] md:w-auto'>
          Subscribe
        </Button>
      </div>
      <p className='text-[14px] text-(--text-muted) text-center'>
        We respect your privacy.{" "}
        <span className='text-(--text-primary) underline'>
          Unsubscribe at any time.
        </span>
      </p>
    </section>
  );
}
