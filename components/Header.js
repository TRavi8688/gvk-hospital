"use client";
import { useState } from "react";
import { Menu, X, Globe, ShieldPlus } from "lucide-react";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#doctors", label: "Doctors" },
  { href: "#departments", label: "Departments" },
  { href: "#aarogyasri", label: "Aarogyasri" },
  { href: "#health-tips", label: "Health Tips" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState("EN");

  return (
    <header className="sticky top-0 z-40 glass border-b border-trust/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <div className="h-10 w-10 rounded-xl bg-trust flex items-center justify-center shadow-soft shrink-0 overflow-hidden bg-white">
            <img src="/logo.png" alt="GVK Trust Logo" className="h-full w-full object-contain" onError={(e) => e.target.style.display = 'none'} />
            {/* Fallback icon if logo not found */}
            <ShieldPlus className="h-5 w-5 text-trust absolute -z-10" />
          </div>
          <div className="leading-tight">
            <p className="font-display font-semibold text-trust text-[13px] sm:text-sm">
              Dr. G. Vijaya Kumar
            </p>
            <p className="text-[11px] sm:text-xs text-ink/60 -mt-0.5">
              Memorial Hospital · Nellore
            </p>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-ink/70">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-trust transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setLang(lang === "EN" ? "TE" : "EN")}
            className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-trust border border-trust/25 rounded-full px-3 py-1.5 hover:bg-trust/5 transition-colors"
            aria-label="Switch language"
          >
            <Globe className="h-3.5 w-3.5" />
            {lang === "EN" ? "తెలుగు" : "English"}
          </button>
          <a
            href="#book"
            className="hidden sm:inline-flex bg-trust text-white text-sm font-semibold rounded-full px-5 py-2.5 shadow-soft hover:bg-trust-dark transition-colors"
          >
            Book Appointment
          </a>
          <button
            className="lg:hidden h-10 w-10 flex items-center justify-center rounded-full hover:bg-trust/5"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5 text-trust" /> : <Menu className="h-5 w-5 text-trust" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden glass border-t border-trust/10 px-4 py-4 flex flex-col gap-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 px-2 rounded-lg text-ink/80 font-medium hover:bg-trust/5 hover:text-trust"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#book"
            onClick={() => setOpen(false)}
            className="mt-2 text-center bg-trust text-white font-semibold rounded-full px-5 py-3 shadow-soft"
          >
            Book Appointment
          </a>
        </div>
      )}
    </header>
  );
}
