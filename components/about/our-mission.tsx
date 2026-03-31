import SectionHeader from "../shared/section-header";

export default function OurMission() {
  return (
    <section className='bg-background'>
      <div className='mx-6 lg:mx-25 px-4 py-15'>
        <SectionHeader title='Our Mission' titleClassName='text-[#FFFFFF]' />
        <div className='flex flex-col gap-y-6 text-base pt-4'>
          <p className='text-white text-[16px]'>
            Our mission is simple: To position installers as leaders in the
            renewable energy sector by embedding professional compliance,
            insurance protection, and operational efficiency directly into their
            installation workflows.
          </p>
          <p className='text-white text-[16px]'>
            We believe that technical competence should be supported—not
            undermined—by administrative complexity. Installers should focus on
            delivering exceptional renewable energy solutions. We handle the
            compliance, insurance, and governance infrastructure that makes
            those installations commercially viable and customer-trusted.
          </p>
        </div>
      </div>
    </section>
  );
}
