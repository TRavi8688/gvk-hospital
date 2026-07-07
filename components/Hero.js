"use client";
import { motion } from "framer-motion";
import { Phone, CalendarCheck, ShieldCheck } from "lucide-react";
import AuthFrame from "./AuthFrame";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-trust-dark min-h-[92vh] sm:min-h-[88vh] flex items-end">
      {/* Background photo frame fills the hero */}
      <div className="absolute inset-0">
        <AuthFrame
          src="/hospital.jpg"
          alt="Front view of Dr. G. Vijaya Kumar Memorial Hospital building"
          label="Hospital building photo"
          aspect="aspect-auto h-full"
          rounded="rounded-none"
          className="h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/10" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 pb-10 sm:pb-16 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 mb-5">
            <ShieldCheck className="h-4 w-4 text-aarogya" />
            <span className="text-white text-xs font-semibold tracking-wide">
              Trusted by Nellore families for 30+ years
            </span>
          </div>

          <h1 className="font-display font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-tight">
            Quality healthcare,
            <span className="block text-warmth">within everyone&apos;s reach.</span>
          </h1>
          <p className="mt-3 text-white/60 text-sm sm:text-base font-medium">
            అందరికీ అందుబాటులో నాణ్యమైన వైద్యం
          </p>

          <p className="mt-5 text-white/85 text-base sm:text-lg max-w-xl">
            Dr. G. Vijaya Kumar Memorial Hospital is a multispeciality hospital
            in Nellore providing honest, affordable and compassionate care —
            empanelled under NTR Aarogyasri, open 24×7 for emergencies.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#book"
              className="inline-flex items-center justify-center gap-2 bg-warmth text-ink font-semibold rounded-full px-7 py-3.5 shadow-soft hover:brightness-105 active:scale-[0.98] transition"
            >
              <CalendarCheck className="h-5 w-5" />
              Book Appointment
            </a>
            <a
              href="tel:+911234567890"
              className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white font-semibold rounded-full px-7 py-3.5 backdrop-blur hover:bg-white/20 active:scale-[0.98] transition"
            >
              <Phone className="h-5 w-5" />
              Call Emergency Line
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm inline-block">
            <div className="h-16 w-16 shrink-0 rounded-full overflow-hidden bg-white/20 border-2 border-white/30">
              <img src="/founder.jpg" alt="Dr. G. Vijayakumar" className="h-full w-full object-cover" onError={(e) => e.target.style.display = 'none'} />
            </div>
            <div>
              <p className="text-white font-bold font-display text-lg">Dr. G. Vijayakumar</p>
              <p className="text-white/70 text-sm font-medium">Founder & Inspiration</p>
              <p className="text-white/50 text-xs mt-0.5">&quot;Reaching the needy&quot;</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
