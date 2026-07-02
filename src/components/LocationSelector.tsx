"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { locations } from "@/data/locations";
import { brand } from "@/data/brand";

const locationDetails: Record<
  string,
  { programs: string[]; cta: string; href: string; image: string }
> = {
  plainfield: {
    programs: [
      "Preschool & Parent-and-Tot",
      "Recreational gymnastics",
      "Tumbling & NinjaNastics",
      "SSGNL academic preschool",
      "Competitive team",
    ],
    cta: "Explore Indiana",
    href: "/plainfield",
    image: brand.indianaHero,
  },
  bradenton: {
    programs: [
      "Preschool gymnastics (ages 3–5)",
      "Recreational classes (ages 5+)",
      "Competitive women's team",
      "Summer camps & birthday parties",
    ],
    cta: "Explore Florida",
    href: "/bradenton",
    image: brand.floridaHero,
  },
};

export function LocationSelector() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {locations.map((location, i) => {
        const details = locationDetails[location.id];
        return (
          <motion.div
            key={location.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={details.image}
                  alt={location.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                  <MapPin className="h-5 w-5" />
                  <h3 className="text-xl font-bold uppercase">{location.name}</h3>
                </div>
              </div>
              <CardContent className="p-6 sm:p-8">
                <p className="text-muted-foreground text-sm mb-4 normal-case leading-relaxed line-clamp-3">
                  {location.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {details.programs.map((program) => (
                    <li
                      key={program}
                      className="text-sm flex items-center gap-2 normal-case"
                    >
                      <span className="text-flip-teal font-bold">✓</span>
                      {program}
                    </li>
                  ))}
                </ul>
                <Link
                  href={details.href}
                  className="inline-flex items-center justify-center gap-2 w-full font-bold rounded-full px-6 py-3 text-sm bg-gradient-flip text-white hover:opacity-95 transition-opacity"
                >
                  {details.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}
