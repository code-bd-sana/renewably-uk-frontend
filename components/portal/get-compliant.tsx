import { ArrowRight } from "lucide-react";
import SectionHeader from "../shared/section-header";
import { Button } from "../ui/button";

export default function GetCompliant() {
  return (
    <div className='px-6 lg:px-25 bg-background py-12'>
      <SectionHeader
        title="Don't Risk ICO Fines - Get Compliant Today"
        subTitle='Join Renewably UK and gain instant access to ICO-compliant, UK-based document storage and project management'
        titleClassName='text-white text-[32px]'
        subTitleClassName='text-(--text-muted-foreground) max-w-160 mx-auto text-base font-interFont'
      />

      <div className='flex items-center justify-center pt-8'>
        <Button className='bg-white rounded-[10px] px-7 py-5.5 text-[16px] text-(--text-primary) font-medium cursor-pointer'>
          Get ICO-Compliant Platform Access
          <ArrowRight color='#0F47A8' className='ml-2' />
        </Button>
      </div>
    </div>
  );
}
