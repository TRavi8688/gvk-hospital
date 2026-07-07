"use client";
import { Phone, Siren } from "lucide-react";

export default function EmergencyBanner() {
  return (
    <div className="bg-ink text-white text-xs sm:text-sm">
      <div className="mx-auto max-w-7xl px-3 py-1.5 flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 font-medium">
          <Siren className="h-3.5 w-3.5 text-warmth" />
          <span>24×7 Emergency · అత్యవసర సేవ</span>
        </div>
        <a
          href="tel:+911234567890"
          className="flex items-center gap-1 font-semibold text-warmth hover:text-white transition-colors"
        >
          <Phone className="h-3.5 w-3.5" />
          Call Now
        </a>
      </div>
    </div>
  );
}
