"use client";
import { useState, useEffect } from "react";
import { Camera, ImageIcon } from "lucide-react";

export default function AuthFrame({
  src,
  alt,
  label = "Real photo",
  aspect = "aspect-[4/3]",
  rounded = "rounded-2xl",
  className = "",
  objectFit = "object-cover",
}) {
  const [error, setError] = useState(false);
  const showImage = src && !error;

  useEffect(() => {
    setError(false);
  }, [src]);

  return (
    <div className={`relative ${rounded} overflow-hidden shadow-card ${className}`}>
      <div className={`${aspect} w-full bg-gradient-to-br from-trust/10 to-aarogya/10 relative`}>
        {showImage ? (
          <img 
            src={src} 
            alt={alt} 
            className={`h-full w-full ${objectFit}`} 
            loading="lazy" 
            onError={() => setError(true)}
          />
        ) : (
          <div className="h-full w-full flex flex-col items-center justify-center p-2 text-center border-2 border-dashed border-trust/25 bg-white/50">
            <ImageIcon className="h-5 w-5 sm:h-8 sm:w-8 text-trust/30 mb-1" strokeWidth={1.5} />
          </div>
        )}
      </div>
      {/* Hide the badge if it's a circular avatar to save space */}
      {!rounded.includes("rounded-full") && (
        <div
          className={`absolute top-3 left-3 flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold shadow-sm ${
            showImage ? "bg-aarogya text-white" : "glass text-trust border border-trust/20"
          }`}
        >
          <Camera className="h-3 w-3" />
          {showImage ? "Verified" : label}
        </div>
      )}
    </div>
  );
}
