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
    src: wixImage("3c407f_13a9a9f4073540be9a657fbc9a0bb6f0~mv2.png", 1200, 800, "fill"),
    alt: "The Flip Zone Indiana facility",
    location: "plainfield",
    caption: "Our two-building complex in Plainfield, Indiana",
  },
  {
    src: wixImage("3c407f_76362b8ee1a44252a7d590af253908e6~mv2.jpg", 800, 600, "fill"),
    alt: "Gymnasts training at The Flip Zone Indiana",
    location: "plainfield",
    caption: "Recreational gymnastics training",
  },
  {
    src: wixImage("3c407f_05c63b07987d4f91a32940c76767c6ad~mv2.jpg", 800, 600, "fill"),
    alt: "Gymnastics classes at The Flip Zone",
    location: "plainfield",
    caption: "Classes for all ages and levels",
  },
  {
    src: wixImage("3c407f_20c4205ef7d447b9b93eca2fbf73055d~mv2.jpg", 800, 600, "fill"),
    alt: "Preschool gymnastics at The Flip Zone",
    location: "plainfield",
    caption: "Preschool and early movement programs",
  },
  {
    src: wixImage("3c407f_51a78953e34140e79d64393e5b857ebb~mv2.jpeg", 1200, 800, "fit"),
    alt: "Flip Zone Gymnastics of SWFL gym",
    location: "bradenton",
    caption: "Flip Zone Gymnastics of SWFL",
  },
  {
    src: wixImage("3c407f_b6a374987554492b85d31094980acac4~mv2.jpeg", 800, 600, "fit"),
    alt: "Gymnasts practicing at Flip Zone SWFL",
    location: "bradenton",
    caption: "Recreational and team training",
  },
  {
    src: wixImage("3c407f_98fde81a17c7440689a55084d54570eb~mv2.jpeg", 800, 600, "fit"),
    alt: "Competitive gymnastics at Flip Zone SWFL",
    location: "bradenton",
    caption: "Competitive women's team",
  },
  {
    src: wixImage("4f2eb8b29e8c44ef90777c751852aeed.jpg", 800, 600, "fit"),
    alt: "Coaches and gymnasts at Flip Zone SWFL",
    location: "bradenton",
    caption: "World-class coaching in Bradenton",
  },
];

export function getGalleryForLocation(locationId: LocationId): GalleryImage[] {
  return galleryImages.filter((img) => img.location === locationId);
}
