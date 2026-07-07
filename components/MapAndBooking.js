"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, CalendarCheck } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function MapAndBooking() {
  return (
    <section id="contact" className="bg-paper py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            eyebrow="Find us"
            title="Visit Dr. G. Vijaya Kumar Memorial Hospital"
            teluguTitle="మా ఆసుపత్రిని సందర్శించండి"
          />
          <div className="mt-5 rounded-2xl overflow-hidden shadow-card border border-trust/5 h-72 sm:h-80">
            <iframe
              title="Hospital location map"
              src="https://www.google.com/maps?q=Nellore,Andhra+Pradesh&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="mt-4 grid sm:grid-cols-2 gap-3">
            <div className="bg-white rounded-xl p-3.5 flex items-start gap-2.5 shadow-card">
              <MapPin className="h-4 w-4 text-trust mt-0.5 shrink-0" />
              <p className="text-xs text-ink/65 leading-relaxed">
                Aravinda Nagar Road, Somashekara Puram, Nellore-524001, Andhra Pradesh
              </p>
            </div>
            <div className="bg-white rounded-xl p-3.5 flex items-start gap-2.5 shadow-card">
              <Clock className="h-4 w-4 text-trust mt-0.5 shrink-0" />
              <p className="text-xs text-ink/65">OPD: Mon–Sat, 9 AM–1 PM &amp; 4 PM–8 PM · Emergency 24×7</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          id="book"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-3xl shadow-soft p-6 sm:p-8"
        >
          <div className="flex items-center gap-2.5 mb-1">
            <CalendarCheck className="h-5 w-5 text-trust" />
            <p className="font-display font-bold text-ink text-xl">Book an appointment</p>
          </div>
          <p className="text-xs text-trust/60 font-medium mb-5">అపాయింట్‌మెంట్ బుక్ చేసుకోండి</p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-3"
          >
            <input
              placeholder="Full name / మీ పేరు"
              className="w-full rounded-xl border border-trust/15 px-4 py-3 text-sm outline-none focus:border-trust"
            />
            <input
              placeholder="Phone number / ఫోన్ నంబర్"
              className="w-full rounded-xl border border-trust/15 px-4 py-3 text-sm outline-none focus:border-trust"
            />
            <select className="w-full rounded-xl border border-trust/15 px-4 py-3 text-sm outline-none focus:border-trust text-ink/70">
              <option>Select department / విభాగం ఎంచుకోండి</option>
              <option>General Medicine</option>
              <option>General Surgery</option>
              <option>Obstetrics & Gynaecology</option>
              <option>Orthopaedics</option>
              <option>Paediatrics</option>
              <option>Other</option>
            </select>
            <input
              type="date"
              className="w-full rounded-xl border border-trust/15 px-4 py-3 text-sm outline-none focus:border-trust text-ink/70"
            />
            <button
              type="submit"
              className="w-full bg-trust text-white font-semibold rounded-full py-3.5 shadow-soft hover:bg-trust-dark transition-colors"
            >
              Request Appointment
            </button>
          </form>

          <div className="mt-5 pt-5 border-t border-trust/10 flex items-center justify-between">
            <p className="text-xs text-ink/50">Prefer to talk directly?</p>
            <a href="tel:+911234567890" className="flex items-center gap-1.5 text-trust font-semibold text-sm">
              <Phone className="h-4 w-4" /> Call reception
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
