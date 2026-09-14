"use client";

import { useState } from "react";
import { BookingStrip, Footer, Header } from "../SiteComponents";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main>
      <Header />
      <section className="section contact-page" aria-labelledby="contact-title">
        <div className="contact-intro">
          <p className="eyebrow">WE’RE HERE TO HELP</p>
          <h1 id="contact-title">Contact Us</h1>
          <p>Have a question about visiting Taniti? Get in touch with our visitor center for help with lodging, transportation, activities, and more.</p>
          <div className="contact-details">
            <h2>Taniti visitor center</h2>
            <p><strong>Email</strong><br />visit@taniti.example</p>
            <p><strong>Phone</strong><br />(xxx) xxx-xxxx</p>
          </div>
        </div>
        <form className="contact-form" aria-labelledby="message-title" aria-describedby="contact-note" onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
          <h2 id="message-title">Send us a message</h2>
          <p id="contact-note">This is a prototype form. Messages are not sent.</p>
          <label htmlFor="contact-name">Name
            <input id="contact-name" name="name" autoComplete="name" required />
          </label>
          <label htmlFor="contact-email">Email
            <input id="contact-email" name="email" type="email" autoComplete="email" required />
          </label>
          <label htmlFor="contact-message">Message
            <textarea id="contact-message" name="message" rows={5} required />
          </label>
          <button className="primary-cta" type="submit">Send Message</button>
          {submitted && <p className="contact-status" role="status">Thanks for trying the form! This is a prototype, so your message has not been sent.</p>}
        </form>
      </section>
      <BookingStrip />
      <Footer />
    </main>
  );
}
