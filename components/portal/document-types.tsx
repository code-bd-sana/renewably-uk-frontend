import { InfoCard } from "../shared/info-card";
import SectionHeader from "../shared/section-header";

export default function DocumentTypes() {
  const compliantData = [
    {
      title: "Certificates & Compliance",
      description:
        "MCS certificates, Building Control approvals, EPC reports, DNO notifications, planning permissions",
    },
    {
      title: "Insurance Documents",
      description:
        "IBG policies, public liability certificates, professional indemnity, product warranties",
    },
    {
      title: "Long-Term Coverage",
      description:
        "Signed contracts, deposit receipts, handover checklists, customer feedback forms",
    },
    {
      title: "Simple Claims Process",
      description:
        "Photos (before/during/after), commissioning sheets, system diagrams, test results",
    },
  ];

  return (
    <section className='bg-background py-15'>
      <SectionHeader
        title='Supported Document Types'
        titleClassName='text-white'
        subTitle='Store any file type securely — no restrictions on format or file size'
        subTitleClassName='text-white font-medium text-[16px] max-w-160 mx-auto text-center'
      />
      <div className='mx-6 lg:mx-35 px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 mt-10 py-15'>
          {compliantData.map((cardData, index) => (
            <InfoCard
              key={index}
              title={cardData.title}
              titleClassName='text-xl text-white'
              description={cardData.description}
              descriptionClassName='text-white text-base max-w-150'
              className='bg-[#FFFFFF33]  border border-[#E5E7EB] hover:border-[#b0b1b6] rounded-[10px]!'
            />
          ))}
        </div>
      </div>
    </section>
  );
}
