"use client";
import { motion } from "framer-motion";
import { Clock, Landmark, IndianRupee, GraduationCap } from "lucide-react";

const badges = [
  {
    icon: Clock,
    title: "24×7 Emergency",
    sub: "Always open, always ready",
  },
  {
    icon: Landmark,
    title: "NTR Aarogyasri",
    sub: "Empanelled government scheme",
  },
  {
    icon: IndianRupee,
    title: "Affordable Care",
    sub: "Fair pricing for every family",
  },
  {
    icon: GraduationCap,
    title: "Experienced Doctors",
    sub: "30+ years of trusted service",
  },
];

export default function TrustBadges() {
  return (
    <section className="relative z-20 -mt-8 sm:-mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {badges.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white rounded-2xl shadow-soft p-4 sm:p-5 flex flex-col gap-2 border border-trust/5"
            >
              <div className="h-10 w-10 rounded-xl bg-trust/10 flex items-center justify-center">
                <b.icon className="h-5 w-5 text-trust" />
              </div>
              <p className="font-display font-semibold text-ink text-sm sm:text-base leading-tight">
                {b.title}
              </p>
              <p className="text-xs text-ink/55">{b.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
