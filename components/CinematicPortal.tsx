"use client";

import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { useRef } from "react";

export default function CinematicPortal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const springProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
  });

  // Mask scale: starts at 1, grows to 50
  const maskScale = useTransform(springProgress, [0, 0.7], [1, 50]);

  // Background parallax
  const bgY = useTransform(springProgress, [0, 1], ["0%", "-20%"]);
  const bgScale = useTransform(springProgress, [0, 1], [1.1, 1]);

  // Text animation
  const textOpacity = useTransform(springProgress, [0, 0.25], [1, 0]);
  const textY = useTransform(springProgress, [0, 0.25], [0, -80]);
  const textScale = useTransform(springProgress, [0, 0.25], [1, 0.95]);

  // About section reveal
  const aboutOpacity = useTransform(springProgress, [0.65, 0.85], [0, 1]);
  const aboutY = useTransform(springProgress, [0.65, 0.85], [80, 0]);

  // Scroll indicator
  const scrollIndicatorOpacity = useTransform(springProgress, [0, 0.1], [1, 0]);

  return (
    <div ref={containerRef} className="relative h-[500vh] bg-background text-foreground">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Atmospheric Background (revealed by circle) */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{ y: bgY, scale: bgScale }}
        >
          {/* Layered gradient atmosphere */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0015] via-[#110025] to-[#0a0015]" />

          {/* Floating orbs */}
          <div
            className="absolute top-[20%] left-[15%] w-[400px] h-[400px] rounded-full opacity-30"
            style={{
              background: "radial-gradient(circle, rgba(188,19,254,0.3) 0%, transparent 70%)",
              animation: "float 8s ease-in-out infinite",
            }}
          />
          <div
            className="absolute bottom-[15%] right-[10%] w-[350px] h-[350px] rounded-full opacity-20"
            style={{
              background: "radial-gradient(circle, rgba(224,64,251,0.3) 0%, transparent 70%)",
              animation: "float 10s ease-in-out infinite 2s",
            }}
          />
          <div
            className="absolute top-[50%] left-[60%] w-[250px] h-[250px] rounded-full opacity-15"
            style={{
              background: "radial-gradient(circle, rgba(138,43,226,0.4) 0%, transparent 70%)",
              animation: "float 7s ease-in-out infinite 1s",
            }}
          />

          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(188,19,254,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(188,19,254,0.3) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </motion.div>

        {/* Foreground Mask Layer — The Circle Reveal */}
        <motion.div
          className="absolute inset-0 w-full h-full bg-background origin-center pointer-events-none"
          style={{
            scale: maskScale,
            WebkitMaskImage:
              "radial-gradient(circle, transparent 150px, black 151px)",
            maskImage:
              "radial-gradient(circle, transparent 150px, black 151px)",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskPosition: "center",
          }}
        />

        {/* Hero Content Layer */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-6"
          style={{ opacity: textOpacity, y: textY, scale: textScale }}
        >
          {/* Top label */}
          <motion.p
            className="text-[10px] md:text-[11px] tracking-[0.5em] uppercase text-foreground/30 font-light mb-8"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.8 }}
          >
            AI Engineer • Full Stack Developer • System Builder
          </motion.p>

          {/* Main heading */}
          <motion.h1
            className="font-serif text-5xl sm:text-6xl md:text-8xl lg:text-[8rem] xl:text-[9rem] font-normal tracking-tight text-center leading-[0.9]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.7, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="block">Building</span>
            <span className="block gradient-text mt-2">Intelligent</span>
            <span className="block mt-2">Systems</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="mt-8 md:mt-12 text-xs md:text-sm tracking-[0.2em] uppercase text-foreground/40 font-light text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.2, duration: 0.8 }}
          >
            Piyush — <span className="text-neon/60">pixelThreader</span>
          </motion.p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          style={{ opacity: scrollIndicatorOpacity }}
        >
          <motion.p
            className="text-[9px] tracking-[0.4em] uppercase text-foreground/25 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5, duration: 0.8 }}
          >
            Scroll to explore
          </motion.p>
          <motion.div
            className="w-[1px] h-8 bg-gradient-to-b from-neon/40 to-transparent"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 3.8, duration: 0.6 }}
            style={{ transformOrigin: "top" }}
          />
        </motion.div>

        {/* About Section — appears after scroll reveal */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center p-6 md:p-12"
          style={{ opacity: aboutOpacity, y: aboutY }}
        >
          <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Profile Card */}
            <div className="md:col-span-1 glass rounded-3xl p-8 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-neon/30 to-magenta/30 border border-neon/20 flex items-center justify-center mb-5">
                <span className="text-3xl font-serif gradient-text">P</span>
              </div>
              <h3 className="text-lg font-light tracking-wide">Piyush</h3>
              <p className="text-[10px] tracking-[0.3em] uppercase text-foreground/40 mt-1">
                pixelThreader
              </p>
              <div className="mt-6 w-full space-y-3">
                {[
                  { label: "Focus", value: "AI & Systems" },
                  { label: "Stack", value: "Full Stack" },
                  { label: "Passion", value: "Deep Learning" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex justify-between items-center text-xs py-2 border-b border-foreground/5"
                  >
                    <span className="text-foreground/30 uppercase tracking-wider text-[10px]">
                      {item.label}
                    </span>
                    <span className="text-foreground/70">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* About Text Card */}
            <div className="md:col-span-2 glass rounded-3xl p-8 flex flex-col justify-center">
              <p className="text-[10px] tracking-[0.3em] uppercase text-neon/50 mb-4">
                About
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-normal leading-snug mb-6">
                Engineering ideas into{" "}
                <span className="gradient-text">reality</span>
              </h2>
              <p className="text-sm md:text-base text-foreground/50 leading-relaxed font-light">
                I'm an AI Engineer and Full Stack Developer who builds
                intelligent, production-grade systems. From deep learning
                architectures to scalable web platforms, I craft solutions that
                push the boundary between innovation and execution. I think in
                systems, design with intention, and build for the future.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Next.js",
                  "React",
                  "TypeScript",
                  "Python",
                  "AI/ML",
                  "Deep Learning",
                  "System Design",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-[10px] tracking-wider uppercase rounded-full border border-foreground/10 text-foreground/40 hover:border-neon/30 hover:text-foreground/60 transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
