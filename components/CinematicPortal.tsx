"use client";

import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { useRef } from "react";
import { Instagram, Menu } from "lucide-react";

export default function CinematicPortal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const springProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20
  });

  // Mask scale: starts at 1, grows to 40
  const maskScale = useTransform(springProgress, [0, 0.8], [1, 40]);
  
  // Background image scale: 1.2 to 1.0
  const bgScale = useTransform(springProgress, [0, 1], [1.2, 1]);

  // Text opacity and y position
  const textOpacity = useTransform(springProgress, [0, 0.3], [1, 0]);
  const textY = useTransform(springProgress, [0, 0.3], [0, -100]);

  // Gallery opacity
  const galleryOpacity = useTransform(springProgress, [0.8, 1], [0, 1]);
  const galleryY = useTransform(springProgress, [0.8, 1], [50, 0]);
  const galleryPointerEvents = useTransform(galleryOpacity, (val) => val > 0.1 ? "auto" : "none");

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-[#0a0a0a] text-white font-sans">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* Background Layer (The Dream) */}
        <motion.div 
          className="absolute inset-0 w-full h-full"
          style={{ scale: bgScale }}
        >
          <img 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=3540&auto=format&fit=crop" 
            alt="Mountain Landscape" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Foreground Mask Layer (The Reality) */}
        <motion.div 
          className="absolute inset-0 w-full h-full bg-[#0a0a0a] origin-center flex items-center justify-center pointer-events-none"
          style={{ 
            scale: maskScale,
            WebkitMaskImage: "radial-gradient(circle, transparent 150px, black 151px)",
            maskImage: "radial-gradient(circle, transparent 150px, black 151px)",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskPosition: "center",
          }}
        />

        {/* UI Layer */}
        <motion.div 
          className="absolute inset-0 flex flex-col justify-between p-8 md:p-12 pointer-events-none"
          style={{ opacity: textOpacity, y: textY }}
        >
          <header className="flex justify-between items-center w-full">
            <div className="text-xs tracking-[0.2em] uppercase font-medium">Studio</div>
            <Menu className="w-5 h-5 pointer-events-auto cursor-pointer" />
          </header>
          
          <div className="flex flex-col items-center justify-center flex-grow">
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-light tracking-tight text-white mb-4">
              Reality
            </h1>
            <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-gray-400">
              Scroll to enter the dream
            </p>
          </div>

          <footer className="flex justify-between items-end w-full">
            <div className="text-xs tracking-[0.1em] text-gray-400 max-w-xs">
              A cinematic exploration of space and depth through the digital medium.
            </div>
            <Instagram className="w-5 h-5 text-gray-400 pointer-events-auto cursor-pointer" />
          </footer>
        </motion.div>

        {/* Gallery Section */}
        <motion.div 
          className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-black/40 backdrop-blur-md p-8"
          style={{ opacity: galleryOpacity, y: galleryY, pointerEvents: galleryPointerEvents }}
        >
          <h2 className="font-serif text-4xl md:text-6xl font-light mb-12 text-white">Selected Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
            {[
              "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2000&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=2000&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=2000&auto=format&fit=crop"
            ].map((src, i) => (
              <div key={i} className="group relative aspect-[3/4] overflow-hidden bg-gray-900 cursor-pointer">
                <img 
                  src={src} 
                  alt={`Work ${i + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 transition-opacity duration-500 group-hover:opacity-0" />
                <div className="absolute bottom-6 left-6">
                  <p className="text-xs tracking-[0.2em] uppercase text-white/90">Project 0{i + 1}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
