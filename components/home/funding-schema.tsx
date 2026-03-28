import {
  ArrowRight,
  CircleCheck,
  FileTextIcon,
  PoundSterling,
  Search,
} from "lucide-react";
import SectionHeader from "../shared/section-header";
import { Button } from "../ui/button";

export default function FundingSchema() {
  const schemaInfo = [
    {
      icon: <PoundSterling color='#FFFFFF' size={20} />,
      title: "24B+ Funding Available",
    },
    {
      icon: <FileTextIcon color='#FFFFFF' size={20} />,
      title: "13 Active Schemes",
    },
    {
      icon: <CircleCheck color='#FFFFFF' size={20} />,
      title: "Instant Matching",
    },
  ];

  return (
    <div className='px-6 lg:px-25 bg-background py-12'>
      <SectionHeader
        title='Which Funding Schemes Match Your Certifications?'
        subTitle="Search by your approved measures and discover eligible schemes from £24B+ in available UK government funding. Get instant results matched to the technologies you're certified to install."
        titleClassName='text-white text-[32px]'
        subTitleClassName='text-(--text-muted-foreground) max-w-280 mx-auto text-[18px] pt-8 font-interFont'
      />
      <div className='flex flex-col md:flex-row items-center justify-center gap-8 mt-10'>
        {schemaInfo.map((item, index) => (
          <div key={index} className='flex items-center gap-1'>
            <div>{item.icon}</div>
            <span className='text-white text-lg font-medium'>{item.title}</span>
          </div>
        ))}
      </div>
      <div className='flex items-center justify-center pt-6'>
        <Button className='bg-white rounded-[10px] px-7 py-5.5 text-[16px] text-(--text-primary) cursor-pointer'>
          <Search color='#0F47A8' /> Search Funding Schemes{" "}
          <ArrowRight color='#0F47A8' className='ml-2' />
        </Button>
      </div>
    </div>
  );
}
