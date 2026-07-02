import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProgramPageTemplate } from "@/components/ProgramPageTemplate";
import { getProgram, programs } from "@/data/programs";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) return { title: "Program Not Found" };

  return {
    title: program.seoTitle.replace(" | The Flip Zone", ""),
    description: program.seoDescription,
  };
}

export default async function ProgramPage({ params }: Props) {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) notFound();

  return <ProgramPageTemplate program={program} />;
}
