"use client";

import { useEffect, useState } from "react";
import { Feature, faqs, heroSlides, navItems, travelInfo } from "./siteData";

export function Header() {
  const [currentPath, setCurrentPath] = useState("/");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="Taniti home">
        Taniti
        <span className="brand-icons" aria-hidden="true">
          🌋🌴
        </span>
      </a>
      <nav className="main-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <div className="nav-group" key={item.label}>
            <a
              aria-current={currentPath === item.href ? "page" : undefined}
              className={currentPath === item.href ? "active-nav-link" : undefined}
              href={item.href}
            >
              {item.label}
            </a>
            {item.links.length > 0 && (
              <div className="nav-menu">
                {item.links.map(([label, href]) => (
                  <a href={href} key={label}>
                    {label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
      <a
        className="book-button"
        href={`${currentPath === "/" ? "" : currentPath}#book`}
      >
        Book Now
      </a>
    </header>
  );
}

export function DynamicHomeHero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const currentHero = heroSlides[activeSlide];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      className="hero hero--home"
      id="top"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(15, 43, 48, .62), rgba(15, 43, 48, .2)), url(${currentHero.image})`,
      }}
    >
      <div className="hero-panel">
        <h1>{currentHero.title}</h1>
        <p>{currentHero.copy}</p>
        <a className="primary-cta" href={currentHero.href}>
          Learn More
        </a>
      </div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  copy,
  image,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  image: string;
}) {
  return (
    <section
      className="hero hero--page"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(15, 43, 48, .72), rgba(15, 43, 48, .24)), url(${image})`,
      }}
    >
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{copy}</p>
      </div>
    </section>
  );
}

export function FeatureSection({
  id,
  items,
  anchors,
  variant,
}: {
  id: string;
  items: Feature[];
  anchors: string[];
  variant?: "stay" | "food";
}) {
  return (
    <div className="feature-list" id={id}>
      {items.map((item, index) => (
        <article
          className={`feature-row ${index % 2 ? "feature-row--reverse" : ""}`}
          id={anchors[index]}
          key={item.title}
        >
          <div className="feature-copy">
            <p className="eyebrow">{item.eyebrow}</p>
            <h3>{item.title}</h3>
            <p>{item.copy}</p>
            <button className="small-cta" type="button">
              {item.button}
            </button>
          </div>
          <div className={`image-cluster ${variant ? `image-cluster--${variant}` : ""}`}>
            <img src={item.image} alt="" />
            <img className="image-card image-card--small" src={item.secondaryImage} alt="" />
          </div>
        </article>
      ))}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{copy}</p>
    </div>
  );
}

export function FaqAccordion() {
  const [openFaq, setOpenFaq] = useState(-1);

  return (
    <div className="accordion" id="faq-money">
      {faqs.map((faq, index) => (
        <div className="accordion-item" id={index === 4 ? "faq-safety" : undefined} key={faq.question}>
          <button
            aria-expanded={openFaq === index}
            onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
            type="button"
          >
            <span>{faq.question}</span>
            <span aria-hidden="true">{openFaq === index ? "-" : "+"}</span>
          </button>
          {openFaq === index ? <p>{faq.answer}</p> : null}
        </div>
      ))}
    </div>
  );
}

export function TravelList() {
  const [openTravelItem, setOpenTravelItem] = useState(-1);
  const travelBasics = [
    ["Airport and cruise arrivals", travelInfo[0]],
    ["Public bus hours", travelInfo[1]],
    ["Alcohol rules", travelInfo[2]],
    ["Power outlets", travelInfo[3]],
    ["Language", travelInfo[4]],
    ["Holiday closures", travelInfo[5]],
  ];

  return (
    <div className="accordion travel-list" id="faq-travel">
      {travelBasics.map(([title, copy], index) => (
        <div className="accordion-item" key={title}>
          <button
            aria-expanded={openTravelItem === index}
            onClick={() => setOpenTravelItem(openTravelItem === index ? -1 : index)}
            type="button"
          >
            <span>{title}</span>
            <span aria-hidden="true">{openTravelItem === index ? "-" : "+"}</span>
          </button>
          {openTravelItem === index ? <p>{copy}</p> : null}
        </div>
      ))}
    </div>
  );
}

export function BookingStrip() {
  return (
    <section className="booking" id="book">
      <div>
        <p className="eyebrow">PLAN YOUR VISIT</p>
        <h2>Book your stay</h2>
        <p id="prototype-note">
          Choose your travel dates and group size to explore lodging options
          close to Taniti's beaches, harbor, and main visitor areas.
        </p>
      </div>
      <form className="booking-form" aria-label="Mock booking form">
        <label>
          Arrival
          <input type="date" />
        </label>
        <label>
          Travelers
          <select defaultValue="2">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4+</option>
          </select>
        </label>
        <button type="button">Check Options</button>
      </form>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <p>WGU D479 UX Taniti Prototype</p>
    </footer>
  );
}
