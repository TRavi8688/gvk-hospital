"use client";
import { motion } from "framer-motion";
import { CheckCircle2, FileText, Landmark } from "lucide-react";
import SectionHeading from "./SectionHeading";
import AuthFrame from "./AuthFrame";

const documents = [
  "Aarogyasri health card or white ration card",
  "Government photo ID (Aadhaar preferred)",
  "Referral letter, if coming from a PHC/CHC",
  "Any previous medical records or discharge summaries",
];

const covers = [
  "Surgeries across empanelled specialities",
  "In-patient treatment and ward stay",
  "Diagnostic tests linked to the approved procedure",
  "Follow-up consultation after discharge",
];

export default function Aarogyasri() {
  return (
    <section id="aarogyasri" className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-14 w-14 rounded-2xl bg-aarogya-light flex items-center justify-center">
              <Landmark className="h-7 w-7 text-aarogya" />
            </div>
            <div>
              <p className="eyebrow text-aarogya">Government scheme</p>
              <p className="font-display font-bold text-ink text-lg">NTR Aarogyasri</p>
            </div>
          </div>
          <h2 className="font-display font-bold text-ink text-2xl sm:text-3xl leading-tight">
            Empanelled hospital — cashless treatment for eligible families
          </h2>
          <p className="text-trust/70 text-sm font-medium mt-1">
            అర్హులైన కుటుంబాలకు నగదు రహిత చికిత్స
          </p>
          <p className="mt-4 text-ink/60 text-sm sm:text-base">
            We help you check eligibility, complete paperwork, and get
            approvals — our billing desk handles the process so you can focus
            on recovery, not paperwork.
          </p>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl border border-trust/5 shadow-card p-4">
              <p className="flex items-center gap-2 font-display font-semibold text-ink text-sm mb-2">
                <FileText className="h-4 w-4 text-trust" /> Documents needed
              </p>
              <ul className="space-y-1.5">
                {documents.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-xs text-ink/60">
                    <CheckCircle2 className="h-3.5 w-3.5 text-aarogya mt-0.5 shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-trust/5 shadow-card p-4">
              <p className="flex items-center gap-2 font-display font-semibold text-ink text-sm mb-2">
                <CheckCircle2 className="h-4 w-4 text-aarogya" /> What's covered
              </p>
              <ul className="space-y-1.5">
                {covers.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-xs text-ink/60">
                    <CheckCircle2 className="h-3.5 w-3.5 text-aarogya mt-0.5 shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <a
            href="#ai-assistant"
            className="mt-6 inline-flex items-center gap-2 text-aarogya font-semibold text-sm hover:underline"
          >
            Check your Aarogyasri eligibility with our AI Assistant →
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4"
        >
          <AuthFrame
            src="/aarogyasri.jpg"
            alt="NTR Aarogyasri empanelment certificate / logo signage at hospital"
            label="Aarogyasri logo"
            aspect="aspect-[16/10]"
            objectFit="object-contain bg-white p-4"
          />
          <div className="bg-trust rounded-2xl p-5 text-white flex items-center gap-4">
            <Landmark className="h-8 w-8 text-warmth shrink-0" />
            <p className="text-sm">
              Look for the <strong>NTR Aarogyasri</strong> signage at our
              billing counter, or ask any staff member — every consultation
              includes a free eligibility check.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
