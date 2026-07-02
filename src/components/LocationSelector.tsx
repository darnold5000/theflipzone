"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { locations } from "@/data/locations";

const locationDetails: Record<
  string,
  { programs: string[]; cta: string; href: string }
> = {
  plainfield: {
    programs: [
      "Preschool gymnastics",
      "Recreational gymnastics",
      "Tumbling",
      "NinjaNastics",
      "SSGNL Preschool",
      "Competitive team",
      "GymStars",
    ],
    cta: "View Indiana Programs",
    href: "/plainfield",
  },
  bradenton: {
    programs: [
      "Preschool gymnastics",
      "Recreational gymnastics",
      "Competitive women's team",
      "Camps",
      "Birthday parties",
      "Homeschool",
    ],
    cta: "View Florida Programs",
    href: "/bradenton",
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
            <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div
                className={`h-2 ${
                  location.id === "plainfield"
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500"
                    : "bg-gradient-to-r from-teal-500 to-emerald-500"
                }`}
              />
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-bold">{location.name}</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  {location.description}
                </p>
                <ul className="space-y-1.5 mb-6">
                  {details.programs.map((program) => (
                    <li
                      key={program}
                      className="text-sm flex items-center gap-2"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.65_0.15_200)]" />
                      {program}
                    </li>
                  ))}
                </ul>
                <Link
                  href={details.href}
                  className="inline-flex items-center gap-2 font-semibold text-primary hover:text-primary/80 transition-colors group"
                >
                  {details.cta}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}
