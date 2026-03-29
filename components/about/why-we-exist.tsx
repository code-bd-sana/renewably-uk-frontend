import SectionHeader from "../shared/section-header";

export default function WhyWeExist() {
  return (
    <section className='mx-6 lg:mx-25 px-4 py-10'>
      <SectionHeader title='Why We Exist' titleClassName='text-[#030712]' />
      <div className='flex flex-col gap-y-6 text-base font-medium max-w-375 pt-4'>
        <p className='text-(--text-muted) text-[16px]'>
          The renewable energy sector is experiencing unprecedented growth—but
          growth without structure creates risk. Consumer protection frameworks
          are tightening. Funding eligibility requirements are becoming more
          stringent. Regulatory scrutiny is intensifying.
        </p>
        <p className='text-(--text-muted) text-[16px]'>
          Installers who cannot demonstrate compliance infrastructure, financial
          protection mechanisms, and audit-ready documentation are losing
          opportunities to competitors who can.
        </p>
        <p className='text-[#030712] text-xl [&+p]:-mt-5'>
          We exist to level that playing field.
        </p>
        <p className='text-(--text-muted) text-[16px]'>
          Renewably UK provides installers—regardless of size—with the same
          professional infrastructure that larger organizations build in-house:
          FCA-regulated insurance distribution, ICO-compliant data management,
          and accreditation frameworks aligned with TrustMark and MCS standards.
        </p>
      </div>
    </section>
  );
}
