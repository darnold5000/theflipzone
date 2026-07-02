import type { Metadata } from "next";
import { ProgramPageTemplate } from "@/components/ProgramPageTemplate";
import { getProgram } from "@/data/programs";

const program = getProgram("open-gym")!;

export const metadata: Metadata = {
  title: "Open Gym",
  description: program.seoDescription,
};

export default function OpenGymPage() {
  return <ProgramPageTemplate program={program} />;
}
