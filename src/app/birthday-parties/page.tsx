import type { Metadata } from "next";
import { ProgramPageTemplate } from "@/components/ProgramPageTemplate";
import { getProgram } from "@/data/programs";

const program = getProgram("birthday-parties")!;

export const metadata: Metadata = {
  title: "Gymnastics Birthday Parties",
  description: program.seoDescription,
};

export default function BirthdayPartiesPage() {
  return (
    <ProgramPageTemplate program={program} preferredLocation="bradenton" />
  );
}
