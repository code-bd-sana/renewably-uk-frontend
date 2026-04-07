import {
  ArrowRight,
  Award,
  Database,
  FileCheck,
  Lock,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react";
import { InfoCard } from "../shared/info-card";
import SectionHeader from "../shared/section-header";
import { Button } from "../ui/button";
import Link from "next/link";

export default function BenefitsForInstallers() {
  const benefitData = [
    {
      title: "Competitive Advantage",
      description:
        "Differentiate yourself from competitors who don't offer IBGs. Win more contracts by demonstrating professional protection and regulatory compliance.",
      icon: <TrendingUp color='#0F47A8' />,
    },
    {
      title: "Reputation Protection",
      description:
        "Even if your business faces difficulties, your customers remain protected. Your legacy and reputation are preserved through the insurance mechanism.",
      icon: <Shield color='#0F47A8' />,
    },
    {
      title: "Regulatory Compliance",
      description:
        "Meet TrustMark, MCS, and emerging regulatory requirements. Stay ahead of changing regulations and maintain access to funding schemes.",
      icon: <FileCheck color='#0F47A8' />,
    },
    {
      title: "Customer Confidence",
      description:
        "Build trust instantly by offering independent, Bluedrop Services FCA-regulated protection. Convert more leads by addressing customer concerns about business stability.",
      icon: <Users color='#0F47A8' />,
    },
    {
      title: "Access to Funding",
      description:
        "Many government schemes, grants, and financing options now require installers who provide insurance backed guarantees.",
      icon: <Lock color='#0F47A8' />,
    },
    {
      title: "Professional Status",
      description:
        "Position yourself as a premium, professional installer. Join the ranks of the industry's most trusted and compliant businesses.",
      icon: <Award color='#0F47A8' />,
    },
    {
      title: "Audit Readiness & Documentation",
      description:
        "IBG certificates are automatically linked to property references, installer records, and version-controlled documentation. Centralised compliance records strengthen audit readiness and eliminate fragmented evidence packs.",
      icon: <FileCheck color='#0F47A8' />,
    },
    {
      title: "UK Data Sovereignty",
      description:
        "All customer data and IBG certificates are hosted within UK data centres under ICO-compliant infrastructure. Reduce international transfer risk and demonstrate governance maturity to funding partners.",
      icon: <Database color='#0F47A8' />,
    },
  ];

  return (
    <section className='bg-background py-15'>
      <SectionHeader
        title='Benefits for Installers'
        titleClassName='text-white'
        subTitle='Strengthen your competitive position and grow your business with confidence'
        subTitleClassName='text-white font-medium text-[16px] max-w-160 mx-auto text-center'
      />
      <div className='mx-6 lg:mx-35 px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mt-10 py-15'>
          {benefitData.map((cardData, index) => (
            <InfoCard
              key={index}
              title={cardData.title}
              titleClassName='text-xl text-white'
              description={cardData.description}
              descriptionClassName='text-white text-base max-w-150'
              icon={cardData.icon}
              iconBgClassName='bg-[#FFFFFF]'
              className='bg-[#FFFFFF33]  border border-[#E5E7EB] hover:border-[#6e6eaf] rounded-[10px]!'
            />
          ))}
        </div>
      </div>
      <div className='flex items-center justify-center pt-8'>
        <Link href='/sign-up'>
          <Button className='bg-white rounded-[10px] px-7 py-5.5 text-[16px] text-(--text-primary) font-medium cursor-pointer'>
            Get Started with IBG
            <ArrowRight color='#0F47A8' className='ml-2' />
          </Button>
        </Link>
      </div>
    </section>
  );
}
