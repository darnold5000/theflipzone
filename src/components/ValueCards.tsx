"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, Shield, Users, Sparkles } from "lucide-react";
import { brand } from "@/data/brand";

const values = [
  {
    icon: Sparkles,
    title: "Confidence that lasts",
    description:
      "Kids leave class standing taller — proud of what they learned and excited to come back.",
    color: "text-flip-purple bg-purple-50",
  },
  {
    icon: Users,
    title: "Friendships that grow",
    description:
      "The gym becomes a second home where your child finds teammates and buddies.",
    color: "text-flip-blue bg-blue-50",
  },
  {
    icon: Heart,
    title: "Healthy, happy activity",
    description:
      "Running, jumping, and laughing — gymnastics keeps kids active in a way they actually enjoy.",
    color: "text-flip-pink bg-pink-50",
  },
  {
    icon: Shield,
    title: "Coaches you can trust",
    description:
      "Patient, positive coaches who spot every skill and celebrate every small win.",
    color: "text-flip-teal bg-teal-50",
  },
];

export function ValueCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      {values.map((value, i) => (
        <motion.div
          key={value.title}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          className="flex gap-4 p-5 sm:p-6 rounded-2xl bg-white shadow-sm border border-blue-100/80"
        >
          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${value.color}`}
          >
            <value.icon className="h-6 w-6" />
          </div>
          <div className="normal-case">
            <h3 className="font-bold text-lg text-foreground">{value.title}</h3>
            <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
              {value.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/** Coaches in action — not headshots */
export function CoachesSpotlight() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
      {brand.coaching.map((photo, i) => (
        <motion.div
          key={photo.src}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg group"
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <p className="absolute bottom-4 left-4 right-4 text-white font-bold text-sm sm:text-base normal-case">
            {photo.caption}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
