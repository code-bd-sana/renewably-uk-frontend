import SectionHeader from "../shared/section-header";

export default function ProfessionAccreditation() {
  return (
    <section className='mx-6 lg:mx-25 px-4 pt-15'>
      <SectionHeader
        title='Professional Accreditation Framework'
        align='start'
        titleClassName='text-[#030712]'
      />
      <div className='flex flex-col gap-y-6 text-base font-medium '>
        <p className='text-(--text-muted)'>
          Renewably UK supports renewable energy installers in achieving and
          maintaining the highest industry standards through professional
          accreditation and compliance frameworks.
        </p>
        <p className='text-(--text-muted)'>
          From MCS certification to TrustMark registration, we help you navigate
          the complex landscape of renewable energy accreditation while ensuring
          your business remains compliant with evolving regulations.
        </p>
      </div>
    </section>
  );
}
