import type { LocationId } from "./locations";

export interface GalleryImage {
  src: string;
  alt: string;
  location: LocationId;
  caption?: string;
}

export const galleryImages: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80",
    alt: "Young gymnast on balance beam",
    location: "plainfield",
    caption: "Preschool gymnastics at Flip Zone Indiana",
  },
  {
    src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80",
    alt: "Gymnastics training facility",
    location: "plainfield",
    caption: "Our 20,000+ sq ft Indiana facility",
  },
  {
    src: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=800&q=80",
    alt: "Gymnast performing on bars",
    location: "plainfield",
    caption: "Competitive team training",
  },
  {
    src: "https://images.unsplash.com/photo-1541534741688-607badd6c5c0?w=800&q=80",
    alt: "Kids gymnastics class",
    location: "bradenton",
    caption: "Recreational classes at Flip Zone SWFL",
  },
  {
    src: "https://images.unsplash.com/photo-1526232578324-55a7f7567a7f?w=800&q=80",
    alt: "Gymnastics floor exercise",
    location: "bradenton",
    caption: "Floor skills and tumbling",
  },
  {
    src: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&q=80",
    alt: "Gymnastics team practice",
    location: "bradenton",
    caption: "Competitive women's team",
  },
];

export function getGalleryForLocation(locationId: LocationId): GalleryImage[] {
  return galleryImages.filter((img) => img.location === locationId);
}
