import {
  BookingStrip,
  FeatureSection,
  Footer,
  Header,
  SectionHeading,
} from "../SiteComponents";
import { stays } from "../siteData";

export default function WhereToStayPage() {
  return (
    <main>
      <Header />

      <section className="section muted">
        <SectionHeading
          eyebrow="REST EASY ON TANITI"
          title="Lodging in Taniti"
          copy="Choose from resort comfort, local hotels, bed and breakfasts, and simple hostel stays near the island's main travel areas."
        />
        <FeatureSection
          anchors={["resort", "family-hotels", "bed-breakfasts", "hostel"]}
          id="where-to-stay"
          items={stays}
          variant="stay"
        />
      </section>

      <BookingStrip />
      <Footer />
    </main>
  );
}
