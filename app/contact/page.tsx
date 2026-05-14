"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { Github, Linkedin, Mail, Twitter, ArrowUpRight } from "lucide-react";

const socials = [
  { label: "Email", href: "mailto:your@email.com", icon: Mail, description: "Drop a message" },
  { label: "GitHub", href: "https://github.com/pixelthreader", icon: Github, description: "View source code" },
  { label: "LinkedIn", href: "https://linkedin.com/in/pixelthreader", icon: Linkedin, description: "Let's connect" },
  { label: "X / Twitter", href: "https://x.com/pixelthreader", icon: Twitter, description: "Follow updates" },
];

function SocialLink({ social, index }: { social: (typeof socials)[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      ref={ref}
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group glass rounded-2xl p-6 flex items-center justify-between transition-all duration-500 hover:scale-[1.02]"
      style={{
        boxShadow: isHovered
          ? "0 0 40px rgba(188,19,254,0.2), 0 10px 40px rgba(0,0,0,0.3)"
          : "0 4px 20px rgba(0,0,0,0.2)",
      }}
    >
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center group-hover:border-neon/30 transition-colors duration-500">
          <social.icon className="w-4 h-4 text-foreground/40 group-hover:text-foreground/80 transition-colors duration-500" />
        </div>
        <div>
          <p className="text-sm font-light text-foreground/80">{social.label}</p>
          <p className="text-[10px] text-foreground/25 tracking-wider mt-0.5">{social.description}</p>
        </div>
      </div>
      <motion.div animate={{ x: isHovered ? 4 : 0, y: isHovered ? -4 : 0 }} transition={{ duration: 0.3 }}>
        <ArrowUpRight className="w-4 h-4 text-foreground/20 group-hover:text-neon/60 transition-colors duration-500" />
      </motion.div>
    </motion.a>
  );
}

export default function ContactPage() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <main className="min-h-screen bg-background ambient-bg flex items-center justify-center px-6 py-32">
      <div className="max-w-xl w-full">
        {/* Header */}
        <motion.div ref={headerRef} className="mb-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-[10px] tracking-[0.5em] uppercase text-neon/40 mb-4">Get In Touch</p>
          <h1 className="font-serif text-5xl md:text-7xl font-normal tracking-tight">
            Con<span className="gradient-text">tact</span>
          </h1>
          <p className="mt-6 text-sm text-foreground/30 font-light max-w-sm mx-auto">
            Let&apos;s build something extraordinary together. Open to collaborations, opportunities, and interesting conversations.
          </p>
        </motion.div>

        {/* Social Links */}
        <div className="space-y-4">
          {socials.map((social, i) => (
            <SocialLink key={social.label} social={social} index={i} />
          ))}
        </div>

        {/* Bottom signature */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-neon/20 to-transparent mx-auto mb-6" />
          <p className="text-[10px] tracking-[0.4em] uppercase text-foreground/15 font-light">
            Designed & Built by{" "}
            <span className="text-foreground/30">pixelThreader</span>
          </p>
        </motion.div>
      </div>
    </main>
  );
}
