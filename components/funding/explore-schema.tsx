"use client";

import { useState } from "react";
import SectionHeader from "../shared/section-header";
import { InfoCard } from "../shared/info-card";
import { Button } from "../ui/button";
import { ArrowRight, FileText, Search } from "lucide-react";
import Link from "next/link";
import { FundingSchemesModal } from "./funding-schemes-modal";

export default function ExploreSchema() {
  const [schemesModalOpen, setSchemesModalOpen] = useState(false);

  const statsCards = [
    {
      title: "£24B+",
      description: "Total Funding Available",
    },
    {
      title: "13",
      description: "Active Funding Schemes",
    },
    {
      title: "2050",
      description: "Net Zero Target Year",
    },
  ];

  const detailCards = [
    {
      title: "Energy Company Obligation (ECO4)",
      subtitle: "Extended to 31 December 2026",
      description:
        "The Energy Company Obligation is the fourth phase of the UK's supplier obligation programme. It places a legal requirement on larger energy suppliers to deliver energy efficiency improvements and low-carbon heating measures to low-income and vulnerable households across Great Britain.\n\nThe scheme prioritises the least energy-efficient properties (typically EPC D-G) and follows a whole-house, fabric-first approach. Measures include insulation upgrades, heating system improvements and low-carbon heating technologies such as air source heat pumps.\n\nEligibility typically applies to households receiving qualifying benefits or referred through Local Authority Flex (LA Flex) routes.",
    },
    {
      title: "Transition to the Warm Homes Plan",
      subtitle: "£1.5 Billion Bridging Allocation",
      description: (
        <>
          <p className='text-[#6B7280] mb-4'>
            The extension to December 2026 marks the final phase of ECO in its
            current supplier-led format. The government has confirmed there will
            be no direct successor supplier obligation replacing ECO4.
          </p>
          <p className='text-[#6B7280]'>
            Future domestic retrofit funding will transition into the broader
            Warm Homes Plan. To support this transition, £1.5 billion has been
            allocated to bridge the gap between ECO4 and the implementation of
            the Warm Homes Plan.
          </p>
          <p className='text-[#F3F4F6] bg-background mt-6 p-4 rounded-xl'>
            Ed Miliband: This £1.5 billion investment will help families stay
            warm, cut energy bills and accelerate Britain’s transition to clean
            energy as part of our mission to deliver Net Zero.
          </p>
        </>
      ),
    },
  ];

  return (
    <section>
      <div className='mx-6 lg:mx-25 px-4 py-15'>
        <SectionHeader
          title='Explore All 13 UK Funding Schemes'
          titleClassName='text-[#030712]'
          subTitle={
            <>
              From ECO4 and the{" "}
              <Link
                href='/funding'
                className='text-(--text-primary) underline underline-offset-2 hover:opacity-80 transition-opacity'>
                Warm Homes Plan
              </Link>{" "}
              to regional programmes across England, Scotland, and Wales —
              discover detailed information on eligibility, funding values,
              compliance requirements, and installer opportunities for each
              scheme.
            </>
          }
          subTitleClassName='text-(--text-muted) font-medium text-[16px] max-w-250 mx-auto text-center'
        />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pt-12 md:mx-48 lg:mx-62'>
          {statsCards.map((card, index) => (
            <InfoCard
              key={index}
              title={card.title}
              description={card.description}
              align='center'
              cardBg='bg-transparent text-[#1e293b]'
              className='bg-[linear-gradient(110deg,#F5F8FF_0%,#DBEAFE_60%)] border border-[#E5E7EB] hover:border-[#b0b1b6] rounded-[10px]!'
              titleClassName='text-[32px] text-(--text-primary) text-center'
              descriptionClassName='text-base text-[#64748B] text-center max-w-110 -mt-3'
            />
          ))}
        </div>
        <div className='flex flex-col md:flex-row gap-x-4 gap-y-2 md:my-9 my-3 text-base justify-center items-center'>
          <Button
            type='button'
            onClick={() => setSchemesModalOpen(true)}
            className='bg-background text-white rounded-[6px] border border-(--text-muted) px-6 py-5 cursor-pointer'>
            <FileText color='#FFFFFF' className='ml-2' />
            View All Funding Schemes
            <ArrowRight color='#FFFFFF' className='ml-2' />
          </Button>
          <Button className='bg-white text-(--text-primary) font-medium border-[#E5E7EB] hover:border-[#83878d] rounded-[6px] px-6 py-8 sm:py-5 cursor-pointer text-base w-full max-w-78 md:max-w-120 whitespace-normal'>
            <Search color='#1e293b' className='ml-2' />
            Search Funding Schemes for My Measures
            <ArrowRight color='#FFFFFF' className='ml-2' />
          </Button>
        </div>
        <p className='text-(--text-muted) text-center'>
          Browse all schemes or filter by the measures you’re approved to
          install
        </p>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 pt-12'>
          {detailCards.map((card, index) => (
            <InfoCard
              key={index}
              title={card.title}
              subtitle={card.subtitle}
              description={card.description}
              align='start'
              className='bg-[linear-gradient(110deg,#F5F8FF_0%,#DBEAFE_60%)] border border-[#E5E7EB] hover:border-[#b0b1b6] rounded-[10px]!'
              titleClassName='text-[20px] font-semibold text-[#030712]'
              subtitleClassName='text-[#0F47A8] font-semibold text-base'
              descriptionClassName='text-[14px] text-[#475569] leading-relaxed whitespace-pre-line'
            />
          ))}
        </div>

        <FundingSchemesModal
          open={schemesModalOpen}
          onOpenChange={setSchemesModalOpen}
        />
      </div>
    </section>
  );
}
