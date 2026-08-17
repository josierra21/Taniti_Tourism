import { BookingStrip, FaqAccordion, Footer, Header, TravelList } from "../SiteComponents";

export default function FaqsPage() {
  return (
    <main>
      <Header />

      <section className="section faq-stack" id="faqs">
        <div>
          <h2>FAQs</h2>
          <TravelList />
        </div>
        <FaqAccordion />
        <section className="contact-panel" id="contact">
          <p className="eyebrow">CONTACT US</p>
          <h3>Need help planning?</h3>
          <p>
            Send questions to the Taniti visitor center for help with lodging,
            transportation, activities, or basic travel information.
          </p>
          <p>
            Email: visit@taniti.example
            <br />
            Phone: (xxx) xxx-xxxx
          </p>
        </section>
      </section>

      <BookingStrip />
      <Footer />
    </main>
  );
}
