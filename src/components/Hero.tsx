"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { EnrollButton, InternalLink } from "@/components/ui-primitives";
import { iclassproLinks } from "@/data/iclassproLinks";
import { brand } from "@/data/brand";

interface HeroProps {
  headline?: string;
  subheadline?: string;
  image?: string;
  showCTAs?: boolean;
  compact?: boolean;
}

export function Hero({
  headline = "Building Confident Kids Through Gymnastics",
  subheadline = "From first cartwheels to competitive team, Flip Zone helps athletes build strength, confidence, discipline, and joy.",
  image = brand.homepageHero,
  showCTAs = true,
  compact = false,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt="Gymnastics at The Flip Zone"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.18_0.06_260)]/90 via-[oklch(0.25_0.08_260)]/75 to-[oklch(0.25_0.08_260)]/50" />
      </div>

      <div
        className={`relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${
          compact ? "py-20 sm:py-24" : "py-28 sm:py-36 lg:py-44"
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight">
            {headline}
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/85 leading-relaxed">
            {subheadline}
          </p>

          {showCTAs && (
            <div className="mt-8 flex flex-wrap gap-3">
              <InternalLink href="#class-finder" className="bg-white text-primary border-white hover:bg-white/90 hover:text-primary">
                Find a Class
              </InternalLink>
              <EnrollButton href={iclassproLinks.plainfield.classes} variant="accent">
                Enroll Now
              </EnrollButton>
              <InternalLink
                href="/locations"
                className="border-white/60 text-white hover:bg-white hover:text-primary"
              >
                Choose Location
              </InternalLink>
            </div>
          )}

          {showCTAs && (
            <div className="mt-4 flex flex-wrap gap-3">
              <InternalLink
                href="/private-lessons"
                className="text-sm px-4 py-2 border-white/40 text-white/90 hover:bg-white/10 hover:text-white hover:border-white/60"
              >
                Private Lessons
              </InternalLink>
              <InternalLink
                href="/birthday-parties"
                className="text-sm px-4 py-2 border-white/40 text-white/90 hover:bg-white/10 hover:text-white hover:border-white/60"
              >
                Birthday Parties
              </InternalLink>
              <InternalLink
                href="/programs/competitive-team"
                className="text-sm px-4 py-2 border-white/40 text-white/90 hover:bg-white/10 hover:text-white hover:border-white/60"
              >
                Competitive Team
              </InternalLink>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
