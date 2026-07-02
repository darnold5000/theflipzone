import type { LocationId } from "./locations";
import { wixImage } from "@/lib/wix-image";

export interface GalleryImage {
  src: string;
  alt: string;
  location: LocationId;
  caption?: string;
}

export const galleryImages: GalleryImage[] = [
  {
    src: wixImage("3c407f_13a9a9f4073540be9a657fbc9a0bb6f0~mv2.png", 1400, 900, "fill"),
    alt: "The Flip Zone Indiana — 20,000 sq ft two-building complex",
    location: "plainfield",
    caption: "20,000+ sq ft — Plainfield, Indiana",
  },
  {
    src: wixImage("3c407f_76362b8ee1a44252a7d590af253908e6~mv2.jpg", 1000, 700, "fill"),
    alt: "Kids smiling during gymnastics class",
    location: "plainfield",
    caption: "Kids who love coming to the gym",
  },
  {
    src: wixImage("3c407f_20c4205ef7d447b9b93eca2fbf73055d~mv2.jpg", 800, 600, "fill"),
    alt: "Preschool gymnast on equipment",
    location: "plainfield",
    caption: "Preschool gymnastics",
  },
  {
    src: wixImage("3c407f_05c63b07987d4f91a32940c76767c6ad~mv2.jpg", 800, 600, "fill"),
    alt: "Gymnastics training on bars and equipment",
    location: "plainfield",
    caption: "Recreational training center",
  },
  {
    src: wixImage("3c407f_38bea8ee7e854a5a93fae89b31aa5c1f~mv2.jpg", 800, 600, "fill"),
    alt: "Ninja rig and obstacle equipment",
    location: "plainfield",
    caption: "Ninja rig & trampolines",
  },
  {
    src: wixImage("3c407f_51a78953e34140e79d64393e5b857ebb~mv2.jpeg", 1000, 700, "fit"),
    alt: "Flip Zone Gymnastics of SWFL facility",
    location: "bradenton",
    caption: "Flip Zone SWFL — Bradenton",
  },
  {
    src: wixImage("3c407f_b6a374987554492b85d31094980acac4~mv2.jpeg", 800, 600, "fit"),
    alt: "Young gymnasts practicing at Flip Zone Florida",
    location: "bradenton",
    caption: "Classes for every age",
  },
  {
    src: wixImage("3c407f_98fde81a17c7440689a55084d54570eb~mv2.jpeg", 800, 600, "fit"),
    alt: "Competitive team training",
    location: "bradenton",
    caption: "Competitive women's team",
  },
];

export function getGalleryForLocation(locationId: LocationId): GalleryImage[] {
  return galleryImages.filter((img) => img.location === locationId);
}
