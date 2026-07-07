"use client";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { departments } from "@/data/departments";

export default function Departments() {
  return (
    <section id="departments" className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">
      <SectionHeading
        eyebrow="Specialities"
        title="Departments under one roof"
        teluguTitle="ఒకే చోట అన్ని వైద్య విభాగాలు"
      />
      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        {departments.map((d, i) => (
          <motion.div
            key={d.id}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className="bg-white rounded-2xl border border-trust/5 shadow-card p-4 flex flex-col items-start gap-2 hover:border-aarogya/30 transition-colors"
          >
            <div className="h-10 w-10 rounded-lg bg-aarogya-light flex items-center justify-center">
              <d.icon className="h-5 w-5 text-aarogya" />
            </div>
            <p className="font-display font-semibold text-ink text-sm leading-tight">
              {d.name}
            </p>
            <p className="text-[11px] text-trust/60 font-medium -mt-1">{d.nameTelugu}</p>
            <p className="text-xs text-ink/50 leading-snug">{d.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
