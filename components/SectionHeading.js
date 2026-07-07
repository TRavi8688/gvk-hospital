"use client";
import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, teluguTitle, desc, center = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && <p className="eyebrow text-aarogya mb-2">{eyebrow}</p>}
      <h2 className="font-display font-bold text-ink text-2xl sm:text-3xl lg:text-4xl leading-tight">
        {title}
      </h2>
      {teluguTitle && (
        <p className="text-trust/70 font-medium text-sm sm:text-base mt-1">{teluguTitle}</p>
      )}
      {desc && <p className="mt-3 text-ink/60 text-sm sm:text-base">{desc}</p>}
    </motion.div>
  );
}
