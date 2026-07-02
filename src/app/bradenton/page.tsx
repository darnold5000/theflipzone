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

const location = getLocation("bradenton");

export const metadata: Metadata = {
  title: "Gymnastics in Bradenton, Florida",
  description:
    "Flip Zone Gymnastics of SWFL in Bradenton offers preschool gymnastics, recreational classes, competitive women's team USAG Levels 1-10 and Xcel, summer camps, and birthday parties.",
};

export default function BradentonPage() {
  const programs = getProgramsForLocation("bradenton");
  const gallery = getGalleryForLocation("bradenton");

  return (
    <>
      <Hero
        headline="Flip Zone Gymnastics of SWFL"
        subheadline="Preschool, recreational, and competitive women's gymnastics, plus camps and birthday parties in Bradenton, Florida."
        image={brand.floridaHero}
        showCTAs={false}
      />

      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {location.description}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <EnrollButton href={iclassproLinks.bradenton.classes} variant="accent">
              View Classes & Enroll
            </EnrollButton>
            <EnrollButton href={iclassproLinks.bradenton.dashboard} variant="outline">
              Parent Portal
            </EnrollButton>
          </div>
        </div>
      </Section>

      <Section variant="muted">
        <SectionHeading title="Florida Programs" />
        <ProgramGrid programs={programs} locationId="bradenton" />
      </Section>

      <Section>
        <SectionHeading
          title="Our Gym"
          subtitle="A full gymnastics facility for athletes of all ages and levels."
        />
        <FacilityGallery images={gallery} />
      </Section>

      <Section variant="muted">
        <SectionHeading title="Contact Florida" />
        <div className="max-w-lg mx-auto">
          <ContactCard location={location} />
        </div>
      </Section>
    </>
  );
}
