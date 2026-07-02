"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { GalleryImage } from "@/data/gallery";

interface FacilityGalleryProps {
  images: GalleryImage[];
  title?: string;
}

export function FacilityGallery({
  images,
  title = "Our Facilities",
}: FacilityGalleryProps) {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
        {images.map((image, i) => (
          <motion.div
            key={image.src + i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className={`relative overflow-hidden rounded-2xl ${
              i === 0 ? "col-span-2 row-span-2 aspect-[4/3]" : "aspect-square"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
            {image.caption && i === 0 && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p className="text-white text-sm font-medium">{image.caption}</p>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
