"use client";

import { motion, AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] hidden md:flex items-center gap-1 px-2 py-2 rounded-full glass"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className="relative px-5 py-2 text-[12px] tracking-[0.12em] uppercase font-light transition-colors duration-300"
            >
              {isActive && (
                <motion.div
                  layoutId="nav-active"
                  className="absolute inset-0 rounded-full bg-neon/10 border border-neon/20"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span
                className={`relative z-10 ${
                  isActive ? "text-foreground" : "text-foreground/50 hover:text-foreground/80"
                }`}
              >
                {link.label}
              </span>
            </Link>
          );
        })}
      </motion.nav>

      {/* Mobile Navigation Toggle */}
      <motion.button
        className="fixed top-5 right-5 z-[101] md:hidden w-10 h-10 rounded-full glass flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4 }}
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        <div className="flex flex-col gap-1.5 items-center">
          <motion.span
            className="block w-4 h-[1px] bg-foreground/70"
            animate={mobileOpen ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }}
          />
          <motion.span
            className="block w-4 h-[1px] bg-foreground/70"
            animate={mobileOpen ? { rotate: -45, y: -3.5 } : { rotate: 0, y: 0 }}
          />
        </div>
      </motion.button>

      {/* Mobile brand */}
      <motion.div
        className="fixed top-5 left-5 z-[101] md:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4 }}
      >
        <Link href="/" className="text-[11px] tracking-[0.2em] uppercase text-foreground/60 font-light">
          pixel<span className="text-neon/70">Threader</span>
        </Link>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[100] md:hidden flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-background/90 backdrop-blur-xl" />
            <nav className="relative flex flex-col items-center gap-6">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`text-2xl font-light tracking-[0.1em] transition-colors ${
                        isActive ? "text-foreground neon-text" : "text-foreground/40 hover:text-foreground/70"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
