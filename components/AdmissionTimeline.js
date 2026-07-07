"use client";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { admissionSteps } from "@/data/content";

export default function AdmissionTimeline() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Getting admitted"
          title="Your visit, step by step"
          teluguTitle="మీ చికిత్స ప్రక్రియ"
        />
        <div className="mt-10 relative">
          <div className="hidden sm:block absolute left-[27px] top-2 bottom-2 w-0.5 bg-trust/15" />
          <div className="flex flex-col gap-6 sm:gap-8">
            {admissionSteps.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="flex items-start gap-4 sm:gap-5 relative"
              >
                <div className="h-14 w-14 shrink-0 rounded-2xl bg-trust text-white font-display font-bold flex items-center justify-center shadow-soft z-10">
                  {i + 1}
                </div>
                <div className="bg-paper rounded-2xl border border-trust/5 p-4 sm:p-5 flex-1">
                  <p className="font-display font-semibold text-ink">{s.title}</p>
                  <p className="text-xs text-trust/60 font-medium">{s.titleTelugu}</p>
                  <p className="text-sm text-ink/60 mt-1">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
