import SectionHeader from "../shared/section-header";

export default function InstallationCompanies() {
  return (
    <section className='mx-6 lg:mx-25 px-4 py-15'>
      <SectionHeader
        title='Why Installation Companies Fail: It’s Not The Work—It’s The Records'
        align='start'
        titleClassName='text-[#030712]'
      />
      <div className='flex flex-col gap-y-6 text-base font-medium max-w-345'>
        <p className='text-(--text-muted) text-[16px]'>
          Up to 30% of retrofit projects require compliance corrections due to
          documentation failures. Structured governance and audit-ready
          processes are essential for installers operating within funded energy
          schemes.
        </p>
        <p className='text-(--text-muted) text-[16px]'>
          Managing renewable installations means juggling compliance
          certificates, customer contracts, IBG policies, scheme submissions,
          planning approvals, installer accreditations, warranty documentation
          and audit requests — often across multiple projects simultaneously.
        </p>
        <p className='text-(--text-muted) text-[16px]'>
          When documents are scattered across email inboxes, local drives,
          filing cabinets and USB sticks, risk increases exponentially. You
          cannot prove compliance if you cannot find the evidence. And if you
          cannot find it, funders will not release payment, auditors will not
          sign off, and disputes escalate.
        </p>
        <p className='text-(--text-primary) text-xl'>
          The Renewably UK Platform centralises everything in one secure,
          searchable, audit-ready location.
        </p>
      </div>
    </section>
  );
}
