"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Neural Canvas",
    summary:
      "An AI-powered creative studio that transforms natural language into stunning visual art using diffusion models and custom fine-tuned pipelines.",
    stack: ["Python", "PyTorch", "Next.js", "FastAPI"],
    category: "AI / Deep Learning",
    gradient: "from-purple-900/40 via-violet-900/30 to-fuchsia-900/20",
    accentColor: "rgba(188, 19, 254, 0.5)",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Synapse",
    summary:
      "A real-time collaborative development environment with AI-assisted code completion, live cursors, and integrated deployment pipelines.",
    stack: ["TypeScript", "React", "Node.js", "WebSocket", "Docker"],
    category: "Full Stack Platform",
    gradient: "from-fuchsia-900/40 via-pink-900/30 to-rose-900/20",
    accentColor: "rgba(224, 64, 251, 0.5)",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Cortex API",
    summary:
      "A high-performance inference gateway that orchestrates multiple ML models with intelligent routing, caching, and auto-scaling across GPU clusters.",
    stack: ["Rust", "Python", "gRPC", "Kubernetes"],
    category: "System Architecture",
    gradient: "from-indigo-900/40 via-purple-900/30 to-violet-900/20",
    accentColor: "rgba(138, 43, 226, 0.5)",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "DeepSight",
    summary:
      "An end-to-end computer vision pipeline for real-time object detection and segmentation, deployed on edge devices with optimized ONNX runtime.",
    stack: ["Python", "TensorFlow", "OpenCV", "React"],
    category: "AI / Computer Vision",
    gradient: "from-violet-900/40 via-indigo-900/30 to-blue-900/20",
    accentColor: "rgba(124, 58, 237, 0.5)",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Flux Engine",
    summary:
      "A reactive data streaming platform handling millions of events per second with real-time analytics dashboards and anomaly detection.",
    stack: ["TypeScript", "Kafka", "PostgreSQL", "Next.js"],
    category: "Data Engineering",
    gradient: "from-pink-900/40 via-fuchsia-900/30 to-purple-900/20",
    accentColor: "rgba(244, 114, 182, 0.5)",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Phantom OS",
    summary:
      "A desktop-class web operating system with window management, a virtual filesystem, integrated terminal, and plugin architecture built with Tauri.",
    stack: ["Rust", "Tauri", "React", "TypeScript"],
    category: "System / Desktop",
    gradient: "from-slate-900/40 via-purple-900/30 to-violet-900/20",
    accentColor: "rgba(148, 103, 254, 0.5)",
    liveUrl: "#",
    githubUrl: "#",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.12,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <div
        className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${project.gradient} border border-white/[0.04] transition-all duration-700`}
        style={{
          boxShadow: isHovered
            ? `0 0 60px ${project.accentColor}, 0 20px 60px rgba(0,0,0,0.5)`
            : "0 4px 30px rgba(0,0,0,0.3)",
        }}
      >
        {/* Shimmer overlay on hover */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: `linear-gradient(105deg, transparent 40%, ${project.accentColor} 50%, transparent 60%)`,
            backgroundSize: "200% 100%",
            animation: isHovered ? "shimmer 2s ease-in-out" : "none",
          }}
        />

        {/* Content */}
        <div className="relative p-7 md:p-9">
          {/* Category label */}
          <div className="flex items-center justify-between mb-6">
            <span className="text-[10px] tracking-[0.3em] uppercase text-foreground/30 font-light">
              {project.category}
            </span>
            <span className="text-[10px] tracking-widest text-foreground/20 font-mono">
              0{project.id}
            </span>
          </div>

          {/* Title */}
          <motion.h3
            className="font-serif text-2xl md:text-3xl font-normal mb-4 leading-tight"
            animate={{ x: isHovered ? 8 : 0 }}
            transition={{ duration: 0.4 }}
          >
            {project.title}
          </motion.h3>

          {/* Summary */}
          <p className="text-sm text-foreground/40 leading-relaxed font-light mb-8 max-w-lg">
            {project.summary}
          </p>

          {/* Stack */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-[9px] tracking-wider uppercase rounded-full border border-foreground/8 text-foreground/35 group-hover:border-foreground/15 group-hover:text-foreground/50 transition-all duration-500"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-4">
            <a
              href={project.liveUrl}
              className="flex items-center gap-2 text-[11px] tracking-wider uppercase text-foreground/40 hover:text-foreground/80 transition-colors group/link"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Live</span>
            </a>
            <a
              href={project.githubUrl}
              className="flex items-center gap-2 text-[11px] tracking-wider uppercase text-foreground/40 hover:text-foreground/80 transition-colors group/link"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Source</span>
            </a>
          </div>
        </div>

        {/* Decorative corner glow */}
        <div
          className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-700"
          style={{
            background: `radial-gradient(circle, ${project.accentColor} 0%, transparent 70%)`,
          }}
        />
      </div>
    </motion.div>
  );
}

export default function ProjectsPage() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <main className="min-h-screen bg-background ambient-bg pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <motion.div
          ref={headerRef}
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-[10px] tracking-[0.5em] uppercase text-neon/40 mb-4">
            Selected Work
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-normal tracking-tight">
            Pro<span className="gradient-text">jects</span>
          </h1>
          <p className="mt-6 text-sm text-foreground/30 font-light max-w-md mx-auto">
            A collection of systems, platforms, and experiments built at the
            intersection of AI and modern engineering.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </main>
  );
}
