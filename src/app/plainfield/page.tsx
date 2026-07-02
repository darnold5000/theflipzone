import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section, SectionHeading, EnrollButton } from "@/components/ui-primitives";
import { ProgramGrid } from "@/components/ProgramGrid";
import { FacilityGallery } from "@/components/FacilityGallery";
import { ContactCard } from "@/components/ContactCard";
import { getLocation } from "@/data/locations";
import { getProgramsForLocation } from "@/data/programs";
import { getGalleryForLocation } from "@/data/gallery";
import { iclassproLinks } from "@/data/iclassproLinks";
import { brand } from "@/data/brand";
import { CheckCircle } from "lucide-react";

const location = getLocation("plainfield");

export const metadata: Metadata = {
  title: "Gymnastics in Plainfield, Indiana",
  description:
    "The Flip Zone in Plainfield, Indiana offers preschool gymnastics, recreational classes, tumbling, NinjaNastics, SSGNL preschool, GymStars, and competitive team in a 20,000+ sq ft facility.",
};

export default function PlainfieldPage() {
  const programs = getProgramsForLocation("plainfield");
  const gallery = getGalleryForLocation("plainfield");

  return (
    <>
      <Hero
        headline="The Flip Zone — Plainfield, Indiana"
        subheadline="Preschool through competitive gymnastics, tumbling, NinjaNastics, and more in our state-of-the-art two-building complex."
        image={brand.indianaHero}
        showCTAs={false}
      />

      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {location.description}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <EnrollButton href={iclassproLinks.plainfield.classes} variant="accent">
              View Classes & Enroll
            </EnrollButton>
            <EnrollButton href={iclassproLinks.plainfield.dashboard} variant="outline">
              Parent Portal
            </EnrollButton>
          </div>
        </div>
      </Section>

      <Section variant="muted">
        <SectionHeading title="Indiana Programs" />
        <ProgramGrid programs={programs} locationId="plainfield" />
      </Section>

      <Section>
        <SectionHeading
          title="Facility Highlights"
          subtitle="Over 20,000 square feet of gymnastics excellence."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {location.facilityHighlights.map((highlight) => (
            <div
              key={highlight}
              className="flex items-center gap-3 p-4 rounded-xl border bg-white shadow-sm"
            >
              <CheckCircle className="h-5 w-5 text-[oklch(0.65_0.15_200)] shrink-0" />
              <p className="text-sm font-medium">{highlight}</p>
            </div>
          ))}
        </div>
        <FacilityGallery images={gallery} />
      </Section>

      <Section variant="muted">
        <SectionHeading title="Contact Indiana" />
        <div className="max-w-lg mx-auto">
          <ContactCard location={location} />
        </div>
      </Section>
    </>
  );
}
