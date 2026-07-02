import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui-primitives";
import { ProgramGrid } from "@/components/ProgramGrid";
import { programs } from "@/data/programs";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore Flip Zone programs — preschool gymnastics, recreational classes, tumbling, NinjaNastics, competitive team, camps, birthday parties, and more.",
};

export default function ProgramsPage() {
  return (
    <Section className="pt-24">
      <SectionHeading
        title="Our Programs"
        subtitle="Find the right gymnastics, tumbling, preschool, or team program for your child — then enroll in seconds."
      />
      <ProgramGrid programs={programs} />
    </Section>
  );
}
