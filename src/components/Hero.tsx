"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { brand } from "@/data/brand";

interface HeroProps {
  headline?: string;
  subheadline?: string;
  image?: string;
  showCTAs?: boolean;
  compact?: boolean;
  useCollage?: boolean;
}

export function Hero({
  headline = "Helping Kids Build Confidence Through Gymnastics",
  subheadline = "From first cartwheels to competitive gymnastics, Flip Zone has helped families grow stronger, healthier, and more confident for over 20 years.",
  image = brand.homepageHero,
  showCTAs = true,
  compact = false,
  useCollage = true,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
            compact ? "py-16 sm:py-20" : "py-12 sm:py-16 lg:py-20"
          }`}
        >
          {/* Copy — parent-first */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-flip-teal mb-3">
              Plainfield, IN · Bradenton, FL
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold leading-[1.1] text-foreground uppercase">
              {headline}
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl normal-case">
              {subheadline}
            </p>

            {showCTAs && (
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="#class-finder"
                  className="inline-flex items-center justify-center font-bold rounded-full px-8 py-3.5 text-base bg-gradient-flip text-white shadow-lg shadow-blue-500/25 hover:opacity-95 transition-opacity"
                >
                  Find Classes
                </Link>
                <Link
                  href="#locations"
                  className="inline-flex items-center justify-center font-bold rounded-full px-8 py-3.5 text-base border-2 border-flip-blue text-flip-blue hover:bg-flip-blue hover:text-white transition-colors"
                >
                  Choose Your Location
                </Link>
              </div>
            )}

            {showCTAs && (
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground normal-case">
                <span>✓ Safe, structured classes</span>
                <span>✓ Coaches you can trust</span>
                <span>✓ Kids who love coming back</span>
              </div>
            )}
          </motion.div>

          {/* Kid-focused imagery */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="order-1 lg:order-2 relative"
          >
            {useCollage && !compact ? (
              <div className="relative grid grid-cols-12 grid-rows-6 gap-2 sm:gap-3 h-[320px] sm:h-[420px] lg:h-[480px]">
                <div className="col-span-7 row-span-4 relative rounded-2xl overflow-hidden shadow-xl ring-4 ring-white">
                  <Image
                    src={brand.heroCollage[0].src}
                    alt={brand.heroCollage[0].alt}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 60vw, 35vw"
                  />
                </div>
                <div className="col-span-5 row-span-3 relative rounded-2xl overflow-hidden shadow-lg ring-4 ring-white">
                  <Image
                    src={brand.heroCollage[1].src}
                    alt={brand.heroCollage[1].alt}
                    fill
                    className="object-cover"
                    priority
                    sizes="25vw"
                  />
                </div>
                <div className="col-span-5 row-span-3 col-start-8 row-start-4 relative rounded-2xl overflow-hidden shadow-lg ring-4 ring-white">
                  <Image
                    src={brand.heroCollage[2].src}
                    alt={brand.heroCollage[2].alt}
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </div>
                <div className="absolute -bottom-3 -left-3 bg-gradient-flip text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-full shadow-lg uppercase tracking-wide">
                  20+ years of happy gymnasts
                </div>
              </div>
            ) : (
              <div className="relative h-[280px] sm:h-[360px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={image}
                  alt="Gymnastics at The Flip Zone"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Soft gradient band */}
      <div className="h-2 bg-gradient-to-r from-flip-blue via-flip-purple to-flip-teal" />
    </section>
  );
}
