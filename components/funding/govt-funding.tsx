import SectionHeader from "../shared/section-header";

export default function GovernmentFunding() {
  return (
    <section className='bg-[#EAF1FD]'>
      <div className='mx-6 lg:mx-25 px-4 py-15'>
        <SectionHeader
          title='Government Funding for Net Zero – UK Wide'
          titleClassName='text-[#030712]'
          subTitle="Supporting the UK's Commitment to Net Zero by 2050"
          subTitleClassName='text-(--text-muted) font-medium text-[16px] max-w-150 mx-auto text-center'
        />
        <div className='flex flex-col gap-y-6 text-base font-medium mt-6 md:mt-12'>
          <p className='text-(--text-muted)'>
            The UK Government has made a legally binding commitment to achieve
            Net Zero greenhouse gas emissions by 2050. Meeting this target
            requires a fundamental transformation in how energy is generated,
            distributed and consumed across the UK. In particular, the
            decarbonisation of buildings, heating systems and local
            infrastructure is central to achieving long-term carbon reduction
            objectives.
          </p>
          <p className='text-(--text-muted)'>
            To support this transition, government-backed funding programmes
            have been introduced across England, Wales and Scotland. These
            schemes are designed to accelerate the replacement of fossil fuel
            heating, improve the thermal performance of existing buildings,
            expand renewable energy deployment and stimulate innovation in
            low-carbon technologies. They operate through a combination of
            capital grants, supplier obligations, structured loans and
            competitive funding competitions.
          </p>
          <p className='text-(--text-muted)'>
            A significant proportion of UK emissions originate from the built
            environment, particularly from gas heating systems and poorly
            insulated properties. As a result, current funding frameworks
            prioritise a fabric-first approach — improving insulation and
            building performance before installing low-carbon heating
            technologies such as heat pumps.
          </p>
        </div>
      </div>
    </section>
  );
}
