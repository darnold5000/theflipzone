import { Hero } from "@/components/Hero";
import { Section, SectionHeading } from "@/components/ui-primitives";
import { LocationSelector } from "@/components/LocationSelector";
import { ProgramGrid } from "@/components/ProgramGrid";
import { ClassFinder } from "@/components/ClassFinder";
import { ValueCards } from "@/components/ValueCards";
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
          title="Two Locations, One Great Experience"
          subtitle="Choose your Flip Zone location to explore programs, schedules, and enrollment."
        />
        <LocationSelector />
      </Section>

      <Section variant="muted">
        <SectionHeading
          title="Programs for Every Athlete"
          subtitle="From first cartwheels to competitive team — find the right program for your child."
        />
        <ProgramGrid programs={programs} />
      </Section>

      <Section id="class-finder">
        <SectionHeading
          title="Not Sure Where to Start?"
          subtitle="Use our program finder to get personalized recommendations."
        />
        <div className="max-w-4xl mx-auto">
          <ClassFinder />
        </div>
      </Section>

      <Section>
        <SectionHeading
          title="Why Families Choose Flip Zone"
          subtitle="A positive, structured environment where kids build skills and confidence."
        />
        <ValueCards />
      </Section>

      <Section variant="navy">
        <EnrollmentCTA />
      </Section>

      <Section>
        <SectionHeading
          title="Our Facilities"
          subtitle="State-of-the-art gyms designed for safe, fun, and effective training."
        />
        <FacilityGallery images={galleryImages} />
      </Section>

      <Section variant="muted">
        <SectionHeading
          title="What Parents Are Saying"
          subtitle="Hear from families in our Indiana and Florida communities."
        />
        <TestimonialCards testimonials={testimonials} />
      </Section>

      <Section>
        <SectionHeading title="Frequently Asked Questions" />
        <div className="max-w-3xl mx-auto">
          <FAQAccordion faqs={generalFaqs} />
        </div>
      </Section>
    </>
  );
}
