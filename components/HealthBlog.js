"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { healthTips } from "@/data/content";

export default function HealthBlog() {
  return (
    <section id="health-tips" className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">
      <SectionHeading
        eyebrow="Health & wellness"
        title="Health tips from our doctors"
        teluguTitle="డాక్టర్ల నుండి ఆరోగ్య సూచనలు"
      />
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {healthTips.map((h, i) => (
          <motion.article
            key={h.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.07 }}
            className="bg-white rounded-2xl border border-trust/5 shadow-card p-5 flex flex-col cursor-pointer hover:shadow-soft hover:-translate-y-1 transition-all"
          >
            <span className="inline-block w-fit bg-trust/10 text-trust text-[11px] font-semibold rounded-full px-2.5 py-1">
              {h.category}
            </span>
            <p className="font-display font-semibold text-ink text-sm mt-3 leading-snug">
              {h.title}
            </p>
            <p className="text-xs text-trust/60 font-medium mt-1">{h.titleTelugu}</p>
            <p className="text-xs text-ink/55 mt-2 flex-1">{h.excerpt}</p>
            <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-aarogya">
              Read more <ArrowRight className="h-3 w-3" />
            </span>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
