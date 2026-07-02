import type { LocationId } from "./locations";

export interface StaffMember {
  name: string;
  role: string;
  location: LocationId;
  bio?: string;
}

export const staff: StaffMember[] = [
  {
    name: "Flip Zone Coaching Team",
    role: "Recreational & Preschool Coaches",
    location: "plainfield",
    bio: "Our Indiana coaching staff brings years of gymnastics experience and a passion for helping every athlete succeed.",
  },
  {
    name: "Flip Zone Team Coaches",
    role: "Competitive Team Coaches",
    location: "plainfield",
    bio: "Dedicated competitive coaches who develop athletes from developmental levels through advanced competition.",
  },
  {
    name: "SSGNL Preschool Staff",
    role: "Early Childhood Educators",
    location: "plainfield",
    bio: "Experienced preschool educators who combine academic learning with daily gymnastics instruction.",
  },
  {
    name: "SWFL Coaching Team",
    role: "Recreational & Preschool Coaches",
    location: "bradenton",
    bio: "Passionate coaches who create a positive, fun environment for gymnasts of all ages and abilities.",
  },
  {
    name: "SWFL Competitive Coaches",
    role: "Women's Team Coaches",
    location: "bradenton",
    bio: "Experienced competitive coaches guiding athletes through USAG Levels 1–10 and Xcel programming.",
  },
];

export function getStaffForLocation(locationId: LocationId): StaffMember[] {
  return staff.filter((s) => s.location === locationId);
}
