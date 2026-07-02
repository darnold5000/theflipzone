import { Hero } from "@/components/Hero";
import { Section, SectionHeading } from "@/components/ui-primitives";
import { LocationSelector } from "@/components/LocationSelector";
import { ProgramGrid } from "@/components/ProgramGrid";
import { ClassFinder } from "@/components/ClassFinder";
import { ValueCards, CoachesSpotlight } from "@/components/ValueCards";
import { EnrollmentCTA } from "@/components/EnrollmentCTA";
import { FacilityGallery } from "@/components/FacilityGallery";
import { TestimonialCards } from "@/components/TestimonialCards";
import { FAQAccordion } from "@/components/FAQAccordion";
import { programs } from "@/data/programs";
import { galleryImages } from "@/data/gallery";
import { testimonials } from "@/data/testimonials";
import { generalFaqs } from "@/data/faqs";

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section id="locations">
        <SectionHeading
          title="Choose Your Location"
          subtitle="Two gyms, one family. Pick the Flip Zone closest to you — then find the perfect class for your child."
        />
        <LocationSelector />
      </Section>

      <Section id="class-finder" variant="muted">
        <SectionHeading
          title="Find Your Child's Program"
          subtitle="Not sure where to start? Answer three quick questions and we'll point you to the right class."
        />
        <div className="max-w-3xl mx-auto">
          <ClassFinder />
        </div>
      </Section>

      <Section>
        <SectionHeading
          title="Programs Your Child Will Love"
          subtitle="Every program is designed to help kids build confidence, make friends, and have fun."
        />
        <ProgramGrid programs={programs} />
      </Section>

      <Section variant="muted">
        <SectionHeading
          title="Why Families Love Flip Zone"
          subtitle="Parents don't just enroll in gymnastics — they enroll in confidence, friendships, and joy."
        />
        <ValueCards />
      </Section>

      <Section>
        <SectionHeading
          title="What Parents Are Saying"
          subtitle="Real families. Real smiles. Real growth."
        />
        <TestimonialCards testimonials={testimonials} />
      </Section>

      <Section variant="muted">
        <SectionHeading
          title="See Our Gym"
          subtitle="20,000+ square feet in Indiana. Foam pits, trampolines, ninja rigs, and bars — a place kids can't wait to explore."
        />
        <FacilityGallery images={galleryImages} large />
      </Section>

      <Section>
        <SectionHeading
          title="Meet Our Coaches"
          subtitle="Experienced, caring coaches who spot every skill and cheer every cartwheel."
        />
        <CoachesSpotlight />
        <p className="text-center mt-8 normal-case text-muted-foreground">
          <a href="/staff" className="text-flip-blue font-semibold hover:underline">
            View full team directory →
          </a>
        </p>
      </Section>

      <Section variant="gradient">
        <EnrollmentCTA />
      </Section>

      <Section>
        <SectionHeading title="Questions Parents Ask" />
        <div className="max-w-3xl mx-auto">
          <FAQAccordion faqs={generalFaqs} />
        </div>
      </Section>
    </>
  );
}
