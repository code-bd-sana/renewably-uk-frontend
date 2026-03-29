import {
  Wind,
  Gauge,
  Layers,
  DoorOpen,
  Sun,
  ArrowRight,
  FileCheck,
} from "lucide-react";
import SectionHeader from "../shared/section-header";
import { Button } from "../ui/button";

const measures = [
  {
    icon: Wind,
    label: "Heating & Low Carbon",
    count: 15,
  },
  {
    icon: Gauge,
    label: "Heating Controls",
    count: 7,
  },
  {
    icon: Layers,
    label: "Insulation",
    count: 11,
  },
  {
    icon: DoorOpen,
    label: "Windows & Doors",
    count: 3,
  },
  {
    icon: Sun,
    label: "Renewables",
    count: 4,
  },
];

export default function ApprovedMeasures() {
  return (
    <section className=''>
      <div className='bg-[#DDE8F8]'>
        <div className=' mx-6 lg:mx-35 px-4 py-16'>
          {/* Badge */}
          <div className='flex justify-center mb-6'>
            <span className='text-[#1E3A8A] text-xs font-bold tracking-widest uppercase px-5 py-2 bg-white/60 bg-[linear-gradient(180deg,#F5F8FF_0%,#DBEAFE_60%)] border border-[#D1D5DB] hover:border-[#b0b1b6] rounded-[30px]!'>
              Industry-Leading Coverage
            </span>
          </div>
          <SectionHeader
            title='40 Approved Measures Covered'
            subTitle='Comprehensive Insurance Backed Guarantees across Net Zero, Part Funded and ATP programmes'
            subTitleClassName='text-(--text-muted) font-medium text-[16px] max-w-120 mx-auto text-center'
          />
          <p className='text-base text-center text-[#6B7280] mt-4'>
            Powered by the Bluedrop Services IBG Facility
          </p>
          {/* Cards */}
          <div className='mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4'>
            {measures.map(({ icon: Icon, label, count }) => (
              <div
                key={label}
                className='bg-background rounded-2xl px-5 p-5 flex flex-col items-center gap-3 text-white'>
                <Icon
                  color='#FFFFFF'
                  size={46}
                  strokeWidth={1}
                  className='text-white'
                />
                <div className='text-center flex flex-col flex-1'>
                  <p className='text-white font-medium leading-snug text-[22px] max-w-50'>
                    {label}
                  </p>
                  <div className='mt-auto'>
                    <p className='text-4xl text-white font-bold leading-none mt-3'>
                      {count}
                    </p>
                    <p className='text-base text-white mt-1'>measures</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className='flex flex-col items-center mt-12 gap-3'>
            <div className='flex items-center justify-center pt-6'>
              <Button className='bg-background text-white rounded-[6px] px-6 py-5 cursor-pointer text-base'>
                <FileCheck color='#FFFFFF' /> View All 40 Covered Measures{" "}
                <ArrowRight color='#FFFFFF' className='ml-2' />
              </Button>
            </div>
            <p className='text-[#6B7280] text-sm'>
              Detailed pricing, terms, and programme availability for all
              measures
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-y-6 text-base font-medium max-w-395 pt-12 mx-6 lg:mx-35 px-4 py-16'>
        <p className='text-(--text-muted) text-[16px]'>
          As delivery standards across the renewable and retrofit sector
          continue to evolve, consumer protection and financial safeguards have
          become central pillars of compliant programme delivery.
        </p>
        <p className='text-(--text-muted) text-[16px]'>
          Renewably UK Ltd hosts and administers access to the Insurance Backed
          Guarantee facility (an approved insurance distribution arrangement)
          operated by Bluedrop Services Ltd. The underlying insurance policies
          are arranged and underwritten through that facility, which operates
          under authorization and regulation by the Financial Conduct Authority
          for its regulated insurance activities.
        </p>
        <p className='text-(--text-muted) text-[16px]'>
          This structured model ensures installations delivered under Net Zero,
          Part Funded and ATP routes are supported by robust Insurance Backed
          Guarantees (IBGs), with clear role separation between facility
          operation, insurance underwriting, and digital compliance hosting —
          all operating within a UK-based, ICO-aligned data infrastructure.
        </p>
      </div>
    </section>
  );
}
