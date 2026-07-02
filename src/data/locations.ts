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
      "Two-building complex with 20,000+ sq ft",
      "Foam pit",
      "Trampolines",
      "Ninja rig",
      "Competitive gymnastics equipment",
    ],
    description:
      "The Flip Zone in Plainfield offers preschool through competitive gymnastics, tumbling, NinjaNastics, and special needs programming in a state-of-the-art two-building facility.",
  },
  {
    id: "bradenton",
    name: "Bradenton, Florida",
    shortName: "Florida",
    city: "Bradenton",
    state: "Florida",
    email: "Support@flipzoneswfl.com",
    phones: [{ label: "Main", number: "941-297-7293" }],
    portalUrl: "https://portal.iclasspro.com/flipzoneswfl",
    classesUrl: "https://portal.iclasspro.com/flipzoneswfl/classes",
    campsUrl: "https://portal.iclasspro.com/flipzoneswfl/camps",
    programs: [
      "Preschool Gymnastics",
      "Recreational Gymnastics",
      "Competitive Women's Team",
      "Summer Camp",
      "Birthday Parties",
      "Homeschool",
    ],
    facilityHighlights: [
      "Full gymnastics training facility",
      "Preschool and recreational areas",
      "Competitive team training space",
    ],
    description:
      "Flip Zone Gymnastics of SWFL in Bradenton offers preschool, recreational, and competitive women's gymnastics, plus camps, birthday parties, and homeschool programs.",
  },
];

export function getLocation(id: LocationId): Location {
  const location = locations.find((l) => l.id === id);
  if (!location) throw new Error(`Location not found: ${id}`);
  return location;
}
