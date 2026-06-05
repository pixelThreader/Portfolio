"use client";

import React from "react";
import {
    Section,
    SectionContent
} from "@/components/widgets/Section";
import { GlassyHeroSection } from "@/components/widgets/GlassyHeroSection";
import { submitContactAction } from "./actions";
import { toast } from "sonner";

export default function Contact() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    const socialLinks = [
        {
            name: "LinkedIn",
            url: "https://linkedin.com/in/pixelthreader"
        },
        {
            name: "X / Twitter",
            url: "https://x.com/_pixelThreader"
        },
        {
            name: "GitHub",
            url: "https://github.com/pixelThreader"
        }
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Quick local validation
        if (name.trim().length < 2) {
            toast.error("Please enter a name (min 2 characters).");
            return;
        }
        if (message.trim().length < 10) {
            toast.error("Please enter a message (min 10 characters).");
            return;
        }

        setLoading(true);
        try {
            await submitContactAction({ name, email, message });
            toast.success("Message sent successfully!");
            setName("");
            setEmail("");
            setMessage("");
        } catch (err: unknown) {
            console.error(err);
            const errorMsg = (err as { message?: string }).message || "";
            if (errorMsg.includes("check_no_xss") || errorMsg.includes("check_no_html")) {
                toast.error("Submission rejected: HTML tags, scripts, and links are blocked to prevent XSS.");
            } else if (errorMsg.includes("check_name_length") || errorMsg.includes("check_message_length")) {
                toast.error("Submission rejected: Message length limits exceeded (10 - 3000 chars).");
            } else if (errorMsg.includes("check_email")) {
                toast.error("Submission rejected: Please enter a valid email address.");
            } else {
                toast.error("Failed to send message. Please check connection and try again.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full relative overflow-x-hidden bg-background min-h-screen flex flex-col">

            {/* Massive Background Flowers */}
            <div className="fixed top-0 left-0 -translate-x-[50%] -translate-y-1/2 pointer-events-none z-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/flower_pattern.png"
                    alt=""
                />
            </div>

            <div className="fixed bottom-0 right-0 translate-x-[50%] translate-y-[10%] pointer-events-none z-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/flower_pattern.png"
                    alt=""
                />
            </div>

            {/* Premium Modular Glassy Hero Header */}
            <GlassyHeroSection>
                <h1 className="font-title text-[56px] sm:text-[76px] md:text-[88px] font-bold tracking-tight select-none">
                    <span className="text-white">Contact</span>
                    <span className="brand-gradient font-bold ml-[2px]">.</span>
                </h1>
            </GlassyHeroSection>

            {/* Main Section utilizing standard global boundaries */}
            <Section className="z-10">
                <SectionContent>
                    <div className="w-full text-left grid grid-cols-1 lg:grid-cols-12 gap-16" style={{ fontFamily: 'Merriweather, serif' }}>
                        
                        {/* Left Column: Direct Signals & Social Ecosystem */}
                        <div className="lg:col-span-5 flex flex-col gap-12 justify-start">
                            {/* Direct Signals / Email */}
                            <div className="flex flex-col gap-8">
                                <div className="flex flex-col gap-2">
                                    <span className="text-[#ffd4dc]/50 text-xs sm:text-sm tracking-widest uppercase select-none font-bold">
                                        Mail Me
                                    </span>
                                    <div>
                                        <a 
                                            href="mailto:questerios@gmail.com" 
                                            className="text-2xl sm:text-3xl text-white font-bold tracking-tight underline decoration-dashed hover:decoration-solid underline-offset-8 decoration-[1.5px] transition-all duration-300"
                                        >
                                            questerios@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Divider Line */}
                            <div className="h-px w-full bg-white/10" />

                            {/* Social Ecosystem Links */}
                            <div className="flex flex-col gap-6">
                                <span className="text-[#ffd4dc]/50 text-xs sm:text-sm tracking-widest uppercase select-none font-bold">
                                    Social Ecosystem
                                </span>
                                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-x-12 gap-y-6">
                                    {socialLinks.map((social) => (
                                        <a
                                            key={social.name}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-base sm:text-lg text-white hover:text-[#ffd4dc] transition-colors duration-300 underline decoration-dashed hover:decoration-solid underline-offset-6 decoration-[1.5px]"
                                        >
                                            {social.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Glassy Contact Form */}
                        <div className="lg:col-span-7">
                            <form 
                                onSubmit={handleSubmit}
                                className="w-full bg-[#3a141d]/20 border border-white/5 rounded-[32px] p-8 sm:p-10 backdrop-blur-md shadow-2xl flex flex-col gap-6"
                            >
                                <div className="flex flex-col gap-2">
                                    <h3 className="font-title text-2xl text-white font-bold">Send a Message</h3>
                                    <p className="text-white/60 text-xs sm:text-sm leading-relaxed font-serif">
                                        Have a project in mind or want to collaborate? Drop a message below and I&apos;ll get back to you shortly.
                                    </p>
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="name" className="text-white/80 text-xs font-bold font-title">Name</label>
                                    <input 
                                        type="text" 
                                        id="name"
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Your Name"
                                        className="w-full bg-white/5 border border-white/5 rounded-2xl px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-[#ffd4dc]/40 transition-colors duration-300 font-serif text-sm"
                                    />
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="email" className="text-white/80 text-xs font-bold font-title">Email Address</label>
                                    <input 
                                        type="email" 
                                        id="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="name@example.com"
                                        className="w-full bg-white/5 border border-white/5 rounded-2xl px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-[#ffd4dc]/40 transition-colors duration-300 font-serif text-sm"
                                    />
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="message" className="text-white/80 text-xs font-bold font-title">Message</label>
                                    <textarea 
                                        id="message"
                                        rows={5}
                                        required
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="Write your message here..."
                                        className="w-full bg-white/5 border border-white/5 rounded-2xl px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-[#ffd4dc]/40 transition-colors duration-300 font-serif text-sm resize-none"
                                    />
                                </div>

                                <button 
                                    type="submit" 
                                    disabled={loading}
                                    className="w-full py-4 mt-2 bg-linear-to-r from-[#D0197E] via-[#D606C8] to-[#A94365] text-white font-bold rounded-2xl hover:opacity-90 active:scale-[0.98] transition-all duration-300 font-title text-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {loading ? (
                                        <>
                                            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            Sending...
                                        </>
                                    ) : "Send Message"}
                                </button>
                            </form>
                        </div>

                    </div>
                </SectionContent>
            </Section>

        </div>
    );
}
