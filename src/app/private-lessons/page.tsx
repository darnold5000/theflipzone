import type { Metadata } from "next";
import { ProgramPageTemplate } from "@/components/ProgramPageTemplate";
import { getProgram } from "@/data/programs";

const program = getProgram("private-lessons")!;

export const metadata: Metadata = {
  title: "Private Gymnastics Lessons",
  description: program.seoDescription,
};

export default function PrivateLessonsPage() {
  return <ProgramPageTemplate program={program} />;
}
