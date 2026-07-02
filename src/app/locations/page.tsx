import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui-primitives";
import { LocationSelector } from "@/components/LocationSelector";
import { ContactCard } from "@/components/ContactCard";
import { locations } from "@/data/locations";

export const metadata: Metadata = {
  title: "Locations",
  description:
    "The Flip Zone has two locations — Plainfield, Indiana and Bradenton, Florida. Find programs, contact info, and enrollment for your nearest gym.",
};

export default function LocationsPage() {
  return (
    <>
      <Section className="pt-24 pb-12">
        <SectionHeading
          title="Our Locations"
          subtitle="Two gyms, one mission — building confident kids through gymnastics."
        />
        <LocationSelector />
      </Section>

      <Section variant="muted">
        <SectionHeading title="Contact Information" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {locations.map((location) => (
            <ContactCard key={location.id} location={location} />
          ))}
        </div>
      </Section>
    </>
  );
}
