import { CircleCheck } from "lucide-react";
import SectionHeader from "../shared/section-header";
import { Button } from "../ui/button";
import Link from "next/link";

export default function JoinInstaller() {
  const schemaInfo = [
    {
      icon: <CircleCheck color='#FFFFFF' size={20} />,
      title: "Protect your customers.",
    },
    {
      icon: <CircleCheck color='#FFFFFF' size={20} />,
      title: "Protect your reputation.",
    },
    {
      icon: <CircleCheck color='#FFFFFF' size={20} />,
      title: "Protect your future.",
    },
  ];

  return (
    <div className='px-6 lg:px-25 bg-background py-12'>
      <SectionHeader
        title='Join the Installers Raising the Standard'
        subTitle='Deliver Renewable Energy With Structure, Protection and Confidence'
        titleClassName='text-white text-[32px]'
        subTitleClassName='text-(--text-muted-foreground) max-w-280 mx-auto text-[18px] font-interFont'
      />
      <p className='text-white text-center max-w-210 mx-auto mt-6 text-base'>
        If you are serious about building a professional, future-ready renewable
        installation business, Renewably UK provides the infrastructure to
        support your next phase of growth.
      </p>
      <div className='flex flex-col w-fit mx-auto items-start justify-start gap-y-2 mt-10'>
        {schemaInfo.map((item, index) => (
          <div
            key={index}
            className='flex w-full text-start justify-start gap-1'>
            <div>{item.icon}</div>
            <span className='text-white text-base font-medium'>
              {item.title}
            </span>
          </div>
        ))}
      </div>
      <div className='flex items-center justify-center pt-6'>
        <Link href='/sign-up'>
          <Button className='bg-white rounded-[10px] px-7 py-5.5 text-[16px] text-(--text-primary) cursor-pointer'>
            Begin Your Onboarding Today
          </Button>
        </Link>
      </div>
    </div>
  );
}
