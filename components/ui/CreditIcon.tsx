"use client";

import React, { useState } from "react";

interface CreditIconProps {
    src?: string;
    name: string;
}

export default function CreditIcon({ src, name }: CreditIconProps) {
    const [hasError, setHasError] = useState(false);

    // If no image source is provided or if there was a load error, fall back to letter circle
    if (!src || hasError) {
        return (
            <div className="w-8 h-8 rounded-full border border-white/10 bg-[#411F27]/60 flex items-center justify-center text-[13px] font-bold text-white shrink-0 font-title select-none shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
                {name.charAt(0)}
            </div>
        );
    }

    return (
        <div className="w-8 h-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center overflow-hidden shrink-0 select-none shadow-[0_4px_12px_rgba(0,0,0,0.2)] hover:border-white/20 transition-all duration-300">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src={src}
                alt={`${name} icon`}
                className="w-full h-full object-contain p-1.5 bg-white/5"
                onError={() => setHasError(true)}
                loading="lazy"
            />
        </div>
    );
}
