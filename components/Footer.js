"use client";
import { ShieldPlus, Phone, MapPin, Clock, Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            <div className="h-10 w-10 rounded-xl bg-trust flex items-center justify-center">
              <ShieldPlus className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="font-display font-semibold text-white text-sm">Dr. G. Vijaya Kumar</p>
              <p className="text-xs text-white/50">Memorial Hospital</p>
            </div>
          </div>
          <p className="text-xs leading-relaxed">
            A trust-run, community multispeciality hospital in Nellore —
            affordable, honest and compassionate care for every family.
          </p>
          <p className="text-[11px] text-white/35 mt-3">
            [GVK Trust logo placeholder — add real trust logo here]
          </p>
        </div>

        <div>
          <p className="font-display font-semibold text-white text-sm mb-3">Quick Links</p>
          <ul className="space-y-2 text-xs">
            {["Services", "Doctors", "Departments", "Aarogyasri", "Health Tips", "Contact"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase().replace(" ", "-")}`} className="hover:text-white transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display font-semibold text-white text-sm mb-3">Contact</p>
          <ul className="space-y-2.5 text-xs">
            <li className="flex items-start gap-2">
              <MapPin className="h-3.5 w-3.5 mt-0.5 shrink-0" /> Aravinda Nagar Road, Somashekara Puram, Nellore-524001, Andhra Pradesh
            </li>
            <li className="flex items-start gap-2">
              <Phone className="h-3.5 w-3.5 mt-0.5 shrink-0" /> +91-12345-67890 (Emergency)
            </li>
            <li className="flex items-start gap-2">
              <Clock className="h-3.5 w-3.5 mt-0.5 shrink-0" /> OPD: 9AM–1PM &amp; 4PM–8PM · Emergency 24×7
            </li>
          </ul>
        </div>

        <div>
          <p className="font-display font-semibold text-white text-sm mb-3">Follow us</p>
          <div className="flex gap-2">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <p className="text-[11px] text-white/35 mt-4">
            Empanelled under NTR Aarogyasri. Logo displayed with hospital's
            trust certificate on-site.
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-[11px] text-white/40">
        © {new Date().getFullYear()} Dr. G. Vijaya Kumar Memorial Hospital, Nellore. All rights reserved.
      </div>
    </footer>
  );
}
