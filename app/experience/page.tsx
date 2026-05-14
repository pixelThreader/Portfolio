"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

const experiences = [
  {
    id: 1,
    role: "Full Stack Developer Intern",
    company: "AYCreation",
    period: "2024 — Present",
    description:
      "Building production-grade web applications and internal tools. Working across the stack with React, Node.js, and PostgreSQL to deliver scalable solutions for real-world clients.",
    highlights: ["Production deployments", "Client-facing applications", "Database architecture"],
    color: "rgba(188, 19, 254, 0.5)",
  },
  {
    id: 2,
    role: "AI/ML Research & Exploration",
    company: "Self-directed",
    period: "2023 — Present",
    description:
      "Deep diving into deep learning architectures, training custom models, and exploring the intersection of AI with software engineering. Building end-to-end ML pipelines.",
    highlights: ["Deep learning models", "Computer vision", "NLP experiments"],
    color: "rgba(224, 64, 251, 0.5)",
  },
  {
    id: 3,
    role: "Open Source Contributor",
    company: "Community",
    period: "2023 — Present",
    description:
      "Contributing to open source projects and building developer tools. Sharing knowledge through code and helping grow the developer ecosystem.",
    highlights: ["Developer tools", "Open source libraries", "Community building"],
    color: "rgba(138, 43, 226, 0.5)",
  },
  {
    id: 4,
    role: "System Builder & Experimenter",
    company: "pixelThreader",
    period: "2022 — Present",
    description:
      "Personal brand and engineering identity. Building experimental systems, desktop applications with Tauri, and pushing the boundaries of what's possible with modern web tech.",
    highlights: ["Tauri desktop apps", "System design", "Experimental projects"],
    color: "rgba(124, 58, 237, 0.5)",
  },
];

function TimelineNode({ experience, index }: { experience: (typeof experiences)[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      className="relative flex items-center w-full mb-12 md:mb-0"
      initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Desktop: alternating left/right */}
      <div className={`hidden md:flex w-full items-center ${isLeft ? "flex-row" : "flex-row-reverse"}`}>
        {/* Card */}
        <div className="w-[calc(50%-32px)]">
          <div
            className="glass rounded-2xl p-7 transition-all duration-500 hover:scale-[1.02]"
            style={{
              boxShadow: `0 0 0 rgba(0,0,0,0), 0 4px 20px rgba(0,0,0,0.3)`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `0 0 40px ${experience.color}, 0 10px 40px rgba(0,0,0,0.4)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = `0 0 0 rgba(0,0,0,0), 0 4px 20px rgba(0,0,0,0.3)`;
            }}
          >
            <span className="text-[10px] tracking-[0.3em] uppercase text-foreground/25">{experience.period}</span>
            <h3 className="font-serif text-xl mt-3 mb-1">{experience.role}</h3>
            <p className="text-xs text-neon/50 tracking-wider mb-4">{experience.company}</p>
            <p className="text-sm text-foreground/40 leading-relaxed font-light mb-5">{experience.description}</p>
            <div className="flex flex-wrap gap-2">
              {experience.highlights.map((h) => (
                <span key={h} className="text-[9px] tracking-wider uppercase px-2.5 py-1 rounded-full border border-foreground/8 text-foreground/30">
                  {h}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Center dot */}
        <div className="relative w-16 flex justify-center">
          <motion.div
            className="w-4 h-4 rounded-full border-2 z-10"
            style={{ borderColor: experience.color, backgroundColor: experience.color.replace("0.5", "0.2") }}
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.3 }}
          />
        </div>

        {/* Spacer */}
        <div className="w-[calc(50%-32px)]" />
      </div>

      {/* Mobile: single column */}
      <div className="flex md:hidden w-full items-start gap-4">
        <div className="flex flex-col items-center pt-2">
          <motion.div
            className="w-3 h-3 rounded-full border-2 z-10"
            style={{ borderColor: experience.color, backgroundColor: experience.color.replace("0.5", "0.2") }}
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.3 }}
          />
          <div className="w-[1px] h-full bg-foreground/5 mt-2" />
        </div>
        <div className="glass rounded-2xl p-6 flex-1">
          <span className="text-[10px] tracking-[0.3em] uppercase text-foreground/25">{experience.period}</span>
          <h3 className="font-serif text-lg mt-2 mb-1">{experience.role}</h3>
          <p className="text-xs text-neon/50 tracking-wider mb-3">{experience.company}</p>
          <p className="text-sm text-foreground/40 leading-relaxed font-light mb-4">{experience.description}</p>
          <div className="flex flex-wrap gap-2">
            {experience.highlights.map((h) => (
              <span key={h} className="text-[9px] tracking-wider uppercase px-2 py-1 rounded-full border border-foreground/8 text-foreground/30">
                {h}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ExperiencePage() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <main className="min-h-screen bg-background ambient-bg pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div ref={headerRef} className="mb-20 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-[10px] tracking-[0.5em] uppercase text-neon/40 mb-4">Journey</p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-normal tracking-tight">
            Exper<span className="gradient-text">ience</span>
          </h1>
          <p className="mt-6 text-sm text-foreground/30 font-light max-w-md mx-auto">
            The evolution of an engineer — from first lines of code to building production systems.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line (desktop) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-foreground/10 to-transparent" />
          <div className="space-y-0 md:space-y-16">
            {experiences.map((exp, i) => (
              <TimelineNode key={exp.id} experience={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
