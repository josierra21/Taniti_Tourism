import {
  BookingStrip,
  FeatureSection,
  Footer,
  Header,
  SectionHeading,
} from "../SiteComponents";
import { food } from "../siteData";

export default function FoodDrinkPage() {
  return (
    <main>
      <Header />

      <section className="section muted">
        <SectionHeading
          eyebrow="TASTE THE ISLAND"
          title="Food & Drink"
          copy="Try local fish and rice, familiar favorites, Pan-Asian meals, easy grocery stops, and relaxed evenings at island pubs."
        />
        <FeatureSection
          anchors={["local-food", "dining", "groceries", "nightlife"]}
          id="food-drink"
          items={food}
          variant="food"
        />
      </section>

      <BookingStrip />
      <Footer />
    </main>
  );
}
