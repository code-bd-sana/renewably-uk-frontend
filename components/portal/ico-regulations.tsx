import SectionHeader from "../shared/section-header";

export default function ICORegulations() {
  return (
    <section className='mx-6 lg:mx-25 px-4 py-15'>
      <SectionHeader
        title='Are You Accidentally Breaking ICO Regulations?'
        subTitle='Most installers unknowingly breach UK data protection laws by storing customer data on overseas platforms'
        subTitleClassName='text-(--text-muted) font-medium text-[16px] max-w-160 mx-auto text-center'
      />
      <div className='flex flex-col gap-y-6 text-base font-medium max-w-345 pt-17'>
        <p className='text-[#030712] text-xl'>The Hidden ICO Compliance Risk</p>
        <p className='text-(--text-muted) -mt-4 text-[16px]'>
          When you store customer names, addresses, contact details, or project
          information containing personal data, you become a{" "}
          <span className='text-[#030712]'>Data Controller </span>
          under UK GDPR and the Data Protection Act 2018. This means you have
          legal obligations about where and how that data is stored.
        </p>
        <p className='text-(--text-muted) text-[16px]'>
          <span className='text-[#030712]'>The problem:</span> Popular tools
          like Dropbox, Google Sheets, Google Drive, and many cloud storage
          platforms routinely transfer and store UK customer data on servers
          located overseas — including in the United States and other non-UK
          jurisdictions.
        </p>
      </div>
    </section>
  );
}
