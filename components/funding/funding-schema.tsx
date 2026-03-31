import SectionHeader from "../shared/section-header";

export default function FundingSchema() {
  return (
    <section className='mx-6 lg:mx-25 px-4 pt-15 mb-15'>
      <SectionHeader
        title='Access UK Government Funding Schemes'
        align='start'
        titleClassName='text-[#030712]'
      />
      <div className='flex flex-col gap-y-6 text-base font-medium mt-6'>
        <p className='text-(--text-muted)'>
          The UK’s transition to Net Zero has unlocked over £24 billion in
          government funding schemes designed to accelerate renewable energy
          installations and building retrofits. For installers, navigating this
          complex landscape of schemes, eligibility requirements, and compliance
          standards can be challenging.
        </p>
        <p className='text-(--text-muted)'>
          Renewably UK simplifies access to these funding opportunities. Our
          platform helps you identify eligible schemes, submit compliant
          applications, and manage documentation—allowing you to focus on
          delivering quality installations while we handle the funding
          complexities.
        </p>
      </div>
    </section>
  );
}
