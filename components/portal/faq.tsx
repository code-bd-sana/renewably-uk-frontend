import SectionHeader from "../shared/section-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const faqs = [
  {
    question:
      "How long does it take to migrate existing documents to the portal?",
    answer:
      "Document migration is quick and straightforward. You can drag and drop entire folders of existing documents, and our system will auto-categorise them by file type. Most installers complete their initial upload within 1-2 hours. We also offer assisted migration support for larger document libraries.",
  },
  {
    question: "What happens to my data if I leave Renewably UK?",
    answer:
      "Your data remains yours. Upon cancellation, you can export all your data in standard formats. We retain your data for 30 days after cancellation, giving you ample time to download everything you need.",
  },
  {
    question: "Can I export all my data for external audits or backups?",
    answer:
      "Yes, you can export all your data at any time. We support multiple export formats including PDF, CSV, and ZIP archives to ensure compatibility with external audit tools and backup systems.",
  },
  {
    question:
      "Is there a limit on the number of projects or documents I can store?",
    answer:
      "Storage limits depend on your subscription plan. Our standard plans offer generous storage allowances, and we offer unlimited storage on our Enterprise tier. Contact us to discuss your specific needs.",
  },
  {
    question:
      "How secure is the portal compared to tools like Dropbox or Google Drive?",
    answer:
      "Our portal is purpose-built for the renewables industry with industry-specific compliance in mind. We use AES-256 encryption at rest and in transit, role-based access control, and maintain ISO 27001 certification — going beyond what general-purpose tools like Dropbox or Google Drive offer for regulated industries.",
  },
];

export default function FAQ() {
  return (
    <section className='mx-4 md:mx-6 lg:mx-35 px-2 md:px-4 py-10 md:py-12'>
      {/* Header */}
      <SectionHeader
        title='Frequently Asked Questions'
        subTitle='Common questions about the Renewably UK Platform'
        subTitleClassName='text-(--text-muted) font-medium text-[16px] max-w-120 mx-auto text-center'
      />

      {/* Accordion */}
      <Accordion
        type='single'
        collapsible
        defaultValue='item-0'
        className='w-full py-12'>
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className={`${index === 0 ? "" : "border-t border-gray-200"} last:border-b `}>
            <AccordionTrigger className='flex justify-between items-center gap-3 py-4 md:py-5 text-left text-base sm:text-lg md:text-xl lg:text-[22px] font-semibold text-gray-900 hover:no-underline **:data-[slot=accordion-trigger-icon]:hidden'>
              <span>{faq.question}</span>
              <span className='inline-flex w-6 shrink-0 justify-center text-xl md:text-2xl leading-none text-gray-600'>
                <span className='group-aria-expanded/accordion-trigger:hidden'>
                  +
                </span>
                <span className='hidden group-aria-expanded/accordion-trigger:inline'>
                  -
                </span>
              </span>
            </AccordionTrigger>
            <AccordionContent className='h-auto pb-2 md:pb-2 text-sm md:text-base text-gray-500 leading-relaxed'>
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
