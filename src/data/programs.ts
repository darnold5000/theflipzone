import type { LocationId } from "./locations";

export interface Program {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  ageRange: string;
  skillLevel: string;
  bestFor: string;
  locations: LocationId[];
  benefits: string[];
  whatTheyLearn: string[];
  whoItsFor: string;
  icon: string;
  color: string;
  seoTitle: string;
  seoDescription: string;
}

export const programs: Program[] = [
  {
    slug: "preschool-gymnastics",
    name: "Preschool Gymnastics",
    shortDescription:
      "Preschool gymnastics for ages 5 and under in our recreational training center.",
    description:
      "Our preschool gymnastics program introduces young children to gymnastics in a safe, playful environment located in our Recreational Training Center. Athletes develop balance, coordination, climbing, jumping, and rolling skills while building confidence and social skills.",
    ageRange: "Ages 18 months – 5 years",
    skillLevel: "Beginner",
    bestFor: "Little ones building confidence & coordination",
    locations: ["plainfield", "bradenton"],
    benefits: [
      "Builds coordination and body awareness",
      "Develops confidence and independence",
      "Safe, structured beginner environment",
      "Social interaction with peers",
    ],
    whatTheyLearn: [
      "Balance and beam walking",
      "Climbing and jumping",
      "Rolling and basic tumbling",
      "Following directions in a group setting",
    ],
    whoItsFor:
      "Children ages 3–5 who are ready to explore movement, build coordination, and have fun in a structured gymnastics setting.",
    icon: "🤸",
    color: "from-pink-500 to-rose-500",
    seoTitle: "Preschool Gymnastics Classes | The Flip Zone",
    seoDescription:
      "Preschool gymnastics classes for ages 3–5 in Plainfield, Indiana and Bradenton, Florida. Build confidence, coordination, and independence.",
  },
  {
    slug: "recreational-gymnastics",
    name: "Recreational Gymnastics",
    shortDescription:
      "A supportive gymnastics community for school-age athletes — from first cartwheels to advanced skills.",
    description:
      "Recreational gymnastics at Flip Zone offers a progressive curriculum on vault, bars, beam, and floor. At our Plainfield location, class options include Parent and Tot, Threes & Fours, Four and Fives, and KinderStars. Athletes build strength, flexibility, and technique at their own pace in a positive, encouraging environment.",
    ageRange: "Ages 5+",
    skillLevel: "Beginner to Intermediate",
    bestFor: "School-age kids learning gymnastics fundamentals",
    locations: ["plainfield", "bradenton"],
    benefits: [
      "Full apparatus training",
      "Progressive skill development",
      "Strength and flexibility building",
      "Positive, encouraging coaching",
    ],
    whatTheyLearn: [
      "Vault, bars, beam, and floor skills",
      "Handstands, cartwheels, and rolls",
      "Strength and flexibility exercises",
      "Goal-setting and perseverance",
    ],
    whoItsFor:
      "School-age children who want to learn gymnastics fundamentals, build athletic skills, and have fun in a structured class environment.",
    icon: "⭐",
    color: "from-blue-500 to-cyan-500",
    seoTitle: "Recreational Gymnastics Classes | The Flip Zone",
    seoDescription:
      "Recreational gymnastics classes for ages 5+ in Plainfield, Indiana and Bradenton, Florida. Progressive training on all gymnastics events.",
  },
  {
    slug: "tumbling",
    name: "Tumbling",
    shortDescription:
      "Dedicated tumbling classes focused on floor skills — cartwheels, handsprings, and beyond.",
    description:
      "Our tumbling program focuses on floor skills and aerial awareness, including Level 3–5 Advanced Tumbling. Perfect for gymnasts, cheerleaders, and dancers who want to develop powerful tumbling passes and acrobatic skills.",
    ageRange: "Ages 5+",
    skillLevel: "Beginner to Advanced",
    bestFor: "Cheer prep & tumbling-focused athletes",
    locations: ["plainfield"],
    benefits: [
      "Focused floor skill development",
      "Great for cheer and dance athletes",
      "Progressive tumbling curriculum",
      "Strength and power training",
    ],
    whatTheyLearn: [
      "Cartwheels and round-offs",
      "Back handsprings and tucks",
      "Tumbling passes and connections",
      "Flexibility and power drills",
    ],
    whoItsFor:
      "Athletes who want to focus on tumbling skills, whether for gymnastics, cheer, dance, or general acrobatic development.",
    icon: "🔄",
    color: "from-violet-500 to-purple-500",
    seoTitle: "Tumbling Classes Plainfield Indiana | The Flip Zone",
    seoDescription:
      "Tumbling classes in Plainfield, Indiana. Build cartwheels, handsprings, and advanced tumbling skills.",
  },
  {
    slug: "ninjanastics",
    name: "NinjaNastics",
    shortDescription:
      "A combination of ninja and gymnastics skills in high-energy classes.",
    description:
      "NinjaNastics combines gymnastics fundamentals with ninja-style obstacle training — a combination of ninja and gymnastics skills. Kids build strength, agility, and confidence while conquering courses, climbing walls, and mastering ninja moves in our recreational training center.",
    ageRange: "Ages 5+",
    skillLevel: "All Levels",
    bestFor: "Active kids who love obstacles & challenges",
    locations: ["plainfield"],
    benefits: [
      "Builds agility and strength",
      "Obstacle course challenges",
      "High-energy, fun workouts",
      "Develops problem-solving skills",
    ],
    whatTheyLearn: [
      "Obstacle course navigation",
      "Climbing and swinging skills",
      "Balance and coordination",
      "Athletic conditioning",
    ],
    whoItsFor:
      "Active kids who love challenges, obstacle courses, and high-energy movement — a great alternative or complement to traditional gymnastics.",
    icon: "🥷",
    color: "from-orange-500 to-red-500",
    seoTitle: "NinjaNastics Classes Plainfield Indiana | The Flip Zone",
    seoDescription:
      "NinjaNastics obstacle course classes in Plainfield, Indiana. High-energy ninja training for kids ages 5+.",
  },
  {
    slug: "competitive-team",
    name: "Competitive Team",
    shortDescription:
      "Competitive gymnastics pathways for dedicated athletes — from developmental levels through USAG and Xcel.",
    description:
      "Our competitive team program develops dedicated gymnasts through structured training and competition preparation. Indiana offers comprehensive team programming; Florida features competitive women's teams at USAG Levels 1–10 and Xcel, now with 95+ competitive athletes.",
    ageRange: "By invitation / evaluation",
    skillLevel: "Intermediate to Elite",
    bestFor: "Dedicated athletes pursuing competition",
    locations: ["plainfield", "bradenton"],
    benefits: [
      "Structured competitive training",
      "Goal-oriented skill development",
      "Team camaraderie and discipline",
      "Competition experience",
    ],
    whatTheyLearn: [
      "Advanced skills on all events",
      "Competition routines",
      "Mental toughness and focus",
      "Team values and sportsmanship",
    ],
    whoItsFor:
      "Athletes with demonstrated skill, commitment, and passion for competitive gymnastics. Contact us for team evaluations and tryout information.",
    icon: "🏆",
    color: "from-amber-500 to-yellow-500",
    seoTitle: "Competitive Gymnastics Team | The Flip Zone",
    seoDescription:
      "Competitive gymnastics teams in Plainfield, Indiana and Bradenton, Florida. USAG and Xcel pathways for dedicated athletes.",
  },
  {
    slug: "ssgnl-preschool",
    name: "Shooting Stars Gym N Learn Preschool",
    shortDescription:
      "Academic preschool combined with gymnastics — a unique whole-child learning experience.",
    description:
      "Shooting Stars Gym N Learn (SSGNL) combines a strong academic curriculum with daily gymnastics and fitness in our state-of-the-art facility. Classes run 9:30 to 1:30 and include 30–45 minutes of gymnastics daily. We develop the whole child — academic, social, emotional, and physical — and have fun doing it. We use a modified Abeka curriculum and offer field trips, parent-teacher conferences, and report cards.",
    ageRange: "Preschool ages",
    skillLevel: "Preschool",
    bestFor: "Families seeking preschool + gymnastics",
    locations: ["plainfield"],
    benefits: [
      "Academic + gymnastics curriculum",
      "Dedicated preschool facility",
      "Whole-child development",
      "Experienced early childhood educators",
    ],
    whatTheyLearn: [
      "Early literacy and math concepts",
      "Social and emotional skills",
      "Daily gymnastics movement",
      "School readiness skills",
    ],
    whoItsFor:
      "Families looking for a preschool program that integrates gymnastics and movement into a quality academic early childhood experience.",
    icon: "🌟",
    color: "from-teal-500 to-emerald-500",
    seoTitle: "SSGNL Preschool Plainfield Indiana | The Flip Zone",
    seoDescription:
      "Shooting Stars Gym N Learn preschool in Plainfield, Indiana. Academic preschool combined with daily gymnastics.",
  },
  {
    slug: "gymstars",
    name: "GymStars / Special Needs",
    shortDescription:
      "Special needs gymnastics classes in a supportive, adaptive environment.",
    description:
      "GymStars provides special needs gymnastics classes in a supportive environment. Our trained coaches create individualized experiences that build confidence, motor skills, and joy through movement.",
    ageRange: "All ages",
    skillLevel: "Adaptive",
    bestFor: "Athletes with special needs",
    locations: ["plainfield"],
    benefits: [
      "Individualized coaching approach",
      "Supportive, inclusive environment",
      "Motor skill development",
      "Confidence and social connection",
    ],
    whatTheyLearn: [
      "Fundamental movement skills",
      "Balance and coordination",
      "Following routines and directions",
      "Social interaction through sport",
    ],
    whoItsFor:
      "Athletes with special needs who would benefit from adaptive gymnastics in a patient, supportive, and inclusive environment.",
    icon: "💫",
    color: "from-indigo-500 to-blue-500",
    seoTitle: "GymStars Special Needs Gymnastics | The Flip Zone",
    seoDescription:
      "GymStars adaptive gymnastics for special needs athletes in Plainfield, Indiana. Inclusive, supportive programming.",
  },
  {
    slug: "camps",
    name: "Summer Camps",
    shortDescription:
      "Fun-filled gymnastics camps during school breaks — gymnastics, games, and new friendships.",
    description:
      "Flip Zone summer camps keep kids active and engaged during school breaks. Campers enjoy gymnastics instruction, games, crafts, and plenty of gym time in a safe, supervised environment.",
    ageRange: "Ages 5+",
    skillLevel: "All Levels",
    bestFor: "School break activity & skill building",
    locations: ["bradenton"],
    benefits: [
      "Full-day and half-day options",
      "Gymnastics skill development",
      "Fun games and activities",
      "Safe, supervised environment",
    ],
    whatTheyLearn: [
      "Gymnastics skills and drills",
      "Team games and cooperation",
      "New skills and challenges",
      "Friendship and social skills",
    ],
    whoItsFor:
      "Kids looking for an active, fun camp experience during school breaks — no prior gymnastics experience required.",
    icon: "☀️",
    color: "from-yellow-400 to-orange-400",
    seoTitle: "Gymnastics Summer Camps | The Flip Zone",
    seoDescription:
      "Gymnastics summer camps in Bradenton, Florida. Fun, active camps during school breaks for ages 5+.",
  },
  {
    slug: "birthday-parties",
    name: "Birthday Parties",
    shortDescription:
      "Unforgettable gymnastics birthday parties with games, gym time, and a dedicated party host.",
    description:
      "Celebrate your child's birthday at Flip Zone! Our party packages include gym time, games led by a party host, and a memorable experience your child and their friends will love.",
    ageRange: "All ages",
    skillLevel: "All Levels",
    bestFor: "Birthday celebrations",
    locations: ["bradenton"],
    benefits: [
      "Dedicated party host",
      "Private gym time",
      "Games and activities included",
      "Stress-free celebration",
    ],
    whatTheyLearn: [],
    whoItsFor:
      "Families looking for a unique, active birthday party experience that kids will remember.",
    icon: "🎂",
    color: "from-fuchsia-500 to-pink-500",
    seoTitle: "Gymnastics Birthday Parties | The Flip Zone",
    seoDescription:
      "Gymnastics birthday parties in Bradenton, Florida. Private gym time, games, and a dedicated party host.",
  },
  {
    slug: "private-lessons",
    name: "Private Lessons",
    shortDescription:
      "One-on-one coaching tailored to your athlete's goals — skill development, corrections, and confidence.",
    description:
      "Private lessons offer personalized coaching focused on your athlete's specific goals. Whether working toward a new skill, preparing for team tryouts, or building confidence, our coaches provide individualized attention.",
    ageRange: "All ages",
    skillLevel: "All Levels",
    bestFor: "Focused skill development",
    locations: ["plainfield", "bradenton"],
    benefits: [
      "Personalized coaching attention",
      "Customized skill goals",
      "Flexible scheduling",
      "Accelerated progress",
    ],
    whatTheyLearn: [
      "Targeted skill development",
      "Technique corrections",
      "Strength and conditioning",
      "Competition preparation",
    ],
    whoItsFor:
      "Athletes who want focused, one-on-one coaching to accelerate skill development or work toward specific goals.",
    icon: "🎯",
    color: "from-slate-600 to-slate-800",
    seoTitle: "Private Gymnastics Lessons | The Flip Zone",
    seoDescription:
      "Private gymnastics lessons in Plainfield, Indiana and Bradenton, Florida. One-on-one coaching for all ages and levels.",
  },
  {
    slug: "open-gym",
    name: "Open Gym",
    shortDescription:
      "Supervised gym time for athletes to practice skills, play, and enjoy the facility.",
    description:
      "Open gym sessions provide supervised time in the gym for athletes to practice skills, explore equipment, and have fun in a structured setting.",
    ageRange: "All ages",
    skillLevel: "All Levels",
    bestFor: "Extra practice & fun gym time",
    locations: ["plainfield", "bradenton"],
    benefits: [
      "Supervised gym access",
      "Extra practice time",
      "Fun, unstructured play",
      "Affordable add-on to classes",
    ],
    whatTheyLearn: [],
    whoItsFor:
      "Current students and community members who want extra supervised time in the gym.",
    icon: "🤸‍♀️",
    color: "from-cyan-500 to-blue-500",
    seoTitle: "Open Gym | The Flip Zone",
    seoDescription:
      "Open gym sessions at The Flip Zone. Supervised gym time for practice and fun.",
  },
];

export function getProgram(slug: string): Program | undefined {
  return programs.find((p) => p.slug === slug);
}

export function getProgramsForLocation(locationId: LocationId): Program[] {
  return programs.filter((p) => p.locations.includes(locationId));
}
