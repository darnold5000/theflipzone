import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui-primitives";
import { ContactCard } from "@/components/ContactCard";
import { ClassFinder } from "@/components/ClassFinder";
import { locations } from "@/data/locations";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact The Flip Zone in Plainfield, Indiana or Bradenton, Florida. Phone, email, and enrollment links for both locations.",
};

export default function ContactPage() {
  return (
    <>
      <Section className="pt-24">
        <SectionHeading
          title="Contact Us"
          subtitle="Reach out to your local Flip Zone for class recommendations, enrollment help, or general questions."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {locations.map((location) => (
            <ContactCard key={location.id} location={location} />
          ))}
        </div>
      </Section>

      <Section variant="muted">
        <SectionHeading
          title="Not Sure Which Location?"
          subtitle="Use our program finder to get started."
        />
        <div className="max-w-4xl mx-auto">
          <ClassFinder />
        </div>
      </Section>
    </>
  );
}
