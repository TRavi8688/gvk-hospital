"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { testimonials } from "@/data/content";

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const t = testimonials[idx];

  const next = () => setIdx((i) => (i + 1) % testimonials.length);
  const prev = () => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="In their words"
          title="Families who trusted us"
          teluguTitle="మా రోగుల అనుభవాలు"
          center
        />
        <div className="mt-10 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="bg-paper rounded-3xl border border-trust/5 shadow-card p-6 sm:p-10 text-center"
            >
              <Quote className="h-8 w-8 text-trust/20 mx-auto mb-3" />
              <p className="text-ink/75 text-base sm:text-lg leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-5 flex items-center justify-center gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-warmth text-warmth" />
                ))}
              </div>
              <p className="mt-3 font-display font-semibold text-ink text-sm">{t.name}</p>
              <p className="text-xs text-ink/50">{t.location}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-3 mt-5">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="h-10 w-10 rounded-full border border-trust/15 flex items-center justify-center hover:bg-trust/5"
            >
              <ChevronLeft className="h-4 w-4 text-trust" />
            </button>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === idx ? "w-6 bg-trust" : "w-2 bg-trust/20"
                }`}
              />
            ))}
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="h-10 w-10 rounded-full border border-trust/15 flex items-center justify-center hover:bg-trust/5"
            >
              <ChevronRight className="h-4 w-4 text-trust" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
