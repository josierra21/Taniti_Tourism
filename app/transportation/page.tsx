import { BookingStrip, Footer, Header, SectionHeading } from "../SiteComponents";

const transportationItems = [
  {
    id: "arriving",
    title: "Arriving by air",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80",
    copy:
      "Most visitors arrive by air. Taniti's airport can currently accommodate small jets and propeller planes, and expansion for larger jets is planned.",
  },
  {
    id: "cruise",
    title: "Cruise ship",
    image:
      "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=900&q=80",
    copy:
      "A small cruise ship docks in Yellow Leaf Bay for one night each week.",
  },
  {
    id: "buses",
    title: "Public and private buses",
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=900&q=80",
    copy:
      "Public buses serve Taniti City from 5 a.m. to 11 p.m. every day. Private buses serve the rest of the island.",
  },
  {
    id: "cars-taxis",
    title: "Taxis and rental cars",
    image:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=900&q=80",
    copy:
      "Taxis are available in Taniti City, and visitors can rent cars from a local rental agency near the airport.",
  },
  {
    id: "walking-bikes",
    title: "Bicycles",
    image:
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=900&q=80",
    copy:
      "Bikes and helmets are available to rent, and helmets are required by law.",
  },
  {
    id: "walking",
    title: "Walking",
    image:
      "https://waikikibeachstays.com/wp-content/uploads/2023/06/waikiki-shopping-Dukes-Marketplace-1.jpg",
    copy:
      "Taniti City is fairly flat and walkable, and Merriton Landing is easy to explore on foot.",
  },
];

export default function TransportationPage() {
  return (
    <main>
      <Header />

      <section className="section muted">
        <SectionHeading
          eyebrow="GETTING AROUND"
          title="Transportation"
          copy="Plan how to arrive, move between neighborhoods, and explore Taniti by bus, car, bike, or on foot."
        />
        <div className="info-grid">
          {transportationItems.map((item) => (
            <article className="info-card" id={item.id} key={item.id}>
              <img className="info-card-image" src={item.image} alt="" />
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <BookingStrip />
      <Footer />
    </main>
  );
}
