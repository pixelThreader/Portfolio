"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Menu, X } from "lucide-react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Skills", href: "#skills" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <header className="w-full z-50 py-8 px-8 md:px-16 lg:px-[12%] xl:px-[15%] transition-all duration-300 relative flex items-center justify-between">
            {/* Brand Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden border border-magenta/20 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-105 shadow-[0_0_15px_rgba(188,19,254,0.15)]">
                        <Image
                            src="/brand/icons/android-chrome-192x192.webp"
                            alt="pixelThreader Logo"
                            fill
                            sizes="32px"
                            className="object-cover"
                            priority
                        />
                    </div>
                    <span className="font-title text-xl md:text-2xl font-bold tracking-wide select-none">
                        <span className="text-white font-normal group-hover:text-white/95 transition-colors">pixel</span>
                        <span className="inline-block whitespace-nowrap">
                            <span className="gradient-text font-bold pl-1">Threader</span>
                            <span className="text-magenta font-black">.</span>
                        </span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="font-serif text-[15px] text-white/70 hover:text-white transition-all duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-gradient-to-r after:from-magenta after:to-purple hover:after:w-full after:transition-all after:duration-300"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Right Area: Search & Mobile Toggle */}
                <div className="flex items-center gap-4">
                    <button 
                        aria-label="Search"
                        className="p-2 text-white/70 hover:text-white hover:scale-105 active:scale-95 transition-all duration-300 rounded-full hover:bg-white/5"
                    >
                        <Search className="w-5 h-5 stroke-[1.5]" />
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle Menu"
                        className="p-2 text-white/70 hover:text-white transition-all md:hidden rounded-full hover:bg-white/5"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

            {/* Mobile Navigation Dropdown */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full glass-light border-y border-white/5 py-6 px-8 flex flex-col gap-5 md:hidden z-40 animate-in fade-in slide-in-from-top-5 duration-300">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="font-serif text-lg text-white/80 hover:text-white transition-all py-1 border-b border-white/5"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
}
