import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui-primitives";
import { StaffCard } from "@/components/StaffCard";
import { staff } from "@/data/staff";

export const metadata: Metadata = {
  title: "Our Staff",
  description:
    "Meet the coaches and educators at The Flip Zone — passionate professionals dedicated to helping every athlete succeed.",
};

export default function StaffPage() {
  const indianaStaff = staff.filter((s) => s.location === "plainfield");
  const floridaStaff = staff.filter((s) => s.location === "bradenton");

  return (
    <>
      <Section className="pt-24">
        <SectionHeading
          title="Our Team"
          subtitle="Passionate coaches and educators dedicated to building confident, capable athletes."
        />
      </Section>

      <Section variant="muted" className="!pt-0">
        <h2 className="text-2xl font-bold mb-6">Plainfield, Indiana</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {indianaStaff.map((member) => (
            <StaffCard key={member.name + member.role} member={member} />
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-bold mb-6">Bradenton, Florida</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {floridaStaff.map((member) => (
            <StaffCard key={member.name + member.role} member={member} />
          ))}
        </div>
      </Section>
    </>
  );
}
