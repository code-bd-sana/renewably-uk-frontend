import ContactMessage from "./contact-message";
import QuickAccess from "./quick-access";

export default function ContactContent() {
  return (
    <section className='mx-3 lg:mx-45 px-4 pt-15 mb-15'>
      <div className='grid grid-cols-1 xl:grid-cols-2 gap-8 xl:items-stretch'>
        <ContactMessage />
        <QuickAccess />
      </div>
    </section>
  );
}
