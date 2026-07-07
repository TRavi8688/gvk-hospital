"use client";
import { motion } from "framer-motion";
import { GraduationCap, Clock3 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import AuthFrame from "./AuthFrame";
import { doctors } from "@/data/doctors";

export default function Doctors() {
  return (
    <section id="doctors" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <SectionHeading
            eyebrow="Our medical team"
            title="Meet the doctors who'll care for you"
            teluguTitle="మిమ్మల్ని చూసుకునే డాక్టర్లు"
          />
        </div>

        <div className="mt-8 flex gap-4 overflow-x-auto scroll-hide snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:overflow-visible">
          {doctors.map((d, i) => (
            <motion.div
              key={d.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="min-w-[85%] snap-start sm:min-w-0 bg-paper rounded-2xl border border-trust/5 shadow-card overflow-hidden p-4 sm:p-5 flex items-start gap-4"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0">
                <AuthFrame
                  src={d.photo}
                  alt={`Photo of ${d.name}`}
                  label="Photo"
                  aspect="aspect-square"
                  rounded="rounded-full"
                />
              </div>
              <div className="flex-1">
                <p className="font-display font-semibold text-ink text-base leading-tight">{d.name}</p>
                <p className="text-[11px] text-trust/70 font-medium mt-0.5">{d.nameTelugu}</p>
                <p className="text-sm text-trust font-semibold mt-1.5">{d.specialty}</p>
                <p className="text-xs text-ink/55 mt-1 flex items-center gap-1.5 leading-tight">
                  <GraduationCap className="h-3.5 w-3.5 shrink-0" /> {d.qualification}
                </p>
                <p className="text-xs text-ink/55 mt-1 flex items-center gap-1.5 leading-tight">
                  <Clock3 className="h-3.5 w-3.5 shrink-0" /> {d.timings}
                </p>
                <div className="mt-3 inline-block bg-aarogya-light text-aarogya text-[11px] font-semibold rounded-full px-3 py-1">
                  {d.experience} experience
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
