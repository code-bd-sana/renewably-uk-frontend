import SectionHeader from "../shared/section-header";

export default function LegalCompliance() {
  return (
    <section className='bg-background py-15 mt-15'>
      <SectionHeader
        title='Legal Compliance & Consumer Rights'
        titleClassName='text-white'
      />
      <div className='mx-6'>
        <p className='text-white font-light text-[16px] max-w-250 mx-auto text-center'>
          Insurance backed guarantees provide legally binding protection under
          UK consumer law. They fulfill obligations under the Consumer Rights
          Act 2015 and provide additional protections beyond statutory
          requirements.
        </p>

        <p className='text-white font-light text-[16px] max-w-250 mx-auto text-center mt-3'>
          All policies are governed by the Insurance Act 2015 and regulated by
          the FCA. Homeowners have direct rights to claim against the insurance
          policy, ensuring no gaps in protection if the installer ceases
          trading.
        </p>
      </div>
    </section>
  );
}
