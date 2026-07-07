"use client";
import { motion } from "framer-motion";
import { Pill, Clock, BadgePercent, Truck } from "lucide-react";
import SectionHeading from "./SectionHeading";

const points = [
  { icon: Pill, title: "Genuine medicines", desc: "Sourced from licensed distributors only" },
  { icon: Clock, title: "Open extended hours", desc: "Daily, including Sundays and holidays" },
  { icon: BadgePercent, title: "Fair, transparent pricing", desc: "No hidden markups on prescriptions" },
  { icon: Truck, title: "In-patient delivery", desc: "Medicines delivered directly to the ward" },
];

export default function Pharmacy() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">
      <div className="bg-gradient-to-br from-aarogya-light to-white rounded-3xl border border-aarogya/15 p-6 sm:p-10">
        <SectionHeading
          eyebrow="Pharmacy"
          title="Our in-house pharmacy, right when you need it"
          teluguTitle="ఆసుపత్రిలోనే ఫార్మసీ సదుపాయం"
        />
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bg-white rounded-2xl shadow-card p-4"
            >
              <div className="h-9 w-9 rounded-lg bg-aarogya/10 flex items-center justify-center mb-2">
                <p.icon className="h-4.5 w-4.5 text-aarogya" />
              </div>
              <p className="font-display font-semibold text-ink text-sm">{p.title}</p>
              <p className="text-xs text-ink/55 mt-1">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
