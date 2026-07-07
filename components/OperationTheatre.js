"use client";
import { motion } from "framer-motion";
import { Wind, Zap, ShieldCheck, Activity } from "lucide-react";
import SectionHeading from "./SectionHeading";
import AuthFrame from "./AuthFrame";

const features = [
  { icon: Wind, text: "Positive-pressure, filtered air handling" },
  { icon: Zap, text: "Backup power for uninterrupted surgery" },
  { icon: ShieldCheck, text: "Strict sterilisation protocols" },
  { icon: Activity, text: "Continuous vitals monitoring" },
];

export default function OperationTheatre() {
  return (
    <section className="bg-trust-dark py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <p className="eyebrow text-warmth mb-2">Surgical excellence</p>
          <h2 className="font-display font-bold text-white text-2xl sm:text-3xl lg:text-4xl">
            An advanced operation theatre you can trust
          </h2>
          <p className="text-white/60 text-sm mt-1 font-medium">
            నమ్మదగిన అధునాతన ఆపరేషన్ థియేటర్
          </p>
          <p className="mt-4 text-white/80 text-sm sm:text-base max-w-md">
            Every surgery — big or small — is carried out with the same
            discipline: modern equipment, a trained surgical team, and safety
            protocols that never get shortcuts.
          </p>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {features.map((f) => (
              <li key={f.text} className="flex items-center gap-2.5 text-white/85 text-sm">
                <div className="h-8 w-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <f.icon className="h-4 w-4 text-warmth" />
                </div>
                {f.text}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <AuthFrame
            src="/ot.jpg"
            alt="Operation theatre at Dr. G. Vijaya Kumar Memorial Hospital"
            label="OT photo"
            aspect="aspect-[4/3]"
          />
        </motion.div>
      </div>
    </section>
  );
}
