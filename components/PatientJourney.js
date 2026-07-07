"use client";
import { motion } from "framer-motion";
import { PhoneCall, ClipboardCheck, HeartHandshake, Home } from "lucide-react";
import SectionHeading from "./SectionHeading";

const journey = [
  { icon: PhoneCall, title: "You reach out", desc: "Call, WhatsApp, or walk in — we respond right away." },
  { icon: ClipboardCheck, title: "We listen & assess", desc: "A doctor examines you and explains the plan in your language." },
  { icon: HeartHandshake, title: "We care, together", desc: "Nurses and doctors keep your family informed at every step." },
  { icon: Home, title: "You go home well", desc: "Clear discharge notes and follow-up so recovery continues smoothly." },
];

export default function PatientJourney() {
  return (
    <section className="bg-paper py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="What to expect"
          title="A patient journey built on trust, not just treatment"
          teluguTitle="చికిత్సతో పాటు నమ్మకాన్ని కూడా అందిస్తాం"
          center
        />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {journey.map((j, i) => (
            <motion.div
              key={j.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="bg-white rounded-2xl shadow-card p-5 text-center"
            >
              <div className="h-12 w-12 mx-auto rounded-full bg-trust/10 flex items-center justify-center mb-3">
                <j.icon className="h-6 w-6 text-trust" />
              </div>
              <p className="font-display font-semibold text-ink text-sm">{j.title}</p>
              <p className="text-xs text-ink/55 mt-1.5">{j.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
