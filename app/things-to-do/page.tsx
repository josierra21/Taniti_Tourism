import {
  BookingStrip,
  FeatureSection,
  Footer,
  Header,
  SectionHeading,
} from "../SiteComponents";
import { thingsToDo } from "../siteData";

export default function ThingsToDoPage() {
  return (
    <main>
      <Header />

      <section className="section">
        <SectionHeading
          eyebrow="EXPLORE TANITI"
          title="Things to Do"
          copy="From quiet beach days to rainforest hikes and nights out in Merriton Landing, Taniti makes it easy to fill each day your way."
        />
        <FeatureSection
          anchors={["beaches", "rainforest-volcano", "merriton", "tours"]}
          id="things-to-do"
          items={thingsToDo}
        />
      </section>

      <BookingStrip />
      <Footer />
    </main>
  );
}
