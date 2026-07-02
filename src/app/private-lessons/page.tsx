import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock, Target, User } from "lucide-react";
import { Section, SectionHeading, EnrollButton } from "@/components/ui-primitives";
import { brand } from "@/data/brand";
import { iclassproLinks } from "@/data/iclassproLinks";
import { staff } from "@/data/staff";

const privateCoaches = staff.filter(
  (s) =>
    s.bio &&
    (s.role.toLowerCase().includes("coach") ||
      s.role.toLowerCase().includes("director"))
);

const specialties = [
  "Skill development & corrections",
  "Competition preparation",
  "Tumbling & floor skills",
  "Bars, beam, vault technique",
  "Confidence building for beginners",
  "Team tryout preparation",
];

export const metadata: Metadata = {
  title: "Train One-on-One | Private Gymnastics Lessons",
  description:
    "One-on-one gymnastics coaching at Flip Zone. Personalized attention, faster progress, and flexible scheduling in Indiana and Florida.",
};

export default function PrivateLessonsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-flip-teal font-bold uppercase tracking-widest text-sm mb-3">
                Private Coaching
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold uppercase leading-tight">
                Train One-on-One
              </h1>
              <p className="mt-5 text-lg text-muted-foreground normal-case leading-relaxed">
                Your child deserves a coach&apos;s full attention. Private lessons
                at Flip Zone mean personalized goals, faster progress, and the
                confidence that comes from mastering skills at their own pace.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <EnrollButton href={iclassproLinks.plainfield.classes}>
                  Indiana — Request a Lesson
                </EnrollButton>
                <EnrollButton href={iclassproLinks.bradenton.classes} variant="outline">
                  Florida — Request a Lesson
                </EnrollButton>
              </div>
            </div>
            <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={brand.privateLessonsHero}
                alt="Coach spotting a gymnast one-on-one"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
        <div className="h-2 bg-gradient-to-r from-flip-blue via-flip-purple to-flip-teal" />
      </section>

      <Section variant="muted">
        <SectionHeading
          title="Why Parents Choose Private Lessons"
          subtitle="When your child needs extra attention, private coaching makes all the difference."
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            {
              icon: User,
              title: "100% focused on your child",
              text: "No waiting in a group — every minute is theirs.",
            },
            {
              icon: Target,
              title: "Custom skill goals",
              text: "Work on exactly what your child needs, at their pace.",
            },
            {
              icon: Clock,
              title: "Flexible scheduling",
              text: "Contact your local gym to find available times.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="text-center p-6 rounded-2xl bg-white shadow-sm border normal-case"
            >
              <item.icon className="h-8 w-8 text-flip-blue mx-auto mb-3" />
              <p className="font-bold">{item.title}</p>
              <p className="text-sm text-muted-foreground mt-2">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading title="Coaching Specialties" />
        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {specialties.map((s) => (
            <span
              key={s}
              className="px-4 py-2 rounded-full bg-blue-50 text-flip-blue font-semibold text-sm normal-case"
            >
              {s}
            </span>
          ))}
        </div>
      </Section>

      <Section variant="muted">
        <SectionHeading
          title="Our Private Lesson Coaches"
          subtitle="Experienced coaches available for one-on-one training at both locations."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {privateCoaches.slice(0, 8).map((coach) => (
            <div
              key={`${coach.name}-${coach.location}`}
              className="p-5 rounded-2xl bg-white border shadow-sm normal-case"
            >
              <p className="font-bold text-lg">{coach.name}</p>
              <p className="text-sm text-flip-teal font-semibold">{coach.role}</p>
              <p className="text-xs text-muted-foreground capitalize mt-1">
                {coach.location === "plainfield" ? "Indiana" : "Florida"}
              </p>
              {coach.bio && (
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed line-clamp-3">
                  {coach.bio}
                </p>
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section variant="gradient">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-3xl font-bold uppercase">Book a Private Lesson</h2>
          <p className="mt-4 text-white/85 normal-case">
            Contact your local Flip Zone to check coach availability and
            schedule your child&apos;s first one-on-one session.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center font-bold rounded-full px-8 py-3.5 bg-white text-flip-blue hover:bg-white/90"
            >
              Contact Us to Schedule
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
