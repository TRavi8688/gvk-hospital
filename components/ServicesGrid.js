"use client";
import { motion } from "framer-motion";
import {
  Ambulance,
  Stethoscope,
  FlaskConical,
  ScanLine,
  Pill,
  BedDouble,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

const services = [
  { icon: Ambulance, title: "24×7 Emergency", desc: "Round-the-clock trauma & critical care" },
  { icon: Stethoscope, title: "OPD Consultation", desc: "Walk-in or book ahead for any specialty" },
  { icon: FlaskConical, title: "Lab & Diagnostics", desc: "Blood tests, pathology, quick reports" },
  { icon: ScanLine, title: "X-Ray & Scans", desc: "On-site imaging for faster diagnosis" },
  { icon: Pill, title: "In-house Pharmacy", desc: "Genuine medicines at fair prices" },
  { icon: BedDouble, title: "In-patient Care", desc: "Clean wards with attentive nursing" },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">
      <SectionHeading
        eyebrow="What we offer"
        title="Services built around your family's needs"
        teluguTitle="మీ కుటుంబ అవసరాలకు తగిన సేవలు"
      />
      <div className="mt-8 grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className="group bg-white rounded-2xl border border-trust/5 shadow-card p-4 sm:p-6 hover:shadow-soft hover:-translate-y-1 transition-all"
          >
            <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-trust to-trust-light flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <s.icon className="h-5 w-5 text-white" />
            </div>
            <p className="font-display font-semibold text-ink text-sm sm:text-base">
              {s.title}
            </p>
            <p className="text-xs sm:text-sm text-ink/55 mt-1">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
