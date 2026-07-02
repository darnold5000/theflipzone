import { Section, SectionHeading, InternalLink } from "@/components/ui-primitives";

export default function NotFound() {
  return (
    <Section className="pt-32 pb-32 text-center">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <SectionHeading
        title="Page Not Found"
        subtitle="The page you're looking for doesn't exist or has been moved."
      />
      <div className="flex flex-wrap justify-center gap-3 mt-8">
        <InternalLink href="/">Go Home</InternalLink>
        <InternalLink href="/programs">View Programs</InternalLink>
      </div>
    </Section>
  );
}
