"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { GalleryImage } from "@/data/gallery";

interface FacilityGalleryProps {
  images: GalleryImage[];
  large?: boolean;
}

export function FacilityGallery({ images, large = false }: FacilityGalleryProps) {
  return (
    <div>
      <div
        className={
          large
            ? "grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 auto-rows-[140px] sm:auto-rows-[180px]"
            : "grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4"
        }
      >
        {images.map((image, i) => (
          <motion.div
            key={image.src + i}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className={`relative overflow-hidden rounded-2xl shadow-md ${
              large && i === 0
                ? "col-span-2 row-span-2 md:col-span-2 md:row-span-2"
                : large && i === 1
                  ? "col-span-2 row-span-1 md:col-span-2"
                  : large
                    ? "col-span-1 row-span-1"
                    : i === 0
                      ? "col-span-2 row-span-2 aspect-[4/3]"
                      : "aspect-square"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes={
                large && i === 0
                  ? "(max-width: 768px) 100vw, 50vw"
                  : "(max-width: 768px) 50vw, 25vw"
              }
            />
            {image.caption && (large ? i <= 2 : i === 0) && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 sm:p-4">
                <p className="text-white text-xs sm:text-sm font-bold normal-case">
                  {image.caption}
                </p>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
