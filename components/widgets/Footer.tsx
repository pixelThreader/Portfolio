"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, ArrowUp } from "lucide-react";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: <Github className="w-4 h-4" />, href: "https://github.com", name: "GitHub" },
        { icon: <Linkedin className="w-4 h-4" />, href: "https://linkedin.com", name: "LinkedIn" },
        { icon: <Twitter className="w-4 h-4" />, href: "https://twitter.com", name: "Twitter" },
    ];

    return (
        <footer className="w-full border-t border-white/5 py-8 px-6 md:px-12 lg:px-20 bg-background/50 backdrop-blur-sm z-10 mt-auto">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                
                {/* Brand Logo & Copyright */}
                <div className="flex flex-col items-center md:items-start gap-1">
                    <span className="font-title text-lg font-bold tracking-wide flex items-center select-none">
                        <span className="text-white/90 font-normal">pixel</span>
                        <span className="gradient-text font-bold">Threader</span>
                        <span className="text-magenta font-black">.</span>
                    </span>
                    <p className="font-serif text-xs text-white/40">
                        &copy; {currentYear} pixelThreader. All rights reserved.
                    </p>
                </div>

                {/* Social Profiles */}
                <div className="flex items-center gap-6">
                    {socialLinks.map((social) => (
                        <Link
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.name}
                            className="p-2 text-white/50 hover:text-white rounded-full hover:bg-white/5 transition-all duration-300 hover:scale-105 active:scale-95"
                        >
                            {social.icon}
                        </Link>
                    ))}

                    {/* Back to Top */}
                    <button
                        onClick={scrollToTop}
                        aria-label="Scroll to top"
                        className="p-2 ml-2 text-white/50 hover:text-white rounded-full border border-white/10 hover:border-magenta/40 hover:bg-white/5 transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                        <ArrowUp className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </footer>
    );
}
