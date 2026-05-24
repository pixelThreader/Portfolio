import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full bg-[#411F27] pt-16 pb-8 px-8 md:px-16 lg:px-[12%] xl:px-[15%] flex flex-col relative overflow-hidden shrink-0 mt-auto">
            {/* Top Row with Brand Tagline and Navigation Columns */}
            <div className="w-full flex flex-col md:flex-row justify-between items-start gap-12 md:gap-6 z-10">
                {/* Brand Tagline */}
                <div>
                    <h2 className="font-title text-3xl md:text-4xl text-white select-none">
                        The Portfolio.
                    </h2>
                </div>

                {/* Navigation Columns */}
                <div className="flex gap-16 md:gap-24">
                    {/* Column 1 */}
                    <div className="flex flex-col gap-3">
                        <Link 
                            href="#about" 
                            className="font-serif text-[15px] text-white/70 hover:text-white transition-opacity duration-300"
                        >
                            About
                        </Link>
                        <Link 
                            href="#experience" 
                            className="font-serif text-[15px] text-white/70 hover:text-white transition-opacity duration-300"
                        >
                            Experience
                        </Link>
                        <Link 
                            href="#contact" 
                            className="font-serif text-[15px] text-white/70 hover:text-white transition-opacity duration-300"
                        >
                            Contact
                        </Link>
                        <Link 
                            href="#projects" 
                            className="font-serif text-[15px] text-white/70 hover:text-white transition-opacity duration-300"
                        >
                            Projects
                        </Link>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col gap-3">
                        <Link 
                            href="#privacy" 
                            className="font-serif text-[15px] text-white/70 hover:text-white transition-opacity duration-300"
                        >
                            Privacy
                        </Link>
                        <Link 
                            href="#terms" 
                            className="font-serif text-[15px] text-white/70 hover:text-white transition-opacity duration-300"
                        >
                            Terms
                        </Link>
                        <Link 
                            href="#credits" 
                            className="font-serif text-[15px] text-white/70 hover:text-white transition-opacity duration-300"
                        >
                            Credits
                        </Link>
                    </div>
                </div>
            </div>

            {/* Giant Watermarked overlay "pixelThreader." logo */}
            <div className="w-full flex justify-center py-6 mt-8 sm:mt-12 md:mt-16 select-none pointer-events-none mix-blend-overlay @container">
                <span className="font-title text-[15.5cqw] font-bold leading-none tracking-tighter whitespace-nowrap">
                    <span className="text-white font-bold">pixel</span>
                    <span className="brand-gradient font-bold ml-[2px] pr-[0.1em] -mr-[0.1em]">Threader</span>
                    <span className="text-white">.</span>
                </span>
            </div>

            {/* Bottom Row - Copyright */}
            <div className="w-full flex justify-end mt-4 z-10">
                <p className="font-serif text-[11px] md:text-xs text-white/30 tracking-wider select-none">
                    pixelThreader &copy; all right reserved
                </p>
            </div>
        </footer>
    );
}
