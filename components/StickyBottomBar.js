"use client";
import { Phone, MessageCircle, CalendarCheck } from "lucide-react";

export default function StickyBottomBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 glass border-t border-trust/10 shadow-glass">
      <div className="grid grid-cols-3 gap-1 px-2 py-2">
        <a
          href="tel:+911234567890"
          className="flex flex-col items-center justify-center gap-0.5 rounded-xl py-2 bg-ink text-white active:scale-95 transition-transform"
        >
          <Phone className="h-5 w-5" />
          <span className="text-[11px] font-semibold">Call Now</span>
        </a>
        <a
          href="https://wa.me/911234567890"
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center justify-center gap-0.5 rounded-xl py-2 bg-aarogya text-white active:scale-95 transition-transform"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="text-[11px] font-semibold">WhatsApp</span>
        </a>
        <a
          href="#book"
          className="flex flex-col items-center justify-center gap-0.5 rounded-xl py-2 bg-trust text-white active:scale-95 transition-transform"
        >
          <CalendarCheck className="h-5 w-5" />
          <span className="text-[11px] font-semibold">Book Visit</span>
        </a>
      </div>
    </div>
  );
}
