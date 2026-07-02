import type { Metadata } from "next";
import { ProgramPageTemplate } from "@/components/ProgramPageTemplate";
import { getProgram } from "@/data/programs";

const program = getProgram("camps")!;

export const metadata: Metadata = {
  title: "Gymnastics Summer Camps",
  description: program.seoDescription,
};

export default function CampsPage() {
  return <ProgramPageTemplate program={program} preferredLocation="bradenton" />;
}
