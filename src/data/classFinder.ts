import type { LocationId } from "./locations";

export type ProgramInterest =
  | "gymnastics"
  | "tumbling"
  | "ninja"
  | "preschool"
  | "competitive"
  | "special-needs";

export type ExperienceLevel = "beginner" | "intermediate" | "advanced";

export type Goal =
  | "first-time"
  | "strength"
  | "tumbling"
  | "cheer"
  | "competitive"
  | "preschool"
  | "private";

export interface ClassFinderInput {
  location: LocationId;
  age: number;
  interest: ProgramInterest;
  experience: ExperienceLevel;
  goal: Goal;
}

export interface ClassFinderResult {
  programSlug: string;
  programName: string;
  reason: string;
}

const mappings: {
  location: LocationId;
  minAge: number;
  maxAge: number;
  interest?: ProgramInterest;
  goal?: Goal;
  results: { slug: string; name: string; reason: string }[];
}[] = [
  {
    location: "plainfield",
    minAge: 3,
    maxAge: 5,
    interest: "preschool",
    results: [
      {
        slug: "preschool-gymnastics",
        name: "Preschool Gymnastics",
        reason: "Perfect for ages 3–5 starting their gymnastics journey.",
      },
      {
        slug: "ssgnl-preschool",
        name: "Shooting Stars Gym N Learn",
        reason: "Academic preschool combined with daily gymnastics.",
      },
    ],
  },
  {
    location: "plainfield",
    minAge: 3,
    maxAge: 5,
    goal: "preschool",
    results: [
      {
        slug: "ssgnl-preschool",
        name: "Shooting Stars Gym N Learn",
        reason: "Whole-child preschool with gymnastics built in.",
      },
      {
        slug: "preschool-gymnastics",
        name: "Preschool Gymnastics",
        reason: "Drop-in preschool gymnastics classes.",
      },
    ],
  },
  {
    location: "plainfield",
    minAge: 5,
    maxAge: 12,
    interest: "gymnastics",
    results: [
      {
        slug: "recreational-gymnastics",
        name: "Recreational Gymnastics",
        reason: "Progressive gymnastics on all events.",
      },
    ],
  },
  {
    location: "plainfield",
    minAge: 5,
    maxAge: 18,
    interest: "tumbling",
    results: [
      {
        slug: "tumbling",
        name: "Tumbling",
        reason: "Dedicated floor skills and tumbling passes.",
      },
    ],
  },
  {
    location: "plainfield",
    minAge: 5,
    maxAge: 14,
    interest: "ninja",
    results: [
      {
        slug: "ninjanastics",
        name: "NinjaNastics",
        reason: "Obstacle courses and ninja-style training.",
      },
    ],
  },
  {
    location: "plainfield",
    minAge: 3,
    maxAge: 18,
    interest: "special-needs",
    results: [
      {
        slug: "gymstars",
        name: "GymStars",
        reason: "Adaptive gymnastics in a supportive environment.",
      },
    ],
  },
  {
    location: "plainfield",
    minAge: 6,
    maxAge: 18,
    interest: "competitive",
    results: [
      {
        slug: "competitive-team",
        name: "Competitive Team",
        reason: "Structured competitive gymnastics pathways.",
      },
    ],
  },
  {
    location: "bradenton",
    minAge: 3,
    maxAge: 5,
    interest: "preschool",
    results: [
      {
        slug: "preschool-gymnastics",
        name: "Preschool Gymnastics",
        reason: "Fun, structured classes for ages 3–5.",
      },
    ],
  },
  {
    location: "bradenton",
    minAge: 5,
    maxAge: 12,
    interest: "gymnastics",
    results: [
      {
        slug: "recreational-gymnastics",
        name: "Recreational Gymnastics",
        reason: "School-age gymnastics for all skill levels.",
      },
    ],
  },
  {
    location: "bradenton",
    minAge: 6,
    maxAge: 18,
    interest: "competitive",
    results: [
      {
        slug: "competitive-team",
        name: "Competitive Women's Team",
        reason: "USAG Levels 1–10 and Xcel pathways.",
      },
    ],
  },
  {
    location: "bradenton",
    minAge: 5,
    maxAge: 14,
    goal: "first-time",
    results: [
      {
        slug: "preschool-gymnastics",
        name: "Preschool Gymnastics",
        reason: "Great first gymnastics experience for younger kids.",
      },
      {
        slug: "recreational-gymnastics",
        name: "Recreational Gymnastics",
        reason: "Perfect starting point for school-age beginners.",
      },
    ],
  },
];

export function findPrograms(input: ClassFinderInput): ClassFinderResult[] {
  const ageMatches = mappings.filter(
    (m) =>
      m.location === input.location &&
      input.age >= m.minAge &&
      input.age <= m.maxAge &&
      (m.interest === input.interest || m.goal === input.goal)
  );

  if (ageMatches.length > 0) {
    return ageMatches[0].results.map((r) => ({
      programSlug: r.slug,
      programName: r.name,
      reason: r.reason,
    }));
  }

  const fallback = mappings.filter(
    (m) =>
      m.location === input.location &&
      input.age >= m.minAge &&
      input.age <= m.maxAge
  );

  if (fallback.length > 0) {
    return fallback[0].results.map((r) => ({
      programSlug: r.slug,
      programName: r.name,
      reason: r.reason,
    }));
  }

  if (input.location === "plainfield") {
    return [
      {
        programSlug: "recreational-gymnastics",
        programName: "Recreational Gymnastics",
        reason: "A great starting point for most ages and experience levels.",
      },
    ];
  }

  return [
    {
      programSlug: "recreational-gymnastics",
      programName: "Recreational Gymnastics",
      reason: "A great starting point for most ages and experience levels.",
    },
    {
      programSlug: "preschool-gymnastics",
      programName: "Preschool Gymnastics",
      reason: "Perfect for younger athletes ages 3–5.",
    },
  ];
}
