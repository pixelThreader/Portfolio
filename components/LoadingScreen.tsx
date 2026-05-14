"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 1000); // give time for exit animation
    }, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030008] text-white"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [0.8, 1.2, 1], opacity: [0, 1, 1] }}
            transition={{ duration: 1.5, ease: "easeInOut", times: [0, 0.5, 1] }}
            className="relative flex items-center justify-center"
          >
            {/* Glowing orb */}
            <div className="absolute w-32 h-32 rounded-full bg-[#bc13fe]/20 blur-2xl" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 rounded-full border-t-2 border-r-2 border-[#bc13fe] shadow-[0_0_20px_rgba(188,19,254,0.5)]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 tracking-[0.3em] text-xs font-light text-purple-300/70"
          >
            SYSTEM_INITIALIZATION // PIYUSH
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
