"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#030008]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Ambient background glow */}
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20"
              style={{
                background: "radial-gradient(circle, rgba(188,19,254,0.4) 0%, rgba(138,43,226,0.2) 40%, transparent 70%)",
                animation: "breathe 3s ease-in-out infinite",
              }}
            />
          </div>

          {/* Center content */}
          <div className="relative flex flex-col items-center gap-8">
            {/* Breathing ring */}
            <motion.div
              className="relative w-20 h-20"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div
                className="absolute inset-0 rounded-full border border-neon/30"
                style={{ animation: "breathe 2s ease-in-out infinite" }}
              />
              <div
                className="absolute inset-2 rounded-full border border-magenta/20"
                style={{ animation: "breathe 2s ease-in-out infinite 0.3s" }}
              />
              <div
                className="absolute inset-4 rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(188,19,254,0.5) 0%, transparent 70%)",
                  animation: "breathe 2s ease-in-out infinite 0.6s",
                }}
              />
            </motion.div>

            {/* Brand text */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <p className="text-[11px] tracking-[0.4em] uppercase text-foreground/40 font-light">
                entering the realm of
              </p>
              <h1 className="mt-2 text-lg font-light tracking-[0.15em] text-foreground/80">
                pixel<span className="text-neon/80">Threader</span>
              </h1>
            </motion.div>

            {/* Subtle loading line */}
            <motion.div
              className="w-32 h-[1px] bg-neon/10 rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-transparent via-neon/50 to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: "200%" }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
