import { ArrowRight, Shield } from "lucide-react";
import { InfoCard } from "../shared/info-card";
import Link from "next/link";
import { Button } from "../ui/button";

export default function HelpChoosing() {
  return (
    <section className='mx-6 lg:mx-35 px-4 pt-15 mb-15'>
      <InfoCard
        title='Need help choosing?'
        titleClassName='text-xl'
        description='Our team can help you select the right plan based on your business size, compliance requirements, and growth plans. All plans include FCA-regulated IBG generation through the Bluedrop Services Ltd facility.'
        descriptionClassName='text-base'
        icon={<Shield color='#0F47A8' />}
        iconBgClassName='bg-[#B4CDF7]'
        className='bg-[linear-gradient(110deg,#F5F8FF_0%,#DBEAFE_60%)] border border-[#E5E7EB] hover:border-[#b0b1b6] rounded-[10px]!'
        footer={
          <Link href='/contact'>
            <Button className='rounded-[8px] bg-[#0F47A8] px-6 py-5 text-white text-base font-medium hover:bg-[#0b3a8c] transition-colors cursor-pointer'>
              Contact our team
              <ArrowRight className='w-5 h-5' color='#FFFFFF' />
            </Button>
          </Link>
        }
      />
    </section>
  );
}
