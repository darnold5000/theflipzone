"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const values = [
  "Programs for beginners through competitive athletes",
  "Preschool and recreational options",
  "Competitive team pathways",
  "Private lesson opportunities",
  "Camps and birthday parties",
  "Safe, structured, positive coaching environment",
  "Multiple locations in Indiana and Florida",
];

export function ValueCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {values.map((value, i) => (
        <motion.div
          key={value}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
          className="flex items-start gap-3 p-4 rounded-xl bg-white shadow-sm border"
        >
          <CheckCircle className="h-5 w-5 text-[oklch(0.65_0.15_200)] shrink-0 mt-0.5" />
          <p className="text-sm font-medium leading-relaxed">{value}</p>
        </motion.div>
      ))}
    </div>
  );
}
