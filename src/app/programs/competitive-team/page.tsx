import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Trophy, Medal, Users, Star } from "lucide-react";
import { Section, SectionHeading, EnrollButton } from "@/components/ui-primitives";
import { ProgramGrid } from "@/components/ProgramGrid";
import { brand } from "@/data/brand";
import { iclassproLinks } from "@/data/iclassproLinks";
import { getProgram, programs } from "@/data/programs";
import { staff } from "@/data/staff";

const program = getProgram("competitive-team")!;

const highlights = [
  { icon: Trophy, label: "USAG Levels 1–10 & Xcel" },
  { icon: Medal, label: "95+ competitive athletes (FL)" },
  { icon: Users, label: "Elite coaching staff" },
  { icon: Star, label: "20+ years of team excellence" },
];

export const metadata: Metadata = {
  title: "Competitive Gymnastics Team",
  description: program.seoDescription,
};

export default function CompetitiveTeamPage() {
  const teamCoaches = staff.filter(
    (s) =>
      s.role.toLowerCase().includes("team") ||
      s.role.toLowerCase().includes("competitive") ||
      s.role === "Owner" ||
      s.role === "Founder & Coach"
  );

  return (
    <>
      {/* Elite hero */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0">
          <Image
            src={brand.teamHero}
            alt="Competitive gymnastics team at Flip Zone"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-900/60" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <p className="text-amber-400 font-bold uppercase tracking-widest text-sm mb-4">
            Competitive Team
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase max-w-3xl leading-tight">
            Where Dedicated Athletes Become Champions
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl normal-case leading-relaxed">
            {program.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <EnrollButton href={iclassproLinks.plainfield.classes} variant="accent">
              Indiana Team Info
            </EnrollButton>
            <EnrollButton
              href={iclassproLinks.bradenton.classes}
              variant="outline"
              className="border-amber-400/60 text-amber-300 hover:bg-amber-400 hover:text-slate-950"
            >
              Florida Team Info
            </EnrollButton>
          </div>
        </div>
        <div className="h-1 bg-gradient-to-r from-amber-500 via-amber-300 to-amber-500" />
      </section>

      {/* Highlights */}
      <Section className="bg-slate-900 text-white !py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {highlights.map((h) => (
            <div key={h.label} className="text-center">
              <h.icon className="h-8 w-8 text-amber-400 mx-auto mb-2" />
              <p className="text-sm font-bold normal-case">{h.label}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-8 mt-8">
          <Image
            src={brand.badges.usagIndiana}
            alt="USAG Indiana"
            width={120}
            height={86}
            className="opacity-90"
          />
          <Image
            src={brand.badges.safeSport}
            alt="SafeSport"
            width={160}
            height={57}
            className="opacity-90"
          />
        </div>
      </Section>

      <Section>
        <SectionHeading
          title="Team Programs"
          subtitle="Structured training, competition experience, and a team family that pushes athletes to reach their potential."
        />
        <ProgramGrid
          programs={programs.filter((p) => p.slug === "competitive-team")}
          variant="elite"
        />
      </Section>

      <Section variant="muted">
        <SectionHeading title="Meet Our Team Coaches" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {teamCoaches.slice(0, 9).map((coach) => (
            <div
              key={`${coach.name}-${coach.location}`}
              className="p-5 rounded-2xl bg-white border border-amber-100 shadow-sm normal-case"
            >
              <p className="font-bold text-lg">{coach.name}</p>
              <p className="text-sm text-amber-600 font-semibold mt-1">
                {coach.role}
              </p>
              <p className="text-xs text-muted-foreground mt-1 capitalize">
                {coach.location === "plainfield" ? "Indiana" : "Florida"}
              </p>
              {coach.bio && (
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed line-clamp-4">
                  {coach.bio}
                </p>
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section variant="gradient">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold uppercase">Ready for Team?</h2>
          <p className="mt-4 text-white/85 normal-case">
            Team placement is by evaluation or invitation. Contact your local
            Flip Zone to schedule a team evaluation.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center font-bold rounded-full px-8 py-3.5 bg-white text-flip-blue hover:bg-white/90"
            >
              Contact Us About Team
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
