import { BookingStrip, DynamicHomeHero, Footer, Header } from "./SiteComponents";

const exploreItems = [
  {
    label: "Beaches",
    href: "/things-to-do#beaches",
    image:
      "https://images.unsplash.com/photo-1753733066785-fb88cb7c40f1?auto=format&fit=crop&w=600&q=80",
  },
  {
    label: "Lush Tropical Rainforests",
    href: "/things-to-do#rainforest-volcano",
    image:
      "https://images.ctfassets.net/adaoj5ok2j3t/6nqCcWo49HETcl32kvlcBM/49a8bc0af187f8c05b90e0f1f799e1e9/sashasamsonova-wepresent-08.jpg?fm=webp&q=75&w=600",
  },
  {
    label: "Volcano",
    href: "/things-to-do#rainforest-volcano",
    image:
      "https://cdn.hawaiiguide.io/images/jcogs_img/cache/Mauna_Kea2_-_abcdef_-_c78b899e6b062371a34149dd1ffc98e85b082ca0.jpg",
  },
  {
    label: "Snorkeling",
    href: "/things-to-do#tours",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
  },
  {
    label: "Fishing Tours",
    href: "/things-to-do#tours",
    image:
      "https://images.squarespace-cdn.com/content/v1/5c6a0fd77788977a41b9c3f0/1691799443010-QWYE9KEAIM2Y11WI7P11/Willin_NapaliCoast.jpg?format=600w",
  },
  {
    label: "Local Entertainment",
    href: "/things-to-do#merriton",
    image:
      "https://kauaitravelblog.com/assets/images/activities/aulii-luau.jpg",
  },
];

export default function Home() {
  return (
    <main>
      <Header />
      <DynamicHomeHero />

      <section className="home-explore" aria-labelledby="explore-title">
        <h2 id="explore-title">Explore Taniti</h2>
        <p className="home-explore-intro">
          Taniti is a small, tropical island in the Pacific. While the island
          has an area of less than 500 square miles, the terrain is varied and
          includes both sandy and rocky beaches, a small but safe harbor, lush
          tropical rainforests, and a mountainous interior that includes a
          small, active volcano. Taniti has an indigenous population of about
          20,000. Until a recent increase in tourism, most the Tanitian economy
          was dominated by fishing or agriculture.
        </p>
        <div className="explore-grid">
          {exploreItems.map((item) => (
            <a className="explore-item" href={item.href} key={item.label}>
              <img src={item.image} alt="" />
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </section>

      <BookingStrip />
      <Footer />
    </main>
  );
}
