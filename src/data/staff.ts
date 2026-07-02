import type { LocationId } from "./locations";
import { wixImage } from "@/lib/wix-image";

export interface StaffMember {
  name: string;
  role: string;
  location: LocationId;
  bio?: string;
  image?: string;
}

export const staff: StaffMember[] = [
  {
    name: "Stephanie Paluchniak",
    role: "Owner",
    location: "plainfield",
    image: wixImage("3c407f_fadae3a0eeae4cf79d4000dc105aee37~mv2.jpg", 400, 500),
  },
  {
    name: "Irving Nochez",
    role: "Competitive Team Director",
    location: "plainfield",
    image: wixImage("3c407f_82e3d0c674df4213b532fc723aaf8353~mv2.jpg", 400, 500),
  },
  {
    name: "Megan",
    role: "SSGNL Preschool Director",
    location: "plainfield",
    image: wixImage("3c407f_6700a88fd81d4cbfa489683a84e3bf48~mv2.jpeg", 400, 500),
  },
  {
    name: "Brittany Kollar",
    role: "Tumbling Director · Recreational Director",
    location: "plainfield",
    image: wixImage("3c407f_8516e0b82f194acc80e9533e98cfec50~mv2.jpg", 400, 500),
  },
  {
    name: "Patrick Hatmaker",
    role: "Team Coach",
    location: "plainfield",
    image: wixImage("3c407f_48b89a884adf4e73a829d460af4b1a68~mv2.jpg", 400, 500),
  },
  {
    name: "Jana Cutler",
    role: "Team Coach",
    location: "plainfield",
    image: wixImage("3c407f_100faeaebd79453a8801e9d03198fed6~mv2.jpg", 400, 500),
  },
  {
    name: "Michelle Hart",
    role: "Facilities Director · Team Coach",
    location: "plainfield",
    image: wixImage("3c407f_1d516f866a09405790e30ed6f47814b1~mv2.jpg", 400, 500),
  },
  {
    name: "Katie Hancock",
    role: "Team Coach",
    location: "plainfield",
    image: wixImage("3c407f_ada54cd5d06f44819dc459065a180898~mv2.jpg", 400, 500),
  },
  {
    name: "Lisa Welsh",
    role: "Team Coach",
    location: "plainfield",
    image: wixImage("3c407f_f0e19678db5a42d0a824b0faabdf5428~mv2.jpg", 400, 500),
  },
  {
    name: "Katie Winters",
    role: "Team Coach",
    location: "plainfield",
    image: wixImage("3c407f_5ff223fb483f4eb4ab78daddfe8a5db5~mv2.jpg", 400, 500),
  },
  {
    name: "Ania Alsum",
    role: "Team Coach",
    location: "plainfield",
    image: wixImage("3c407f_15a42fad5bee4326bbfd65012a4f5a19~mv2.jpg", 400, 500),
  },
  {
    name: "Annie",
    role: "SSGNL Preschool Teacher",
    location: "plainfield",
    image: wixImage("3c407f_416818c43bb245e18c0258df612bd9a5~mv2.jpeg", 400, 500),
  },
  {
    name: "Amber",
    role: "SSGNL Preschool Teacher",
    location: "plainfield",
    image: wixImage("3c407f_2951a6e6d54e4cdbb2901cd84a0c5cc9~mv2.jpeg", 400, 500),
  },
  {
    name: "Lauren",
    role: "SSGNL Preschool Teacher",
    location: "plainfield",
    image: wixImage("3c407f_a677b389973c4d069067ff62ae94286c~mv2.jpeg", 400, 500),
  },
  {
    name: "Stephanie Paluchniak",
    role: "Founder & Coach",
    location: "bradenton",
    bio: "Coach Stephanie is a distinguished former Ball State University gymnast who excelled on a full-ride scholarship. A NAWGJ Level 9 rated judge and successful gym owner, she has owned three gyms across two states. For the past 20 years she has coached and managed Flip Zone Gymnastics in Plainfield, Indiana, and recently opened Flip Zone of Southwest Florida in Bradenton.",
    image: wixImage("3c407f_e16f1849507e422ab312960b7955a303~mv2.jpg", 400, 500),
  },
  {
    name: "Louis Robinson",
    role: "Competitive Team Director & JO/Developmental Coach",
    location: "bradenton",
    bio: "Coach Louis Robinson is a JO/Developmental Regional and National clinician. His collegiate coaching experience includes the University of Florida, Michigan, Missouri, and The Ohio State University. He spent nearly two years as an Optional Team Coach at Buckeye Gymnastics, recognized as the 2023 Region 5 Club of the Year, where he coached TOPS, HOPES, and JR & SR elites.",
    image: wixImage("3c407f_081b9d40660d4e46902001f746ceb0e1~mv2.jpg", 400, 500),
  },
  {
    name: "Almari Hennes",
    role: "Recreational Coach",
    location: "bradenton",
    bio: "Coach Almari did gymnastics from ages 3–14, competing in Compulsory, Xcel, and Optionals through level 6. She missed the sport so much she came back to coach it — seeing the bright look on her students' faces is the highlight of her week.",
    image: wixImage("3c407f_45c995d871754e0dae2ce477a6aeaf42~mv2.jpeg", 400, 500),
  },
  {
    name: "Paxton Dresselhaus",
    role: "Team Coach",
    location: "bradenton",
    bio: "A devoted coach with over 5 years of experience in recreational gymnastics and Xcel programs, Paxton empowers students to reach their full potential in a positive, supportive environment. She recently moved from Minnesota to Florida and brings a genuine passion for the sport to every class.",
    image: wixImage("3c407f_fd3bf069ee844051b12064f2590699c3~mv2.jpg", 400, 500),
  },
  {
    name: "Hallie Tucker",
    role: "JO & Xcel Team Coach",
    location: "bradenton",
    bio: "Hallie grew up in Boca Raton, FL, starting gymnastics at age 3 and competing through level 8. She began coaching in 2007, teaching preschool, recreation, and all levels of competitive team. In 2017 she moved to Florida's west coast to be closer to family and is now raising her own little gymnast.",
    image: wixImage("3c407f_953196cd42624499bf6215ea3807b35d~mv2.jpg", 400, 500),
  },
  {
    name: "Becky Price",
    role: "Team Coach",
    location: "bradenton",
    image: wixImage("3c407f_8b8cf23a0efd4e8d8bd0b394835173d3~mv2.jpg", 400, 500),
  },
  {
    name: "Selena Phillips",
    role: "Front Office Staff",
    location: "bradenton",
    image: wixImage("3c407f_f830228f387c4fd597e223dbe627fea4~mv2.jpg", 400, 500),
  },
];

export function getStaffForLocation(locationId: LocationId): StaffMember[] {
  return staff.filter((s) => s.location === locationId);
}
