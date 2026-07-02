"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";

interface TestimonialCardsProps {
  testimonials: Testimonial[];
}

export function TestimonialCards({ testimonials }: TestimonialCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {testimonials.map((t, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          className="relative p-6 sm:p-8 rounded-2xl bg-white border border-purple-100 shadow-md"
        >
          <Quote className="h-8 w-8 text-flip-purple/40 mb-4" />
          <p className="text-foreground leading-relaxed text-base normal-case italic">
            &ldquo;{t.quote}&rdquo;
          </p>
          <div className="mt-5 pt-4 border-t border-purple-50 normal-case">
            <p className="font-bold text-sm">{t.author}</p>
            <p className="text-xs text-flip-teal font-medium">{t.location}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
