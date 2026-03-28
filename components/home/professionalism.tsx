import SectionHeader from "../shared/section-header";

export default function Professionalism() {
  return (
    <section className='mx-6 lg:mx-25 px-4 py-15'>
      <SectionHeader
        title='Professionalism is a Competitive Advantage'
        align='start'
        titleClassName='text-[#030712]'
      />
      <div className='flex flex-col gap-y-6 text-base font-medium max-w-315'>
        <p className='text-(--text-muted)'>
          Growth without structure creates risk. Growth with protection builds
          trust.
        </p>
        <p className='text-(--text-muted)'>
          The renewable energy market is expanding fast — but so is scrutiny.
          Funding frameworks are tightening. Audit standards are rising.
          Consumers are more informed and less forgiving. Installers who fail to
          embed protection and governance into their operating model risk
          delays, disputes, reputational damage and lost contracts.
        </p>
        <p className='text-[#030712] text-xl [&+p]:-mt-5'>
          Technical competence is no longer enough.
        </p>
        <p className='text-(--text-muted) -mt-4'>
          The businesses winning contracts today are the ones that demonstrate
          structure, compliance and financial protection from the outset.
        </p>
        <p className='text-(--text-primary) text-xl [&+p]:-mt-1'>
          Renewably UK gives you the infrastructure to operate at that level.
        </p>
        <p className='text-(--text-muted)'>
          Our platform embeds Insurance Backed Guarantees, regulated insurance
          distribution oversight and secure compliance management directly into
          your installation workflow — turning protection from an afterthought
          into a competitive advantage.
        </p>
      </div>
    </section>
  );
}
