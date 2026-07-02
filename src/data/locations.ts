export type LocationId = "plainfield" | "bradenton";

export interface Location {
  id: LocationId;
  name: string;
  shortName: string;
  city: string;
  state: string;
  address?: string;
  email: string;
  phones: { label: string; number: string }[];
  portalUrl: string;
  classesUrl: string;
  campsUrl?: string;
  programs: string[];
  facilityHighlights: string[];
  description: string;
}

export const locations: Location[] = [
  {
    id: "plainfield",
    name: "Plainfield, Indiana",
    shortName: "Indiana",
    city: "Plainfield",
    state: "Indiana",
    email: "theflipzonegym@gmail.com",
    phones: [
      { label: "Recreational Gym", number: "317-838-0667" },
      { label: "SSGNL Preschool & Team Gym", number: "317-268-4810" },
    ],
    portalUrl: "https://portal.iclasspro.com/flipzone",
    classesUrl: "https://portal.iclasspro.com/flipzone/classes",
    campsUrl: "https://portal.iclasspro.com/flipzone/camps",
    programs: [
      "Preschool Gymnastics",
      "Recreational Gymnastics",
      "Tumbling",
      "NinjaNastics",
      "SSGNL Preschool",
      "Competitive Team",
      "GymStars",
    ],
    facilityHighlights: [
      "Two-building complex totaling just over 20,000 square feet",
      "400 square foot loose foam pit",
      "3 separate trampolines",
      "Ninja rig",
      "Daytime preschool program (SSGNL)",
      "All equipment necessary for competitive gymnastics",
    ],
    description:
      "At The Flip Zone in Plainfield, Indiana, you will find much more than just an extensive gymnastics training facility. Our Gymnastics Club is a supportive community that pushes athletes to reach better results in a healthy and safe environment. We aim to build a strong body and spark your curiosity while inspiring you to discover your talents. From beginners to team, our Gymnastics Club has it all.",
  },
  {
    id: "bradenton",
    name: "Bradenton, Florida",
    shortName: "Florida",
    city: "Bradenton",
    state: "Florida",
    address: "3241 59th Drive East, Bradenton, FL 34203",
    email: "Support@flipzoneswfl.com",
    phones: [{ label: "Main", number: "941-297-7293" }],
    portalUrl: "https://portal.iclasspro.com/flipzoneswfl",
    classesUrl: "https://portal.iclasspro.com/flipzoneswfl/classes",
    campsUrl: "https://portal.iclasspro.com/flipzoneswfl/camps",
    programs: [
      "Preschool Gymnastics (ages 3–5)",
      "Recreational Classes (ages 5+)",
      "Competitive Women's Team (USAG Levels 1–10 & Xcel)",
      "Summer Camp",
      "Birthday Parties",
      "Homeschool Program",
    ],
    facilityHighlights: [
      "Full gymnastics training facility",
      "Preschool and recreational programs",
      "Competitive women's team training",
      "Summer camps and birthday parties",
      "Homeschool gymnastics program (Step-Up provider)",
    ],
    description:
      "Flip Zone Gymnastics of SWFL offers preschool gymnastics for ages 3–5, recreational classes for ages 5 and up, and competitive women's teams at USAG Levels 1–10 and Xcel. Stephanie Paluchniak brings over 40 years of gymnastics experience as a gymnast, judge, coach, and parent — developing unique training systems to help gymnasts of all ages and skill levels achieve their potential while having fun along the way.",
  },
];

export function getLocation(id: LocationId): Location {
  const location = locations.find((l) => l.id === id);
  if (!location) throw new Error(`Location not found: ${id}`);
  return location;
}
