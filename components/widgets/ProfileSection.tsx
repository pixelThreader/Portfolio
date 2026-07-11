"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X as CloseIcon } from "lucide-react";
import Image from "next/image";
import ProfileCard from "@/components/external/ProfileCard";
import { ButtonGroup, Link as CustomLink } from "@/components/widgets/Button";

interface ProfileSectionProps {
    avatarUrl: string;
    miniAvatarUrl?: string;
    name: string;
    title: string;
    handle: string;
    status: string;
    behindGlowColor?: string;
    innerGradient?: string;
    contactText?: string;
    showUserInfo?: boolean;
}

export default function ProfileSection(props: ProfileSectionProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    // Disable scrolling when dialog is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    // Close modal on escape key press
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            window.addEventListener("keydown", handleKeyDown);
        }

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen]);

    const socials = [
        {
            name: "X (Twitter)",
            logoPath: "/icons/social/x_logo.png",
            url: "https://x.com/_pixelThreader",
            color: "hover:bg-white/10 hover:text-white hover:border-white/30"
        },
        {
            name: "GitHub",
            logoPath: "/icons/social/gh_logo.png",
            url: "https://github.com/pixelthreader",
            color: "hover:bg-[#24292e]/40 hover:text-white hover:border-[#24292e]"
        },
        {
            name: "LinkedIn",
            logoPath: "/icons/social/lin_logo.png",
            url: "https://linkedin.com/in/pixelthreader",
            color: "hover:bg-[#0077b5]/20 hover:text-[#0077b5] hover:border-[#0077b5]/40"
        },
        {
            name: "Instagram",
            logoPath: "/icons/social/inst_logo.png",
            url: "https://instagram.com/pixelthreader",
            color: "hover:bg-[#e1306c]/20 hover:text-[#e1306c] hover:border-[#e1306c]/40"
        },
        {
            name: "YouTube",
            logoPath: "/icons/social/yt_logo.png",
            url: "https://youtube.com/@pixelthreader",
            color: "hover:bg-[#ff0000]/20 hover:text-[#ff0000] hover:border-[#ff0000]/40"
        },
        {
            name: "Facebook",
            logoPath: "/icons/social/fb_logo.png",
            url: "https://facebook.com/pixelthreader",
            color: "hover:bg-[#1877f2]/20 hover:text-[#1877f2] hover:border-[#1877f2]/40"
        }
    ];

    return (
        <>
            <ProfileCard
                {...props}
                onContactClick={() => setIsOpen(true)}
            />

            {mounted && createPortal(
                <AnimatePresence>
                    {isOpen && (
                        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
                            {/* Glass backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setIsOpen(false)}
                                className="absolute inset-0 bg-black/70 backdrop-blur-md"
                            />

                            {/* Modal Box */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                transition={{ type: "spring", duration: 0.4 }}
                                className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-[#1e0a10]/95 p-6 shadow-2xl backdrop-blur-xl z-10"
                            >
                                {/* Glow accent */}
                                <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-magenta/20 blur-3xl pointer-events-none" />

                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <h3 className="font-title text-xl font-bold text-white tracking-wide">Let&apos;s Connect</h3>
                                        <p className="font-serif text-xs text-[#ffd4dc]/60 mt-0.5">Find me across these social platforms</p>
                                    </div>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="p-1.5 rounded-full border border-white/5 bg-white/5 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                                        aria-label="Close modal"
                                    >
                                        <CloseIcon className="w-4 h-4" />
                                    </button>
                                </div>

                                <div className="grid grid-cols-2 gap-3 relative z-10">
                                    {socials.map((social) => {
                                        return (
                                            <ButtonGroup key={social.name} scaleOnHover={false} size="sm" className="w-full">
                                                <CustomLink
                                                    href={social.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-full"
                                                >
                                                    <div className="flex items-center gap-3 w-full justify-start">
                                                        <div className="relative w-8 h-8 rounded-lg overflow-hidden bg-white/5 group-hover:bg-transparent transition-colors shrink-0">
                                                            <Image
                                                                src={social.logoPath}
                                                                alt={`${social.name} Logo`}
                                                                fill
                                                                sizes="32px"
                                                                className="object-contain"
                                                            />
                                                        </div>
                                                        <span className="font-serif text-sm font-medium tracking-wide text-left">{social.name}</span>
                                                    </div>
                                                </CustomLink>
                                            </ButtonGroup>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </>
    );
}
