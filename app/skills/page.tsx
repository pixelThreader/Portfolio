"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

const skills = [
  { name: "Next.js", category: "core", level: 95 },
  { name: "React", category: "core", level: 93 },
  { name: "TypeScript", category: "core", level: 90 },
  { name: "Node.js", category: "core", level: 88 },
  { name: "Python", category: "core", level: 92 },
  { name: "Deep Learning", category: "ai", level: 85 },
  { name: "AI/ML", category: "ai", level: 87 },
  { name: "PyTorch", category: "ai", level: 80 },
  { name: "Docker", category: "infra", level: 82 },
  { name: "PostgreSQL", category: "infra", level: 85 },
  { name: "Linux", category: "infra", level: 88 },
  { name: "System Design", category: "infra", level: 83 },
  { name: "Tailwind CSS", category: "frontend", level: 92 },
  { name: "Framer Motion", category: "frontend", level: 80 },
  { name: "Rust", category: "learning", level: 40 },
  { name: "Tauri", category: "learning", level: 45 },
];

const categories: Record<string, { label: string; color: string }> = {
  core: { label: "Core Technologies", color: "rgba(188,19,254,0.6)" },
  ai: { label: "AI & ML", color: "rgba(224,64,251,0.6)" },
  infra: { label: "Infrastructure", color: "rgba(138,43,226,0.6)" },
  frontend: { label: "Frontend", color: "rgba(124,58,237,0.6)" },
  learning: { label: "Exploring", color: "rgba(244,114,182,0.5)" },
};

function SkillNode({ skill, index }: { skill: (typeof skills)[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const size = 70 + skill.level * 0.6;
  const cat = categories[skill.category];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.05, type: "spring", stiffness: 200, damping: 20 }}
      className="group relative cursor-default"
      style={{ width: size, height: size, animation: `float ${5 + (index % 4)}s ease-in-out infinite ${index * 0.3}s` }}
    >
      <div
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ boxShadow: `0 0 30px ${cat.color}, 0 0 60px ${cat.color}` }}
      />
      <div className="relative w-full h-full rounded-full glass flex items-center justify-center transition-all duration-500 group-hover:scale-110">
        <p className="text-[9px] md:text-[10px] font-light text-foreground/70 group-hover:text-foreground transition-colors leading-tight text-center px-2">
          {skill.name}
        </p>
      </div>
      <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="48" fill="none" stroke={cat.color.replace("0.6", "0.1")} strokeWidth="1" />
        <motion.circle
          cx="50" cy="50" r="48" fill="none" stroke={cat.color} strokeWidth="1.5" strokeLinecap="round"
          strokeDasharray={`${skill.level * 3.01} ${301 - skill.level * 3.01}`}
          initial={{ strokeDashoffset: 301 }}
          animate={isInView ? { strokeDashoffset: 0 } : {}}
          transition={{ duration: 1.2, delay: index * 0.05 + 0.3, ease: "easeOut" }}
        />
      </svg>
    </motion.div>
  );
}

export default function SkillsPage() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <main className="min-h-screen bg-background ambient-bg pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div ref={headerRef} className="mb-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-[10px] tracking-[0.5em] uppercase text-neon/40 mb-4">Tech Arsenal</p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-normal tracking-tight">
            Ski<span className="gradient-text">lls</span>
          </h1>
          <p className="mt-6 text-sm text-foreground/30 font-light max-w-md mx-auto">
            Technologies and disciplines I work with to build intelligent, production-grade systems.
          </p>
        </motion.div>

        <motion.div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.6 }}
        >
          {Object.entries(categories).map(([key, cat]) => (
            <div key={key} className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: cat.color }} />
              <span className="text-[10px] tracking-wider uppercase text-foreground/30">{cat.label}</span>
            </div>
          ))}
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-5 lg:gap-6 max-w-4xl mx-auto">
          {skills.map((skill, i) => (
            <SkillNode key={skill.name} skill={skill} index={i} />
          ))}
        </div>

        <motion.div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}
        >
          {[
            { label: "Technologies", value: "18+" },
            { label: "Years Coding", value: "3+" },
            { label: "Projects Built", value: "20+" },
            { label: "Lines of Code", value: "100K+" },
          ].map((stat) => (
            <div key={stat.label} className="glass rounded-2xl p-6 text-center">
              <p className="text-2xl md:text-3xl font-serif gradient-text">{stat.value}</p>
              <p className="text-[10px] tracking-[0.2em] uppercase text-foreground/30 mt-2">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
