import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui-primitives";
import { CoachesSpotlight } from "@/components/ValueCards";
import { staff } from "@/data/staff";

export const metadata: Metadata = {
  title: "Our Coaches",
  description:
    "Meet the Flip Zone coaching team in Plainfield, Indiana and Bradenton, Florida — experienced coaches dedicated to helping every child succeed.",
};

export default function StaffPage() {
  const indianaStaff = staff.filter((s) => s.location === "plainfield");
  const floridaStaff = staff.filter((s) => s.location === "bradenton");

  return (
    <>
      <Section className="pt-24">
        <SectionHeading
          title="Coaches Who Care"
          subtitle="Our team is here to spot every skill, celebrate every win, and help your child fall in love with gymnastics."
        />
        <CoachesSpotlight />
      </Section>

      <Section variant="muted">
        <h2 className="text-2xl font-bold mb-6 uppercase">Plainfield, Indiana</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {indianaStaff.map((member) => (
            <div
              key={member.name + member.role}
              className="p-5 rounded-2xl bg-white border shadow-sm normal-case"
            >
              <p className="font-bold text-lg">{member.name}</p>
              <p className="text-sm text-flip-blue font-semibold mt-1">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-bold mb-6 uppercase">Bradenton, Florida</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {floridaStaff.map((member) => (
            <div
              key={member.name + member.role}
              className="p-5 rounded-2xl bg-white border shadow-sm normal-case"
            >
              <p className="font-bold text-lg">{member.name}</p>
              <p className="text-sm text-flip-teal font-semibold mt-1">
                {member.role}
              </p>
              {member.bio && (
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  {member.bio}
                </p>
              )}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
