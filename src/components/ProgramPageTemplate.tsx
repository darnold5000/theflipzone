import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Section, SectionHeading, EnrollButton } from "@/components/ui-primitives";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ProgramCard } from "@/components/ProgramCard";
import { LocationBadge } from "@/components/LocationBadge";
import { Badge } from "@/components/ui/badge";
import type { Program } from "@/data/programs";
import { programs } from "@/data/programs";
import { programFaqs } from "@/data/faqs";
import { iclassproLinks } from "@/data/iclassproLinks";
import type { LocationId } from "@/data/locations";
import { brand } from "@/data/brand";
import { getProgramAssets } from "@/data/programAssets";

interface ProgramPageTemplateProps {
  program: Program;
  preferredLocation?: LocationId;
}

export function ProgramPageTemplate({
  program,
  preferredLocation,
}: ProgramPageTemplateProps) {
  const enrollLocation =
    preferredLocation && program.locations.includes(preferredLocation)
      ? preferredLocation
      : program.locations[0];

  const relatedPrograms = programs
    .filter(
      (p) =>
        p.slug !== program.slug &&
        p.locations.some((l) => program.locations.includes(l))
    )
    .slice(0, 3);

  const faqs = programFaqs[program.slug] ?? [];
  const assets = getProgramAssets(program.slug);
  const heroImage =
    program.slug === "preschool-gymnastics" || program.slug === "ssgnl-preschool"
      ? brand.preschoolHero
      : assets?.image ?? brand.homepageHero;

  return (
    <>
      <Hero
        headline={program.name}
        subheadline={program.shortDescription}
        image={heroImage}
        compact
        showCTAs={false}
        useCollage={false}
      />

      <Section>
        <div className="max-w-3xl">
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge>{program.ageRange}</Badge>
            <Badge variant="secondary">{program.skillLevel}</Badge>
            {program.locations.map((loc) => (
              <LocationBadge key={loc} locationId={loc} />
            ))}
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {program.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <EnrollButton href={iclassproLinks[enrollLocation].classes}>
              View Classes
            </EnrollButton>
            <EnrollButton href={iclassproLinks[enrollLocation].portal} variant="outline">
              Parent Portal
            </EnrollButton>
          </div>
        </div>
      </Section>

      <Section variant="muted">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold mb-4">Who It&apos;s For</h2>
            <p className="text-muted-foreground leading-relaxed">
              {program.whoItsFor}
            </p>
            <div className="mt-6 p-4 rounded-xl bg-white border">
              <p className="text-sm font-medium text-muted-foreground">Best for</p>
              <p className="font-semibold mt-1">{program.bestFor}</p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">What Athletes Learn</h2>
            {program.whatTheyLearn.length > 0 ? (
              <ul className="space-y-2">
                {program.whatTheyLearn.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.65_0.15_200)] mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-muted-foreground">
                Contact your local Flip Zone for program details.
              </p>
            )}
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading title="Benefits" centered={false} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
          {program.benefits.map((benefit) => (
            <div
              key={benefit}
              className="flex items-start gap-3 p-4 rounded-xl border bg-muted/30"
            >
              <span className="text-xl">{program.icon}</span>
              <p className="text-sm font-medium leading-relaxed">{benefit}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="gradient">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 uppercase">Find a Class for Your Child</h2>
          <p className="text-white/85 mb-8 normal-case">
            Browse available {program.name} classes and enroll through our secure
            parent portal.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <EnrollButton href={iclassproLinks[enrollLocation].classes} variant="white">
              View Classes & Enroll
            </EnrollButton>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-bold rounded-full px-6 py-2.5 text-sm border-2 border-white/50 text-white hover:bg-white hover:text-flip-blue transition-all normal-case"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      {faqs.length > 0 && (
        <Section variant="muted">
          <SectionHeading title="Frequently Asked Questions" />
          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={faqs} />
          </div>
        </Section>
      )}

      {relatedPrograms.length > 0 && (
        <Section>
          <SectionHeading title="Related Programs" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPrograms.map((p) => (
              <ProgramCard key={p.slug} program={p} locationId={enrollLocation} />
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
